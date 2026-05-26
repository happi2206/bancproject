"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.get("/", authMiddleware_1.protect, authMiddleware_1.adminOnly, (_req, res) => {
    res.json({ message: "Admin route group ready (protected)" });
});
exports.default = router;
