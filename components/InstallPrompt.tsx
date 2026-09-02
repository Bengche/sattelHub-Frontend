"use client";

import { useEffect, useState } from "react";
import { Download, Share, X } from "lucide-react";

const DISMISS_KEY = "sattelhub-install-prompt-dismissed";

function isIosDevice() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone)
  );
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [ios, setIos] = useState(false);

  useEffect(() => {
    if (isStandalone() || localStorage.getItem(DISMISS_KEY)) return;

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    if (isIosDevice() && /safari/i.test(window.navigator.userAgent)) {
      setIos(true);
      setVisible(true);
    }

    const fallbackTimer = window.setTimeout(() => {
      if (!isStandalone() && !localStorage.getItem(DISMISS_KEY)) {
        setVisible(true);
      }
    }, 1500);

    return () => {
      window.clearTimeout(fallbackTimer);
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  };

  const install = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    setDeferredPrompt(null);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-4 right-4 z-[140] mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-4 shadow-luxury-lg">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
          {ios ? <Share size={19} /> : <Download size={19} />}
        </div>
        <div className="min-w-0 flex-1 pr-5">
          <p className="font-semibold text-gray-900">SattelHub installieren</p>
          {ios ? (
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              Tippen Sie auf <Share size={14} className="mx-1 inline" /> Teilen und anschließend auf „Zum Home-Bildschirm“.
            </p>
          ) : deferredPrompt ? (
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              Installieren Sie SattelHub für schnellen Zugriff und ein App-Erlebnis.
            </p>
          ) : (
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              Öffnen Sie das Browsermenü und wählen Sie „App installieren“ oder
              „Zum Startbildschirm hinzufügen“.
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Installationshinweis schließen"
          className="absolute right-3 top-3 rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
        >
          <X size={17} />
        </button>
      </div>
      {!ios && deferredPrompt && (
        <button type="button" onClick={install} className="btn-primary mt-3 w-full py-2.5">
          Jetzt installieren
        </button>
      )}
    </div>
  );
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}