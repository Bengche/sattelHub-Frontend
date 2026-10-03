"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Heart,
  Star,
  Shield,
  RotateCcw,
  Truck,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Share2,
  Tag,
  Award,
  FileText,
  RefreshCw,
  Lock,
  Package,
  ArrowRight,
} from "lucide-react";
import { Product, Review } from "@/types";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";
import { formatPrice } from "@/lib/utils";
import api from "@/lib/api";
import ProductCard from "@/components/product/ProductCard";

interface Props {
  initialProduct: Product;
  slug: string;
}

const CONDITION_LABELS: Record<string, string> = {
  new: "Neu",
  excellent: "Sehr gut",
  good: "Gut",
  fair: "Akzeptabel",
};

export default function ProductDetailClient({ initialProduct, slug }: Props) {
  const [product] = useState<Product>(initialProduct);
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [reviewForm, setReviewForm] = useState({
    rating: 5,
    title: "",
    body: "",
  });
  const [submittingReview, setSubmittingReview] = useState(false);

  // Variant selections
  const [selectedSeatSize, setSelectedSeatSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedTreeSize, setSelectedTreeSize] = useState("");

  const { addToCart, loading: cartLoading } = useCart();
  const { toggle: toggleFav, isFavorite } = useFavorites();
  const { isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const isFav = isFavorite(product.id);

  const images =
    product.images?.length > 0
      ? product.images
      : [{ url: "/placeholder-saddle.jpg", alt: product.name }];
  const discountPct = product.compare_price
    ? Math.round(
        ((product.compare_price - product.price) / product.compare_price) * 100,
      )
    : 0;

  useEffect(() => {
    api
      .get(`/reviews/product/${product.id}`)
      .then((r) => setReviews(r.data.data?.reviews || []))
      .catch(() => {});
    const categoryParam = product.category_slug
      ? `category=${product.category_slug}`
      : "";
    api
      .get(
        `/products?${categoryParam}${categoryParam ? "&" : ""}sort=random&limit=7`,
      )
      .then((r) =>
        setRelatedProducts(
          (r.data.data?.products || [])
            .filter((p: Product) => p.id !== product.id)
            .slice(0, 6),
        ),
      )
      .catch(() => {});
  }, [product.id, product.category_slug]);

  const hasSeatSizes = (product.available_seat_sizes?.length ?? 0) > 0;
  const hasColors = (product.available_colors?.length ?? 0) > 0;
  const hasTreeSizes = (product.available_tree_sizes?.length ?? 0) > 0;

  const handleAddToCart = () => {
    // Validate required selections
    if (hasSeatSizes && !selectedSeatSize) {
      showToast("Bitte wählen Sie eine Sitzgröße.", "info");
      return;
    }
    if (hasColors && !selectedColor) {
      showToast("Bitte wählen Sie eine Farbe.", "info");
      return;
    }
    addToCart(product.id, qty, {
      selectedSeatSize: selectedSeatSize || undefined,
      selectedColor: selectedColor || undefined,
      selectedTreeSize: selectedTreeSize || undefined,
    });
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      showToast(
        "Bitte melden Sie sich an, um eine Bewertung abzugeben",
        "info",
      );
      return;
    }
    setSubmittingReview(true);
    try {
      await api.post("/reviews", { productId: product.id, ...reviewForm });
      showToast("Bewertung gesendet - wartet auf Freigabe", "success");
      setReviewForm({ rating: 5, title: "", body: "" });
    } catch {
      showToast("Bewertung konnte nicht gesendet werden", "error");
    } finally {
      setSubmittingReview(false);
    }
  };

  const specRows = [
    { label: "Marke", value: product.brand },
    { label: "Kategorie", value: product.category_name },
    { label: "Zustand", value: CONDITION_LABELS[product.condition] },
    { label: "Sitzgröße", value: product.seat_size },
    { label: "Kopfeisen", value: product.tree_type },
    { label: "Lederart", value: product.leather_type },
    { label: "Farbe", value: product.color },
    {
      label: "Gewicht",
      value: product.weight_kg ? `${product.weight_kg} kg` : null,
    },
    { label: "Artikelnummer", value: product.sku },
  ].filter((r) => r.value);

  return (
    <div className="bg-cream-100">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-custom py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600">
              Startseite
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary-600">
              Sättel
            </Link>
            {product.category_name && (
              <>
                <span>/</span>
                <Link
                  href={`/products?category=${product.category_slug}`}
                  className="hover:text-primary-600 capitalize"
                >
                  {product.category_name}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-gray-900 truncate max-w-[200px]">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="container-custom py-6 sm:py-10">
        {/* Main product section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 sm:mb-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-card">
              <Image
                src={images[activeImage]?.url || "/placeholder-saddle.jpg"}
                alt={images[activeImage]?.alt || product.name}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImage(
                        (p) => (p + images.length - 1) % images.length,
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm text-gray-700 hover:bg-white"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImage((p) => (p + 1) % images.length)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm text-gray-700 hover:bg-white"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
              {discountPct > 0 && (
                <span className="absolute top-3 left-3 badge bg-red-500 text-white font-semibold">
                  -{discountPct}%
                </span>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto scrollbar-thin pb-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${activeImage === i ? "border-primary-500 shadow-sm" : "border-gray-200 hover:border-gray-300"}`}
                  >
                    <Image
                      src={img.url}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            {product.category_name && (
              <Link
                href={`/products?category=${product.category_slug}`}
                className="text-xs text-gold-500 font-semibold uppercase tracking-widest hover:text-gold-600 block mb-2"
              >
                {product.category_name}
              </Link>
            )}

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Rating summary */}
            {product.review_count > 0 && (
              <div className="flex items-center gap-3 mb-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.round(product.avg_rating)
                          ? "fill-gold-400 text-gold-400"
                          : "fill-gray-200 text-gray-200"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {product.avg_rating.toFixed(1)}
                </span>
                <a
                  href="#reviews"
                  className="text-sm text-primary-500 hover:underline"
                >
                  ({product.review_count} Bewertungen)
                </a>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl sm:text-4xl font-bold text-primary-600">
                {formatPrice(product.price)}
              </span>
              {product.compare_price && (
                <span className="text-xl text-gray-400 line-through">
                  {formatPrice(product.compare_price)}
                </span>
              )}
            </div>

            {product.short_description && (
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.short_description}
              </p>
            )}

            {/* Condition badge */}
            <div className="flex items-center gap-2 mb-6">
              <span
                className={`badge text-sm ${product.condition === "new" ? "bg-green-100 text-green-700" : "bg-gold-50 text-gold-700"}`}
              >
                {CONDITION_LABELS[product.condition]}
              </span>
              {product.brand && (
                <span className="badge bg-primary-50 text-primary-600 text-sm">
                  {product.brand}
                </span>
              )}
            </div>

            {/* Stock */}
            {product.stock_quantity > 0 ? (
              <div className="flex items-center gap-2 mb-6 text-sm text-green-700">
                <CheckCircle size={16} className="text-green-500" />
                {product.stock_quantity <= 5
                  ? `Nur noch ${product.stock_quantity} auf Lager`
                  : "Auf Lager – Versand innerhalb von 1–2 Werktagen"}
              </div>
            ) : (
              <p className="text-red-600 font-medium mb-6 text-sm">
                Nicht verfügbar
              </p>
            )}

            {/* ── Variant Selectors ──────────────────────────────────────── */}

            {/* Seat Size */}
            {hasSeatSizes && (
              <div className="mb-5">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Sitzgröße
                  {selectedSeatSize && (
                    <span className="ml-2 text-primary-600 font-normal">
                      — {selectedSeatSize}
                    </span>
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.available_seat_sizes!.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSeatSize(s)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        selectedSeatSize === s
                          ? "bg-primary-600 text-white border-primary-600"
                          : "bg-white text-gray-700 border-gray-200 hover:border-primary-400"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color */}
            {hasColors && (
              <div className="mb-5">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Farbe
                  {selectedColor && (
                    <span className="ml-2 text-primary-600 font-normal">
                      — {selectedColor}
                    </span>
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.available_colors!.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setSelectedColor(c)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        selectedColor === c
                          ? "bg-primary-600 text-white border-primary-600"
                          : "bg-white text-gray-700 border-gray-200 hover:border-primary-400"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tree Size */}
            {hasTreeSizes && (
              <div className="mb-5">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Kopfeisengröße
                  {selectedTreeSize && (
                    <span className="ml-2 text-primary-600 font-normal">
                      — {selectedTreeSize}
                    </span>
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.available_tree_sizes!.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTreeSize(t)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        selectedTreeSize === t
                          ? "bg-primary-600 text-white border-primary-600"
                          : "bg-white text-gray-700 border-gray-200 hover:border-primary-400"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Menge + in den Warenkorb */}
            <div className="mb-6">
              {/* Row 1: qty stepper + wishlist */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="px-4 py-3 text-gray-600 hover:bg-gray-50 text-lg"
                  >
                    −
                  </button>
                  <span className="px-5 py-3 font-semibold text-gray-900 min-w-[50px] text-center">
                    {qty}
                  </span>
                  <button
                    onClick={() =>
                      setQty((q) => Math.min(product.stock_quantity, q + 1))
                    }
                    className="px-4 py-3 text-gray-600 hover:bg-gray-50 text-lg"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => toggleFav(product.id)}
                  className={`p-4 rounded-lg border transition-all ${isFav ? "border-red-300 bg-red-50 text-red-500" : "border-gray-200 bg-white text-gray-500 hover:border-red-300 hover:text-red-500"}`}
                >
                  <Heart size={20} fill={isFav ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Zeile 2: vollständige Warenkorbaktion */}
              <button
                onClick={handleAddToCart}
                disabled={cartLoading || product.stock_quantity === 0}
                className="btn-primary w-full py-4 text-base disabled:opacity-60"
              >
                <ShoppingCart size={20} />
                {product.stock_quantity === 0
                  ? "Nicht verfügbar"
                  : "In den Warenkorb"}
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                {
                  icon: Shield,
                  text: "30-Tage-Satteltest",
                  sub: "Vor dem Kauf in Ruhe testen",
                },
                {
                  icon: RotateCcw,
                  text: "Kostenlose Rückgabe",
                  sub: "Einfach und unkompliziert",
                },
                {
                  icon: Truck,
                  text: "Kostenloser Versand ab 2.000 EUR",
                  sub: "Schneller, versicherter Versand",
                },
                {
                  icon: Award,
                  text: "Echtheit garantiert",
                  sub: "Jeder Sattel wird geprüft",
                },
                {
                  icon: Lock,
                  text: "Sicher bezahlen",
                  sub: "SSL-verschlüsselte Zahlung",
                },
                {
                  icon: Package,
                  text: "Sorgfältig verpackt",
                  sub: "Sicher und geschützt geliefert",
                },
              ].map(({ icon: Icon, text, sub }) => (
                <div
                  key={text}
                  className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100"
                >
                  <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800 leading-tight">
                      {text}
                    </p>
                    <p className="text-xs text-gray-400 leading-tight mt-0.5">
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Policy links */}
            <div className="flex flex-col gap-2 p-4 bg-cream-50 border border-cream-200 rounded-xl mb-5">
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                Unsere Informationen
              </p>
              <Link
                href="/shipping-policy"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors group"
              >
                <Truck
                  size={14}
                  className="text-primary-400 group-hover:text-primary-600 flex-shrink-0"
                />
                <span className="group-hover:underline">
                  Versandinformationen – Kosten, Lieferzeiten und
                  Versanddienstleister
                </span>
              </Link>
              <Link
                href="/returns-refunds"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors group"
              >
                <RefreshCw
                  size={14}
                  className="text-primary-400 group-hover:text-primary-600 flex-shrink-0"
                />
                <span className="group-hover:underline">
                  Rückgabe und Erstattung – Details zum 30-Tage-Satteltest
                </span>
              </Link>
              <Link
                href="/terms-conditions"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors group"
              >
                <FileText
                  size={14}
                  className="text-primary-400 group-hover:text-primary-600 flex-shrink-0"
                />
                <span className="group-hover:underline">
                  Allgemeine Geschäftsbedingungen
                </span>
              </Link>
            </div>

            {/* Share */}
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                showToast("Link kopiert!", "success");
              }}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Share2 size={15} /> Sattel teilen
            </button>
          </div>
        </div>

        {/* Description & Specs tabs */}
        <div className="bg-white rounded-2xl shadow-card p-5 sm:p-8 mb-6 sm:mb-10">
          <h2 className="font-serif text-2xl font-bold text-primary-500 mb-6">
            Beschreibung
          </h2>
          <div
            className="prose-luxury max-w-none"
            dangerouslySetInnerHTML={{
              __html: product.description.replace(/\n/g, "<br/>"),
            }}
          />

          {specRows.length > 0 && (
            <>
              <h3 className="font-serif text-xl font-bold text-primary-500 mt-10 mb-5">
                Technische Daten
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center gap-3 py-3 px-4 bg-cream-100 rounded-lg"
                  >
                    <Tag size={14} className="text-gold-400 flex-shrink-0" />
                    <span className="text-sm text-gray-500 w-28 flex-shrink-0">
                      {row.label}
                    </span>
                    <span className="text-sm font-medium text-gray-800 capitalize">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Reviews */}
        <div
          id="reviews"
          className="bg-white rounded-2xl shadow-card p-5 sm:p-8 mb-6 sm:mb-10"
        >
          <h2 className="font-serif text-2xl font-bold text-primary-500 mb-6">
            Bewertungen ({reviews.length})
          </h2>

          {reviews.length === 0 ? (
            <p className="text-gray-500 text-sm mb-8">
              Noch keine Bewertungen. Seien Sie der Erste, der seine Erfahrung
              teilt.
            </p>
          ) : (
            <div className="space-y-6 mb-8">
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <div className="flex gap-0.5 mb-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < r.rating
                                ? "fill-gold-400 text-gold-400"
                                : "fill-gray-200 text-gray-200"
                            }
                          />
                        ))}
                      </div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {r.first_name} {r.last_name?.charAt(0)}.
                      </p>
                    </div>
                    <div className="sm:text-right flex sm:flex-col items-center sm:items-end gap-2">
                      <p className="text-xs text-gray-400">
                        {new Date(r.created_at).toLocaleDateString("de-DE")}
                      </p>
                      {r.is_verified && (
                        <span className="badge bg-green-50 text-green-700 text-xs">
                          Verifizierter Kauf
                        </span>
                      )}
                    </div>
                  </div>
                  {r.title && (
                    <p className="font-medium text-gray-800 mb-1">{r.title}</p>
                  )}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Review form */}
          <div className="border-t border-gray-100 pt-8">
            <h3 className="font-serif text-lg font-semibold mb-5">
              Bewertung schreiben
            </h3>
            {!isAuthenticated ? (
              <p className="text-sm text-gray-500">
                <Link
                  href="/account/login"
                  className="text-primary-500 underline"
                >
                  Anmelden
                </Link>
                , um eine Bewertung abzugeben.
              </p>
            ) : (
              <form
                onSubmit={handleSubmitReview}
                className="space-y-4 max-w-lg"
              >
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Bewertung
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setReviewForm((f) => ({ ...f, rating }))}
                        className="focus:outline-none"
                      >
                        <Star
                          size={28}
                          className={
                            rating <= reviewForm.rating
                              ? "fill-gold-400 text-gold-400"
                              : "fill-gray-200 text-gray-200"
                          }
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Titel der Bewertung
                  </label>
                  <input
                    value={reviewForm.title}
                    onChange={(e) =>
                      setReviewForm((f) => ({ ...f, title: e.target.value }))
                    }
                    placeholder="Fassen Sie Ihre Erfahrung zusammen"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Ihre Bewertung
                  </label>
                  <textarea
                    value={reviewForm.body}
                    onChange={(e) =>
                      setReviewForm((f) => ({ ...f, body: e.target.value }))
                    }
                    required
                    rows={4}
                    placeholder="Teilen Sie Ihre Erfahrung mit diesem Sattel ..."
                    className="input-field resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submittingReview}
                  className="btn-primary disabled:opacity-60"
                >
                  {submittingReview ? "Wird gesendet ..." : "Bewertung senden"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Recommended products */}
        {relatedProducts.length > 0 && (
          <div className="mt-6 sm:mt-10">
            {/* Section divider */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 whitespace-nowrap">
                Das könnte Ihnen auch gefallen
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Header */}
            <div className="flex items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-500">
                  Diese Sättel sind ebenfalls beliebt
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  {product.category_name
                    ? `Weitere Produkte aus ${product.category_name}`
                    : "Ähnliche Sättel für Sie zusammengestellt"}
                </p>
              </div>
              <Link
                href={
                  product.category_slug
                    ? `/products?category=${product.category_slug}`
                    : "/products"
                }
                className="flex items-center gap-1.5 text-sm text-primary-500 hover:text-primary-700 font-medium transition-colors group whitespace-nowrap"
              >
                Alle ansehen
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
