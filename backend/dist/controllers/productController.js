"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const mongoose_1 = require("mongoose");
const Product_1 = __importDefault(require("../models/Product"));
const ApiError_1 = require("../utils/ApiError");
const asyncHandler_1 = require("../utils/asyncHandler");
function validateProductPayload(payload, isPartial = false) {
    const output = {};
    if (!isPartial || payload.name !== undefined) {
        if (!payload.name || payload.name.trim().length < 2) {
            throw new ApiError_1.ApiError(400, "Valid product name is required");
        }
        output.name = payload.name.trim();
    }
    if (!isPartial || payload.slug !== undefined) {
        if (!payload.slug || payload.slug.trim().length < 2) {
            throw new ApiError_1.ApiError(400, "Valid product slug is required");
        }
        output.slug = payload.slug.trim().toLowerCase();
    }
    if (!isPartial || payload.description !== undefined) {
        if (!payload.description || payload.description.trim().length < 10) {
            throw new ApiError_1.ApiError(400, "Description must be at least 10 characters");
        }
        output.description = payload.description.trim();
    }
    if (!isPartial || payload.price !== undefined) {
        if (typeof payload.price !== "number" || Number.isNaN(payload.price)) {
            throw new ApiError_1.ApiError(400, "Price must be a valid number");
        }
        if (payload.price < 0) {
            throw new ApiError_1.ApiError(400, "Price cannot be negative");
        }
        output.price = payload.price;
    }
    if (!isPartial || payload.images !== undefined) {
        if (!Array.isArray(payload.images) ||
            payload.images.some((image) => typeof image !== "string")) {
            throw new ApiError_1.ApiError(400, "Images must be an array of strings");
        }
        output.images = payload.images.map((image) => image.trim()).filter(Boolean);
    }
    if (!isPartial || payload.category !== undefined) {
        if (!payload.category || payload.category.trim().length < 2) {
            throw new ApiError_1.ApiError(400, "Valid category is required");
        }
        output.category = payload.category.trim();
    }
    if (payload.stock !== undefined) {
        if (!Number.isInteger(payload.stock) || payload.stock < 0) {
            throw new ApiError_1.ApiError(400, "Stock must be a non-negative integer");
        }
        output.stock = payload.stock;
    }
    if (payload.isFeatured !== undefined) {
        if (typeof payload.isFeatured !== "boolean") {
            throw new ApiError_1.ApiError(400, "isFeatured must be a boolean");
        }
        output.isFeatured = payload.isFeatured;
    }
    return output;
}
exports.getProducts = (0, asyncHandler_1.asyncHandler)(async (_req, res) => {
    const products = await Product_1.default.find().sort({ createdAt: -1 });
    res.status(200).json({ count: products.length, products });
});
exports.getProductById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { id } = req.params;
    if (!(0, mongoose_1.isValidObjectId)(id)) {
        throw new ApiError_1.ApiError(400, "Invalid product id");
    }
    const product = await Product_1.default.findById(id);
    if (!product) {
        throw new ApiError_1.ApiError(404, "Product not found");
    }
    res.status(200).json({ product });
});
exports.createProduct = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const payload = validateProductPayload(req.body);
    const existing = await Product_1.default.findOne({ slug: payload.slug });
    if (existing) {
        throw new ApiError_1.ApiError(409, "Product slug already exists");
    }
    const product = await Product_1.default.create(payload);
    res.status(201).json({ message: "Product created successfully", product });
});
exports.updateProduct = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { id } = req.params;
    if (!(0, mongoose_1.isValidObjectId)(id)) {
        throw new ApiError_1.ApiError(400, "Invalid product id");
    }
    const payload = validateProductPayload(req.body, true);
    if (Object.keys(payload).length === 0) {
        throw new ApiError_1.ApiError(400, "At least one product field is required");
    }
    if (payload.slug) {
        const duplicate = await Product_1.default.findOne({
            slug: payload.slug,
            _id: { $ne: id },
        });
        if (duplicate) {
            throw new ApiError_1.ApiError(409, "Product slug already exists");
        }
    }
    const product = await Product_1.default.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    if (!product) {
        throw new ApiError_1.ApiError(404, "Product not found");
    }
    res.status(200).json({ message: "Product updated successfully", product });
});
exports.deleteProduct = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { id } = req.params;
    if (!(0, mongoose_1.isValidObjectId)(id)) {
        throw new ApiError_1.ApiError(400, "Invalid product id");
    }
    const product = await Product_1.default.findByIdAndDelete(id);
    if (!product) {
        throw new ApiError_1.ApiError(404, "Product not found");
    }
    res.status(200).json({ message: "Product deleted successfully" });
});
