import { Router } from "express";
import authRoutes from "./authRoutes";
import productRoutes, { adminProductRouter } from "./productRoutes";
import cartRoutes from "./cartRoutes";
import ordersRoutes from "./orders.routes";
import adminRoutes from "./admin.routes";

const router = Router();

router.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "banc-backend" });
});

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/orders", ordersRoutes);
router.use("/admin/products", adminProductRouter);
router.use("/admin", adminRoutes);

export default router;
