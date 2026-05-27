"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function EditorialSection() {
  return (
    <section className="w-full bg-surface-container-lowest py-60">
      <div className="max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-40 items-center">
        {/* Image column */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-primary/30" />
          <Image
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=85&fit=crop"
            alt="Precision timepiece — BANC editorial"
            width={700}
            height={875}
            className="w-full h-auto grayscale brightness-75 border border-outline/10"
          />
        </motion.div>

        {/* Text column */}
        <div className="flex flex-col items-start">
          <motion.span
            className="font-label-sm text-label-sm uppercase tracking-[0.4em] text-primary mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            Journal Vol. 04
          </motion.span>
          <motion.h2
            className="font-body-lg text-[48px] italic leading-tight mb-10 text-on-surface"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            &ldquo;Precision is the only luxury we cannot afford to lose.&rdquo;
          </motion.h2>
          <motion.p
            className="font-body-md text-body-lg text-on-surface/50 mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease, delay: 0.32 }}
          >
            An exclusive interview with lead designer Alessandro Banc on the
            intersection of Milanese fashion silhouettes and architectural
            horology.
          </motion.p>
          <motion.button
            className="border border-outline/40 hover:border-primary px-10 py-4 font-label-sm text-label-sm uppercase tracking-widest transition-all duration-500"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease, delay: 0.44 }}
          >
            Read Journal
          </motion.button>
        </div>
      </div>
    </section>
  );
}
