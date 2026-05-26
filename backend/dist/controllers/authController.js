"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const User_1 = __importDefault(require("../models/User"));
const asyncHandler_1 = require("../utils/asyncHandler");
const ApiError_1 = require("../utils/ApiError");
function createToken(user) {
    const payload = { id: user._id.toString(), role: user.role };
    return jsonwebtoken_1.default.sign(payload, env_1.env.jwtSecret, {
        expiresIn: env_1.env.jwtExpiresIn,
    });
}
function sanitizeUser(user) {
    return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
}
exports.registerUser = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        throw new ApiError_1.ApiError(400, "Name, email, and password are required");
    }
    const normalizedEmail = email.toLowerCase().trim();
    const existingUser = await User_1.default.findOne({ email: normalizedEmail });
    if (existingUser) {
        throw new ApiError_1.ApiError(409, "User with this email already exists");
    }
    const user = await User_1.default.create({
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
});
exports.loginUser = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new ApiError_1.ApiError(400, "Email and password are required");
    }
    const normalizedEmail = email.toLowerCase().trim();
    const user = await User_1.default.findOne({ email: normalizedEmail }).select("+password");
    if (!user) {
        throw new ApiError_1.ApiError(401, "Invalid email or password");
    }
    const passwordMatched = await user.comparePassword(password);
    if (!passwordMatched) {
        throw new ApiError_1.ApiError(401, "Invalid email or password");
    }
    const token = createToken(user);
    res.status(200).json({
        message: "Login successful",
        token,
        user: sanitizeUser(user),
    });
});
