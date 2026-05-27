"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useProducts } from "@/src/lib/hooks/useProducts";
import { formatCurrency } from "@/src/lib/format";
import type { Product } from "@/src/lib/types";

const ease = [0.22, 1, 0.36, 1] as const;

function matchesQuery(product: Product, query: string): boolean {
  const q = query.toLowerCase();
  return (
    product.name.toLowerCase().includes(q) ||
    product.category.toLowerCase().includes(q) ||
    product.description.toLowerCase().includes(q)
  );
}

export default function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") ?? "";

  const { products, isLoading, error } = useProducts();

  const [localQuery, setLocalQuery] = useState(query);
  useEffect(() => { setLocalQuery(query); }, [query]);

  const filtered = query
    ? products.filter((p) => matchesQuery(p, query))
    : products;

  const handleSearch = useCallback(() => {
    const q = localQuery.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }, [localQuery, router]);

  return (
    <>
      {/* Search bar (inline on the page) */}
      <div className="mb-20 border-b border-outline/10 pb-8">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-on-surface/40 shrink-0">search</span>
          <input
            type="text"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleSearch(); }}
            placeholder="SEARCH WATCHES, MATERIALS, SERIES..."
            className="flex-1 bg-transparent font-label-sm text-label-sm uppercase tracking-widest text-on-surface placeholder:text-on-surface/30 outline-none border-none py-4 min-w-0"
            autoFocus
          />
          {localQuery !== query && localQuery.trim() && (
            <button
              onClick={handleSearch}
              className="shrink-0 hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <span className="material-symbols-outlined text-on-surface">arrow_forward</span>
            </button>
          )}
        </div>
      </div>

      {/* Header */}
      <header className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/50 mb-4">
              {query ? "Search Results" : "All Products"}
            </p>
            <h2 className="font-headline-lg text-headline-lg uppercase leading-none">
              {query || "Catalogue"}
            </h2>
          </div>
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40 shrink-0">
            {isLoading
              ? "Searching..."
              : `${filtered.length} Result${filtered.length !== 1 ? "s" : ""}`}
          </p>
        </div>
      </header>

      {/* Error */}
      {error && (
        <p className="font-body-md text-body-md text-red-400 mb-10">{error}</p>
      )}

      {/* Empty state */}
      {!isLoading && !error && filtered.length === 0 && (
        <div className="py-40 text-center">
          <p className="font-headline-md text-headline-md uppercase text-on-surface/20 mb-6">
            No Results
          </p>
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40">
            Try a different search term
          </p>
        </div>
      )}

      {/* Product grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-gutter gap-y-20 mb-24">
        <AnimatePresence>
          {filtered.map((product, i) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease, delay: i * 0.04 }}
            >
              <Link href={`/product/${product.slug}`} className="group block cursor-pointer">
                {/* Image */}
                <div className="relative overflow-hidden bg-surface-container-lowest aspect-[3/4] mb-6">
                  <Image
                    src={product.images[0] || "/next.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {product.isFeatured && (
                    <div className="absolute top-4 right-4 px-3 py-1 border border-primary/40 bg-surface/60 backdrop-blur-sm">
                      <span className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface">
                        Featured
                      </span>
                    </div>
                  )}
                  {product.stock === 0 && (
                    <div className="absolute bottom-4 left-4 px-3 py-1 border border-outline/30 bg-surface/60 backdrop-blur-sm">
                      <span className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/60">
                        Sold Out
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-headline-md text-headline-md uppercase leading-tight">
                      {product.name}
                    </h3>
                    <p className="font-body-md text-body-md shrink-0 text-on-surface/80">
                      {formatCurrency(product.price)}
                    </p>
                  </div>
                  <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/50">
                    {product.category}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </>
  );
}
