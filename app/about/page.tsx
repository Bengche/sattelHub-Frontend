import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Award,
  Users,
  Heart,
  Leaf,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Erfahren Sie mehr über Sattelhub.de, unsere Leidenschaft für den Reitsport und unser Engagement für hochwertige Reitsättel.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Award,
    title: "Qualität an erster Stelle",
    desc: "Jeder Sattel wird sorgfältig ausgewählt und geprüft. Wir führen nur Produkte, die wir selbst verwenden würden.",
  },
  {
    icon: Heart,
    title: "Im Mittelpunkt stehen die Reiter",
    desc: "Unser 30-tägiger Testzeitraum gibt Ihnen die Sicherheit, die Sie vor dem Kauf brauchen.",
  },
  {
    icon: Users,
    title: "Fachkundige Beratung",
    desc: "Unser Team besteht aus aktiven Reitern, nicht nur aus Verkäufern. Echte Beratung von echten Reitern.",
  },
  {
    icon: Leaf,
    title: "Nachhaltige Materialien",
    desc: "Wir bevorzugen Hersteller, die verantwortungsvoll gewonnenes Leder und traditionelle Handwerkskunst verwenden.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cream-100">
      {/* Hero */}
      <div className="relative bg-primary-900 py-24 md:py-32 overflow-hidden">
        <Image
          src="https://hilason.com/cdn/shop/files/108682-z_d1ce9c8d-682a-43cb-b10b-a9f1206d9162_grande.jpg?v=1762666209"
          alt="Reitsport"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/40" />
        <div className="container-custom relative z-10">
          <p className="text-gold-400 text-sm font-medium tracking-widest uppercase mb-4">
            Unsere Geschichte
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white max-w-2xl leading-tight mb-6">
            Von Reitern für Reiter entwickelt
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Sattelhub.de entstand aus einer einfachen Erkenntnis: Einen guten
            Sattel online zu finden, sollte kein Vertrauenssprung sein.
          </p>
        </div>
      </div>

      {/* Who we are */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-4">
                Wer wir sind
              </p>
              <h2 className="font-serif text-4xl font-bold text-primary-500 mb-6 leading-snug">
                Der Maßstab für den Online-Sattelkauf
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sattelhub.de wurde von langjährigen Reitern gegründet, die
                  unzureichende Einkaufserlebnisse satt hatten. Wir verbinden
                  unsere Leidenschaft für Pferde mit umfassender Produktkenntnis
                  und schaffen so einen Marktplatz für Integrität und Qualität.
                </p>
                <p>
                  Wir wählen jeden Sattel sorgfältig aus, prüfen Passform und
                  Materialien persönlich und stehen mit unserem 30-tägigen
                  Testzeitraum hinter jedem Produkt. Keine leeren Versprechen,
                  sondern ehrliche Sättel und ehrlicher Service.
                </p>
                <p>
                  Vom ersten Westernsattel bis zum 500. verkauften Dressursattel
                  hat sich eines nie geändert: Wir behandeln jeden Kunden wie
                  einen Mitreiter, denn genau das sind unsere Kunden.
                </p>
              </div>
              <div className="flex gap-6 mt-8">
                <div>
                  <p className="font-serif text-4xl font-bold text-primary-500">
                    500<span className="text-gold-400">+</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Sättel auf Lager</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-bold text-primary-500">
                    1,200<span className="text-gold-400">+</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Zufriedene Reiter
                  </p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-bold text-primary-500">
                    30
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Tage kostenlos testen
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury-lg">
                <Image
                  src="https://i.ebayimg.com/images/g/B5YAAOSwSTBkE2XH/s-l400.jpg"
                  alt="Hochwertige Sattelanfertigung"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-gold-400 text-white rounded-2xl p-5 shadow-gold">
                <p className="font-serif text-2xl font-bold">98%</p>
                <p className="text-sm text-white/80 mt-1">
                  Zufriedenheitsquote
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">
              Wofür wir stehen
            </p>
            <h2 className="font-serif text-4xl font-bold text-primary-500">
              Unsere Werte
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="text-center p-7 rounded-2xl bg-cream-100 hover:shadow-card transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <v.icon size={24} className="text-primary-500" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address / contact */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-primary-500 rounded-3xl p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white mb-4">
                  Besuchen oder kontaktieren Sie uns
                </h2>
                <p className="text-white/70 mb-8">
                  Wir sprechen gerne über Sättel. Kontaktieren Sie uns
                  jederzeit.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/80">
                    <MapPin
                      size={18}
                      className="mt-0.5 text-gold-400 flex-shrink-0"
                    />
                    <span>{SITE_CONFIG.address.full}</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Phone size={18} className="text-gold-400" />
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="hover:text-white"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Mail size={18} className="text-gold-400" />
                    <a
                      href={`mailto:${SITE_CONFIG.email.support}`}
                      className="hover:text-white"
                    >
                      {SITE_CONFIG.email.support}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <MessageSquare size={18} className="text-gold-400" />
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      WhatsApp: {SITE_CONFIG.whatsapp}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="btn-gold py-4 text-center text-base"
                >
                  Nachricht senden
                </Link>
                <Link
                  href="/products"
                  className="btn-outline text-white border-white/30 hover:bg-white/10 py-4 text-center text-base"
                >
                  Sättel entdecken
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
