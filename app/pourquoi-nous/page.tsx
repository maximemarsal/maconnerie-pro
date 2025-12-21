import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PourquoiNousClient from "./PourquoiNousClient";

export const metadata: Metadata = {
  title: "Pourquoi Nous Choisir | Artisan Maçon Certifié RGE | Garantie Décennale",
  description:
    "Découvrez pourquoi choisir Maçonnerie Pro : 20 ans d'expérience, artisans certifiés RGE, garantie décennale, devis gratuit sous 24h. Qualité et savoir-faire artisanal.",
  keywords: [
    "pourquoi choisir maçon",
    "artisan maçon certifié",
    "maçon RGE",
    "garantie décennale maçonnerie",
    "maçon de confiance",
    "entreprise maçonnerie qualité",
    "artisan maçon expérimenté",
    "maçonnerie professionnelle",
  ],
  openGraph: {
    title: "Pourquoi Nous Choisir | Maçonnerie Pro",
    description:
      "20 ans d'expérience, certification RGE, garantie décennale. Découvrez nos engagements.",
    url: "https://maconneriepro.fr/pourquoi-nous",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconneriepro.fr/pourquoi-nous",
  },
};

export default function PourquoiNousPage() {
  return (
    <>
      <Header />
      <main>
        <PourquoiNousClient />
      </main>
      <Footer />
    </>
  );
}
