"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 80,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
}, {
    timestamps: true,
});
userSchema.pre("save", async function hashPassword() {
    if (!this.isModified("password")) {
        return;
    }
    this.password = await bcryptjs_1.default.hash(this.password, 12);
});
userSchema.methods.comparePassword = function comparePassword(candidatePassword) {
    return bcryptjs_1.default.compare(candidatePassword, this.password);
};
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
