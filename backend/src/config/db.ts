import mongoose from "mongoose";
import { env } from "./env";

mongoose.set("bufferCommands", false);

export function isDatabaseConnected(): boolean {
  return mongoose.connection.readyState === 1;
}

export async function connectDB(): Promise<boolean> {
  try {
    await mongoose.connect(env.mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    // eslint-disable-next-line no-console
    console.log("MongoDB connected");
    return true;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("MongoDB connection failed", error);
    return false;
  }
}
