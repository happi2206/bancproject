import { Request, Response } from "express";
import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { env } from "../config/env";
import User, { UserDocument } from "../models/User";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import type { Types } from "mongoose";

interface AuthBody {
  name?: string;
  email?: string;
  password?: string;
}

function createToken(user: UserDocument): string {
  const payload = { id: user._id.toString(), role: user.role };
  return jwt.sign(payload, env.jwtSecret as Secret, {
    expiresIn: env.jwtExpiresIn as SignOptions["expiresIn"],
  });
}

function sanitizeUser(user: UserDocument) {
  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
    addresses: (user.addresses ?? []).map((a) => ({
      _id: (a as unknown as { _id: Types.ObjectId })._id.toString(),
      label: a.label,
      line1: a.line1,
      city: a.city,
      postcode: a.postcode,
      country: a.country,
    })),
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}

export const registerUser = asyncHandler(
  async (req: Request<object, object, AuthBody>, res: Response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new ApiError(400, "Name, email, and password are required");
    }

    const normalizedEmail = email.toLowerCase().trim();
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      throw new ApiError(409, "User with this email already exists");
    }

    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password,
    });

    const token = createToken(user);

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: sanitizeUser(user),
    });
  }
);

export const loginUser = asyncHandler(
  async (req: Request<object, object, AuthBody>, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new ApiError(400, "Email and password are required");
    }

    const normalizedEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail }).select(
      "+password"
    );
    if (!user) {
      throw new ApiError(401, "Invalid email or password");
    }

    const passwordMatched = await user.comparePassword(password);
    if (!passwordMatched) {
      throw new ApiError(401, "Invalid email or password");
    }

    const token = createToken(user);

    res.status(200).json({
      message: "Login successful",
      token,
      user: sanitizeUser(user),
    });
  }
);

export const updateProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const { name } = req.body as { name?: string };

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      throw new ApiError(400, "Name must be at least 2 characters");
    }

    const user = await User.findByIdAndUpdate(
      req.user!.id,
      { name: name.trim() },
      { new: true, runValidators: true }
    );

    if (!user) throw new ApiError(404, "User not found");

    res.json({ message: "Profile updated", user: sanitizeUser(user) });
  }
);

export const addAddress = asyncHandler(
  async (req: Request, res: Response) => {
    const { label, line1, city, postcode, country } = req.body as Record<string, string>;

    if (!line1?.trim() || !city?.trim() || !postcode?.trim() || !country?.trim()) {
      throw new ApiError(400, "Street address, city, postcode, and country are required");
    }

    const user = await User.findByIdAndUpdate(
      req.user!.id,
      {
        $push: {
          addresses: {
            label: label?.trim() || "Home",
            line1: line1.trim(),
            city: city.trim(),
            postcode: postcode.trim(),
            country: country.trim(),
          },
        },
      },
      { new: true, runValidators: true }
    );

    if (!user) throw new ApiError(404, "User not found");

    res.status(201).json({ message: "Address added", user: sanitizeUser(user) });
  }
);

export const deleteAddress = asyncHandler(
  async (req: Request<{ addressId: string }>, res: Response) => {
    const user = await User.findByIdAndUpdate(
      req.user!.id,
      { $pull: { addresses: { _id: req.params.addressId } } },
      { new: true }
    );

    if (!user) throw new ApiError(404, "User not found");

    res.json({ message: "Address removed", user: sanitizeUser(user) });
  }
);

export const updateAddress = asyncHandler(
  async (req: Request<{ addressId: string }>, res: Response) => {
    const { label, line1, city, postcode, country } = req.body as Record<string, string>;

    if (!line1?.trim() || !city?.trim() || !postcode?.trim() || !country?.trim()) {
      throw new ApiError(400, "Street address, city, postcode, and country are required");
    }

    const user = await User.findOneAndUpdate(
      { _id: req.user!.id, "addresses._id": req.params.addressId },
      {
        $set: {
          "addresses.$.label": label?.trim() || "Home",
          "addresses.$.line1": line1.trim(),
          "addresses.$.city": city.trim(),
          "addresses.$.postcode": postcode.trim(),
          "addresses.$.country": country.trim(),
        },
      },
      { new: true, runValidators: true }
    );

    if (!user) throw new ApiError(404, "Address not found");

    res.json({ message: "Address updated", user: sanitizeUser(user) });
  }
);
