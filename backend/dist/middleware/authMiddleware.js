"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminOnly = exports.protect = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const User_1 = __importDefault(require("../models/User"));
const asyncHandler_1 = require("../utils/asyncHandler");
const ApiError_1 = require("../utils/ApiError");
function extractBearerToken(authorizationHeader) {
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        throw new ApiError_1.ApiError(401, "Not authorized, token missing");
    }
    return authorizationHeader.split(" ")[1];
}
exports.protect = (0, asyncHandler_1.asyncHandler)(async (req, _res, next) => {
    const token = extractBearerToken(req.headers.authorization);
    let decoded;
    try {
        decoded = jsonwebtoken_1.default.verify(token, env_1.env.jwtSecret);
    }
    catch {
        throw new ApiError_1.ApiError(401, "Not authorized, token invalid or expired");
    }
    const user = await User_1.default.findById(decoded.id).select("_id role");
    if (!user) {
        throw new ApiError_1.ApiError(401, "Not authorized, user not found");
    }
    req.user = {
        id: user._id.toString(),
        role: user.role,
    };
    next();
});
const adminOnly = (req, _res, next) => {
    if (!req.user) {
        throw new ApiError_1.ApiError(401, "Not authorized");
    }
    if (req.user.role !== "admin") {
        throw new ApiError_1.ApiError(403, "Access denied: admin only");
    }
    next();
};
exports.adminOnly = adminOnly;
