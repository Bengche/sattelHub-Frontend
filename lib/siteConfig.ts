/**
 * SATTELHUB.DE — SINGLE SOURCE OF TRUTH (Frontend)
 * All site-wide contact info, branding, and constants live here.
 * Update here once and it propagates across the entire frontend.
 */

export const SITE_CONFIG = {
  name: "Sattelhub.de",
  tagline: "Hochwertige Reitsättel für anspruchsvolle Reiter",
  description:
    "Sattelhub.de bietet eine hochwertige Auswahl an Reitsätteln für Westernreiten, englisches Reiten, Dressur, Springen und Ausritte. 30 Tage kostenlos testen.",
  url: "https://sattelhub.de",

  contact: {
    supportEmail: "support@sattelhub.de",
    salesEmail: "sales@sattelhub.de",
    phone: "+1 (914) 432-9936",
    phoneDisplay: "+1 (914) 432-9936",
    whatsapp: "+1 (669) 247-2718",
    whatsappDisplay: "+1 (669) 247-2718",
    whatsappLink: "https://wa.me/16692472718",
  },

  address: {
    street: "8 Thackeray St",
    city: "London",
    state: "",
    zip: "W8 5ET",
    country: "UK",
    countryFull: "United Kingdom",
    full: "8 Thackeray St, London W8 5ET, United Kingdom",
    mapsLink:
      "https://maps.google.com/?q=4001+Wing+Commander+Way+Lexington+KY+40511",
  },

  social: {
    facebook: "https://facebook.com/sattelhub",
    instagram: "https://instagram.com/sattelhub",
    twitter: "https://twitter.com/sattelhub",
    pinterest: "https://pinterest.com/sattelhub",
    youtube: "https://youtube.com/@sattelhub",
  },

  trial: {
    days: 30,
    description: "30 Tage kostenlos testen - risikofrei probereiten.",
  },

  currency: {
    code: "EUR",
    symbol: "€",
    locale: "de-DE",
  },

  shipping: {
    freeShippingThreshold: 2000,
    standardShippingCost: 49,
    expressShippingCost: 99,
    standardRate: 49,
    expressRate: 99,
    standardDays: "3-5",
    expressDays: "2-3",
    internationalDays: "10-21",
  },

  policies: {
    returnDays: 30,
    trialDays: 30,
  },

  seo: {
    defaultTitle: "Sattelhub.de - Hochwertige Reitsättel",
    titleTemplate: "%s | Sattelhub.de",
    defaultDescription:
      "Hochwertige Reitsättel bei Sattelhub.de kaufen: Western-, Englisch-, Dressur-, Spring- und Wandersättel. 30 Tage kostenlos testen und ab 2.000 EUR versandkostenfrei bestellen.",
    keywords: [
      "Reitsättel",
      "Reitsattel kaufen",
      "Westernreitsättel",
      "englische Reitsättel",
      "Dressursättel",
      "Springsättel",
      "Wandersättel",
      "Reitsättel kaufen",
      "hochwertige Reitsättel",
      "Sattelhub",
      "Pferdesättel",
      "maßgefertigte Reitsättel",
      "Ledersättel",
    ],
    ogImage: "/og-image.jpg",
    twitterCard: "summary_large_image",
    twitterSite: "@sattelhub",
  },

  pwa: {
    name: "SattelHub",
    shortName: "SattelHub",
    themeColor: "#1C3557",
    backgroundColor: "#FAFAF7",
  },
  // Shorthand aliases (used across pages)
  phone: "+1 (914) 432-9936",
  whatsapp: "+1 (669) 247-2718",
  email: {
    support: "support@sattelhub.de",
    sales: "sales@sattelhub.de",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;

// Helper: Format price in EUR
export const formatPrice = (amount: number): string =>
  new Intl.NumberFormat(SITE_CONFIG.currency.locale, {
    style: "currency",
    currency: SITE_CONFIG.currency.code,
    minimumFractionDigits: 2,
  }).format(amount);

  // Hilfsfunktion: Prüft, ob kostenloser Versand gilt
export const isFreeShipping = (subtotal: number): boolean =>
  subtotal >= SITE_CONFIG.shipping.freeShippingThreshold;
