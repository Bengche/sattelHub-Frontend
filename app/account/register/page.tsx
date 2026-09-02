"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { getErrorMessage } from "@/lib/api";
import { SITE_CONFIG } from "@/lib/siteConfig";

const schema = z
  .object({
    first_name: z.string().min(2, "Vorname erforderlich"),
    last_name: z.string().min(2, "Nachname erforderlich"),
    email: z.string().email("Gültige E-Mail-Adresse erforderlich"),
    phone: z.string().optional(),
    password: z
      .string()
      .min(8, "Das Passwort muss mindestens 8 Zeichen enthalten"),
    confirm_password: z.string(),
    newsletter: z.boolean().optional(),
  })
  .refine((d) => d.password === d.confirm_password, {
    message: "Die Passwörter stimmen nicht überein",
    path: ["confirm_password"],
  });

type FormData = z.infer<typeof schema>;

export default function RegisterPage() {
  const { register: registerUser } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { newsletter: true },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");
    try {
      await registerUser({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        newsletter: data.newsletter,
      });
      router.push(
        `/account/verify-email?email=${encodeURIComponent(data.email)}`,
      );
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-luxury p-8 md:p-10"
      >
        {/* Logo / brand */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl font-bold text-primary-500 mb-2">
            Konto erstellen
          </h1>
          <p className="text-gray-500 text-sm">
            Werden Sie Teil von {SITE_CONFIG.name} und testen Sie Ihren ersten
            Sattel 30 Tage kostenlos.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Vorname
              </label>
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  {...register("first_name")}
                  placeholder="Anna"
                  className="input-field pl-10"
                />
              </div>
              {errors.first_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.first_name.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Nachname
              </label>
              <input
                {...register("last_name")}
                placeholder="Müller"
                className="input-field"
              />
              {errors.last_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.last_name.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1.5 block">
              E-Mail-Adresse
            </label>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                {...register("email")}
                type="email"
                placeholder="anna@beispiel.de"
                className="input-field pl-10"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1.5 block">
              Telefon{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <div className="relative">
              <Phone
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                {...register("phone")}
                type="tel"
                placeholder="+49 30 12345678"
                className="input-field pl-10"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1.5 block">
              Passwort
            </label>
            <div className="relative">
              <Lock
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Mindestens 8 Zeichen"
                className="input-field pl-10 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1.5 block">
              Passwort bestätigen
            </label>
            <div className="relative">
              <Lock
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                {...register("confirm_password")}
                type={showPassword ? "text" : "password"}
                placeholder="Passwort wiederholen"
                className="input-field pl-10"
              />
            </div>
            {errors.confirm_password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirm_password.message}
              </p>
            )}
          </div>

          <label className="flex items-start gap-3 cursor-pointer pt-1">
            <input
              {...register("newsletter")}
              type="checkbox"
              className="mt-0.5 rounded text-primary-500"
            />
            <span className="text-sm text-gray-600">
              Newsletter mit Sattelpflegetipps, Neuheiten und exklusiven
              Angeboten abonnieren.
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-4 text-base mt-2 disabled:opacity-60"
          >
            {loading ? "Konto wird erstellt ..." : "Konto erstellen"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Sie haben bereits ein Konto?{" "}
          <Link
            href="/account/login"
            className="text-primary-500 font-medium hover:underline"
          >
            Anmelden
          </Link>
        </p>

        <p className="text-center text-xs text-gray-400 mt-4 leading-relaxed">
          By creating an account, you agree to our{" "}
          <Link href="/terms-conditions" className="underline">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </motion.div>
    </div>
  );
}
