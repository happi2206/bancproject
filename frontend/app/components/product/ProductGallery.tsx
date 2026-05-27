"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/src/lib/types";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProductGallery({ product }: { product: Product }) {
  const gallery = product.images.length > 0 ? product.images : ["/next.svg"];

  return (
    <div className="lg:col-span-7 space-y-12">
      <motion.div
        className="bg-surface-container-lowest overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
      >
        <Image
          src={gallery[0]}
          alt={product.name}
          width={1200}
          height={900}
          className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
      </motion.div>

      <div className="grid grid-cols-2 gap-gutter">
        {[gallery[1] || gallery[0], gallery[2] || gallery[0]].map((image, index) => (
          <motion.div
            key={`${image}-${index}`}
            className={`bg-surface-container-lowest overflow-hidden ${index === 0 ? "mt-12" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease, delay: index * 0.12 }}
          >
            <Image
              src={image}
              alt={`${product.name} view ${index + 2}`}
              width={600}
              height={750}
              className="w-full aspect-[4/5] object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
              sizes="(max-width: 1024px) 50vw, 28vw"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="py-20 max-w-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
      >
        <h3 className="font-headline-md text-headline-md uppercase mb-8">Engineering Purity</h3>
        <p className="font-body-lg text-body-lg text-on-surface/80 leading-relaxed mb-6">
          {product.description}
        </p>
        <p className="font-body-md text-body-md text-on-surface/60">
          Crafted with architectural precision, this timepiece is part of the {product.category.toLowerCase()} collection.
        </p>
      </motion.div>
    </div>
  );
}
