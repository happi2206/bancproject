"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CraftsmanshipSection() {
  return (
    <section className="relative w-full py-40 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlC4FYy8TGqo_G1A2lA4I7Ob6z9_0_Orsj7WbQ5TmW19ChWoX2U35uflGlNAH2hgmyyqark77_Xg_xnoHEw9gjUBY5dkFjQXk5fG9c_4NJO7ikV36mAkTiCKV7rHQ3G2cshowCcQTNuP71j4mWyDm43NR1wXK5cihDfQT1KNbQaF76Mhi_ZYz0kjVNf-qxY6Do1G-Jx_2Ydcwgsuh2EGn3drUvpEO8wB3txIvuJ-Am0lYUXS-B7Bcw5O2aZMNbX0mc_BoKxSSsZ-c"
          alt="Watchmaking atelier in Milan"
          fill
          className="object-cover opacity-40 scale-110 blur-sm"
          sizes="100vw"
        />
      </div>

      {/* Glass content */}
      <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <motion.div
          className="glass-panel max-w-2xl mx-auto md:mx-0 px-10 py-16 md:px-16 md:py-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="font-label-sm text-label-sm text-primary mb-4 block uppercase tracking-widest">
            The Craft
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase leading-none mb-8">
            Mechanics <br /> of Time
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-12">
            Every BANC timepiece is assembled by hand in our Milan atelier.
            Over 200 individual components, each inspected under 40× magnification
            before final casing. We do not cut corners — we cut metal.
          </p>

          {/* Play button */}
          <button className="flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-full border border-on-surface/30 flex items-center justify-center group-hover:border-on-surface transition-colors duration-300">
              <span className="material-symbols-outlined text-[20px] ml-0.5">
                play_arrow
              </span>
            </div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant group-hover:text-on-surface transition-colors duration-300">
              Watch the Process
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
