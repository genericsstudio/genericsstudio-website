export const PRICES = {
  webdesign:     { starter: 800,  standard: 1800, premium: 3500 },
  branding:      { logo: 350,     brand: 800,     fullbrand: 1500 },
  graphicdesign: { single: 90,    pack: 280,      studio: 600 },
  hosting:       { starter: 29,   care: 79,       premium: 149, setup: 150 },
} as const;

export type Plan = {
  title: string;
  description: string;
  price: string;
  features: string[];
};

export type PricingSection = {
  plans: Plan[];
};

export const pricing = {
  webdesign: {
    plans: [
      {
        title: "Starter",
        price: `Ab CHF ${PRICES.webdesign.starter}`,
        description: "Ideal für kleine Projekte und einfache Webauftritte.",
        features: [
          "Responsives Webdesign",
          "Bis 5 Seiten",
          "Basis SEO",
          "2 Revisionen",
          "1 Monat Support",
        ],
      },
      {
        title: "Standard",
        price: `Ab CHF ${PRICES.webdesign.standard.toLocaleString("de-CH")}`,
        description: "Fürs Unternehmen mit mehr Anforderungen.",
        features: [
          "Custom Design + Branding Integration",
          "Bis 10 Seiten",
          "CMS + Blog/News",
          "Analytics Integration",
          "Erweitertes SEO",
          "3 Revisionen",
          "2 Monate Support",
        ],
      },
      {
        title: "Premium",
        price: `Ab CHF ${PRICES.webdesign.premium.toLocaleString("de-CH")}`,
        description: "Das voll personalisierte, funktionsreiche Projekt.",
        features: [
          "UX Konzept + Custom UI",
          "Unbegrenzte Seiten",
          "Advanced SEO",
          "Automationen",
          "Security Setup",
          "5 Revisionen",
          "3 Monate Support",
        ],
      },
    ] as Plan[],
    hosting: {
      plans: [
        {
          title: "Starter",
          price: `CHF ${PRICES.hosting.starter} / Mo.`,
          description:
            "Volle technische Betreuung — deine Website läuft sicher, schnell und aktuell.",
          features: [
            "Managed Hosting (SSD, CDN, SSL)",
            "Wöchentliche Backups",
            "Uptime + Sicherheitsmonitoring 24/7",
            "CMS & Plugin-Updates",
            "SEO-Monitoring monatlich",
            "Monatlicher Status-Report",
            "Support (72h)",
          ],
        },
        {
          title: "Care",
          price: `CHF ${PRICES.hosting.care} / Mo.`,
          description:
            "Alles aus Starter plus aktive Pflege und schnellere Reaktionszeit.",
          features: [
            "Alles aus Starter",
            "Tägliche Backups",
            "1h Inhaltsänderungen pro Monat",
            "SEO-Monitoring + monatlicher Bericht",
            "Prioritäts-Support (48h)",
          ],
        },
        {
          title: "Premium",
          price: `CHF ${PRICES.hosting.premium} / Mo.`,
          description:
            "Maximale Betreuung — du konzentrierst dich auf dein Geschäft, wir den Rest.",
          features: [
            "Alles aus Care",
            "4h Inhaltsänderungen pro Monat",
            "SEO-Monitoring laufend + Optimierungen",
            "Monatlicher Analytics-Bericht",
            "Prioritäts-Support (24h)",
          ],
        },
      ] as Plan[],
    },
  },
  branding: {
    plans: [
      {
        title: "Logo",
        price: `Ab CHF ${PRICES.branding.logo}`,
        description:
          "Für alle, die ein professionelles Logo brauchen — nicht mehr, nicht weniger.",
        features: [
          "1 Logo-Konzept",
          "Farb- & Schriftvorschläge",
          "Export in allen Formaten",
          "2 Revisionen",
        ],
      },
      {
        title: "Brand",
        price: `Ab CHF ${PRICES.branding.brand}`,
        description: "Logo + visuelles Fundament für eine konsistente Marke.",
        features: [
          "2–3 Logo-Konzepte",
          "Farbpalette",
          "Typografie Setup",
          "Mini Styleguide (PDF)",
          "3 Revisionen",
        ],
      },
      {
        title: "Full Brand",
        price: `Ab CHF ${PRICES.branding.fullbrand.toLocaleString("de-CH")}`,
        description: "Komplette Markenidentität — von Logo bis Brand Guidelines.",
        features: [
          "Logo Set + Varianten",
          "Farbpalette + Typografie System",
          "Brand Elements & Patterns",
          "Brand Guidelines Dokument",
          "Social Media Assets",
          "5 Revisionen",
        ],
      },
    ] as Plan[],
  },
  graphicdesign: {
    plans: [
      {
        title: "Einzeln",
        price: `Ab CHF ${PRICES.graphicdesign.single}`,
        description:
          "Ein Design, genau das was du brauchst — Flyer, Post, Banner, etc.",
        features: [
          "1 Grafik nach Wahl",
          "Druckfertige Dateien",
          "2 Revisionen",
        ],
      },
      {
        title: "Pack",
        price: `Ab CHF ${PRICES.graphicdesign.pack}`,
        description: "Mehrere Grafiken mit einheitlichem Look.",
        features: [
          "Bis 5 Grafiken",
          "Social Media Templates",
          "Illustrationen optional",
          "3 Revisionen",
        ],
      },
      {
        title: "Studio",
        price: `Ab CHF ${PRICES.graphicdesign.studio}`,
        description: "Volles Grafikpaket für Kampagnen oder regelmässigen Bedarf.",
        features: [
          "Bis 15 Grafiken",
          "Custom Illustrationen",
          "Brand Templates",
          "4 Revisionen",
        ],
      },
    ] as Plan[],
  },
};

export const homePricingItems = [
  {
    title: "Webdesign",
    description: "Massgeschneiderte Websites, moderne UX/UI und schnelle Umsetzung.",
    startingPrice: `Ab ${PRICES.webdesign.starter} CHF`,
    link: "/webdesign",
  },
  {
    title: "Branding",
    description: "Logoentwicklung, Markenidentität und komplette Brand Guidelines.",
    startingPrice: `Ab ${PRICES.branding.logo} CHF`,
    link: "/branding",
  },
  {
    title: "Grafikdesign",
    description: "Social Media Designs, Illustrationen, Werbegrafiken und mehr.",
    startingPrice: `Ab ${PRICES.graphicdesign.single} CHF`,
    link: "/graphicdesign",
  },
];
