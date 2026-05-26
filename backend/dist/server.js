"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = require("./config/db");
const env_1 = require("./config/env");
async function startServer() {
    const dbConnected = await (0, db_1.connectDB)();
    if (!dbConnected && env_1.env.nodeEnv !== "production") {
        // eslint-disable-next-line no-console
        console.warn("Starting without MongoDB connection in development mode.");
    }
    if (!dbConnected && env_1.env.nodeEnv === "production") {
        throw new Error("MongoDB connection is required in production.");
    }
    app_1.default.listen(env_1.env.port, () => {
        // eslint-disable-next-line no-console
        console.log(`Server running on port ${env_1.env.port} in ${env_1.env.nodeEnv} mode`);
    });
}
startServer().catch((error) => {
    // eslint-disable-next-line no-console
    console.error("Failed to start server", error);
    process.exit(1);
});
