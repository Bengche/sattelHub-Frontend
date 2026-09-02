import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { Shield, Repeat, Truck, Star, UserCheck, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Warum Sattelhub.de",
  description:
    "Entdecken Sie, warum tausende Reiter Sattelhub.de vertrauen: hochwertige Reitsättel, 30 Tage kostenlos testen, fachkundige Auswahl und persönlicher Service.",
  alternates: { canonical: "/why-us" },
};

const pillars = [
  {
    icon: Shield,
    title: "30 Tage kostenlos testen",
    desc: `Wir sind der einzige Sattelhandel mit einem echten 30-tägigen Testzeitraum für jeden Kauf. Reiten Sie zu Hause, im Stall oder im Gelände. Passt der Sattel nicht perfekt, geben Sie ihn kostenlos zurück.`,
    stat: "30 Tage",
    statLabel: "risikofreier Test",
  },
  {
    icon: Award,
    title: "Fachkundige Auswahl",
    desc: "Jeder Sattel unserer Kollektion wird von erfahrenen Reitern geprüft. Wir listen nicht jeden angebotenen Sattel, sondern nur die, in denen wir selbst reiten würden. Qualität statt Quantität.",
    stat: "500+",
    statLabel: "ausgewählte Sättel",
  },
  {
    icon: Truck,
    title: `Kostenloser Versand ab ${SITE_CONFIG.shipping.freeShippingThreshold} EUR`,
    desc: `Hochwertige Sättel verdienen einen erstklassigen Versand. Bestellungen ab ${SITE_CONFIG.shipping.freeShippingThreshold} EUR werden kostenlos versendet. Expressversand ist verfügbar; jede Sendung ist versichert und wird verfolgt.`,
    stat: "Kostenlos",
    statLabel: `ab ${SITE_CONFIG.shipping.freeShippingThreshold} EUR`,
  },
  {
    icon: Repeat,
    title: "Unkomplizierte Rückgabe",
    desc: "Ihre Meinung geändert oder passt der Sattel nicht? Kontaktieren Sie uns während des Testzeitraums. Wir senden Ihnen noch am selben Tag ein frankiertes Rücksendeetikett. Keine Wiedereinlagerungsgebühren.",
    stat: "100%",
    statLabel: "kostenlose Rückgabe",
  },
  {
    icon: UserCheck,
    title: "Echte Fachberatung",
    desc: `Unser Kundenservice besteht aus aktiven Reitern, nicht aus Callcenter-Mitarbeitern mit Skripten. Bei Fragen zu Kammerweite oder Pauschen erhalten Sie eine echte Antwort von einem Reiter. Sie erreichen uns unter ${SITE_CONFIG.phone} oder per WhatsApp unter ${SITE_CONFIG.whatsapp}.`,
    stat: "< 24h",
    statLabel: "Antwortzeit",
  },
  {
    icon: Star,
    title: "98% Zufriedenheit",
    desc: "Über 1.200 Reiter haben bei uns ihren perfekten Sattel gefunden. Unsere Zufriedenheitsquote ist keine Marketingzahl, sondern das Ergebnis sorgfältiger Auswahl, eines fairen Testzeitraums und eines engagierten Teams.",
    stat: "98%",
    statLabel: "Zufriedenheitsquote",
  },
];

const comparisons = [
  { label: "30 Tage kostenlos testen", us: true, others: false },
  { label: "Fachberatung im Reitsport", us: true, others: false },
  {
    label: `Kostenloser Versand ab ${SITE_CONFIG.shipping.freeShippingThreshold} EUR`,
    us: true,
    others: false,
  },
  { label: "Keine Wiedereinlagerungsgebühren", us: true, others: false },
  { label: "Ausgewählte, geprüfte Sättel", us: true, others: false },
  { label: "Rücksendeetikett am selben Tag", us: true, others: false },
];

export default function WhyUsPage() {
  return (
    <div className="bg-cream-100">
      {/* Hero */}
      <div className="relative bg-primary-900 py-28 overflow-hidden">
        <Image
          src="https://i.ebayimg.com/images/g/3jkAAOSwYQ9j4AgD/s-l1200.jpg"
          alt="Reiten im Reitsport"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-primary-900/50" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-gold-400 text-sm font-medium tracking-widest uppercase mb-4">
            Der Unterschied von Sattelhub.de
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Warum tausende Reiter uns wählen
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Wir haben das Einkaufserlebnis für Sättel geschaffen, das wir uns
            immer gewünscht haben: transparent, risikofrei und von echten
            Reitern getragen.
          </p>
        </div>
      </div>

      {/* Pillars */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl shadow-card p-8 hover:shadow-luxury transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-5">
                  <pillar.icon size={26} className="text-primary-500" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-500 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-5">
                  {pillar.desc}
                </p>
                <div className="border-t border-cream-200 pt-4 flex items-end gap-2">
                  <span className="font-serif text-3xl font-bold text-gold-500">
                    {pillar.stat}
                  </span>
                  <span className="text-xs text-gray-400 mb-1">
                    {pillar.statLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="font-serif text-4xl font-bold text-primary-500 text-center mb-2">
            Unser Vergleich
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Sattelhub.de im Vergleich zu gewöhnlichen Online-Sattelshops
          </p>
          <div className="rounded-2xl border border-gray-100 shadow-card overflow-hidden">
            <div className="grid grid-cols-3 bg-primary-500 text-white px-6 py-3 text-sm font-medium">
              <span>Leistung</span>
              <span className="text-center">Sattelhub.de</span>
              <span className="text-center">Andere</span>
            </div>
            {comparisons.map((row, idx) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 px-6 py-4 text-sm items-center ${idx % 2 === 0 ? "bg-cream-50" : "bg-white"}`}
              >
                <span className="text-gray-700">{row.label}</span>
                <span className="text-center text-green-600 font-bold text-lg">
                  {row.us ? "✓" : "✗"}
                </span>
                <span
                  className={`text-center font-bold text-lg ${row.others ? "text-green-600" : "text-red-400"}`}
                >
                  {row.others ? "✓" : "✗"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl font-bold text-primary-500 mb-4">
            Bereit für Ihren perfekten Sattel?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Entdecken Sie über{" "}
            {
              require("@/lib/siteConfig").SITE_CONFIG.shipping
                .freeShippingThreshold
            }
            + Sättel - alle mit 30-tägigem Testzeitraum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-gold px-10 py-4 text-base">
              Sättel entdecken
            </Link>
            <Link
              href="/contact"
              className="btn-secondary px-10 py-4 text-base"
            >
              Mit einem Experten sprechen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
