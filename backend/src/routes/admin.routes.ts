import { Router } from "express";
import { adminOnly, protect } from "../middleware/authMiddleware";
import { getAllCarts } from "../controllers/cartController";

const router = Router();

router.get("/", protect, adminOnly, (_req, res) => {
  res.json({ message: "Admin route group ready (protected)" });
});

router.get("/carts", protect, adminOnly, getAllCarts);

export default router;
