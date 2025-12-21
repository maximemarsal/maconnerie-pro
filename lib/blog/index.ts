/**
 * Blog Module - Export principal
 * 
 * Ce module est conçu pour être facilement copié et réutilisé
 * dans d'autres projets Next.js
 * 
 * Usage:
 * 1. Copier le dossier /lib/blog/ dans votre projet
 * 2. Créer le dossier /content/blog/ pour vos articles
 * 3. Créer les pages /app/blog/ 
 * 4. Configurer les variables d'environnement GitHub
 */

// Types
export * from "./types";

// Parser (lecture des articles)
export {
  getArticleFiles,
  getFileFormat,
  parseArticleFile,
  getAllArticles,
  getArticleBySlug,
  getAllSlugs,
  getAllCategories,
  getAllTags,
  markdownToHtml,
  getRelatedArticles,
} from "./parser";

// GitHub API (création d'articles)
export {
  createArticle,
  deleteArticle,
  listArticlesOnGitHub,
  triggerVercelRebuild,
} from "./github-api";

// Utils
export {
  slugify,
  formatDate,
  formatDateShort,
  calculateReadingTime,
  sortByDate,
  filterByCategory,
  filterByTag,
  searchArticles,
  paginate,
  countByCategory,
  countByTag,
  stringToColor,
  truncate,
  generateFrontmatter,
  generateMarkdownContent,
  generateJsonContent,
} from "./utils";

// Components
export {
  BlogCard,
  BlogList,
  BlogArticle,
  BlogHeader,
  BlogSidebar,
  mdxComponents,
  CallToAction,
  BlogImage,
  Alert,
  Quote,
  YouTube,
  CheckList,
  Stats,
} from "./components";
