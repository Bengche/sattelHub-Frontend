"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Spinner from "@/components/ui/Spinner";
import Link from "next/link";
import { CheckCircle, Package, Mail, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");

  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full">
        {/* Success card */}
        <div className="bg-white rounded-3xl shadow-card p-10 text-center mb-6">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-500" />
          </div>

          <h1 className="font-serif text-3xl font-bold text-primary-500 mb-3">
            Bestellung erfolgreich aufgegeben
          </h1>

          <p className="text-gray-600 leading-relaxed mb-3">
            Vielen Dank für Ihre Bestellung. Eine Bestätigung wurde an Ihre
            E-Mail-Adresse gesendet.
          </p>

          {orderNumber && (
            <p className="text-sm font-medium text-primary-400 bg-cream-100 rounded-lg px-4 py-2 inline-block mb-6">
              Bestellung #{orderNumber}
            </p>
          )}

          <div className="flex flex-col gap-3">
            <Link href="/account/orders" className="btn-primary">
              Bestellung verfolgen
            </Link>
            <Link href="/products" className="btn-secondary">
              Weiter einkaufen
            </Link>
          </div>
        </div>

        {/* What happens next */}
        <div className="bg-white rounded-2xl shadow-card p-6">
          <h2 className="font-serif text-lg font-semibold text-primary-500 mb-4">
            Wie geht es weiter?
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold font-serif">
                1
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Bestellprüfung und Zahlungsbestätigung
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Unser Team kontaktiert Sie innerhalb von 24 Stunden, um die
                  Zahlungsdetails zu bestätigen und Fragen zu beantworten.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold font-serif">
                2
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Prüfung und Versand
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Nach Bestätigung der Zahlung wird Ihr Sattel sorgfältig
                  geprüft und mit Sendungsverfolgung versendet.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-gold-400 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold font-serif">
                3
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  30-tägiger Testzeitraum beginnt bei Lieferung
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Reiten Sie damit und prüfen Sie die Passform. Wenn er nicht
                  passt, erstatten wir den Kaufpreis oder tauschen ihn um.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-3">
              Haben Sie eine Frage? Wir helfen Ihnen gerne.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${SITE_CONFIG.contact.salesEmail}`}
                className="flex items-center justify-center gap-2 text-sm text-primary-500 hover:text-primary-600 font-medium"
              >
                <Mail size={15} />
                {SITE_CONFIG.contact.salesEmail}
              </a>
              <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="flex items-center justify-center gap-2 text-sm text-primary-500 hover:text-primary-600 font-medium"
              >
                <Phone size={15} />
                {SITE_CONFIG.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-cream-100 flex items-center justify-center">
          <Spinner size="md" className="text-primary-500" />
        </div>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}
