import { ShieldCheck, Truck } from "lucide-react";

const ANNOUNCEMENT_TEXT =
  "30 Tage Probereiten bei jedem Sattel. Passt er nicht, geben Sie ihn unkompliziert zurück. Kostenloser Versand ab 2.000 Euro Bestellwert.";

export default function AnnouncementBar() {
  return (
    <div
      className="announcement-bar"
      role="region"
      aria-label="Vorteile beim Sattelkauf"
    >
      <span className="sr-only">{ANNOUNCEMENT_TEXT}</span>
      <div className="announcement-viewport" aria-hidden="true">
        <div className="announcement-track">
          {[0, 1].map((copy) => (
            <div className="announcement-group" key={copy}>
              <span className="announcement-item">
                <ShieldCheck className="announcement-icon" size={15} />
                <span className="announcement-copy">
                  <strong>30 Tage Probereiten</strong>
                  <span>
                    bei jedem Sattel. Passt er nicht, geben Sie ihn
                    unkompliziert zurück.
                  </span>
                </span>
              </span>
              <span className="announcement-divider" />
              <span className="announcement-item">
                <Truck className="announcement-icon" size={15} />
                <span className="announcement-copy">
                  <strong>Kostenloser Versand</strong>
                  <span>ab 2.000 Euro Bestellwert</span>
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
