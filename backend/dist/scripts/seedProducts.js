"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
const mongoose_1 = __importDefault(require("mongoose"));
const Product_1 = __importDefault(require("../models/Product"));
const products_1 = require("../seeds/products");
async function seedProducts() {
    const dbConnected = await (0, db_1.connectDB)();
    if (!dbConnected) {
        throw new Error("Cannot seed products without MongoDB connection");
    }
    await Product_1.default.deleteMany({});
    await Product_1.default.insertMany(products_1.luxuryWatchProducts);
    // eslint-disable-next-line no-console
    console.log(`Seeded ${products_1.luxuryWatchProducts.length} products successfully`);
}
seedProducts()
    .then(async () => {
    await mongoose_1.default.disconnect();
    process.exit(0);
})
    .catch(async (error) => {
    // eslint-disable-next-line no-console
    console.error("Failed to seed products", error);
    await mongoose_1.default.disconnect();
    process.exit(1);
});
