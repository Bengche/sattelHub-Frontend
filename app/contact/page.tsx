import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { MapPin, Phone, Mail, MessageSquare, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktieren Sie Sattelhub.de. Wir helfen Ihnen bei Sattelwahl, Bestellungen und Rückgaben. Sie erreichen uns unter ${SITE_CONFIG.phone} oder ${SITE_CONFIG.email.support}.`,
  alternates: { canonical: "/contact" },
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: SITE_CONFIG.address.full,
    href: undefined,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: SITE_CONFIG.email.support,
    href: `mailto:${SITE_CONFIG.email.support}`,
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: SITE_CONFIG.whatsapp,
    href: `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}`,
  },
  {
    icon: Clock,
    label: "Öffnungszeiten",
    value: "Mo-Fr, 9:00-18:00 Uhr",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-cream-100 min-h-screen">
      {/* Hero */}
      <div className="bg-primary-800 py-20 text-center">
        <p className="text-gold-400 text-sm font-medium tracking-widest uppercase mb-3">
          Kontakt aufnehmen
        </p>
        <h1 className="font-serif text-5xl font-bold text-white mb-4">
          Kontakt
        </h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          Unser Team aus Reitsport-Experten hilft Ihnen gerne, den passenden
          Sattel zu finden.
        </p>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form first */}
          <div className="lg:col-span-3 order-1 lg:order-none">
            <ContactClient />
          </div>
          {/* Contact info */}
          <div className="lg:col-span-2 order-2 lg:order-none">
            <h2 className="font-serif text-2xl font-bold text-primary-500 mb-6">
              Unsere Kontaktdaten
            </h2>
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-primary-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-primary-500 rounded-2xl p-6 text-white">
              <h3 className="font-serif text-lg font-semibold mb-2">
                30 Tage kostenlos testen
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Jeder Sattel kann 30 Tage kostenlos getestet werden. Reiten Sie
                ihn, prüfen Sie ihn und geben Sie ihn bei Bedarf unkompliziert zurück.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
