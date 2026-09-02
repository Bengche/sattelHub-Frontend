"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import api, { getErrorMessage } from "@/lib/api";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";

const schema = z.object({
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
});

type FormData = z.infer<typeof schema>;

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");
    try {
      await api.post("/auth/forgot-password", { email: data.email });
      setSent(true);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <Link
          href="/account/login"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-500 mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Zurück zur Anmeldung
        </Link>

        <div className="bg-white rounded-3xl shadow-card p-8 md:p-10">
          {!sent ? (
            <>
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                <Mail size={26} className="text-primary-500" />
              </div>
              <h1 className="font-serif text-3xl font-bold text-primary-500 mb-2">
                Passwort vergessen?
              </h1>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Geben Sie Ihre E-Mail-Adresse ein. Wir senden Ihnen einen Link
                zum Zurücksetzen Ihres Passworts.
              </p>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm mb-5">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="sie@beispiel.de"
                    {...register("email")}
                    className="input-field"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-3.5"
                >
                  {loading ? "Wird gesendet ..." : "Link senden"}
                </button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-6">
                Wieder eingefallen?{" "}
                <Link
                  href="/account/login"
                  className="text-primary-500 font-medium hover:underline"
                >
                  Anmelden
                </Link>
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={30} className="text-green-500" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-primary-500 mb-3">
                Prüfen Sie Ihren Posteingang
              </h2>
              <p className="text-gray-500 mb-2">
                Wir haben einen Link zum Zurücksetzen des Passworts gesendet an:
              </p>
              <p className="font-medium text-gray-900 mb-6">
                {getValues("email")}
              </p>
              <p className="text-sm text-gray-400 mb-8">
                Nicht erhalten? Prüfen Sie Ihren Spam-Ordner oder versuchen Sie
                es mit einer anderen E-Mail-Adresse.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setSent(false)}
                  className="btn-secondary"
                >
                  Andere E-Mail-Adresse verwenden
                </button>
                <Link href="/account/login" className="btn-primary">
                  Zur Anmeldung
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
