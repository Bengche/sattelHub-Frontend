"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/siteConfig";

export interface FaqItem {
  question: string;
  answer: string;
}

export type FaqCategory = {
  label: string;
  items: FaqItem[];
};

export const FAQ_DATA: FaqCategory[] = [
  {
    label: "Bestellungen und Versand",
    items: [
      {
        question: "Wie lange dauert der Versand?",
        answer: `Der Standardversand dauert 3-5 Werktage, der Expressversand 1-3 Werktage. Bestellungen ab ${SITE_CONFIG.shipping.freeShippingThreshold} EUR erhalten automatisch kostenlosen Standardversand.`,
      },
      {
        question: "Versenden Sie international?",
        answer:
          "Wir versenden derzeit innerhalb Deutschlands. Der internationale Versand wird erweitert. Abonnieren Sie unseren Newsletter, um über neue Versandgebiete informiert zu werden.",
      },
      {
        question: "Kann ich meine Bestellung verfolgen?",
        answer:
          "Ja. Sobald Ihre Bestellung versendet wurde, erhalten Sie die Sendungsnummer per E-Mail. Sie können die Sendung auch im Bereich Meine Bestellungen verfolgen.",
      },
      {
        question: "Was passiert, wenn mein Sattel beschädigt ankommt?",
        answer: `Kontaktieren Sie uns innerhalb von 48 Stunden nach der Lieferung unter ${SITE_CONFIG.email.support} und senden Sie Fotos des Schadens. Wir organisieren kostenlos einen Ersatz oder eine vollständige Erstattung.`,
      },
    ],
  },
  {
    label: "30-tägiger Testzeitraum",
    items: [
      {
        question: "Wie funktioniert der 30-tägige Testzeitraum?",
        answer:
          "Jeder gekaufte Sattel kann 30 Tage kostenlos getestet werden. Reiten Sie zu Hause oder im Stall. Wenn Sie nicht vollständig zufrieden sind, geben Sie ihn innerhalb von 30 Tagen für eine vollständige Erstattung zurück - ohne Wiedereinlagerungsgebühr und ohne Fragen.",
      },
      {
        question: "Wann beginnt mein Testzeitraum?",
        answer:
          "Der 30-tägige Testzeitraum beginnt am Tag der Lieferung, nicht am Tag der Bestellung.",
      },
      {
        question: "In welchem Zustand muss der Sattel für eine Rückgabe sein?",
        answer:
          "Normale Gebrauchsspuren vom Testen sind in Ordnung, etwa etwas Sattelseife oder leichte Schweißspuren. Der Sattel muss nicht neuwertig zurückgegeben werden, darf aber nicht durch unsachgemäße Nutzung beschädigt sein.",
      },
    ],
  },
  {
    label: "Sattelauswahl und Anpassung",
    items: [
      {
        question: "Woher weiß ich, welcher Sattel zu meinem Pferd passt?",
        answer:
          "Am besten nutzen Sie unseren 30-tägigen Testzeitraum und probieren den Sattel mit einem qualifizierten Sattler auf Ihrem Pferd aus. Wir empfehlen außerdem, die Widerristhöhe Ihres Pferdes zu messen. Unser Team berät Sie gerne anhand von Fotos des Pferderückens und Widerrists.",
      },
      {
        question: "Können Sättel angepasst werden?",
        answer:
          "Viele Sättel können von einem qualifizierten Sattler in Kammerweite und Polsterung angepasst werden. Die Anpassbarkeit ist auf jeder Produktseite angegeben.",
      },
      {
        question:
          "Was ist der Unterschied zwischen Western-, englischen, Dressur- und Springsätteln?",
        answer:
          "Westernsättel haben ein Horn und einen tiefen Sitz und eignen sich für Ranch- und Geländeritte. Englische Sättel sind leichter und haben kein Horn. Dazu gehören Dressursättel mit tiefem Sitz sowie Springsättel mit nach vorne geschnittenen Pauschen. Wir führen Sättel für alle Disziplinen.",
      },
    ],
  },
  {
    label: "Rückgabe und Erstattung",
    items: [
      {
        question: "Wie leite ich eine Rückgabe ein?",
        answer: `Melden Sie sich an, öffnen Sie Meine Bestellungen und klicken Sie bei der gewünschten Bestellung auf "Rückgabe / Erstattung". Alternativ schreiben Sie an ${SITE_CONFIG.email.support}. Wir senden Ihnen innerhalb eines Werktags ein frankiertes Rücksendeetikett.`,
      },
      {
        question: "Wie lange dauert eine Erstattung?",
        answer:
          "Sobald wir Ihre Rückgabe erhalten haben, wird die Erstattung innerhalb von 3-5 Werktagen über Ihre ursprüngliche Zahlungsmethode abgewickelt.",
      },
      {
        question: "Kann ich einen Sattel umtauschen statt ihn zurückzugeben?",
        answer:
          "Ja. Während des 30-tägigen Testzeitraums können Sie den Sattel kostenlos gegen ein anderes Modell umtauschen. Kontaktieren Sie uns, um den Umtausch zu vereinbaren.",
      },
    ],
  },
  {
    label: "Konto und Zahlungen",
    items: [
      {
        question: "Benötige ich ein Konto für den Kauf?",
        answer:
          "Sie können ohne Konto stöbern. Für den Kauf ist jedoch ein Konto erforderlich, damit Sie Ihre Bestellung verfolgen, Rückgaben verwalten und den 30-tägigen Testzeitraum nutzen können.",
      },
      {
        question: "Welche Zahlungsmethoden akzeptieren Sie?",
        answer:
          "Wir akzeptieren alle gängigen Kredit- und Debitkarten (Visa, Mastercard, Amex), PayPal und Banküberweisung.",
      },
      {
        question: "Sind meine Zahlungsdaten sicher?",
        answer:
          "Ja. Alle Transaktionen sind SSL-verschlüsselt. Wir speichern keine Kartennummern auf unseren Servern.",
      },
    ],
  },
];

export default function FaqClient({ data }: { data: FaqCategory[] }) {
  const [active, setActive] = useState<string | null>(null);

  const toggle = (key: string) =>
    setActive((prev) => (prev === key ? null : key));

  return (
    <div className="space-y-10">
      {data.map((cat) => (
        <div key={cat.label}>
          <h2 className="font-serif text-2xl font-bold text-primary-500 mb-4 border-b border-gold-200 pb-3">
            {cat.label}
          </h2>
          <div className="space-y-2">
            {cat.items.map((item, idx) => {
              const key = `${cat.label}-${idx}`;
              const isOpen = active === key;
              return (
                <div
                  key={key}
                  className="bg-white rounded-2xl shadow-card overflow-hidden"
                >
                  <button
                    onClick={() => toggle(key)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900 text-base">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
