import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/productController";
import { adminOnly, protect } from "../middleware/authMiddleware";

const publicProductRouter = Router();
const adminProductRouter = Router();

publicProductRouter.get("/", getProducts);
publicProductRouter.get("/:id", getProductById);

adminProductRouter.use(protect, adminOnly);
adminProductRouter.post("/", createProduct);
adminProductRouter.patch("/:id", updateProduct);
adminProductRouter.delete("/:id", deleteProduct);

export { adminProductRouter };
export default publicProductRouter;
