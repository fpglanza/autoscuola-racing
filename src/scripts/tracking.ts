type TrackingWindow = Window & {
  gtag?: (command: "event", eventName: string, parameters: Record<string, string>) => void;
  __racingTrackingInitialized?: boolean;
};

const trackingWindow = window as TrackingWindow;

if (!trackingWindow.__racingTrackingInitialized) {
  trackingWindow.__racingTrackingInitialized = true;

  document.addEventListener("click", (event) => {
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

    if (!eventName || typeof trackingWindow.gtag !== "function") return;

    trackingWindow.gtag("event", eventName, {
      event_category: "engagement",
      location: element.dataset.location || "",
      section: element.dataset.section || "",
      office: element.dataset.office || element.dataset.location || "",
      text: element.textContent?.trim() || "",
      href,
      page_path: window.location.pathname
    });
  });
}
