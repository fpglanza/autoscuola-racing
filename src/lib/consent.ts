// src/lib/consent.ts

export type ConsentChoice = "accepted" | "rejected";

const CONSENT_KEY = "racing_cookie_consent";
const CONSENT_EXPIRY_DAYS = 180;

type StoredConsent = {
  choice: ConsentChoice;
  timestamp: number;
};

export function getConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(CONSENT_KEY);
  if (!raw) return null;

  try {
    const stored = JSON.parse(raw) as StoredConsent;
    const age = Date.now() - stored.timestamp;
    const maxAge = CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000;

    if (age > maxAge) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }

    return stored.choice;
  } catch {
    localStorage.removeItem(CONSENT_KEY);
    return null;
  }
}

export function setConsent(choice: ConsentChoice) {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify({
      choice,
      timestamp: Date.now(),
    })
  );

  window.dispatchEvent(
    new CustomEvent("cookie-consent-change", {
      detail: { choice },
    })
  );
}

export function resetConsent() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(CONSENT_KEY);
  window.dispatchEvent(new CustomEvent("cookie-consent-reset"));
}