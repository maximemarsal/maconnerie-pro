/**
 * Blog Types - Interfaces pour le système de blog réutilisable
 * Supporte MDX, Markdown et JSON
 */

export interface Author {
  name: string;
  avatar?: string;
  bio?: string;
}

export interface Category {
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface Frontmatter {
  title: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  cover?: string;
  excerpt: string;
  author?: string;
  published?: boolean;
  updatedAt?: string;
}

export interface Article {
  // Frontmatter fields
  title: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  cover?: string;
  excerpt: string;
  author?: string;
  published: boolean;
  updatedAt?: string;
  
  // Content
  content: string;
  
  // Metadata
  format: "mdx" | "md" | "json";
  filename: string;
  readingTime?: number;
}

export interface ArticleListItem {
  title: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  cover?: string;
  excerpt: string;
  author?: string;
  readingTime?: number;
}

export interface BlogFilters {
  category?: string;
  tag?: string;
  search?: string;
  limit?: number;
  offset?: number;
}

export interface CreateArticlePayload {
  format: "mdx" | "md" | "json";
  filename: string;
  frontmatter: Frontmatter;
  content: string;
}

export interface CreateArticleResponse {
  success: boolean;
  message: string;
  slug?: string;
  error?: string;
}

export interface PaginatedArticles {
  articles: ArticleListItem[];
  total: number;
  page: number;
  totalPages: number;
  hasMore: boolean;
}

// Props pour les composants
export interface BlogCardProps {
  article: ArticleListItem;
  className?: string;
}

export interface BlogListProps {
  articles: ArticleListItem[];
  categories?: string[];
  tags?: string[];
  showFilters?: boolean;
  className?: string;
}

export interface BlogArticleProps {
  article: Article;
  relatedArticles?: ArticleListItem[];
  className?: string;
}

export interface BlogHeaderProps {
  title: string;
  excerpt: string;
  cover?: string;
  date: string;
  category: string;
  author?: string;
  readingTime?: number;
  className?: string;
}

export interface BlogSidebarProps {
  categories: string[];
  tags: string[];
  recentArticles: ArticleListItem[];
  currentCategory?: string;
  currentTag?: string;
  className?: string;
}
