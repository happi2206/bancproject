import { apiRequest } from "@/src/lib/api";
import type { Product, ProductResponse, ProductsResponse } from "@/src/lib/types";

export async function fetchProducts(): Promise<Product[]> {
  const data = await apiRequest<ProductsResponse>("/products");
  return data.products;
}

export async function fetchProductById(id: string): Promise<Product> {
  const data = await apiRequest<ProductResponse>(`/products/${id}`);
  return data.product;
}
