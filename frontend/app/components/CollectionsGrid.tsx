"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeIn = { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true, margin: "-80px" } };

export default function CollectionsGrid() {
  return (
    <section className="py-40 max-w-max-width mx-auto px-margin-desktop">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-end mb-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="max-w-xl">
          <h2 className="font-headline-lg text-headline-lg uppercase mb-6">
            Collections
          </h2>
          <p className="font-body-md text-body-md text-on-surface/60">
            Exploring the boundaries between technical dominance and minimalist
            expression. Each series is a testament to the BANC pursuit of
            horological purity.
          </p>
        </div>
        <Link
          href="/collections"
          className="font-label-sm text-label-sm uppercase tracking-widest border-b border-primary pb-2 text-primary hover:text-on-surface hover:border-on-surface transition-colors duration-300"
        >
          View All Series
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-[800px]">
        {/* Heritage Line — large tile */}
        <motion.div
          className="md:col-span-8 group relative overflow-hidden bg-surface-container-low border border-outline/10"
          {...fadeIn}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC255rxgFrQD_zccTvojoIQDbzjgN6sa5AlP-crcnx_sBFeTezPWK1Abq1lBxrPESf3YoSyhAPjLZg4NiMyiGv-igSM7l0L2KKq8tZqkYPWjMQ2gC5gjo0vLuQ9bvF_7aXFo5JKf2-whwT2FMhEdg5SNjVGA3CiVD1jmJFRVwEYDOdUgxXnBPmoBHpO14oqtsXqp6tgAtJD5OOXTdPqIB-x7mcQJmrJ7d67899Fhe1gBKbFZyFTnXdX8uEzpfJBY6s29j1KZ7MGI9M"
            alt="A wide minimalist shot of a high-end watch manufacture studio in Milan with raw concrete walls and matte black workbenches"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
          <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="font-headline-md text-headline-md uppercase mb-2">
              The Heritage Line
            </h3>
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/60">
              Inspired by 1950s Industrialism
            </p>
          </div>
        </motion.div>

        {/* Right column — two stacked tiles */}
        <div className="md:col-span-4 flex flex-col gap-gutter">
          {/* Aerosteel */}
          <motion.div
            className="h-1/2 group relative overflow-hidden bg-surface-container-low border border-outline/10"
            {...fadeIn}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAViD-3wAmATae5q7KJWFoxzIYo0PITmdIPPk2Q7Ma2-pKoNQEISQj9LPzd_lChI6-Q2DMGXD3mmm9rSIAAggn5uuo73ZRottwKA2ZasNza0j3knCBeAgLm4WE-78LZUMsJDzNLuoMLhV1bMAtuWx6WWmkowcxWCIdP-rzYZhmgwMVgNcBQeIUd-lGI5pZUDh8Rn8ood0FrxoKV6JcIZpD5FrUSyVT9avO3jEj8XT326q8DxZo9Dj0OzC-t29tvnnVN7Dd5WUcr8m0"
              alt="An abstract high-fashion shot of a dark metallic watch bracelet reflecting cool blue light"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="font-headline-md text-[24px] uppercase mb-1 leading-none">
                Aerosteel
              </h3>
              <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/60">
                Aviation Grade
              </p>
            </div>
          </motion.div>

          {/* Skeletal */}
          <motion.div
            className="h-1/2 group relative overflow-hidden bg-surface-container-low border border-outline/10"
            {...fadeIn}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnyhyR9eL8_-p-KMnmdfyIGNJDyYb5_nU0Qmww2L_ocwl7eIWr2ZlKYo2GBWDgElz-6TXLIO0Fbhgt3KTgrJzpw0Ca-lhFJqXzmzXADDgBJczncBJVFUSHT8hvtLcc-mqUhQdNlucMumbiZ-poyjHZHKmpSCi2TaNw8zQZsJXajmC_2xS3XNCuwQSBj5dWJEXR-CSjA_bnPFb4Alzt9_h0zqoy2mUh9N6fQMS5Vji9TXdIRC3TlwLHBLXOBci08p43FZNtjNArMDg"
              alt="A macro detail shot of a watch skeletal movement showcasing complex gears and balance wheels with dramatic shadows"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="font-headline-md text-[24px] uppercase mb-1 leading-none">
                Skeletal
              </h3>
              <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/60">
                Exposed Engineering
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
