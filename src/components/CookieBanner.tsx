import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "cookie-consent";

type ConsentValue = "accepted" | "rejected" | null;

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentValue;
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: "accepted" | "rejected") => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50"
        >
          <div className="bg-card border border-border rounded-xl p-5 shadow-lg">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <Cookie className="w-4 h-4 text-accent" />
                <h3 className="text-sm font-semibold text-foreground">Cookie</h3>
              </div>
              <button
                onClick={() => handleConsent("rejected")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Questo sito utilizza cookie tecnici per garantire il corretto funzionamento.{" "}
              <Link
                to="/cookie-policy"
                className="underline text-foreground hover:text-accent transition-colors"
              >
                Scopri di più
              </Link>
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => handleConsent("accepted")}
                className="flex-1 text-xs font-medium py-2 px-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Accetta
              </button>
              <button
                onClick={() => handleConsent("rejected")}
                className="flex-1 text-xs font-medium py-2 px-4 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
              >
                Rifiuta
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
