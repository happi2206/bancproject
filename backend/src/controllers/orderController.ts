import { Request, Response } from "express";
import Cart from "../models/Cart";
import Order from "../models/Order";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";

interface CreateOrderBody {
  shippingAddress: {
    label?: string;
    line1: string;
    city: string;
    postcode: string;
    country: string;
  };
}

function generateOrderNumber(): string {
  const year = new Date().getFullYear();
  const suffix = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `BN-${year}-${suffix}`;
}

export const createOrder = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user!.id;
  const { shippingAddress } = req.body as CreateOrderBody;

  if (!shippingAddress?.line1?.trim() || !shippingAddress?.city?.trim() || !shippingAddress?.postcode?.trim() || !shippingAddress?.country?.trim()) {
    throw new ApiError(400, "Complete shipping address is required");
  }

  const cart = await Cart.findOne({ userId }).populate({
    path: "items.productId",
    select: "name price images",
  });

  if (!cart || cart.items.length === 0) {
    throw new ApiError(400, "Cart is empty");
  }

  const items = cart.items.map((item) => {
    const product = item.productId as unknown as { _id: string; name: string; price: number; images: string[] };
    return {
      productId: product._id,
      name: product.name,
      price: product.price,
      quantity: item.quantity,
      image: product.images?.[0] ?? "",
    };
  });

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  let orderNumber = generateOrderNumber();
  let attempts = 0;
  while (attempts < 5) {
    const exists = await Order.exists({ orderNumber });
    if (!exists) break;
    orderNumber = generateOrderNumber();
    attempts++;
  }

  const order = await Order.create({
    userId,
    orderNumber,
    items,
    total,
    status: "confirmed",
    shippingAddress: {
      label: shippingAddress.label?.trim() || "Home",
      line1: shippingAddress.line1.trim(),
      city: shippingAddress.city.trim(),
      postcode: shippingAddress.postcode.trim(),
      country: shippingAddress.country.trim(),
    },
  });

  cart.items = [];
  await cart.save();

  res.status(201).json({ message: "Order confirmed", order });
});

export const getMyOrders = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user!.id;
  const orders = await Order.find({ userId }).sort({ createdAt: -1 });
  res.json({ orders });
});

export const getOrderById = asyncHandler(async (req: Request<{ orderId: string }>, res: Response) => {
  const userId = req.user!.id;
  const order = await Order.findOne({ _id: req.params.orderId, userId });
  if (!order) throw new ApiError(404, "Order not found");
  res.json({ order });
});
