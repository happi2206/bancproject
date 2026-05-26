import { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import Product from "../models/Product";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";

interface ProductBody {
  name?: string;
  slug?: string;
  description?: string;
  price?: number;
  images?: string[];
  category?: string;
  stock?: number;
  isFeatured?: boolean;
}

function validateProductPayload(
  payload: ProductBody,
  isPartial = false
): ProductBody {
  const output: ProductBody = {};

  if (!isPartial || payload.name !== undefined) {
    if (!payload.name || payload.name.trim().length < 2) {
      throw new ApiError(400, "Valid product name is required");
    }
    output.name = payload.name.trim();
  }

  if (!isPartial || payload.slug !== undefined) {
    if (!payload.slug || payload.slug.trim().length < 2) {
      throw new ApiError(400, "Valid product slug is required");
    }
    output.slug = payload.slug.trim().toLowerCase();
  }

  if (!isPartial || payload.description !== undefined) {
    if (!payload.description || payload.description.trim().length < 10) {
      throw new ApiError(400, "Description must be at least 10 characters");
    }
    output.description = payload.description.trim();
  }

  if (!isPartial || payload.price !== undefined) {
    if (typeof payload.price !== "number" || Number.isNaN(payload.price)) {
      throw new ApiError(400, "Price must be a valid number");
    }
    if (payload.price < 0) {
      throw new ApiError(400, "Price cannot be negative");
    }
    output.price = payload.price;
  }

  if (!isPartial || payload.images !== undefined) {
    if (
      !Array.isArray(payload.images) ||
      payload.images.some((image) => typeof image !== "string")
    ) {
      throw new ApiError(400, "Images must be an array of strings");
    }
    output.images = payload.images.map((image) => image.trim()).filter(Boolean);
  }

  if (!isPartial || payload.category !== undefined) {
    if (!payload.category || payload.category.trim().length < 2) {
      throw new ApiError(400, "Valid category is required");
    }
    output.category = payload.category.trim();
  }

  if (payload.stock !== undefined) {
    if (!Number.isInteger(payload.stock) || payload.stock < 0) {
      throw new ApiError(400, "Stock must be a non-negative integer");
    }
    output.stock = payload.stock;
  }

  if (payload.isFeatured !== undefined) {
    if (typeof payload.isFeatured !== "boolean") {
      throw new ApiError(400, "isFeatured must be a boolean");
    }
    output.isFeatured = payload.isFeatured;
  }

  return output;
}

export const getProducts = asyncHandler(async (_req: Request, res: Response) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.status(200).json({ count: products.length, products });
});

export const getProductById = asyncHandler(
  async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;

    const product = isValidObjectId(id)
      ? await Product.findById(id)
      : await Product.findOne({ slug: id });

    if (!product) {
      throw new ApiError(404, "Product not found");
    }

    res.status(200).json({ product });
  }
);

export const createProduct = asyncHandler(
  async (req: Request<object, object, ProductBody>, res: Response) => {
    const payload = validateProductPayload(req.body);

    const existing = await Product.findOne({ slug: payload.slug });
    if (existing) {
      throw new ApiError(409, "Product slug already exists");
    }

    const product = await Product.create(payload);
    res.status(201).json({ message: "Product created successfully", product });
  }
);

export const updateProduct = asyncHandler(
  async (
    req: Request<{ id: string }, object, ProductBody>,
    res: Response
  ) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      throw new ApiError(400, "Invalid product id");
    }

    const payload = validateProductPayload(req.body, true);
    if (Object.keys(payload).length === 0) {
      throw new ApiError(400, "At least one product field is required");
    }

    if (payload.slug) {
      const duplicate = await Product.findOne({
        slug: payload.slug,
        _id: { $ne: id },
      });
      if (duplicate) {
        throw new ApiError(409, "Product slug already exists");
      }
    }

    const product = await Product.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      throw new ApiError(404, "Product not found");
    }

    res.status(200).json({ message: "Product updated successfully", product });
  }
);

export const deleteProduct = asyncHandler(
  async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      throw new ApiError(400, "Invalid product id");
    }

    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      throw new ApiError(404, "Product not found");
    }

    res.status(200).json({ message: "Product deleted successfully" });
  }
);
