import { connectDB } from "../config/db";
import mongoose from "mongoose";
import Product from "../models/Product";
import { luxuryWatchProducts } from "../seeds/products";

async function seedProducts(): Promise<void> {
  const dbConnected = await connectDB();
  if (!dbConnected) {
    throw new Error("Cannot seed products without MongoDB connection");
  }

  await Product.deleteMany({});
  await Product.insertMany(luxuryWatchProducts);

  // eslint-disable-next-line no-console
  console.log(`Seeded ${luxuryWatchProducts.length} products successfully`);
}

seedProducts()
  .then(async () => {
    await mongoose.disconnect();
    process.exit(0);
  })
  .catch(async (error) => {
    // eslint-disable-next-line no-console
    console.error("Failed to seed products", error);
    await mongoose.disconnect();
    process.exit(1);
  });
