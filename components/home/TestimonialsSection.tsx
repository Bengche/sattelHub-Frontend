"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lena Hoffmann",
    role: "Dressurreiterin seit 12 Jahren",
    quote:
      "Der Dressursattel, den ich gekauft habe, hat mein Reiten grundlegend verändert. Die Verarbeitung ist außergewöhnlich: Jede Naht und jedes Sattelblatt zeugen von hoher Qualität. Mein Pferd bewegte sich plötzlich ganz anders.",
    rating: 5,
    location: "Warendorf, Nordrhein-Westfalen",
    initials: "LH",
  },
  {
    name: "Markus Schneider",
    role: "Hofbesitzer seit 25 Jahren",
    quote:
      "Ich habe schon Sättel bei vielen Anbietern gekauft, doch Qualität und Preis-Leistung hier überzeugen mich am meisten. Durch das 30-tägige Probereiten war der Kauf risikofrei. Der Westernsattel passt meinem Quarter Horse und mir perfekt.",
    rating: 5,
    location: "Verden, Niedersachsen",
    initials: "MS",
  },
  {
    name: "Sophie Krüger",
    role: "Springtrainerin",
    quote:
      "Ich habe für eine meiner Schülerinnen einen Springsattel bestellt. Die Abwicklung war unkompliziert, die Kommunikation freundlich und die Lieferung schnell. Der Sattel hat unsere Erwartungen sogar übertroffen.",
    rating: 5,
    location: "Aachen, Nordrhein-Westfalen",
    initials: "SK",
  },
  {
    name: "Thomas Berger",
    role: "Begeisterter Wanderreiter",
    quote:
      "Nach Jahren mit Beschwerden auf langen Ausritten war dieser Wanderreitsattel eine echte Entdeckung. Die Gewichtsverteilung ist sehr angenehm, und ich kann problemlos mehr als acht Stunden reiten. Jeder Euro war gut investiert.",
    rating: 5,
    location: "Freiburg im Breisgau, Baden-Württemberg",
    initials: "TB",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-primary-500 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern
            id="p"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0 20h40M20 0v40" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#p)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-14">
          <p className="text-gold-400 text-sm font-medium tracking-widest uppercase mb-3">
            Stimmen aus dem Sattel
          </p>
          <h2 className="font-serif text-4xl font-bold text-white mb-4">
            Echte Erfahrungen von Reiterinnen und Reitern
          </h2>
          <p className="text-white/65 max-w-lg mx-auto">
            Mehr als tausend Reiterinnen und Reiter vertrauen Sattelhub.de bei
            der Wahl des passenden Sattels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 relative"
            >
              <Quote size={32} className="text-gold-400 mb-5 opacity-80" />
              <p className="text-white/85 text-base leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gold-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-white/55 text-xs">
                    {t.role} — {t.location}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
