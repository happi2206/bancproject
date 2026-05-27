import { apiRequest } from "@/src/lib/api";
import type { Cart, CartResponse } from "@/src/lib/types";

export async function fetchCart(token: string): Promise<Cart> {
  const data = await apiRequest<CartResponse>("/cart", { token });
  return data.cart;
}

export async function addItemToCart(
  token: string,
  productId: string,
  quantity = 1
): Promise<Cart> {
  const data = await apiRequest<CartResponse>("/cart/items", {
    method: "POST",
    token,
    body: { productId, quantity },
  });
  return data.cart;
}

export async function updateCartItemQuantity(
  token: string,
  productId: string,
  quantity: number
): Promise<Cart> {
  const data = await apiRequest<CartResponse>(`/cart/items/${productId}`, {
    method: "PATCH",
    token,
    body: { quantity },
  });
  return data.cart;
}

export async function removeCartItem(token: string, productId: string): Promise<Cart> {
  const data = await apiRequest<CartResponse>(`/cart/items/${productId}`, {
    method: "DELETE",
    token,
  });
  return data.cart;
}

export async function clearCartData(token: string): Promise<Cart> {
  const data = await apiRequest<CartResponse>("/cart", {
    method: "DELETE",
    token,
  });
  return data.cart;
}
