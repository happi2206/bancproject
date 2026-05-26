"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCart = exports.removeCartItem = exports.updateCartItem = exports.addToCart = exports.getCart = void 0;
const mongoose_1 = require("mongoose");
const Cart_1 = __importDefault(require("../models/Cart"));
const Product_1 = __importDefault(require("../models/Product"));
const ApiError_1 = require("../utils/ApiError");
const asyncHandler_1 = require("../utils/asyncHandler");
function assertAuthenticatedUserId(req) {
    if (!req.user?.id) {
        throw new ApiError_1.ApiError(401, "Not authorized");
    }
    return req.user.id;
}
async function findOrCreateCart(userId) {
    const existingCart = await Cart_1.default.findOne({ userId });
    if (existingCart) {
        return existingCart;
    }
    return Cart_1.default.create({ userId, items: [] });
}
exports.getCart = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const userId = assertAuthenticatedUserId(req);
    const cart = await findOrCreateCart(userId);
    await cart.populate({
        path: "items.productId",
        select: "name slug price images category stock isFeatured",
    });
    res.status(200).json({ cart });
});
exports.addToCart = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const userId = assertAuthenticatedUserId(req);
    const { productId, quantity = 1 } = req.body;
    if (!productId || !(0, mongoose_1.isValidObjectId)(productId)) {
        throw new ApiError_1.ApiError(400, "Valid productId is required");
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new ApiError_1.ApiError(400, "Quantity must be a positive integer");
    }
    const productExists = await Product_1.default.exists({ _id: productId });
    if (!productExists) {
        throw new ApiError_1.ApiError(404, "Product not found");
    }
    const cart = await findOrCreateCart(userId);
    const index = cart.items.findIndex((item) => item.productId.toString() === productId);
    if (index >= 0) {
        cart.items[index].quantity += quantity;
    }
    else {
        cart.items.push({ productId: new mongoose_1.Types.ObjectId(productId), quantity });
    }
    await cart.save();
    await cart.populate({
        path: "items.productId",
        select: "name slug price images category stock isFeatured",
    });
    res.status(200).json({ message: "Cart updated successfully", cart });
});
exports.updateCartItem = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const userId = assertAuthenticatedUserId(req);
    const { productId } = req.params;
    const { quantity } = req.body;
    if (!(0, mongoose_1.isValidObjectId)(productId)) {
        throw new ApiError_1.ApiError(400, "Invalid product id");
    }
    if (quantity === undefined || !Number.isInteger(quantity) || quantity < 0) {
        throw new ApiError_1.ApiError(400, "Quantity must be a non-negative integer");
    }
    const cart = await findOrCreateCart(userId);
    const index = cart.items.findIndex((item) => item.productId.toString() === productId);
    if (index === -1) {
        throw new ApiError_1.ApiError(404, "Item not found in cart");
    }
    if (quantity === 0) {
        cart.items.splice(index, 1);
    }
    else {
        cart.items[index].quantity = quantity;
    }
    await cart.save();
    await cart.populate({
        path: "items.productId",
        select: "name slug price images category stock isFeatured",
    });
    res.status(200).json({ message: "Cart item updated successfully", cart });
});
exports.removeCartItem = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const userId = assertAuthenticatedUserId(req);
    const { productId } = req.params;
    if (!(0, mongoose_1.isValidObjectId)(productId)) {
        throw new ApiError_1.ApiError(400, "Invalid product id");
    }
    const cart = await findOrCreateCart(userId);
    const initialCount = cart.items.length;
    cart.items = cart.items.filter((item) => item.productId.toString() !== productId);
    if (cart.items.length === initialCount) {
        throw new ApiError_1.ApiError(404, "Item not found in cart");
    }
    await cart.save();
    await cart.populate({
        path: "items.productId",
        select: "name slug price images category stock isFeatured",
    });
    res.status(200).json({ message: "Cart item removed successfully", cart });
});
exports.clearCart = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const userId = assertAuthenticatedUserId(req);
    const cart = await findOrCreateCart(userId);
    cart.items = [];
    await cart.save();
    res.status(200).json({ message: "Cart cleared successfully", cart });
});
