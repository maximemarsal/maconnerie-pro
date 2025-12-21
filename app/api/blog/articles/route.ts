import { NextRequest, NextResponse } from "next/server";
import { getAllArticles, getAllCategories, getAllTags } from "@/lib/blog";
import { BlogFilters } from "@/lib/blog/types";

/**
 * GET /api/blog/articles
 * Récupère la liste des articles avec filtres optionnels
 * 
 * Query params:
 * - category: string (filtre par catégorie)
 * - tag: string (filtre par tag)
 * - search: string (recherche dans titre/excerpt)
 * - limit: number (nombre max d'articles)
 * - offset: number (décalage pour pagination)
 * - withMeta: boolean (inclure catégories et tags disponibles)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const filters: BlogFilters = {};
    
    const category = searchParams.get("category");
    if (category) filters.category = category;
    
    const tag = searchParams.get("tag");
    if (tag) filters.tag = tag;
    
    const search = searchParams.get("search");
    if (search) filters.search = search;
    
    const limit = searchParams.get("limit");
    if (limit) filters.limit = parseInt(limit, 10);
    
    const offset = searchParams.get("offset");
    if (offset) filters.offset = parseInt(offset, 10);
    
    const articles = getAllArticles(filters);
    
    // Optionnel: inclure les métadonnées (catégories, tags)
    const withMeta = searchParams.get("withMeta") === "true";
    
    if (withMeta) {
      return NextResponse.json({
        articles,
        categories: getAllCategories(),
        tags: getAllTags(),
        total: articles.length,
      });
    }
    
    return NextResponse.json({
      articles,
      total: articles.length,
    });
  } catch (error) {
    console.error("Erreur API /api/blog/articles:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des articles" },
      { status: 500 }
    );
  }
}
