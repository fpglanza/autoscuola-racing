type TrackingWindow = Window & {
  gtag?: (command: "event", eventName: string, parameters: Record<string, string>) => void;
  __racingTrackingDebug?: boolean;
  __trackingInitialized?: boolean;
};

const trackingWindow = window as TrackingWindow;

if (!trackingWindow.__trackingInitialized) {
  trackingWindow.__trackingInitialized = true;

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const element = target.closest<HTMLElement>(
        "[data-track], a[href^='tel:'], a[href*='wa.me/']"
      );

      if (!element) return;

      const href = element instanceof HTMLAnchorElement ? element.href : "";
      const eventName =
        element.dataset.track ||
        (href.startsWith("tel:") ? "phone_click" : "") ||
        (href.includes("wa.me/") ? "whatsapp_click" : "");

      if (!eventName) return;

      const parameters = {
        event_category: "engagement",
        location: element.dataset.location || "",
        section: element.dataset.section || "",
        office: element.dataset.office || element.dataset.location || "",
        text: element.textContent?.trim() || "",
        href,
        page_path: window.location.pathname
      };

      if (trackingWindow.__racingTrackingDebug) {
        console.debug("[Racing tracking]", eventName, parameters);
      }

      if (typeof trackingWindow.gtag !== "function") return;

      trackingWindow.gtag("event", eventName, parameters);
    },
    { capture: true }
  );
}
