"use client";

import { useMemo } from "react";
import ProductGallery from "@/app/components/product/ProductGallery";
import ProductInfo from "@/app/components/product/ProductInfo";
import CuratedAlternates from "@/app/components/product/CuratedAlternates";
import ProductPageSkeleton from "@/app/components/product/ProductPageSkeleton";
import { useProduct } from "@/src/lib/hooks/useProduct";
import { useProducts } from "@/src/lib/hooks/useProducts";

export default function ProductPageClient({ productId }: { productId: string }) {
  const { product, isLoading, error } = useProduct(productId);
  const { products } = useProducts();

  const related = useMemo(() => {
    if (!product) return [];
    return products.filter((item) => item._id !== product._id).slice(0, 3);
  }, [product, products]);

  if (isLoading) return <ProductPageSkeleton />;
  if (error) return <p className="py-20 text-red-400">{error}</p>;
  if (!product) return <p className="py-20 text-on-surface/60">Product not found.</p>;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>
      <CuratedAlternates products={related} />
    </>
  );
}
