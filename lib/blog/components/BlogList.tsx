"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { BlogListProps } from "../types";
import BlogCard from "./BlogCard";

export default function BlogList({
  articles,
  showFilters = true,
  className = "",
}: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrage des articles par recherche uniquement
  const filteredArticles = useMemo(() => {
    let result = [...articles];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query) ||
          a.category.toLowerCase().includes(query) ||
          a.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    return result;
  }, [articles, searchQuery]);

  return (
    <div className={className}>
      {/* Barre de recherche */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-4 px-6 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>
      )}

      {/* Résultats */}
      <div className="mb-6">
        <p className="text-gray-600">
          {filteredArticles.length} article{filteredArticles.length > 1 ? "s" : ""}
          {searchQuery && ` pour "${searchQuery}"`}
        </p>
      </div>

      {/* Grille d'articles */}
      {filteredArticles.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <svg
            className="w-16 h-16 text-gray-300 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Aucun article trouvé
          </h3>
          <p className="text-gray-500 mb-4">
            Essayez de modifier vos critères de recherche
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="text-primary hover:text-primary-dark font-medium"
          >
            Voir tous les articles
          </button>
        </motion.div>
      )}
    </div>
  );
}
