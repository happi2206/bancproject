import mongoose from "mongoose";
import { env } from "../config/env";
import User from "../models/User";

const email = process.argv[2];

if (!email) {
  console.error("Usage: npx ts-node src/scripts/makeAdmin.ts <email>");
  process.exit(1);
}

async function run() {
  await mongoose.connect(env.mongoUri);
  const user = await User.findOneAndUpdate(
    { email: email.toLowerCase().trim() },
    { role: "admin" },
    { new: true }
  );
  if (!user) {
    console.error(`No user found with email: ${email}`);
    process.exit(1);
  }
  console.log(`✓ ${user.email} is now role: ${user.role}`);
  await mongoose.disconnect();
}

run().catch((e) => { console.error(e); process.exit(1); });
