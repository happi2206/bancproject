"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FeaturedRelease() {
  return (
    <section className="py-40 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
      {/* Section header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end mb-20">
        <motion.div
          className="md:col-span-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="font-label-sm text-label-sm text-primary mb-4 block uppercase tracking-widest">
            Featured Release
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase leading-none">
            The Onyx <br /> Collection
          </h2>
        </motion.div>
        <motion.div
          className="md:col-span-4 md:text-right"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease, delay: 0.15 }}
        >
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs md:ml-auto">
            A study in structural purity. Matte carbon textures meeting
            sapphire precision.
          </p>
        </motion.div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Watch image */}
        <motion.div
          className="md:col-span-7 aspect-[4/5] relative bg-surface-container overflow-hidden group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlC4FYy8TGqo_G1A2lA4I7Ob6z9_0_Orsj7WbQ5TmW19ChWoX2U35uflGlNAH2hgmyyqark77_Xg_xnoHEw9gjUBY5dkFjQXk5fG9c_4NJO7ikV36mAkTiCKV7rHQ3G2cshowCcQTNuP71j4mWyDm43NR1wXK5cihDfQT1KNbQaF76Mhi_ZYz0kjVNf-qxY6Do1G-Jx_2Ydcwgsuh2EGn3drUvpEO8wB3txIvuJ-Am0lYUXS-B7Bcw5O2aZMNbX0mc_BoKxSSsZ-c"
            alt="A full-length vertical shot of a matte black automatic watch resting on dark volcanic rock with cold blue-tinted rim lights"
            fill
            className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </motion.div>

        {/* Product details */}
        <motion.div
          className="md:col-span-5 flex flex-col justify-between py-10 md:pl-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
        >
          <div>
            <h3 className="font-headline-md text-headline-md mb-6">
              ONYX III AUTOMATIC
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {["40MM Case", "NH35 Movement", "10ATM"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-outline-variant/30 font-label-sm text-[10px] uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Engineered with a sandblasted 316L stainless steel case and a
              bespoke integrated bracelet. The Onyx III represents the pinnacle
              of monochromatic design.
            </p>
          </div>
          <Link
            href="/collections"
            className="mt-12 inline-block w-full md:w-max px-12 py-5 bg-on-background text-background font-label-sm text-label-sm uppercase tracking-widest text-center hover:bg-primary transition-colors duration-300"
          >
            Discover Series
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
