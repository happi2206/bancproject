"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/src/lib/types";
import { fetchProducts } from "@/src/lib/services/products";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function run() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchProducts();
        if (active) setProducts(data);
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : "Failed to load products");
      } finally {
        if (active) setIsLoading(false);
      }
    }

    run();
    return () => {
      active = false;
    };
  }, []);

  return { products, isLoading, error };
}
