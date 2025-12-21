import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  getArticleBySlug,
  getAllSlugs,
  markdownToHtml,
  getRelatedArticles,
} from "@/lib/blog";
import { BlogArticle } from "@/lib/blog/components";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Génération statique des pages
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Métadonnées dynamiques
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article non trouvé | Maçonnerie Pro",
    };
  }

  return {
    title: `${article.title} | Blog Maçonnerie Pro`,
    description: article.excerpt,
    keywords: [article.category, ...article.tags, "maçonnerie", "blog"],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.updatedAt || article.date,
      authors: article.author ? [article.author] : undefined,
      images: article.cover ? [article.cover] : undefined,
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.cover ? [article.cover] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Convertit le contenu Markdown en HTML
  const htmlContent = await markdownToHtml(article.content);

  // Récupère les articles liés
  const relatedArticles = getRelatedArticles(slug, 2);

  // Structured Data pour SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: article.cover,
    datePublished: article.date,
    dateModified: article.updatedAt || article.date,
    author: {
      "@type": "Person",
      name: article.author || "Maçonnerie Pro",
    },
    publisher: {
      "@type": "Organization",
      name: "Maçonnerie Pro",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/blog/${slug}`,
    },
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <BlogArticle
          article={article}
          htmlContent={htmlContent}
          relatedArticles={relatedArticles}
        />
      </main>
      <Footer />
    </>
  );
}
