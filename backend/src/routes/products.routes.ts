import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ message: "Products route group ready" });
});

export default router;
