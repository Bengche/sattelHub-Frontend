"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import api, { getErrorMessage } from "@/lib/api";
import { CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Bitte geben Sie einen Betreff ein"),
  message: z
    .string()
    .min(10, "Die Nachricht muss mindestens 10 Zeichen enthalten"),
});

type FormData = z.infer<typeof schema>;

const SUBJECTS = [
  "Hilfe bei der Sattelauswahl",
  "Bestellstatus / Sendungsverfolgung",
  "Rückgabe und Testzeitraum",
  "Sattelanpassung",
  "Großhandelsanfrage",
  "Sonstiges",
];

export default function ContactClient() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      await api.post("/contact", data);
      setSent(true);
    } catch (err) {
      setError("root", { message: getErrorMessage(err) });
    }
  };

  if (sent) {
    return (
      <div className="bg-white rounded-2xl shadow-card p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={30} className="text-green-500" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-primary-500 mb-3">
          Nachricht gesendet
        </h3>
        <p className="text-gray-500 leading-relaxed">
          Vielen Dank für Ihre Nachricht. Unser Team meldet sich innerhalb eines
          Werktags bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-card p-8">
      <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
        Nachricht senden
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {(errors as { root?: { message?: string } }).root?.message && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm">
            {(errors as { root?: { message?: string } }).root?.message}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ihr Name *
            </label>
            <input
              {...register("name")}
              className="input-field"
              placeholder="Anna Müller"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-Mail *
            </label>
            <input
              type="email"
              {...register("email")}
              className="input-field"
              placeholder="sie@beispiel.de"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefon (optional)
            </label>
            <input
              type="tel"
              {...register("phone")}
              className="input-field"
              placeholder="+49 30 12345678"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Betreff *
            </label>
            <select {...register("subject")} className="input-field">
              <option value="">Thema auswählen ...</option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nachricht *
          </label>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="Wie können wir Ihnen helfen?"
            className="input-field resize-none"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full py-3.5"
        >
          {isSubmitting ? "Wird gesendet ..." : "Nachricht senden"}
        </button>
      </form>
    </div>
  );
}
