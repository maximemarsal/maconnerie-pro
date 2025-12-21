"use client";

import { motion } from "framer-motion";
import { BlogList, BlogSidebar } from "@/lib/blog/components";
import { ArticleListItem } from "@/lib/blog/types";

interface BlogPageClientProps {
  initialArticles: ArticleListItem[];
  categories: string[];
  tags: string[];
}

export default function BlogPageClient({
  initialArticles,
  categories,
  tags,
}: BlogPageClientProps) {
  // Articles récents pour la sidebar (3 derniers)
  const recentArticles = initialArticles.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-white/20">
              Notre expertise partagée
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Blog Maçonnerie
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Conseils d&apos;experts, guides pratiques et actualités du secteur
              de la maçonnerie. Découvrez nos articles pour réussir tous vos
              projets de construction et rénovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Articles List */}
            <div className="lg:col-span-2">
              {initialArticles.length > 0 ? (
                <BlogList
                  articles={initialArticles}
                  categories={categories}
                  tags={tags}
                  showFilters={true}
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20 bg-white rounded-2xl shadow-lg"
                >
                  <svg
                    className="w-20 h-20 text-gray-300 mx-auto mb-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  <h2 className="text-2xl font-bold text-gray-700 mb-4">
                    Aucun article pour le moment
                  </h2>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Notre blog est en cours de préparation. Revenez bientôt pour
                    découvrir nos premiers articles !
                  </p>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar
                categories={categories}
                tags={tags}
                recentArticles={recentArticles}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Votre source d&apos;informations sur la maçonnerie
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Notre blog est dédié à tous ceux qui s&apos;intéressent aux
              travaux de maçonnerie, que vous soyez particulier souhaitant
              entreprendre des rénovations ou professionnel du bâtiment. Nous
              partageons régulièrement des articles sur les techniques de
              construction, les matériaux innovants, les réglementations en
              vigueur et les bonnes pratiques du métier.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nos artisans maçons expérimentés vous livrent leurs conseils pour
              réussir vos projets : construction de murs, réalisation de
              terrasses en béton, rénovation de façades, extensions de maison et
              bien plus encore. Chaque article est rédigé avec soin pour vous
              apporter des informations fiables et pratiques.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
