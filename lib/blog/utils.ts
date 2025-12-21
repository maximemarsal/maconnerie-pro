/**
 * Blog Utils - Helpers réutilisables
 */

import { ArticleListItem } from "./types";

/**
 * Génère un slug à partir d'un texte
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
    .replace(/[^a-z0-9]+/g, "-") // Remplace les caractères spéciaux par des tirets
    .replace(/(^-|-$)+/g, ""); // Supprime les tirets en début/fin
}

/**
 * Formate une date en français
 */
export function formatDate(
  dateString: string,
  options?: Intl.DateTimeFormatOptions
): string {
  const date = new Date(dateString);
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  return date.toLocaleDateString("fr-FR", options || defaultOptions);
}

/**
 * Formate une date courte (ex: "18 déc. 2024")
 */
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Calcule le temps de lecture estimé
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Trie les articles par date (plus récent en premier)
 */
export function sortByDate<T extends { date: string }>(items: T[]): T[] {
  return [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Filtre les articles par catégorie
 */
export function filterByCategory(
  articles: ArticleListItem[],
  category: string
): ArticleListItem[] {
  return articles.filter(
    (a) => a.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Filtre les articles par tag
 */
export function filterByTag(
  articles: ArticleListItem[],
  tag: string
): ArticleListItem[] {
  return articles.filter((a) =>
    a.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Recherche dans les articles
 */
export function searchArticles(
  articles: ArticleListItem[],
  query: string
): ArticleListItem[] {
  const search = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(search) ||
      a.excerpt.toLowerCase().includes(search) ||
      a.category.toLowerCase().includes(search) ||
      a.tags.some((t) => t.toLowerCase().includes(search))
  );
}

/**
 * Pagine les résultats
 */
export function paginate<T>(
  items: T[],
  page: number = 1,
  perPage: number = 10
): { items: T[]; total: number; page: number; totalPages: number; hasMore: boolean } {
  const total = items.length;
  const totalPages = Math.ceil(total / perPage);
  const offset = (page - 1) * perPage;
  const paginatedItems = items.slice(offset, offset + perPage);
  
  return {
    items: paginatedItems,
    total,
    page,
    totalPages,
    hasMore: page < totalPages,
  };
}

/**
 * Compte les articles par catégorie
 */
export function countByCategory(
  articles: ArticleListItem[]
): Record<string, number> {
  return articles.reduce((acc, article) => {
    acc[article.category] = (acc[article.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}

/**
 * Compte les articles par tag
 */
export function countByTag(
  articles: ArticleListItem[]
): Record<string, number> {
  return articles.reduce((acc, article) => {
    article.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);
}

/**
 * Génère une couleur cohérente à partir d'un texte (pour les tags/catégories)
 */
export function stringToColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const colors = [
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-yellow-100 text-yellow-800",
    "bg-purple-100 text-purple-800",
    "bg-pink-100 text-pink-800",
    "bg-indigo-100 text-indigo-800",
    "bg-red-100 text-red-800",
    "bg-orange-100 text-orange-800",
    "bg-teal-100 text-teal-800",
    "bg-cyan-100 text-cyan-800",
  ];
  
  return colors[Math.abs(hash) % colors.length];
}

/**
 * Tronque un texte à une longueur donnée
 */
export function truncate(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

/**
 * Génère le frontmatter MDX/MD à partir d'un objet
 */
export function generateFrontmatter(data: Record<string, unknown>): string {
  const lines = ["---"];
  
  for (const [key, value] of Object.entries(data)) {
    if (value === undefined || value === null) continue;
    
    if (Array.isArray(value)) {
      lines.push(`${key}: [${value.map((v) => `"${v}"`).join(", ")}]`);
    } else if (typeof value === "string") {
      lines.push(`${key}: "${value}"`);
    } else if (typeof value === "boolean") {
      lines.push(`${key}: ${value}`);
    } else {
      lines.push(`${key}: ${value}`);
    }
  }
  
  lines.push("---");
  return lines.join("\n");
}

/**
 * Génère le contenu complet d'un fichier MDX/MD
 */
export function generateMarkdownContent(
  frontmatter: Record<string, unknown>,
  content: string
): string {
  return `${generateFrontmatter(frontmatter)}\n\n${content}`;
}

/**
 * Génère le contenu d'un fichier JSON
 */
export function generateJsonContent(data: Record<string, unknown>): string {
  return JSON.stringify(data, null, 2);
}
