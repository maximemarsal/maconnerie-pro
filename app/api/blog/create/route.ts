import { NextRequest, NextResponse } from "next/server";
import { createArticle, triggerVercelRebuild } from "@/lib/blog";
import { CreateArticlePayload, Frontmatter } from "@/lib/blog/types";
import { slugify } from "@/lib/blog/utils";

/**
 * POST /api/blog/create
 * Crée un nouvel article en le pushant sur GitHub
 * 
 * Body:
 * {
 *   format: "mdx" | "md" | "json",
 *   filename: string (optionnel, sinon généré depuis le titre),
 *   frontmatter: {
 *     title: string,
 *     slug?: string (optionnel, sinon généré depuis le titre),
 *     date?: string (optionnel, sinon date du jour),
 *     category: string,
 *     tags: string[],
 *     cover?: string,
 *     excerpt: string,
 *     author?: string,
 *     published?: boolean (default: true)
 *   },
 *   content: string
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des champs requis
    if (!body.format || !["mdx", "md", "json"].includes(body.format)) {
      return NextResponse.json(
        { error: "Format invalide. Utilisez 'mdx', 'md' ou 'json'" },
        { status: 400 }
      );
    }
    
    if (!body.frontmatter?.title) {
      return NextResponse.json(
        { error: "Le titre est requis (frontmatter.title)" },
        { status: 400 }
      );
    }
    
    if (!body.frontmatter?.category) {
      return NextResponse.json(
        { error: "La catégorie est requise (frontmatter.category)" },
        { status: 400 }
      );
    }
    
    if (!body.frontmatter?.excerpt) {
      return NextResponse.json(
        { error: "L'extrait est requis (frontmatter.excerpt)" },
        { status: 400 }
      );
    }
    
    if (!body.content) {
      return NextResponse.json(
        { error: "Le contenu est requis (content)" },
        { status: 400 }
      );
    }
    
    // Construction du payload
    const frontmatter: Frontmatter = {
      title: body.frontmatter.title,
      slug: body.frontmatter.slug || slugify(body.frontmatter.title),
      date: body.frontmatter.date || new Date().toISOString().split("T")[0],
      category: body.frontmatter.category,
      tags: body.frontmatter.tags || [],
      cover: body.frontmatter.cover,
      excerpt: body.frontmatter.excerpt,
      author: body.frontmatter.author,
      published: body.frontmatter.published !== false,
    };
    
    const payload: CreateArticlePayload = {
      format: body.format,
      filename: body.filename || frontmatter.slug,
      frontmatter,
      content: body.content,
    };
    
    // Création de l'article via GitHub API
    const result = await createArticle(payload);
    
    if (result.success) {
      // Déclenche un rebuild Vercel si configuré
      await triggerVercelRebuild();
      
      return NextResponse.json({
        success: true,
        message: result.message,
        slug: result.slug,
        url: `/blog/${result.slug}`,
      });
    }
    
    return NextResponse.json(
      {
        success: false,
        error: result.error || result.message,
      },
      { status: 500 }
    );
  } catch (error) {
    console.error("Erreur API /api/blog/create:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création de l'article" },
      { status: 500 }
    );
  }
}
