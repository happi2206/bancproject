import { NextFunction, Request, Response } from "express";
import { isDatabaseConnected } from "../config/db";

export function requireDatabase(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (req.path === "/health") {
    next();
    return;
  }

  if (!isDatabaseConnected()) {
    res.status(503).json({
      message:
        "Database unavailable. Please retry once MongoDB connection is restored.",
    });
    return;
  }

  next();
}
