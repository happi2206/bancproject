"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const ApiError_1 = require("../utils/ApiError");
const env_1 = require("../config/env");
function errorHandler(err, _req, res, _next) {
    const statusCode = err instanceof ApiError_1.ApiError ? err.statusCode : 500;
    res.status(statusCode).json({
        message: err.message || "Internal server error",
        ...(env_1.env.nodeEnv !== "production" ? { stack: err.stack } : {}),
    });
}
