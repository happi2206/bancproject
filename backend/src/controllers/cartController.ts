import { Request, Response } from "express";
import { isValidObjectId, Types } from "mongoose";
import { ParamsDictionary } from "express-serve-static-core";
import Cart from "../models/Cart";
import Product from "../models/Product";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";

interface AddToCartBody {
  productId?: string;
  quantity?: number;
}

interface UpdateCartItemBody {
  quantity?: number;
}

function assertAuthenticatedUserId(req: Request): string {
  if (!req.user?.id) {
    throw new ApiError(401, "Not authorized");
  }
  return req.user.id;
}

async function findOrCreateCart(userId: string) {
  const existingCart = await Cart.findOne({ userId });
  if (existingCart) {
    return existingCart;
  }
  return Cart.create({ userId, items: [] });
}

export const getCart = asyncHandler(async (req: Request, res: Response) => {
  const userId = assertAuthenticatedUserId(req);

  const cart = await findOrCreateCart(userId);
  await cart.populate({
    path: "items.productId",
    select: "name slug price images category stock isFeatured",
  });

  res.status(200).json({ cart });
});

export const addToCart = asyncHandler(
  async (
    req: Request<ParamsDictionary, object, AddToCartBody>,
    res: Response
  ) => {
    const userId = assertAuthenticatedUserId(req);
    const { productId, quantity = 1 } = req.body;

    if (!productId || !isValidObjectId(productId)) {
      throw new ApiError(400, "Valid productId is required");
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new ApiError(400, "Quantity must be a positive integer");
    }

    const productExists = await Product.exists({ _id: productId });
    if (!productExists) {
      throw new ApiError(404, "Product not found");
    }

    const cart = await findOrCreateCart(userId);
    const index = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (index >= 0) {
      cart.items[index].quantity += quantity;
    } else {
      cart.items.push({ productId: new Types.ObjectId(productId), quantity });
    }

    await cart.save();
    await cart.populate({
      path: "items.productId",
      select: "name slug price images category stock isFeatured",
    });

    res.status(200).json({ message: "Cart updated successfully", cart });
  }
);

export const updateCartItem = asyncHandler(
  async (
    req: Request<{ productId: string }, object, UpdateCartItemBody>,
    res: Response
  ) => {
    const userId = assertAuthenticatedUserId(req);
    const { productId } = req.params;
    const { quantity } = req.body;

    if (!isValidObjectId(productId)) {
      throw new ApiError(400, "Invalid product id");
    }
    if (quantity === undefined || !Number.isInteger(quantity) || quantity < 0) {
      throw new ApiError(400, "Quantity must be a non-negative integer");
    }

    const cart = await findOrCreateCart(userId);
    const index = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (index === -1) {
      throw new ApiError(404, "Item not found in cart");
    }

    if (quantity === 0) {
      cart.items.splice(index, 1);
    } else {
      cart.items[index].quantity = quantity;
    }

    await cart.save();
    await cart.populate({
      path: "items.productId",
      select: "name slug price images category stock isFeatured",
    });

    res.status(200).json({ message: "Cart item updated successfully", cart });
  }
);

export const removeCartItem = asyncHandler(
  async (req: Request<{ productId: string }>, res: Response) => {
    const userId = assertAuthenticatedUserId(req);
    const { productId } = req.params;

    if (!isValidObjectId(productId)) {
      throw new ApiError(400, "Invalid product id");
    }

    const cart = await findOrCreateCart(userId);
    const initialCount = cart.items.length;
    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    if (cart.items.length === initialCount) {
      throw new ApiError(404, "Item not found in cart");
    }

    await cart.save();
    await cart.populate({
      path: "items.productId",
      select: "name slug price images category stock isFeatured",
    });

    res.status(200).json({ message: "Cart item removed successfully", cart });
  }
);

export const clearCart = asyncHandler(async (req: Request, res: Response) => {
  const userId = assertAuthenticatedUserId(req);

  const cart = await findOrCreateCart(userId);
  cart.items = [];
  await cart.save();

  res.status(200).json({ message: "Cart cleared successfully", cart });
});

export const getAllCarts = asyncHandler(async (_req: Request, res: Response) => {
  const carts = await Cart.find()
    .populate({ path: "userId", select: "name email" })
    .populate({ path: "items.productId", select: "name price images slug" })
    .sort({ updatedAt: -1 });

  const data = carts.map((cart) => {
    const user = cart.userId as unknown as { _id: string; name: string; email: string } | null;
    const items = cart.items.map((item) => {
      const product = item.productId as unknown as {
        _id: string;
        name: string;
        price: number;
        images: string[];
        slug: string;
      } | null;
      return {
        productId: product?._id ?? null,
        name: product?.name ?? "Unknown product",
        price: product?.price ?? 0,
        image: product?.images?.[0] ?? "",
        slug: product?.slug ?? "",
        quantity: item.quantity,
        lineTotal: (product?.price ?? 0) * item.quantity,
      };
    });

    const subtotal = items.reduce((sum, i) => sum + i.lineTotal, 0);

    return {
      cartId: cart._id,
      user: user ? { id: user._id, name: user.name, email: user.email } : null,
      items,
      subtotal,
      itemCount: items.reduce((sum, i) => sum + i.quantity, 0),
      updatedAt: cart.updatedAt,
      createdAt: cart.createdAt,
    };
  });

  res.json({ count: data.length, carts: data });
});
