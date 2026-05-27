"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "@/src/lib/types";
import { formatCurrency } from "@/src/lib/format";
import { useCart } from "@/src/lib/hooks/useCart";
import { useRouter } from "next/navigation";

const ease = [0.22, 1, 0.36, 1] as const;

function AccordionRow({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-outline/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex justify-between items-center py-6 group text-left"
      >
        <span className="font-label-sm text-label-sm uppercase tracking-widest">{label}</span>
        <span className="material-symbols-outlined text-sm text-on-surface/60 transition-transform duration-300 group-hover:text-on-surface">
          {open ? "remove" : "add"}
        </span>
      </button>
      <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="pb-6">{children}</div>
      </div>
    </div>
  );
}

export default function ProductInfo({ product }: { product: Product }) {
  const router = useRouter();
  const { addToCart, isAuthenticated } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleAddToCart() {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    setIsAdding(true);
    setError(null);
    try {
      await addToCart(product._id, 1);
      router.push("/cart");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add to cart");
    } finally {
      setIsAdding(false);
    }
  }

  return (
    <div className="lg:col-span-5 relative">
      <div className="sticky top-32 space-y-10 pl-0 lg:pl-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
        >
          <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-primary/60 mb-4 block">
            Collection: {product.category}
          </span>
          <h1 className="font-headline-lg text-headline-lg uppercase leading-none mb-4">{product.name}</h1>
          <p className="font-headline-md text-headline-md text-primary">{formatCurrency(product.price)}</p>
        </motion.div>

        <motion.p
          className="font-body-md text-body-md text-on-surface/70 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.4 }}
        >
          {product.description}
        </motion.p>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.55 }}
        >
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="w-full bg-on-background text-background py-5 font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary transition-colors duration-300 disabled:opacity-60"
          >
            {isAdding ? "Adding..." : "Add to Cart"}
          </button>
          <button className="w-full bg-transparent border border-outline/20 text-on-surface py-5 font-label-sm text-label-sm uppercase tracking-widest hover:bg-on-surface/5 transition-colors duration-300">
            Book Private Viewing
          </button>
          {error ? <p className="text-red-400 text-sm">{error}</p> : null}
        </motion.div>

        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-1 border border-outline/20 font-label-sm text-[10px] uppercase tracking-tighter text-on-surface/60">
            {product.category}
          </span>
          <span className="px-4 py-1 border border-outline/20 font-label-sm text-[10px] uppercase tracking-tighter text-on-surface/60">
            Stock {product.stock}
          </span>
        </div>

        <div className="border-t border-outline/10">
          <AccordionRow label="Product Details">
            <div className="divide-y divide-outline/10">
              <div className="flex justify-between py-3"><span className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/50">Category</span><span className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface">{product.category}</span></div>
              <div className="flex justify-between py-3"><span className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/50">Stock</span><span className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface">{product.stock}</span></div>
              <div className="flex justify-between py-3"><span className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/50">SKU</span><span className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface">{product.slug}</span></div>
            </div>
          </AccordionRow>
          <AccordionRow label="Shipping & Returns">
            <p className="font-body-md text-body-md text-on-surface/60 leading-relaxed text-sm">
              Complimentary worldwide shipping on all orders. Returns accepted within 14 days of receipt, unworn and in original packaging.
            </p>
          </AccordionRow>
        </div>
      </div>
    </div>
  );
}
