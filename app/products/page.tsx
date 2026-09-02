import type { Metadata } from "next";
import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Reitsättel - Alle Sättel entdecken",
  description: `Entdecken Sie unsere Kollektion hochwertiger Reitsättel: Western, Englisch, Dressur, Springen und mehr. Kostenloser Versand ab ${require("@/lib/siteConfig").SITE_CONFIG.shipping.freeShippingThreshold} EUR und 30 Tage kostenlos testen.`,
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsClient />
    </Suspense>
  );
}
