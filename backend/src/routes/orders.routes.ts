import { Router } from "express";
import { createOrder, getMyOrders, getOrderById } from "../controllers/orderController";
import { protect } from "../middleware/authMiddleware";

const router = Router();

router.use(protect);
router.post("/", createOrder);
router.get("/my", getMyOrders);
router.get("/:orderId", getOrderById);

export default router;
