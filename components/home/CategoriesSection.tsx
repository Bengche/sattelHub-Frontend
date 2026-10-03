"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Dressursättel",
    href: "/products?category=dressursaettel",
    image: "/dressage.webp",
    desc: "Präzision für anspruchsvolle Dressur",
  },
  {
    name: "Springsättel",
    href: "/products?category=springsaettel",
    image: "/springsattel.png",
    desc: "Freiheit und Sicherheit über dem Sprung",
  },
  {
    name: "Wanderreitsättel",
    href: "/products?category=wanderreitsaettel",
    image: "/wandersattel.jpg",
    desc: "Für lange Ausritte und Abenteuer",
  },
  {
    name: "Barocksättel",
    href: "/products?category=barocksaettel",
    image: "/baroque%20saddle.jpg",
    desc: "Klassischer Sitz für barocke Pferde und Dressur",
  },
  {
    name: "Vielseitigkeitssättel",
    href: "/products?category=vielseitigkeitssaettel",
    image: "/all%20purpose.webp",
    desc: "Flexibilität für verschiedene Reitweisen",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
};

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">
            Sattelarten
          </p>
          <h2 className="section-heading section-heading-center font-bold text-primary-500 inline-block pb-4">
            Nach Kategorie einkaufen
          </h2>
          <p className="text-gray-500 mt-6 max-w-xl mx-auto text-base leading-relaxed">
            Entdecken Sie den passenden Sattel für Ihren Bedarf und Ihre
            Reitweise.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {categories.map((cat) => (
            <motion.div key={cat.href} variants={item}>
              <Link
                href={cat.href}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#e8e0d4] bg-white transition-all duration-300 hover:border-[#c4a862] hover:shadow-[0_12px_30px_rgba(28,53,87,0.10)]"
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-cream-200">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
                <div className="flex min-h-[104px] flex-1 items-center justify-between gap-3 border-t border-[#e8e0d4] bg-[#fbf8f1] px-3 py-3 sm:px-4 md:px-5">
                  <div className="min-w-0">
                    <h3 className="line-clamp-2 font-serif text-base font-semibold leading-tight text-primary-900 sm:text-lg md:text-xl">
                      {cat.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-snug text-gray-600 sm:text-sm">
                      {cat.desc}
                    </p>
                  </div>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#d8c89b] text-primary-700 transition-all duration-300 group-hover:border-primary-700 group-hover:bg-primary-700 group-hover:text-white">
                    <ArrowRight size={15} strokeWidth={1.7} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
