import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Rückgabe und Erstattung",
  description: `Erfahren Sie mehr über den 30-tägigen Testzeitraum und die unkomplizierte Rückgabe bei Sattelhub.de. Volle Erstattung ohne Wiedereinlagerungsgebühr.`,
  alternates: { canonical: "/returns-refunds" },
};

export default function ReturnsRefundsPage() {
  return (
    <div className="bg-cream-100 min-h-screen py-16">
      <div className="container-custom max-w-3xl">
        <div className="mb-10">
          <h1 className="font-serif text-5xl font-bold text-primary-500 mb-3">
            Rückgabe und Erstattung
          </h1>
          <p className="text-gray-400 text-sm">
            Zuletzt aktualisiert: 1. Januar 2025
          </p>
        </div>
        <div className="bg-gold-50 border border-gold-200 rounded-2xl p-6 mb-10">
          <p className="font-serif text-xl font-semibold text-primary-500 mb-2">
            Unser Versprechen: 30 Tage kostenlos testen
          </p>
          <p className="text-gray-700 leading-relaxed">
            Jeder bei Sattelhub.de gekaufte Sattel kann{" "}
            <strong>30 Tage kostenlos getestet</strong> werden. Wenn Sie aus
            irgendeinem Grund nicht vollständig zufrieden sind, geben Sie ihn
            für eine
            <strong>vollständige Erstattung</strong> zurück - ohne Fragen und
            ohne Wiedereinlagerungsgebühr.
          </p>
        </div>

        <div className="prose-luxury">
          <h2>Testzeitraum</h2>
          <p>
            Ihr 30-tägiger Testzeitraum beginnt am vom Versanddienstleister
            bestätigten <strong>Lieferdatum</strong>. Sie haben 30 volle
            Kalendertage, um den Sattel auszuprobieren und sich zu entscheiden.
          </p>

          <h2>Was kann zurückgegeben werden?</h2>
          <p>
            Jeder bei Sattelhub.de gekaufte Sattel kann innerhalb des 30-tägigen
            Testzeitraums zurückgegeben werden, einschließlich:
          </p>
          <ul>
            <li>Neue Sättel</li>
            <li>
              Gebrauchte Sättel, die auf unserer Plattform angeboten werden
            </li>
            <li>
              Sättel mit normalen Gebrauchsspuren vom Testen, etwa leichten
              Schweißspuren oder Sattelseifenrückständen
            </li>
          </ul>
          <p>
            <strong>Nicht zur Rückgabe zugelassen:</strong>
          </p>
          <ul>
            <li>
              Maßgefertigte oder individuell angefertigte Sättel, außer bei
              Mängeln
            </li>
            <li>Durch unsachgemäße Nutzung strukturell beschädigte Sättel</li>
            <li>
              Benutztes Zubehör, Sattelunterlagen oder Verbrauchsmaterialien
            </li>
          </ul>

          <h2>So leiten Sie eine Rückgabe ein</h2>
          <ol>
            <li>
              Melden Sie sich an und öffnen Sie{" "}
              <strong>Meine Bestellungen</strong>.
            </li>
            <li>
              Klicken Sie bei der gewünschten Bestellung auf
              <strong>Rückgabe anfordern</strong>.
            </li>
            <li>
              Wählen Sie einen Grund aus, falls gewünscht. Während des
              Testzeitraums werden alle Gründe akzeptiert.
            </li>
            <li>
              Wir senden Ihnen innerhalb eines Werktags ein
              <strong>frankiertes Rücksendeetikett</strong> per E-Mail.
            </li>
            <li>
              Verpacken Sie den Sattel sicher und geben Sie ihn bei einem
              autorisierten Versanddienstleister ab.
            </li>
          </ol>
          <p>
            Alternativ schreiben Sie an{" "}
            <a href={`mailto:${SITE_CONFIG.email.support}`}>
              {SITE_CONFIG.email.support}
            </a>{" "}
            mit Ihrer Bestellnummer. Wir kümmern uns um alles Weitere.
          </p>

          <h2>Bearbeitung der Erstattung</h2>
          <p>
            Sobald wir Ihre Rückgabe erhalten und geprüft haben, in der Regel
            innerhalb von zwei Werktagen, veranlassen wir die Erstattung. Diese
            wird über Ihre <strong>ursprüngliche Zahlungsmethode</strong>
            ausgezahlt und erscheint je nach Bank innerhalb von
            <strong>3-5 Werktagen</strong> auf Ihrem Konto.
          </p>

          <h2>Umtausch</h2>
          <p>
            Möchten Sie Ihren Sattel gegen ein anderes Modell tauschen?
            Kontaktieren Sie uns unter{" "}
            <a href={`mailto:${SITE_CONFIG.email.support}`}>
              {SITE_CONFIG.email.support}
            </a>{" "}
            or call <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a>{" "}
            innerhalb Ihres 30-tägigen Testzeitraums. Wir organisieren den
            Umtausch ohne zusätzliche Versandkosten.
          </p>

          <h2>Beschädigte oder fehlerhafte Artikel</h2>
          <p>
            Wenn Ihr Sattel beschädigt ankommt oder einen Herstellungsfehler
            aufweist, kontaktieren Sie uns innerhalb von{" "}
            <strong>48 Stunden nach der Lieferung</strong> mit Fotos. Wir
            organisieren kostenlos Ersatz oder eine vollständige Erstattung, bei
            Bedarf auch außerhalb des regulären Testzeitraums.
          </p>

          <h2>Kontakt</h2>
          <p>
            Fragen? Wir helfen Ihnen gerne.
            <br />
            Email:{" "}
            <a href={`mailto:${SITE_CONFIG.email.support}`}>
              {SITE_CONFIG.email.support}
            </a>
            <br />
            Telefon:{" "}
            <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a>
            <br />
            WhatsApp:{" "}
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE_CONFIG.whatsapp}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
