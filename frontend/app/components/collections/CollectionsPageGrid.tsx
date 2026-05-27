"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useProducts } from "@/src/lib/hooks/useProducts";
import { formatCurrency } from "@/src/lib/format";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CollectionsPageGrid() {
  const { products, isLoading, error } = useProducts();
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.category)))],
    [products]
  );

  const [activeFilter, setActiveFilter] = useState("All");
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <>
      <section className="mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <motion.h1
              className="font-headline-lg text-headline-lg uppercase mb-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              The Core Collection
            </motion.h1>
            <motion.p
              className="font-body-lg text-body-lg text-on-surface/60 italic leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.15 }}
            >
              An exploration of temporal architecture. Browse real-time product inventory from the BANC catalogue.
            </motion.p>
          </div>

          <div className="relative shrink-0">
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="flex items-center gap-3 font-label-sm text-label-sm uppercase tracking-widest border-b border-outline/30 pb-2 text-on-surface/60 hover:text-on-surface transition-colors duration-300"
            >
              <span>{activeFilter === "All" ? "Filter By" : activeFilter}</span>
              <span className={`material-symbols-outlined text-[16px] transition-transform duration-300 ${filterOpen ? "rotate-180" : ""}`}>
                expand_more
              </span>
            </button>

            {filterOpen && (
              <div className="absolute right-0 top-full mt-2 bg-surface-container border border-outline/10 z-10 min-w-[180px]">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveFilter(cat);
                      setFilterOpen(false);
                    }}
                    className={`w-full text-left px-6 py-3 font-label-sm text-label-sm uppercase tracking-widest transition-colors duration-200 ${
                      activeFilter === cat
                        ? "text-on-surface bg-surface-container-high"
                        : "text-on-surface/50 hover:text-on-surface hover:bg-surface-container-high"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {isLoading ? <p className="mb-10 text-on-surface/60">Loading products...</p> : null}
      {error ? <p className="mb-10 text-red-400">{error}</p> : null}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-[120px] mb-[160px]">
        <AnimatePresence>
          {filtered.map((item, i) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease, delay: i * 0.06 }}
            >
              <Link href={`/product/${item.slug}`} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low mb-8">
                  <Image
                    src={item.images[0] || "/next.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {item.isFeatured && (
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 border border-primary/40 font-label-sm text-label-sm uppercase bg-surface/80 backdrop-blur-sm">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface/40 uppercase tracking-widest mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-headline-md text-headline-md uppercase mb-2">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-body-md text-body-md italic text-on-surface/80">
                      Stock {item.stock}
                    </span>
                    <span className="font-label-sm text-label-sm tracking-widest">
                      {formatCurrency(item.price)}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </>
  );
}
