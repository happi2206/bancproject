import { Router } from "express";
import { adminOnly, protect } from "../middleware/authMiddleware";

const router = Router();

router.get("/", protect, adminOnly, (_req, res) => {
  res.json({ message: "Admin route group ready (protected)" });
});

export default router;
