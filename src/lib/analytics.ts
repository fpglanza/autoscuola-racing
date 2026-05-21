// src/lib/analytics.ts

const GA_ID = "G-XXXXXXXXXX";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function initConsentMode() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
}

export function loadGA4() {
  if (typeof document === "undefined") return;
  if (document.querySelector(`script[src*="${GA_ID}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", GA_ID, {
    anonymize_ip: true,
  });
}

export function grantAnalyticsConsent() {
  if (typeof window === "undefined") return;

  window.gtag("consent", "update", {
    analytics_storage: "granted",
  });

  loadGA4();
}

export function denyAnalyticsConsent() {
  if (typeof window === "undefined") return;

  window.gtag("consent", "update", {
    analytics_storage: "denied",
  });
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", name, params ?? {});
}