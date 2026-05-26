import dotenv from "dotenv";

dotenv.config();

type NodeEnv = "development" | "production" | "test";

function getEnv(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  nodeEnv: (process.env.NODE_ENV ?? "development") as NodeEnv,
  port: Number(getEnv("PORT", "5000")),
  mongoUri: getEnv("MONGO_URI"),
  clientOrigin: getEnv("CLIENT_ORIGIN", "http://localhost:3000"),
  jwtSecret: getEnv("JWT_SECRET"),
  jwtExpiresIn: getEnv("JWT_EXPIRES_IN", "7d"),
};
