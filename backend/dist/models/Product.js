"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 160,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 2500,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    images: {
        type: [String],
        required: true,
        default: [],
        validate: {
            validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "string"),
            message: "Images must be an array of strings",
        },
    },
    category: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
    },
    stock: {
        type: Number,
        default: 0,
        min: 0,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
productSchema.index({ createdAt: -1 });
productSchema.index({ category: 1 });
productSchema.index({ isFeatured: 1 });
const Product = (0, mongoose_1.model)("Product", productSchema);
exports.default = Product;
