import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPageClient from "./BlogPageClient";
import { getAllArticles, getAllCategories, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog Maçonnerie | Conseils, Actualités et Guides | Maçonnerie Pro",
  description:
    "Découvrez nos articles de blog sur la maçonnerie : conseils pratiques, guides techniques, actualités du secteur et astuces pour vos projets de construction et rénovation.",
  keywords: [
    "blog maçonnerie",
    "conseils maçonnerie",
    "guides construction",
    "travaux maçonnerie",
    "rénovation maison",
    "construction murs",
    "terrasse béton",
    "façade maison",
  ],
  openGraph: {
    title: "Blog Maçonnerie | Conseils et Guides | Maçonnerie Pro",
    description:
      "Découvrez nos articles de blog sur la maçonnerie : conseils pratiques, guides techniques et actualités du secteur.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function BlogPage() {
  // Récupération des données côté serveur
  const articles = getAllArticles();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <>
      <Header />
      <main className="pt-20">
        <BlogPageClient
          initialArticles={articles}
          categories={categories}
          tags={tags}
        />
      </main>
      <Footer />
    </>
  );
}
