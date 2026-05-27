"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useProducts } from "@/src/lib/hooks/useProducts";
import { formatCurrency } from "@/src/lib/format";
import { ProductCardSkeleton } from "@/app/components/Skeleton";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BestsellersBento() {
  const { products } = useProducts();
  const picks = products.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <section className="py-40 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
      <motion.div
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
      >
        <div>
          <span className="font-label-sm text-label-sm text-primary mb-4 block uppercase tracking-widest">
            Best Sellers
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase leading-none">
            Most Wanted
          </h2>
        </div>
        <Link
          href="/collections"
          className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest hover:text-on-surface transition-colors duration-300 self-start md:self-auto"
        >
          View All →
        </Link>
      </motion.div>

      {products.length === 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-gutter">
          {[1, 2, 3].map((item) => (
            <ProductCardSkeleton key={item} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-gutter">
        {picks.map((product, i) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease, delay: i * 0.1 }}
          >
            <Link href={`/product/${product._id}`} className="group flex flex-col gap-4">
              <div className="aspect-square relative bg-surface-container overflow-hidden">
                {product.isFeatured && (
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-on-background text-background font-label-sm text-[10px] uppercase tracking-widest">
                    Featured
                  </span>
                )}
                <Image
                  src={product.images[0] || "/next.svg"}
                  alt={product.name}
                  fill
                  className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-headline-md text-headline-md">{product.name}</h3>
                </div>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  {formatCurrency(product.price)}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
        </div>
      )}
    </section>
  );
}
