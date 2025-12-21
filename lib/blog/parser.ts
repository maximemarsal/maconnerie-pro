/**
 * Blog Parser - Lecture multi-format (MDX, MD, JSON)
 * Utilise gray-matter pour le frontmatter
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Article, ArticleListItem, Frontmatter, BlogFilters } from "./types";
import { calculateReadingTime, sortByDate } from "./utils";

// Chemin vers le dossier des articles
const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

/**
 * Récupère tous les fichiers d'articles du dossier content/blog
 */
export function getArticleFiles(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }
  
  const files = fs.readdirSync(CONTENT_DIR);
  return files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return [".mdx", ".md", ".json"].includes(ext);
  });
}

/**
 * Détermine le format d'un fichier
 */
export function getFileFormat(filename: string): "mdx" | "md" | "json" {
  const ext = path.extname(filename).toLowerCase();
  if (ext === ".mdx") return "mdx";
  if (ext === ".md") return "md";
  return "json";
}

/**
 * Parse un fichier MDX ou MD avec frontmatter
 */
function parseMarkdownFile(filePath: string, filename: string): Article {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const frontmatter = data as Frontmatter;
  
  return {
    title: frontmatter.title || "Sans titre",
    slug: frontmatter.slug || filename.replace(/\.(mdx?|json)$/, ""),
    date: frontmatter.date || new Date().toISOString().split("T")[0],
    category: frontmatter.category || "Non classé",
    tags: frontmatter.tags || [],
    cover: frontmatter.cover,
    excerpt: frontmatter.excerpt || "",
    author: frontmatter.author,
    published: frontmatter.published !== false,
    updatedAt: frontmatter.updatedAt,
    content: content,
    format: getFileFormat(filename),
    filename: filename,
    readingTime: calculateReadingTime(content),
  };
}

/**
 * Parse un fichier JSON
 */
function parseJsonFile(filePath: string, filename: string): Article {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContent);
  
  return {
    title: data.title || "Sans titre",
    slug: data.slug || filename.replace(/\.json$/, ""),
    date: data.date || new Date().toISOString().split("T")[0],
    category: data.category || "Non classé",
    tags: data.tags || [],
    cover: data.cover,
    excerpt: data.excerpt || "",
    author: data.author,
    published: data.published !== false,
    updatedAt: data.updatedAt,
    content: data.content || "",
    format: "json",
    filename: filename,
    readingTime: calculateReadingTime(data.content || ""),
  };
}

/**
 * Parse un fichier article (auto-détection du format)
 */
export function parseArticleFile(filename: string): Article | null {
  const filePath = path.join(CONTENT_DIR, filename);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const format = getFileFormat(filename);
  
  try {
    if (format === "json") {
      return parseJsonFile(filePath, filename);
    } else {
      return parseMarkdownFile(filePath, filename);
    }
  } catch (error) {
    console.error(`Erreur lors du parsing de ${filename}:`, error);
    return null;
  }
}

/**
 * Récupère tous les articles
 */
export function getAllArticles(filters?: BlogFilters): ArticleListItem[] {
  const files = getArticleFiles();
  
  let articles = files
    .map((file) => parseArticleFile(file))
    .filter((article): article is Article => article !== null && article.published)
    .map((article) => ({
      title: article.title,
      slug: article.slug,
      date: article.date,
      category: article.category,
      tags: article.tags,
      cover: article.cover,
      excerpt: article.excerpt,
      author: article.author,
      readingTime: article.readingTime,
    }));
  
  // Tri par date (plus récent en premier)
  articles = sortByDate(articles);
  
  // Filtres
  if (filters?.category) {
    articles = articles.filter(
      (a) => a.category.toLowerCase() === filters.category!.toLowerCase()
    );
  }
  
  if (filters?.tag) {
    articles = articles.filter((a) =>
      a.tags.some((t) => t.toLowerCase() === filters.tag!.toLowerCase())
    );
  }
  
  if (filters?.search) {
    const search = filters.search.toLowerCase();
    articles = articles.filter(
      (a) =>
        a.title.toLowerCase().includes(search) ||
        a.excerpt.toLowerCase().includes(search)
    );
  }
  
  // Pagination
  if (filters?.offset) {
    articles = articles.slice(filters.offset);
  }
  
  if (filters?.limit) {
    articles = articles.slice(0, filters.limit);
  }
  
  return articles;
}

/**
 * Récupère un article par son slug
 */
export function getArticleBySlug(slug: string): Article | null {
  const files = getArticleFiles();
  
  for (const file of files) {
    const article = parseArticleFile(file);
    if (article && article.slug === slug) {
      return article;
    }
  }
  
  return null;
}

/**
 * Récupère tous les slugs (pour generateStaticParams)
 */
export function getAllSlugs(): string[] {
  const files = getArticleFiles();
  
  return files
    .map((file) => parseArticleFile(file))
    .filter((article): article is Article => article !== null && article.published)
    .map((article) => article.slug);
}

/**
 * Récupère toutes les catégories uniques
 */
export function getAllCategories(): string[] {
  const articles = getAllArticles();
  const categories = new Set(articles.map((a) => a.category));
  return Array.from(categories).sort();
}

/**
 * Récupère tous les tags uniques
 */
export function getAllTags(): string[] {
  const articles = getAllArticles();
  const tags = new Set(articles.flatMap((a) => a.tags));
  return Array.from(tags).sort();
}

/**
 * Convertit le contenu Markdown en HTML
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

/**
 * Récupère les articles liés (même catégorie ou tags communs)
 * Si pas assez d'articles liés, complète avec les plus récents
 */
export function getRelatedArticles(
  currentSlug: string,
  limit: number = 3
): ArticleListItem[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return [];
  
  const allArticles = getAllArticles();
  const otherArticles = allArticles.filter((a) => a.slug !== currentSlug);
  
  // Si pas assez d'autres articles, retourne ce qu'on a
  if (otherArticles.length <= limit) {
    return otherArticles;
  }
  
  // Score les articles par pertinence
  const scored = otherArticles
    .map((article) => {
      let score = 0;
      
      // Même catégorie = +3 points
      if (article.category === current.category) {
        score += 3;
      }
      
      // Tags en commun = +1 point par tag
      const commonTags = article.tags.filter((t) =>
        current.tags.includes(t)
      );
      score += commonTags.length;
      
      return { article, score };
    })
    .sort((a, b) => {
      // D'abord par score, puis par date
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.article.date).getTime() - new Date(a.article.date).getTime();
    })
    .slice(0, limit)
    .map((item) => item.article);
  
  return scored;
}
