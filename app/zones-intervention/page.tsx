import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ZonesHubClient from "./ZonesHubClient";

export const metadata: Metadata = {
  title: "Zones d'Intervention | Maçon Sarthe, Ain, Alpes-Maritimes, Bouches-du-Rhône",
  description:
    "Découvrez toutes nos zones d'intervention en maçonnerie : Sarthe (72), Ain (01), Alpes-Maritimes (06), Bouches-du-Rhône (13). Artisan maçon RGE, garantie décennale. Devis gratuit.",
  keywords: [
    "zones intervention maçon",
    "maçon sarthe",
    "maçon ain",
    "maçon alpes maritimes",
    "maçon bouches du rhône",
    "artisan maçonnerie france",
    "entreprise maçonnerie",
    "devis maçon",
  ],
  openGraph: {
    title: "Zones d'Intervention | Maçonnerie Pro",
    description:
      "Artisan maçon intervenant en Sarthe, Ain, Alpes-Maritimes et Bouches-du-Rhône. Devis gratuit.",
    url: "https://maconneriepro.fr/zones-intervention",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconneriepro.fr/zones-intervention",
  },
};

export default function ZonesInterventionPage() {
  return (
    <>
      <Header />
      <main>
        <ZonesHubClient />
      </main>
      <Footer />
    </>
  );
}
