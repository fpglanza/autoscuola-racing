import { whatsappLink } from "../lib/whatsapp";

// export const contattiData = {
//   hero: {
//     heading: "Contatti Autoscuola Racing",
//     intro:
//       "Siamo presenti con due sedi operative tra Favaro Veneto e Salzano, per offrirti un punto di riferimento chiaro e accessibile in ogni fase del tuo percorso.",
//   },

//   favaro: {
//     title: "Sede Favaro Veneto",
//     body:
//       "Ci trovi nel cuore di Favaro Veneto. La nostra sede di Favaro Veneto è il punto di riferimento per chi cerca un ambiente accogliente e organizzato. Qui gestiamo le lezioni teoriche, le esercitazioni sui quiz e tutta la parte burocratica per le patenti auto e nautiche.",
//     details: [
//       "Indirizzo: Via Monte Cervino, 23/a, 30173 Venezia VE Favaro Veneto (VE)",
//       "Telefono: 041 630163",
//       "Email: [Inserire Email]",
//       "Contatto diretto whazzup",
//     ],
//   },

//   salzano: {
//     title: "Sede Salzano",
//     body:
//       "La tua autoscuola di fiducia a Salzano. Per gli allievi della zona, la sede di Salzano offre la stessa attenzione e il clima familiare che contraddistingue Autoscuola Racing. Un presidio territoriale comodo per gestire il tuo percorso verso la patente senza lunghi spostamenti.",
//     details: [
//       "Indirizzo: Via A. de Gasperi, 84, 30030 Salzano VE",
//       "Telefono: 041 574 6510",
//       "Email: [Inserire Email]",
//       "Contatto diretto whazzup",
//     ],
//   },

//   hours: {
//     title: "Orari e modalità iscrizione",
//     body:
//       "Passa a trovarci quando preferisci. Non serve un appuntamento per venire a conoscerci. Siamo aperti nei seguenti orari per iscrizioni, informazioni sui corsi o semplicemente per darti un consiglio sul percorso più adatto a te:",
//     items: [
//       "Lunedì – Venerdì: 9 - 12 e 16-19 FAVARO",
//       "Lunedì – Venerdì: 9 - 12 e 16.30 -19 SALZANO",
//     ],
//     note:
//       "Visite mediche in sede: Organizziamo regolarmente sessioni con il medico in autoscuola per rinnovi patente e certificati d'idoneità. Contattaci per conoscere la data della prossima sessione disponibile e prenotare il tuo posto senza attese in uffici pubblici.",
//   },

//   whatsapp: {
//     title: "Contatto WhatsApp diretto",
//     body:
//       "Hai una domanda veloce? Scrivici direttamente in sede. Siamo a disposizione per chiarire ogni tuo dubbio su documenti, orari delle lezioni o visite mediche. Scegli la sede più comoda per te e inizia subito a parlare con noi: il nostro team ti risponderà in tempo reale per darti tutto il supporto di cui hai bisogno.",
//     items: [
//       {
//         label:
//           "Sede di Mestre – Favaro Veneto Per info su corsi e pratiche in terraferma.",
//         cta: "Scrivici a Mestre",
//         href: "/contatti",
//       },
//       {
//         label:
//           "Sede di Salzano Per supporto diretto e iscrizioni a Salzano.",
//         cta: "Scrivici a Salzano",
//         href: "/contatti",
//       },
//     ],
//   },
// };

export const contattiData = {
  hero: {
    heading: "Contatti Autoscuola Racing",
    intro:
      "Siamo presenti con due sedi operative tra Favaro Veneto e Salzano, per offrirti un punto di riferimento chiaro e accessibile in ogni fase del tuo percorso.",
  },

  favaro: {
    title: "Sede Favaro Veneto",
    body:
      "Ci trovi nel cuore di Favaro Veneto. Qui gestiamo lezioni teoriche, esercitazioni quiz e pratiche per patenti auto e nautiche.",
    address: "Via Monte Cervino, 23/a, 30173 Favaro Veneto (VE)",
    phone: "041 630163",
    email: "autoscuolaracing2@libero.it",
    hours: "Lunedì – Venerdì: 9 - 12 e 16.30 - 19.15",
    actions: [
      {
        label: "Scrivici a Mestre",
        href: whatsappLink(
          "393494157836",
          "Ciao Autoscuola Racing Favaro, vorrei ricevere informazioni."
        ),
        variant: "primary",
      },
      {
        label: "Chiamaci",
        href: "tel:041630163",
        variant: "secondary",
      },
    ],
  },

  salzano: {
    title: "Sede Salzano",
    body:
      "Per gli allievi della zona, la sede di Salzano offre la stessa attenzione e il clima familiare che contraddistingue Autoscuola Racing.",
    address: "Via A. de Gasperi, 84, 30030 Salzano (VE)",
    phone: "041 574 6510",
    email: "autoscuolaracing2@libero.it",
    hours: "Lunedì – Venerdì: 9 - 12 e 16.30 - 19.15",
    actions: [
      {
        label: "Scrivici a Salzano",
        href: whatsappLink(
          "393494157836",
          "Ciao Autoscuola Racing Salzano, vorrei ricevere informazioni."
        ),
        variant: "primary",
      },
      {
        label: "Chiamaci",
        href: "tel:0415746510",
        variant: "secondary",
      },
    ],
  },

  medicalNote:
    "Visite mediche in sede: organizziamo regolarmente sessioni con il medico in autoscuola per rinnovi patente e certificati d'idoneità. Contattaci per conoscere la prossima disponibilità.",
};
