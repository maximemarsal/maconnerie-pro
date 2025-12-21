import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHubClient from "./ServicesHubClient";

export const metadata: Metadata = {
  title: "Nos Services de Maçonnerie | Construction, Rénovation, Terrasses | Devis Gratuit",
  description:
    "Découvrez tous nos services de maçonnerie : construction de murs, terrasses béton, rénovation de façades, extensions de maison, clôtures et murets, joints et enduits. Artisan RGE, garantie décennale.",
  keywords: [
    "services maçonnerie",
    "construction murs",
    "terrasse béton",
    "rénovation façade",
    "extension maison",
    "clôture muret",
    "joints enduits",
    "artisan maçon",
    "travaux maçonnerie",
    "devis maçonnerie",
  ],
  openGraph: {
    title: "Nos Services de Maçonnerie | Maçonnerie Pro",
    description:
      "Tous nos services de maçonnerie : construction, rénovation, terrasses, extensions. Devis gratuit.",
    url: "https://maconneriepro.fr/services",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconneriepro.fr/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHubClient />
      </main>
      <Footer />
    </>
  );
}
