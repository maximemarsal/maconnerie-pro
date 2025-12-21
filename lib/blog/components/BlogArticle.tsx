"use client";

import Link from "next/link";
import { BlogArticleProps } from "../types";
import BlogHeader from "./BlogHeader";
import BlogCard from "./BlogCard";
import { stringToColor } from "../utils";

interface BlogArticleClientProps extends BlogArticleProps {
  htmlContent: string;
}

export default function BlogArticle({
  article,
  htmlContent,
  relatedArticles = [],
  className = "",
}: BlogArticleClientProps) {
  return (
    <article className={className}>
      {/* Header avec cover */}
      <BlogHeader
        title={article.title}
        excerpt={article.excerpt}
        cover={article.cover}
        date={article.date}
        category={article.category}
        author={article.author}
        readingTime={article.readingTime}
      />

      {/* Contenu */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article content */}
        <div>
          {/* Contenu HTML rendu */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary hover:prose-a:text-primary-dark prose-strong:text-gray-900 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className={`px-3 py-1 rounded-full text-sm ${stringToColor(tag)} hover:opacity-80 transition-opacity`}
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Share */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">
              Partager cet article
            </h4>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: article.title,
                      text: article.excerpt,
                      url: window.location.href,
                    });
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Partager
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Retour au blog
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Continuez votre lecture
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Articles qui pourraient vous plaire
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedArticles.map((related) => (
                <BlogCard
                  key={related.slug}
                  article={related}
                  className="shadow-lg hover:shadow-xl transition-shadow"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Vous avez un projet ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nos artisans maçons sont à votre disposition pour réaliser tous vos
            travaux de maçonnerie. Demandez un devis gratuit dès maintenant.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Demander un devis gratuit
            <svg
              className="w-5 h-5 ml-2"
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
        </div>
      </section>
    </article>
  );
}
