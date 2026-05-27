"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

const labItems = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYC9KrOqSJK864-P-8zOmHpskgu_ITLG2CgrKxAV78xeOOS7J4-8hNmCiFxNicA4INEBoBrbKbHDsOGLbJOxjpcImNuMAEOL1yo4FAViWoH2anS7z4lhIWcMM_XdIId2wCiSv6mLLaoXipjbiRQlUpGoZ2owXz_P_HC0ZeLYMUEPstVkO8pJsqCJ5zFOMJ2uCHZhCOQ6nVfjlLkId6RJQr5bR0mbMP5b-aCUax4X8dD-2ZEgvR1jRjlDR6UlnG11dtoxGsYeTi7qI",
    alt: "Forged carbon fiber macro texture",
    title: "Material Rigor",
    body: "Forged carbon composites and lab-grown sapphire crystals. Materials chosen for their refusal to age or yield.",
    tags: ["Hardness 9H", "Anti-Reflective"],
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDANL_REbPBzYH-S93fwJuvWmcQT2mkKWcSeuXXVFJie7PNm-4mzo0pQBXCCrAOCfWdFCD0iRSw4XLcYMqed9YXBlzQZb38kFiazVRC-1hkTfLGF_EYD3VrWKokfET-E832tOhzTSo4hh-5M_gEdApwEpOOXX6JU-MsuaZ0lvK_LFi04D7KCiZo6fCE1UVtyyJygbt8woFVBOJSqXKsp93PN01V3ezGVMXWZP_okwDPZGl9O3bmKReVWrSWpqBp4gIxO6oSW1qjkOc",
    alt: "Balance wheel in a watch movement",
    title: "Chronological Poetry",
    body: "The heart of a BANC is a mechanical testament to the passage of time. A rhythmic dance of 216 components in perfect harmony.",
    tags: ["Automatic", "72H Power Reserve"],
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7ihVDmoZvwxKOWwNfHvjNFI5tmkvzm3xwsqLYNuNW3YvLx2bLApV1BdCtc2kAdCesAhmYQj9Aq02alAYL8-4Z8Jkm-u-lqIFXSYnj3arG8pZJ0m6e1gWjebobHTNnGBVbtHROlOA0fhHuEJ9miX107Gbf5v-Ibnk9whXGkB3YZUHMHWutUOI-CsbyFNBtung7f_eJg1kMQ_1gswjnqx06KXnMaBYydtQVziLn6bERJtA8nY71-lnR_yng4lCGghfhly-Sm0IKwo",
    alt: "Modern Italian building facade in Milan",
    title: "Milanese Spirit",
    body: "Structure over ornament. Our design language is rooted in the brutalist elegance of Milanese urban geometry.",
    tags: ["Hand-Finished", "Designed in Brera"],
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVbJM8nZdyI8PJNjWM0aPE04VLdFx85SYalOAdZjZ28SqoSpPOE1w4t9_3hPlPYTufoqUBfpLvJ5OfGwFA36jaWw4GPlrOLZ52SedvpoV-duJCram_TuJk5hpv7HsmZWxchwc3W22IHJB1VQkMlY_LUIK_GF_4pquuDzfBuoGBGkQdhBOl1iFUR8GBRNCeMhK3Gc5Eo4w6Htht8sCtrGUBn_p9uw86ivYZ3qgN0wlUJbf8zKhhmQ_2MCU_nWdZSqAAkD-0r0uSHfI"
            alt="Milanese skyline at twilight"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-0">
          <motion.h1
            className="font-display-lg text-display-lg uppercase text-on-surface leading-none mb-4"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
          >
            BANC: Architectural Horology
          </motion.h1>
          <motion.p
            className="font-label-sm text-label-sm uppercase tracking-[0.5em] text-on-surface/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.6 }}
          >
            Milan · 1984 · Future
          </motion.p>
        </div>
      </section>

      {/* The Narrative */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24 items-center">
          <FadeIn className="relative aspect-[4/5] overflow-hidden group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5MBYCoC2rTyeJP7zwccv2uPrs_hKGF-R3O6N6hk1YZubm1tzs8vBL2wmq3aPG7UzNOLdhRrr1Llyr5XcUXzgWLgUZdE22L8vTr-5hAo4EK_lTha8y2TA-zokgJ-x8akbKSwt_q2zBro_sEV1XIkkUzutw5gqwsH6GKToDs97cnXfw8ElbyhjEIzcLUMPTrDW_8Ju-3EFkeAAIO0OKgNWTQmCBJM7Xy6x-sQkZC2PqfSb12W4kGnYBxa-ssYOIVloytQjrZKArWK0"
              alt="Skeletonized watch movement"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-8 left-8">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface bg-background/70 backdrop-blur-sm px-4 py-2 border border-outline/20">
                Calibre B.01
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="flex flex-col justify-center">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40 mb-6">
              Our Narrative
            </p>
            <h2 className="font-body-lg text-[40px] md:text-[48px] leading-tight italic text-on-surface mb-8">
              &ldquo;Precision is the only luxury we cannot afford to lose.&rdquo;
            </h2>
            <div className="font-body-md text-body-md text-on-surface/60 space-y-5 max-w-lg">
              <p>
                Founded in the heart of Milan&apos;s Brera district, BANC was born from a
                singular obsession: the structural integrity of time. We do not merely
                manufacture watches; we engineer wearable architecture that defies the
                transient nature of trends.
              </p>
              <p>
                Every BANC timepiece is a dialogue between the artisanal heritage of Italian
                design and the uncompromising coldness of modern material science. We stripped
                away the superfluous to reveal the skeletal beauty of chronological truth.
              </p>
            </div>
            <Link
              href="/collections"
              className="mt-12 w-fit bg-on-surface text-background px-10 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-transparent hover:text-on-surface border border-on-surface transition-all duration-300"
            >
              Explore the Heritage
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Craftsmanship / The Lab */}
      <section
        id="craftsmanship"
        className="bg-surface-container-lowest py-32 scroll-mt-24"
      >
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-outline/10 pb-12 gap-6">
            <div>
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40 mb-2">
                Technical Excellence
              </p>
              <h3 className="font-headline-lg text-headline-lg uppercase">
                Craftsmanship
              </h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface/50 max-w-xs md:text-right">
              Where experimental metallurgy meets the relentless pursuit of chronological perfection.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {labItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="group">
                  <div className="aspect-[3/4] overflow-hidden mb-8 border border-outline/10">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      width={600}
                      height={800}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h4 className="font-headline-md text-headline-md uppercase mb-4">
                    {item.title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface/60 mb-6">
                    {item.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-label-sm text-[10px] uppercase tracking-widest border border-outline/30 px-3 py-1 text-on-surface/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-40 border-y border-outline/10 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center opacity-[0.04] pointer-events-none select-none overflow-hidden whitespace-nowrap">
          <span className="font-display-lg text-[200px] md:text-[300px] leading-none uppercase">
            BANC HORLOGERIE BANC HORLOGERIE
          </span>
        </div>
        <FadeIn className="max-w-4xl mx-auto text-center px-margin-mobile relative z-10">
          <h2 className="font-body-lg text-[40px] md:text-[56px] leading-[1.15] italic text-on-surface mb-10">
            &ldquo;True luxury is found in the space between the seconds.&rdquo;
          </h2>
          <div className="w-12 h-px bg-on-surface/30 mx-auto mb-6" />
          <p className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-surface/40">
            Alessandro Banc — Founder
          </p>
        </FadeIn>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <FadeIn className="border border-outline/20 p-12 md:p-20 flex flex-col items-center text-center">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40 mb-6">
            Stay Informed
          </p>
          <h3 className="font-headline-lg text-headline-lg uppercase mb-8">
            Access the Inner Circle
          </h3>
          <p className="font-body-md text-body-md text-on-surface/50 max-w-md mb-12">
            Be the first to witness limited release collaborations and technical laboratory updates.
          </p>
          <form
            className="w-full max-w-md flex flex-col md:flex-row gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-grow bg-transparent border-b border-outline/30 focus:border-on-surface outline-none py-2 font-label-sm text-label-sm tracking-widest uppercase text-on-surface placeholder:text-on-surface/20 transition-colors"
            />
            <button
              type="submit"
              className="border border-on-surface px-8 py-3 font-label-sm text-label-sm uppercase tracking-widest hover:bg-on-surface hover:text-background transition-all duration-300 shrink-0"
            >
              Subscribe
            </button>
          </form>
        </FadeIn>
      </section>
    </>
  );
}
