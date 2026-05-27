"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeritageCallout() {
  return (
    <section className="relative py-40 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto overflow-hidden">
      {/* Ghost text */}
      <motion.p
        className="font-headline-lg uppercase leading-none text-on-surface opacity-[0.07] select-none pointer-events-none"
        style={{ fontSize: "clamp(48px, 10vw, 120px)", lineHeight: 1 }}
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.07 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        Milanese
        <br />
        Engineering
      </motion.p>

      {/* Overlaid quote — negative margin to pull it over the ghost text */}
      <motion.div
        className="-mt-16 md:-mt-24 relative z-10 max-w-2xl"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease, delay: 0.2 }}
      >
        <blockquote>
          <p className="font-body-lg text-body-lg italic text-on-surface leading-relaxed mb-8">
            &ldquo;We do not make watches for collectors. We make them for people
            who understand that time is the only luxury that cannot be
            manufactured — only marked.&rdquo;
          </p>
          <footer className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            — L. Banc, Founder
          </footer>
        </blockquote>
      </motion.div>
    </section>
  );
}
