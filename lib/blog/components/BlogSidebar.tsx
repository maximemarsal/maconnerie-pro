"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BlogSidebarProps } from "../types";
import { formatDateShort, stringToColor } from "../utils";

export default function BlogSidebar({
  categories,
  tags,
  recentArticles,
  currentCategory,
  currentTag,
  className = "",
}: BlogSidebarProps) {
  const [isTagsExpanded, setIsTagsExpanded] = useState(false);
  const MAX_VISIBLE_TAGS = 8;
  const hasMoreTags = tags.length > MAX_VISIBLE_TAGS;
  const visibleTags = isTagsExpanded ? tags : tags.slice(0, MAX_VISIBLE_TAGS);

  return (
    <aside className={`space-y-8 ${className}`}>
      {/* Catégories */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </svg>
          Catégories
        </h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/blog?category=${encodeURIComponent(category)}`}
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  currentCategory === category
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
            />
          </svg>
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          <AnimatePresence>
            {visibleTags.map((tag) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <Link
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className={`inline-block px-3 py-1 rounded-full text-sm transition-all ${
                    currentTag === tag
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  #{tag}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Bouton voir plus/moins */}
        {hasMoreTags && (
          <button
            onClick={() => setIsTagsExpanded(!isTagsExpanded)}
            className="mt-4 flex items-center gap-1 text-sm text-primary hover:text-primary-dark font-medium transition-colors"
          >
            {isTagsExpanded ? "Voir moins" : `Voir tous (${tags.length})`}
            <svg
              className={`w-4 h-4 transition-transform ${isTagsExpanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </motion.div>

      {/* Articles récents */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Articles récents
        </h3>
        <ul className="space-y-4">
          {recentArticles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/blog/${article.slug}`}
                className="flex gap-3 group"
              >
                {/* Thumbnail */}
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                  {article.cover ? (
                    <Image
                      src={article.cover}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className={`absolute inset-0 ${stringToColor(article.category)} flex items-center justify-center`}>
                      <svg
                        className="w-6 h-6"
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
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                  <time className="text-xs text-gray-500">
                    {formatDateShort(article.date)}
                  </time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* CTA Newsletter ou Contact */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white"
      >
        <h3 className="text-lg font-bold mb-2">Besoin d&apos;un devis ?</h3>
        <p className="text-white/80 text-sm mb-4">
          Contactez-nous pour tous vos projets de maçonnerie.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-white text-primary px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
        >
          Nous contacter
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </motion.div>
    </aside>
  );
}
