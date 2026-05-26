import { Router } from "express";
import { loginUser, registerUser, updateProfile, addAddress, deleteAddress, updateAddress } from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/me", protect, updateProfile);
router.post("/me/addresses", protect, addAddress);
router.delete("/me/addresses/:addressId", protect, deleteAddress);
router.patch("/me/addresses/:addressId", protect, updateAddress);

export default router;
