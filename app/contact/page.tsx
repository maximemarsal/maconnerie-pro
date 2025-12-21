import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact | Demande de Devis Maçonnerie | Réponse sous 24h",
  description:
    "Contactez Maçonnerie Pro pour tous vos projets de maçonnerie. Devis gratuit sous 24h, déplacement gratuit. Artisan certifié RGE, garantie décennale.",
  keywords: [
    "contact maçon",
    "devis maçonnerie",
    "demande devis maçon",
    "contact artisan maçon",
    "devis gratuit maçonnerie",
    "contacter maçon",
    "devis travaux maçonnerie",
  ],
  openGraph: {
    title: "Contact | Maçonnerie Pro",
    description:
      "Demandez un devis gratuit pour vos travaux de maçonnerie. Réponse sous 24h.",
    url: "https://maconneriepro.fr/contact",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconneriepro.fr/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactPageClient />
      </main>
      <Footer />
    </>
  );
}
