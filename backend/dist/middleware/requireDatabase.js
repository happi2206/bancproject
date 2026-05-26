"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireDatabase = requireDatabase;
const db_1 = require("../config/db");
function requireDatabase(req, res, next) {
    if (req.path === "/health") {
        next();
        return;
    }
    if (!(0, db_1.isDatabaseConnected)()) {
        res.status(503).json({
            message: "Database unavailable. Please retry once MongoDB connection is restored.",
        });
        return;
    }
    next();
}
