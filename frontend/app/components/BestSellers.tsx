"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useProducts } from "@/src/lib/hooks/useProducts";
import { formatCurrency } from "@/src/lib/format";
import { ProductCardSkeleton } from "@/app/components/Skeleton";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BestSellers() {
  const { products, isLoading, error } = useProducts();

  const watches = products.slice(0, 3);

  return (
    <section className="py-40 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop overflow-hidden">
      <motion.h2
        className="font-headline-md text-headline-md uppercase mb-20 tracking-[0.2em]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
      >
        The Essentials
      </motion.h2>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-gutter">
          {[1, 2, 3].map((item) => (
            <ProductCardSkeleton key={item} />
          ))}
        </div>
      ) : null}
      {error ? <p className="text-red-400">{error}</p> : null}

      {!isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-gutter">
        {watches.map((watch, i) => (
          <motion.div
            key={watch._id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease, delay: i * 0.1 }}
          >
            <Link href={`/product/${watch._id}`} className="group">
              <div className="aspect-[3/4] bg-surface-container flex items-center justify-center p-12 border border-outline/5 overflow-hidden">
                <Image
                  src={watch.images[0] || "/next.svg"}
                  alt={watch.name}
                  width={400}
                  height={500}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h4 className="font-headline-md text-[20px] uppercase mb-1">
                    {watch.name}
                  </h4>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 border border-outline/20 font-label-sm text-[10px] uppercase">
                      {watch.category}
                    </span>
                    <span className="px-2 py-1 border border-outline/20 font-label-sm text-[10px] uppercase">
                      Stock {watch.stock}
                    </span>
                  </div>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest">
                  {formatCurrency(watch.price)}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
        </div>
      ) : null}
    </section>
  );
}
