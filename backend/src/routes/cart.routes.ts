import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ message: "Cart route group ready" });
});

export default router;
