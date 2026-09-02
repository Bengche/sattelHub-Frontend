import type { Metadata } from "next";
import { SITE_CONFIG, formatPrice } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Versandinformationen",
  description: `Versandinformationen von Sattelhub.de: kostenloser Versand ab ${SITE_CONFIG.shipping.freeShippingThreshold} EUR sowie Standard- und Expressversand mit Sendungsverfolgung.`,
  alternates: { canonical: "/shipping-policy" },
};

export default function ShippingPolicyPage() {
  return (
    <div className="bg-cream-100 min-h-screen py-16">
      <div className="container-custom max-w-3xl">
        <div className="mb-10">
          <h1 className="font-serif text-5xl font-bold text-primary-500 mb-3">
            Versandinformationen
          </h1>
          <p className="text-gray-400 text-sm">
            Zuletzt aktualisiert: 1. Januar 2025
          </p>
        </div>

        {/* Shipping options summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white rounded-2xl shadow-card p-5 text-center">
            <p className="font-serif text-2xl font-bold text-green-600 mb-1">
              KOSTENLOS
            </p>
            <p className="text-sm font-medium text-gray-900">
              Kostenloser Versand
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Bestellungen ab{" "}
              {formatPrice(SITE_CONFIG.shipping.freeShippingThreshold)}
            </p>
            <p className="text-xs text-gray-400">3-5 Werktage</p>
          </div>
          <div className="bg-white rounded-2xl shadow-card p-5 text-center">
            <p className="font-serif text-2xl font-bold text-primary-500 mb-1">
              {formatPrice(SITE_CONFIG.shipping.standardRate)}
            </p>
            <p className="text-sm font-medium text-gray-900">Standardversand</p>
            <p className="text-xs text-gray-400 mt-1">3-5 Werktage</p>
          </div>
          <div className="bg-white rounded-2xl shadow-card p-5 text-center">
            <p className="font-serif text-2xl font-bold text-gold-500 mb-1">
              {formatPrice(SITE_CONFIG.shipping.expressRate)}
            </p>
            <p className="text-sm font-medium text-gray-900">Expressversand</p>
            <p className="text-xs text-gray-400 mt-1">1-3 Werktage</p>
          </div>
        </div>

        <div className="prose-luxury">
          <p className="text-xs text-gray-400 mt-1">
            Bestellungen ab{" "}
            {formatPrice(SITE_CONFIG.shipping.freeShippingThreshold)}
          </p>
          <p>
            <strong>
              Ab {formatPrice(SITE_CONFIG.shipping.freeShippingThreshold)}
            </strong>{" "}
            erhalten Sie innerhalb Deutschlands kostenlosen Standardversand. Die
            kostenlose Versandoption wird an der Kasse automatisch angewendet.
          </p>

          <h2>
            Standardversand - {formatPrice(SITE_CONFIG.shipping.standardRate)}
          </h2>
          <p>
            Lieferung innerhalb von <strong>3-5 Werktagen</strong> nach
            Bearbeitung der Bestellung. Werktage sind Montag bis Freitag,
            ausgenommen gesetzliche Feiertage. Der Standardversand gilt für
            Bestellungen unter{" "}
            {formatPrice(SITE_CONFIG.shipping.freeShippingThreshold)}.
          </p>

          <h2>
            Expressversand - {formatPrice(SITE_CONFIG.shipping.expressRate)}
          </h2>
          <p>
            Lieferung innerhalb von <strong>1-3 Werktagen</strong> nach
            Bearbeitung der Bestellung. Expressbestellungen, die an Werktagen
            vor 14 Uhr eingehen, werden in der Regel noch am selben Tag
            bearbeitet.
          </p>

          <h2>Bearbeitungszeit</h2>
          <p>
            Bestellungen werden in der Regel innerhalb von{" "}
            <strong>einem Werktag</strong> bearbeitet. Sobald Ihre Bestellung
            versendet wurde, erhalten Sie eine E-Mail mit der Sendungsnummer.
          </p>

          <h2>Sendungsverfolgung</h2>
          <p>
            Jede Sendung ist vollständig nachverfolgbar. Ihre Sendungsnummer
            wird Ihnen beim Versand per E-Mail zugesandt. Sie können die Nummer
            nach der Anmeldung auch im Bereich{" "}
            <strong>Meine Bestellungen</strong> einsehen.
          </p>

          <h2>Versicherung</h2>
          <p>
            Alle Sendungen sind vollständig versichert. Sollte Ihr Sattel auf
            dem Versandweg verloren gehen oder beschädigt werden, melden wir den
            Schaden für Sie und senden Ersatz oder erstatten den Kaufpreis.
          </p>

          <h2>Lieferadresse</h2>
          <p>
            Bitte prüfen Sie Ihre Lieferadresse vor dem Absenden der Bestellung.
            Für Bestellungen an eine an der Kasse falsch angegebene Adresse
            übernehmen wir keine Verantwortung. Wenn Sie die Lieferadresse nach
            der Bestellung ändern müssen, kontaktieren Sie uns sofort unter{" "}
            <a href={`mailto:${SITE_CONFIG.email.support}`}>
              {SITE_CONFIG.email.support}
            </a>{" "}
            - in der Regel können wir die Adresse ändern, solange die Bestellung
            noch nicht versendet wurde.
          </p>

          <h2>Internationaler Versand</h2>
          <p>
            Derzeit versenden wir innerhalb Deutschlands. Der internationale
            Versand wird erweitert. Abonnieren Sie unseren Newsletter, um
            informiert zu werden.
          </p>

          <h2>Versanddienstleister</h2>
          <p>
            Je nach Lieferort und gewählter Versandart nutzen wir vor allem UPS,
            FedEx und lokale Versanddienstleister.
          </p>

          <h2>Kontakt</h2>
          <p>
            Fragen zum Versand? Kontaktieren Sie uns unter{" "}
            <a href={`mailto:${SITE_CONFIG.email.support}`}>
              {SITE_CONFIG.email.support}
            </a>{" "}
            oder rufen Sie uns unter{" "}
            <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
