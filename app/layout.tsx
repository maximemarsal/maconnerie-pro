import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maconneriepro.fr"),
  title: {
    default: "Maconnerie Professionnelle | Devis Gratuit 72, 01, 06, 13 | Artisan Macon Expert",
    template: "%s | Maconnerie Pro",
  },
  description:
    "Expert en maconnerie depuis plus de 20 ans. Construction de murs, terrasses beton, renovation de facade, extension maison. Devis gratuit sous 24h. Artisans certifies RGE avec garantie decennale. Intervention en Sarthe (72), Ain (01), Alpes-Maritimes (06) et Bouches-du-Rhone (13).",
  keywords: [
    "macon professionnel",
    "entreprise maconnerie",
    "artisan macon",
    "construction mur",
    "terrasse beton",
    "renovation facade",
    "extension maison",
    "devis maconnerie gratuit",
    "macon Sarthe",
    "macon Le Mans",
    "macon Ain",
    "macon Alpes-Maritimes",
    "macon Nice",
    "macon Marseille",
    "macon Bouches-du-Rhone",
    "travaux maconnerie",
    "cloture muret",
    "enduit facade",
    "garantie decennale",
    "artisan RGE",
  ],
  authors: [{ name: "Maconnerie Pro" }],
  creator: "Maconnerie Pro",
  publisher: "Maconnerie Pro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://maconneriepro.fr",
    siteName: "Maconnerie Pro",
    title: "Maconnerie Professionnelle | Artisan Macon Expert depuis 20 ans",
    description:
      "Expert en maconnerie : construction murs, terrasses beton, renovation facade. Devis gratuit sous 24h. Intervention 72, 01, 06, 13.",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Maconnerie Pro - Logo",
      },
      {
        url: "/images/Masonry Trade Image 1200x800.webp",
        width: 1200,
        height: 800,
        alt: "Travaux de maconnerie professionnelle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maconnerie Professionnelle | Artisan Macon Expert",
    description:
      "Expert en maconnerie depuis 20 ans. Devis gratuit sous 24h. Intervention Sarthe, Ain, Alpes-Maritimes, Bouches-du-Rhone.",
    images: ["/images/Masonry Trade Image 1200x800.webp"],
  },
  alternates: {
    canonical: "https://maconneriepro.fr",
  },
  verification: {
    google: "verification_token",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://maconneriepro.fr",
  name: "Maconnerie Pro",
  description:
    "Expert en maconnerie depuis plus de 20 ans. Construction de murs, terrasses beton, renovation de facade, extension maison. Artisans certifies RGE avec garantie decennale.",
  url: "https://maconneriepro.fr",
  telephone: "+33600000000",
  email: "maxime.marsal18@gmail.com",
  image: "https://maconneriepro.fr/images/Masonry Trade Image 1200x800.webp",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "FR",
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Sarthe (72)",
    },
    {
      "@type": "AdministrativeArea",
      name: "Ain (01)",
    },
    {
      "@type": "AdministrativeArea",
      name: "Alpes-Maritimes (06)",
    },
    {
      "@type": "AdministrativeArea",
      name: "Bouches-du-Rhone (13)",
    },
  ],
  serviceType: [
    "Construction de murs",
    "Terrasse beton",
    "Renovation facade",
    "Extension maison",
    "Clotures et murets",
    "Joints et enduits",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de maconnerie",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Devis gratuit",
          description: "Devis gratuit sous 24h pour tous vos travaux de maconnerie",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1HLVM83WG4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1HLVM83WG4');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
