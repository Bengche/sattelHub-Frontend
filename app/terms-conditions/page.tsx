import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description:
    "Lesen Sie die Allgemeinen Geschäftsbedingungen von Sattelhub.de für die Nutzung unserer Website und den Kauf von Produkten.",
  alternates: { canonical: "/terms-conditions" },
};

export default function TermsConditionsPage() {
  return (
    <div className="bg-cream-100 min-h-screen py-16">
      <div className="container-custom max-w-3xl">
        <div className="mb-10">
          <h1 className="font-serif text-5xl font-bold text-primary-500 mb-3">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-gray-400 text-sm">
            Zuletzt aktualisiert: 1. Januar 2025
          </p>
        </div>
        <div className="prose-luxury">
          <p>
            Diese Allgemeinen Geschäftsbedingungen ("AGB") regeln Ihre Nutzung
            der Website <strong>{SITE_CONFIG.url}</strong> und den Kauf von
            Produkten bei <strong>{SITE_CONFIG.name}</strong> unter{" "}
            {SITE_CONFIG.address.full}. Durch die Nutzung unserer Website oder
            Aufgabe einer Bestellung stimmen Sie diesen AGB zu.
          </p>

          <h2>1. Voraussetzungen</h2>
          <p>
            Für einen Kauf auf dieser Website müssen Sie mindestens 18 Jahre alt
            sein. Mit der Bestellung bestätigen Sie, dass Sie mindestens 18
            Jahre alt und zum Abschluss eines verbindlichen Vertrags berechtigt
            sind.
          </p>

          <h2>2. Produkte</h2>
          <p>
            Wir behalten uns vor, Mengen zu begrenzen, Produkte einzustellen
            oder Preise jederzeit zu ändern. Produktbeschreibungen und Bilder
            dienen der Information. Wir bemühen uns um eine genaue Darstellung
            von Farben und Details; geringfügige Abweichungen sind möglich.
          </p>

          <h2>3. Pricing</h2>
          <p>
            Alle Preise werden in Euro (EUR) angezeigt und können ohne
            Vorankündigung geändert werden. Anwendbare Steuern werden an der
            Kasse anhand Ihrer Lieferadresse berechnet.
          </p>

          <h2>4. Bestellungen und Zahlungen</h2>
          <p>
            Ihre Bestellung ist ein Angebot zum Kauf. Wir können Bestellungen
            nach eigenem Ermessen ablehnen oder stornieren, etwa bei
            Preisfehlern, Betrugsverdacht oder fehlender Verfügbarkeit. Wird
            eine bezahlte Bestellung storniert, erhalten Sie eine vollständige
            Erstattung.
          </p>
          <p>
            Die Zahlung muss bei der Bestellung vollständig erfolgen. Wir
            akzeptieren gängige Kredit- und Debitkarten, PayPal und Überweisung.
          </p>

          <h2>5. Versand</h2>
          <p>
            Einzelheiten zu Versandarten, Lieferzeiten und Kosten finden Sie in
            unseren <a href="/shipping-policy">Versandinformationen</a>. Das
            Verlustrisiko geht mit der Übergabe an den Versanddienstleister auf
            Sie über.
          </p>

          <h2>6. Rückgabe und Erstattung</h2>
          <p>
            Einzelheiten, einschließlich unseres 30-tägigen Testzeitraums,
            finden Sie in unserer{" "}
            <a href="/returns-refunds">Rückgabe- und Erstattungsrichtlinie</a>.
          </p>

          <h2>7. Geistiges Eigentum</h2>
          <p>
            Alle Inhalte dieser Website, einschließlich Logos, Bilder, Texte und
            Code, sind Eigentum von {SITE_CONFIG.name} oder dessen Lizenzgebern
            und urheberrechtlich geschützt. Ohne schriftliche Genehmigung dürfen
            Sie sie nicht vervielfältigen, verbreiten oder bearbeiten.
          </p>

          <h2>8. Benutzerkonten</h2>
          <p>
            Sie sind für die Geheimhaltung Ihrer Zugangsdaten verantwortlich.
            Einen unbefugten Kontozugriff melden Sie uns unverzüglich. Für
            Schäden aus einer unbefugten Kontonutzung haften wir nicht.
          </p>

          <h2>9. Nutzerinhalte</h2>
          <p>
            Mit dem Einreichen einer Produktbewertung oder anderer Inhalte
            räumen Sie uns ein nicht ausschließliches, gebührenfreies Recht zur
            Nutzung, Anzeige und Vervielfältigung ein. Sie versichern, dass Ihre
            Inhalte keine Rechte Dritter verletzen.
          </p>

          <h2>10. Haftungsausschlüsse</h2>
          <p>
            Unsere Website und Produkte werden "wie besehen" bereitgestellt. Wir
            schließen gesetzlich zulässige ausdrückliche und stillschweigende
            Garantien aus. Sattelpassform und Eignung hängen von Pferd und
            Reiter ab; wir empfehlen die Beratung durch einen qualifizierten
            Sattler.
          </p>

          <h2>11. Haftungsbeschränkung</h2>
          <p>
            Soweit gesetzlich zulässig, haftet {SITE_CONFIG.name} nicht für
            mittelbare, zufällige oder Folgeschäden aus der Nutzung unserer
            Website oder Produkte. Unsere Gesamthaftung ist auf den für das
            betreffende Produkt gezahlten Betrag begrenzt.
          </p>

          <h2>12. Freistellung</h2>
          <p>
            Sie stellen {SITE_CONFIG.name} von Ansprüchen, Schäden und Kosten
            frei, die aus Ihrem Verstoß gegen diese AGB oder Ihrer Nutzung
            unserer Website entstehen.
          </p>

          <h2>13. Anwendbares Recht</h2>
          <p>
            Diese AGB unterliegen dem Recht von England und Wales.
            Streitigkeiten werden, soweit zulässig, vor den zuständigen
            Gerichten in London, Vereinigtes Königreich, entschieden.
          </p>

          <h2>14. Änderungen dieser AGB</h2>
          <p>
            Wir können diese AGB jederzeit aktualisieren. Änderungen werden mit
            einem aktualisierten Datum auf dieser Seite veröffentlicht. Die
            weitere Nutzung unserer Website gilt als Zustimmung.
          </p>

          <h2>15. Kontakt</h2>
          <p>
            <strong>{SITE_CONFIG.name}</strong>
            <br />
            {SITE_CONFIG.address.full}
            <br />
            <a href={`mailto:${SITE_CONFIG.email.support}`}>
              {SITE_CONFIG.email.support}
            </a>
            <br />
            <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
