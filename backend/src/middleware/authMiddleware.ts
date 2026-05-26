import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { env } from "../config/env";
import User from "../models/User";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";

interface TokenPayload extends JwtPayload {
  id: string;
  role: string;
}

function extractBearerToken(authorizationHeader?: string): string {
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    throw new ApiError(401, "Not authorized, token missing");
  }

  return authorizationHeader.split(" ")[1];
}

export const protect = asyncHandler(
  async (req: Request, _res: Response, next: NextFunction) => {
    const token = extractBearerToken(req.headers.authorization);

    let decoded: TokenPayload;
    try {
      decoded = jwt.verify(token, env.jwtSecret as Secret) as TokenPayload;
    } catch {
      throw new ApiError(401, "Not authorized, token invalid or expired");
    }

    const user = await User.findById(decoded.id).select("_id role");
    if (!user) {
      throw new ApiError(401, "Not authorized, user not found");
    }

    req.user = {
      id: user._id.toString(),
      role: user.role,
    };

    next();
  }
);

export const adminOnly = (req: Request, _res: Response, next: NextFunction) => {
  if (!req.user) {
    throw new ApiError(401, "Not authorized");
  }

  if (req.user.role !== "admin") {
    throw new ApiError(403, "Access denied: admin only");
  }

  next();
};
