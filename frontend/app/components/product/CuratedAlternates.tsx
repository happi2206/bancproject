"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/src/lib/types";
import { formatCurrency } from "@/src/lib/format";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CuratedAlternates({ products }: { products: Product[] }) {
  return (
    <section className="mt-40">
      <motion.h2
        className="font-headline-md text-headline-md uppercase mb-12 tracking-[0.2em]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
      >
        Curated Alternates
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {products.map((p, i) => (
          <motion.div
            key={p._id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease, delay: i * 0.1 }}
          >
            <Link href={`/product/${p._id}`} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container-lowest mb-6">
                <Image
                  src={p.images[0] || "/next.svg"}
                  alt={p.name}
                  width={400}
                  height={533}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/40 mb-2 block">
                {p.category}
              </span>
              <h4 className="font-body-lg text-body-lg uppercase group-hover:text-primary transition-colors duration-300 mb-1">
                {p.name}
              </h4>
              <p className="font-label-sm text-label-sm text-on-surface/60">{formatCurrency(p.price)}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
