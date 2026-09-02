import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Erfahren Sie, wie Sattelhub.de Ihre personenbezogenen Daten erhebt, verwendet und schützt.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "1. Januar 2025";
  return (
    <div className="bg-cream-100 min-h-screen py-16">
      <div className="container-custom max-w-3xl">
        <div className="mb-10">
          <h1 className="font-serif text-5xl font-bold text-primary-500 mb-3">
            Datenschutzerklärung
          </h1>
          <p className="text-gray-400 text-sm">
            Zuletzt aktualisiert: {lastUpdated}
          </p>
        </div>
        <div className="prose-luxury">
          <p>
            Diese Datenschutzerklärung beschreibt, wie{" "}
            <strong>Sattelhub.de</strong>
            Ihre personenbezogenen Daten erhebt, verwendet und weitergibt. Dies
            gilt für Ihren Besuch auf <strong>{SITE_CONFIG.url}</strong> und für
            Einkäufe bei uns. Unser Sitz befindet sich unter{" "}
            {SITE_CONFIG.address.full}.
          </p>

          <h2>1. Welche Daten wir erheben</h2>
          <p>
            Bei der Nutzung unserer Website können wir folgende Daten erheben:
          </p>
          <ul>
            <li>
              <strong>Geräte- und Protokolldaten:</strong> IP-Adresse,
              Browsertyp, Betriebssystem, verweisende URLs, besuchte Seiten und
              Zeitpunkte.
            </li>
            <li>
              <strong>Kontodaten:</strong> Vorname, Nachname, E-Mail-Adresse,
              Telefonnummer und Passwort, das als Einweg-Hash gespeichert wird.
            </li>
            <li>
              <strong>Bestelldaten:</strong> Liefer- und Rechnungsadressen,
              Zahlungsart ohne Kartennummern sowie Bestellhistorie.
            </li>
            <li>
              <strong>Kommunikation:</strong> Nachrichten, die Sie uns über
              Kontaktformulare, E-Mail oder WhatsApp senden.
            </li>
            <li>
              <strong>Marketing-Einstellungen:</strong> Ob Sie unseren
              Newsletter abonniert haben oder nicht.
            </li>
            <li>
              <strong>Cookies und Trackingdaten:</strong> Mit Ihrer Einwilligung
              Analyse-Cookies zur Auswertung der Nutzung.
            </li>
          </ul>

          <h2>2. Wie wir Ihre Daten verwenden</h2>
          <ul>
            <li>
              Zur Bearbeitung und Erfüllung Ihrer Bestellungen, einschließlich
              Bestellbestätigungen und Versandinformationen.
            </li>
            <li>Zur Anmeldung und zum Schutz Ihres Kontos.</li>
            <li>Zur Beantwortung Ihrer Supportanfragen.</li>
            <li>
              Zum Versand von Marketing-E-Mails, wenn Sie diese abonniert haben.
              Sie können sich jederzeit abmelden.
            </li>
            <li>
              Zur Verbesserung unserer Website und Produktauswahl mithilfe
              anonymisierter Analysen.
            </li>
            <li>Zur Erfüllung gesetzlicher Pflichten.</li>
          </ul>

          <h2>3. Zahlungsabwicklung</h2>
          <p>
            Wir speichern keine Kreditkarten- oder Kontonummern auf unseren
            Servern. Zahlungen werden von externen Zahlungsdienstleistern
            verarbeitet. Bitte lesen Sie deren Datenschutzerklärungen für
            weitere Informationen zum Umgang mit Ihren Zahlungsdaten.
          </p>

          <h2>4. Weitergabe Ihrer Daten</h2>
          <p>
            Wir verkaufen Ihre personenbezogenen Daten nicht. Wir können Daten
            weitergeben an:
          </p>
          <ul>
            <li>
              <strong>Versanddienstleister</strong> zur Erfüllung Ihrer
              Bestellungen (Name, Adresse, Telefonnummer).
            </li>
            <li>
              <strong>E-Mail-Dienstleister</strong> wie SendGrid zum Versand von
              Transaktions- und Marketing-E-Mails.
            </li>
            <li>
              <strong>Analyseanbieter</strong> mit Ihrer Einwilligung zur
              Auswertung der Websitenutzung.
            </li>
            <li>
              <strong>Behörden oder Aufsichtsstellen</strong>, wenn dies
              gesetzlich vorgeschrieben ist.
            </li>
          </ul>

          <h2>5. Cookies</h2>
          <p>
            Wir verwenden notwendige Cookies für den Betrieb der Website,
            beispielsweise für Warenkorb und Anmeldung. Mit Ihrer Einwilligung
            nutzen wir außerdem Analyse-Cookies. Sie können Ihre Einstellungen
            jederzeit über das Cookie-Banner verwalten.
          </p>

          <h2>6. Speicherdauer</h2>
          <p>
            Wir speichern Ihre Kontodaten, solange Ihr Konto aktiv ist oder dies
            gesetzlich erforderlich ist. Bestelldaten werden aus steuerlichen
            Gründen mindestens sieben Jahre aufbewahrt. Sie können jederzeit die
            Löschung Ihres Kontos und Ihrer Daten verlangen; siehe Abschnitt 7.
          </p>

          <h2>7. Ihre Rechte</h2>
          <p>Sie haben das Recht auf:</p>
          <ul>
            <li>Auskunft über die zu Ihrer Person gespeicherten Daten.</li>
            <li>Berichtigung unrichtiger Daten.</li>
            <li>
              Löschung Ihres Kontos und Ihrer personenbezogenen Daten, soweit
              keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </li>
            <li>Jederzeitiger Widerspruch gegen Marketingkommunikation.</li>
            <li>Beschwerde bei der zuständigen Datenschutzaufsichtsbehörde.</li>
          </ul>
          <p>
            Zur Ausübung dieser Rechte kontaktieren Sie uns unter{" "}
            <a href={`mailto:${SITE_CONFIG.email.support}`}>
              {SITE_CONFIG.email.support}
            </a>
            .
          </p>

          <h2>8. Datensicherheit</h2>
          <p>
            Wir verwenden branchenübliche Sicherheitsmaßnahmen wie SSL-
            Verschlüsselung, sichere Passwort-Hashing-Verfahren und
            Zugriffskontrollen. Kein System ist vollständig sicher; eine
            absolute Sicherheit können wir nicht garantieren.
          </p>

          <h2>9. Datenschutz für Kinder</h2>
          <p>
            Unsere Website richtet sich nicht an Kinder unter 13 Jahren. Wir
            erheben wissentlich keine personenbezogenen Daten von Kindern. Wenn
            wir davon erfahren, löschen wir diese Daten umgehend.
          </p>

          <h2>10. Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Wir können diese Datenschutzerklärung gelegentlich aktualisieren.
            Änderungen werden mit einem aktualisierten Datum auf dieser Seite
            veröffentlicht. Die weitere Nutzung der Website gilt als Zustimmung.
          </p>

          <h2>11. Kontakt</h2>
          <p>
            Für Datenschutzfragen oder zur Ausübung Ihrer Rechte:
            <br />
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
