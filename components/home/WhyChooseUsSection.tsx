"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  RotateCcw,
  Truck,
  Award,
  MessageSquare,
  Zap,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Shield,
    title: "30 Tage kostenlos testen",
    description:
      "Reiten Sie 30 Tage mit Ihrem neuen Sattel. Wenn er nicht zu Ihnen oder Ihrem Pferd passt, erhalten Sie eine vollständige Erstattung.",
    color: "text-primary-500",
    bg: "bg-primary-50",
  },
  {
    icon: Award,
    title: "Fachkundige Auswahl",
    description:
      "Jeder Sattel wird von erfahrenen Reitsportlern ausgewählt. Wir führen nur Produkte, die wir selbst verwenden würden.",
    color: "text-gold-500",
    bg: "bg-gold-50",
  },
  {
    icon: Truck,
    title: `Kostenloser Versand ab ${require("@/lib/siteConfig").SITE_CONFIG.shipping.freeShippingThreshold} EUR`,
    description: `Bestellungen ab ${require("@/lib/siteConfig").SITE_CONFIG.shipping.freeShippingThreshold} EUR werden innerhalb Deutschlands kostenlos versendet. Expressversand ist an der Kasse verfügbar.`,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: RotateCcw,
    title: "Unkomplizierte Rückgabe",
    description:
      "Unser Rückgabeprozess ist einfach und reiterfreundlich. Wir wissen, dass Sattelpassform komplex sein kann, und machen Rückgaben unkompliziert.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: MessageSquare,
    title: "Fachkundige Sattelberatung",
    description:
      "Nicht sicher, welcher Sattel passt? Unsere Reitsport-Experten beraten Sie telefonisch und per Chat.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Zap,
    title: "Schneller, sicherer Kauf",
    description:
      "Mehrere Zahlungsmöglichkeiten, SSL-verschlüsselte Kasse und Sendungsverfolgung in Echtzeit bis zu Ihrem Stall.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-cream-100">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">
            Warum Sattelhub.de
          </p>
          <h2 className="section-heading section-heading-center font-bold text-primary-500 inline-block pb-4">
            Der Standard im Reitsport
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-base leading-relaxed">
            Unser Unternehmen basiert auf einem einfachen Grundsatz: Reiter
            verdienen ein ebenso hochwertiges Einkaufserlebnis wie der Sport selbst.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
            >
              <div
                className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon size={22} className={feature.color} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats banner */}
        <div className="bg-primary-500 rounded-3xl p-10 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "1.200+", label: "Zufriedene Reiter", sub: "und mehr" },
              {
                value: "500+",
                label: "Sättel auf Lager",
                sub: "alle Disziplinen",
              },
              { value: "30 Tage", label: "Kostenlos testen", sub: "ohne Risiko" },
              {
                value: "98%",
                label: "Zufriedenheitsquote",
                sub: "von bestätigten Käufern",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="text-center"
              >
                <p className="font-serif text-4xl md:text-5xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-white font-semibold text-sm mb-1">
                  {stat.label}
                </p>
                <p className="text-white/50 text-xs">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/why-us" className="btn-secondary px-8 py-3">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
