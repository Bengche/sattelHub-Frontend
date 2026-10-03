"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Send, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";
import api, { getErrorMessage } from "@/lib/api";

const footerLinks = {
  Sortiment: [
    { label: "Alle Sättel", href: "/products" },
    { label: "Dressursättel", href: "/products?category=dressursaettel" },
    { label: "Springsättel", href: "/products?category=springsaettel" },
    { label: "Barocksättel", href: "/products?category=barocksaettel" },
    { label: "Wanderreitsättel", href: "/products?category=wanderreitsaettel" },
    {
      label: "Vielseitigkeitssättel",
      href: "/products?category=vielseitigkeitssaettel",
    },
  ],
  Unternehmen: [
    { label: "Über uns", href: "/about" },
    { label: "Warum wir", href: "/why-us" },
    { label: "Ratgeber", href: "/blog" },
    { label: "Kontakt", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  Service: [
    { label: "Versand", href: "/shipping-policy" },
    { label: "Rückgabe und Erstattung", href: "/returns-refunds" },
    { label: "Datenschutz", href: "/privacy-policy" },
    { label: "AGB", href: "/terms-conditions" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [subMessage, setSubMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubStatus("loading");
    try {
      await api.post("/newsletter/subscribe", { email });
      setSubStatus("success");
      setSubMessage(
        "Vielen Dank! Bitte bestätigen Sie Ihre Anmeldung über den Link in Ihrem Postfach.",
      );
      setEmail("");
    } catch (err) {
      setSubStatus("error");
      setSubMessage(getErrorMessage(err));
    }
  };

  return (
    <footer className="bg-primary-900 text-white">
      {/* Newsletter band */}
      <div className="bg-primary-800 border-b border-white/10">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                Newsletter abonnieren
              </h3>
              <p className="text-white/70 text-sm">
                Tipps zur Sattelpflege, Neuheiten und exklusive Angebote direkt
                in Ihr Postfach.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 w-full md:flex-row md:w-auto md:min-w-[400px]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ihre E-Mail-Adresse"
                disabled={subStatus === "loading" || subStatus === "success"}
                className="w-full md:flex-1 px-5 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold-400 focus:bg-white/15 transition-all text-sm"
                required
              />
              <button
                type="submit"
                disabled={subStatus === "loading" || subStatus === "success"}
                className="w-full md:w-auto px-6 py-3 bg-gold-400 hover:bg-gold-500 text-white font-medium text-sm rounded-lg transition-colors flex items-center gap-2 disabled:opacity-60"
              >
                <Send size={16} />
                {subStatus === "loading" ? "Wird gesendet ..." : "Abonnieren"}
              </button>
            </form>
          </div>
          {subMessage && (
            <p
              className={`mt-4 text-sm text-center md:text-left ${subStatus === "success" ? "text-green-300" : "text-red-300"}`}
            >
              {subMessage}
            </p>
          )}
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="block mb-6">
              <Image
                src="/logo-white.svg"
                alt="Sattelhub.de"
                width={200}
                height={54}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Ihre Adresse für hochwertige Reitsättel. Wir verbinden
              traditionelles Handwerk mit Leidenschaft für den Reitsport.
            </p>

            {/* Contact Info */}
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-gold-400"
                />
                <span>{SITE_CONFIG.address.full}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail size={16} className="flex-shrink-0 text-gold-400" />
                <a
                  href={`mailto:${SITE_CONFIG.email.support}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email.support}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      <ChevronRight
                        size={13}
                        className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-gold-400"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="gold-divider opacity-20 my-10" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="hover:text-white/70 transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/terms-conditions"
              className="hover:text-white/70 transition-colors"
            >
              AGB
            </Link>
            <Link
              href="/returns-refunds"
              className="hover:text-white/70 transition-colors"
            >
              Rückgabe
            </Link>
          </div>
          <p className="text-white/30 text-xs">
            30 Tage kostenlos testen - bei jedem Sattel
          </p>
        </div>
      </div>
    </footer>
  );
}
