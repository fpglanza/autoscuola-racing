import { whatsappLink } from "../lib/whatsapp";

export const locations = [
  {
    slug: "favaro-veneto",
    name: "Sede Favaro Veneto",
    city: "Favaro Veneto (VE)",
    address: "Via M.te Cervino, 23/a, 30173 Favaro Veneto (VE)",
    phone: "041 630163",
    email: "autoscuolaracing2@libero.it",
    whatsapp: whatsappLink(
      "393494157836",
      "Ciao Autoscuola Racing Favaro, vorrei ricevere informazioni."
    ),
    notes: "Sede legale e operativa",
    mapUrl: "/contatti",
  },
  {
    slug: "salzano",
    name: "Sede Salzano",
    city: "Salzano (VE)",
    address: "Via A. De Gasperi, 84, 30030 Salzano (VE)",
    phone: "041 5746510",
    email: "autoscuolaracing3@gmail.com",
    whatsapp: whatsappLink(
      "393494157836",
      "Ciao Autoscuola Racing Salzano, vorrei ricevere informazioni."
    ),
    notes: "Filiale operativa",
    mapUrl: "/contatti",
  },
];
