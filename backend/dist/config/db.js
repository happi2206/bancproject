"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDatabaseConnected = isDatabaseConnected;
exports.connectDB = connectDB;
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("./env");
mongoose_1.default.set("bufferCommands", false);
function isDatabaseConnected() {
    return mongoose_1.default.connection.readyState === 1;
}
async function connectDB() {
    try {
        await mongoose_1.default.connect(env_1.env.mongoUri, {
            serverSelectionTimeoutMS: 5000,
        });
        // eslint-disable-next-line no-console
        console.log("MongoDB connected");
        return true;
    }
    catch (error) {
        // eslint-disable-next-line no-console
        console.error("MongoDB connection failed", error);
        return false;
    }
}
