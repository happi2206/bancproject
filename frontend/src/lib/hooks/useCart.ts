"use client";

import { useCallback, useEffect, useState } from "react";
import type { Cart } from "@/src/lib/types";
import {
  addItemToCart,
  clearCartData,
  fetchCart,
  removeCartItem,
  updateCartItemQuantity,
} from "@/src/lib/services/cart";
import { useAuth } from "@/app/components/auth/AuthProvider";

export function useCart() {
  const { token, isAuthenticated, isHydrated } = useAuth();
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshCart = useCallback(async () => {
    if (!token) return;
    setIsLoading(true);
    setError(null);
    try {
      const next = await fetchCart(token);
      setCart(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch cart");
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (!isHydrated) return;
    if (!isAuthenticated || !token) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refreshCart();
  }, [isAuthenticated, isHydrated, token, refreshCart]);

  const addToCart = useCallback(
    async (productId: string, quantity = 1) => {
      if (!token) throw new Error("Please log in to add items to cart.");
      setError(null);
      const previous = cart;
      try {
        setIsLoading(true);
        const next = await addItemToCart(token, productId, quantity);
        setCart(next);
      } catch (err) {
        setCart(previous || null);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [token, cart]
  );

  const updateQuantity = useCallback(
    async (productId: string, quantity: number) => {
      if (!token) throw new Error("Please log in to update your cart.");

      const previous = cart;
      if (previous) {
        const optimisticItems = previous.items
          .map((item) =>
            item.productId._id === productId ? { ...item, quantity } : item
          )
          .filter((item) => item.quantity > 0);
        setCart({ ...previous, items: optimisticItems });
      }

      try {
        const next = await updateCartItemQuantity(token, productId, quantity);
        setCart(next);
      } catch (err) {
        setCart(previous || null);
        throw err;
      }
    },
    [token, cart]
  );

  const removeItem = useCallback(
    async (productId: string) => {
      if (!token) throw new Error("Please log in to update your cart.");
      const previous = cart;
      if (previous) {
        setCart({
          ...previous,
          items: previous.items.filter((item) => item.productId._id !== productId),
        });
      }
      try {
        const next = await removeCartItem(token, productId);
        setCart(next);
      } catch (err) {
        setCart(previous || null);
        throw err;
      }
    },
    [token, cart]
  );

  const clearCart = useCallback(async () => {
    if (!token) throw new Error("Please log in to update your cart.");
    const next = await clearCartData(token);
    setCart(next);
  }, [token]);

  return {
    cart,
    isLoading,
    error,
    refreshCart,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    isAuthenticated,
  };
}
