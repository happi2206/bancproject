"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/src/lib/types";
import { fetchProductById } from "@/src/lib/services/products";

export function useProduct(productId: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function run() {
      if (!productId) {
        setIsLoading(false);
        setError("Missing product id");
        return;
      }

      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchProductById(productId);
        if (active) setProduct(data);
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : "Failed to load product");
      } finally {
        if (active) setIsLoading(false);
      }
    }

    run();
    return () => {
      active = false;
    };
  }, [productId]);

  return { product, isLoading, error };
}
