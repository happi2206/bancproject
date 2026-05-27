"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col md:flex-row bg-background">
      {/* Left: Content */}
      <div className="relative z-10 flex flex-col justify-center px-margin-mobile md:px-margin-desktop w-full md:w-1/2 pt-40 pb-20 md:py-0">
        <motion.p
          className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/50 mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          The Master Collection
        </motion.p>

        <motion.h1
          className="font-display-lg text-display-lg uppercase leading-none mb-8"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
        >
          Aeterna Precision
        </motion.h1>

        <motion.p
          className="font-body-lg text-body-lg text-on-surface/60 max-w-sm mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.45 }}
        >
          Crafted in the heart of Milan, the Aeterna series represents a dialogue between architectural geometry and the fluid passage of time.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.65 }}
        >
          <Link
            href="/collections"
            className="bg-on-surface text-background px-10 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:opacity-80 transition-opacity duration-300"
          >
            Explore Heritage
          </Link>
          <Link
            href="/collections"
            className="border border-outline/40 text-on-surface px-10 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:border-on-surface transition-colors duration-300"
          >
            View Spec
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 1.0 }}
        >
          <span className="font-label-sm text-[10px] uppercase tracking-[0.3em] text-on-surface/30">
            Calibre B.01
          </span>
          <div className="w-16 h-[1px] bg-outline/20" />
        </motion.div>
      </div>

      {/* Right: Image */}
      <motion.div
        className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-screen"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease, delay: 0.1 }}
      >
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFXvMpPIMcZ5fjMheQ2epyPCoQGPdlte0MKS4uI-ZPdS7OrbCxdUmeNO0jflx1h4swO1aHc5QZzu0J61E0i4wuGl-O32wukccMCZauUSxC468s-gzLmsODJo1N3QBIyEkr3DECwDKbjrhWvZwJlhUOiIZZC7u5XjdIBYHtx4poBj8kglqS7_7_ZJZGFXdUJv8SU9Lr2TNcPYn9a7OeEQmZj6Fr-s4UQNPnyKrV-KoGxqKdJsMciJO207eOqHvFmnWzCt-OgHmCHt4"
          alt="A macro close-up of a luxury watch movement with intricate gold gears and matte black finish"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/10 to-transparent md:block hidden" />
      </motion.div>
    </section>
  );
}
