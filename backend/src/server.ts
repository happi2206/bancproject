import app from "./app";
import { connectDB } from "./config/db";
import { env } from "./config/env";

async function startServer(): Promise<void> {
  const dbConnected = await connectDB();
  if (!dbConnected && env.nodeEnv !== "production") {
    // eslint-disable-next-line no-console
    console.warn("Starting without MongoDB connection in development mode.");
  }
  if (!dbConnected && env.nodeEnv === "production") {
    throw new Error("MongoDB connection is required in production.");
  }

  app.listen(env.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${env.port} in ${env.nodeEnv} mode`);
  });
}

startServer().catch((error) => {
  // eslint-disable-next-line no-console
  console.error("Failed to start server", error);
  process.exit(1);
});
