/**
 * GitHub API - Push d'articles via Octokit
 * Permet de créer des articles directement sur le repo GitHub
 */

import { Octokit } from "@octokit/rest";
import { CreateArticlePayload, CreateArticleResponse, Frontmatter } from "./types";
import { generateMarkdownContent, generateJsonContent, slugify } from "./utils";

// Configuration GitHub (à définir dans .env.local)
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO; // Format: "owner/repo"
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";
const CONTENT_PATH = "content/blog";

/**
 * Initialise le client Octokit
 */
function getOctokit(): Octokit {
  if (!GITHUB_TOKEN) {
    throw new Error("GITHUB_TOKEN non défini dans les variables d'environnement");
  }
  
  return new Octokit({
    auth: GITHUB_TOKEN,
  });
}

/**
 * Récupère les infos du repo (owner, repo)
 */
function getRepoInfo(): { owner: string; repo: string } {
  if (!GITHUB_REPO) {
    throw new Error("GITHUB_REPO non défini dans les variables d'environnement");
  }
  
  const [owner, repo] = GITHUB_REPO.split("/");
  if (!owner || !repo) {
    throw new Error("GITHUB_REPO doit être au format 'owner/repo'");
  }
  
  return { owner, repo };
}

/**
 * Génère le contenu du fichier selon le format
 */
function generateFileContent(
  format: "mdx" | "md" | "json",
  frontmatter: Frontmatter,
  content: string
): string {
  if (format === "json") {
    return generateJsonContent({
      ...frontmatter,
      content,
    });
  }
  
  return generateMarkdownContent(frontmatter as Record<string, unknown>, content);
}

/**
 * Génère le nom du fichier
 */
function generateFilename(
  filename: string,
  format: "mdx" | "md" | "json"
): string {
  const slug = slugify(filename);
  return `${slug}.${format}`;
}

/**
 * Vérifie si un fichier existe déjà dans le repo
 */
async function fileExists(
  octokit: Octokit,
  owner: string,
  repo: string,
  path: string
): Promise<{ exists: boolean; sha?: string }> {
  try {
    const { data } = await octokit.repos.getContent({
      owner,
      repo,
      path,
      ref: GITHUB_BRANCH,
    });
    
    if (!Array.isArray(data) && data.type === "file") {
      return { exists: true, sha: data.sha };
    }
    
    return { exists: false };
  } catch (error: unknown) {
    const err = error as { status?: number };
    if (err.status === 404) {
      return { exists: false };
    }
    throw error;
  }
}

/**
 * Crée ou met à jour un article sur GitHub
 */
export async function createArticle(
  payload: CreateArticlePayload
): Promise<CreateArticleResponse> {
  try {
    const octokit = getOctokit();
    const { owner, repo } = getRepoInfo();
    
    // Génère le slug si non fourni
    const slug = payload.frontmatter.slug || slugify(payload.frontmatter.title);
    const frontmatter = { ...payload.frontmatter, slug };
    
    // Génère le nom du fichier et son contenu
    const filename = generateFilename(payload.filename || slug, payload.format);
    const filePath = `${CONTENT_PATH}/${filename}`;
    const fileContent = generateFileContent(payload.format, frontmatter, payload.content);
    
    // Encode le contenu en base64
    const contentBase64 = Buffer.from(fileContent, "utf-8").toString("base64");
    
    // Vérifie si le fichier existe (pour update)
    const { exists, sha } = await fileExists(octokit, owner, repo, filePath);
    
    // Crée ou met à jour le fichier
    const message = exists
      ? `Update article: ${frontmatter.title}`
      : `Add article: ${frontmatter.title}`;
    
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: filePath,
      message,
      content: contentBase64,
      branch: GITHUB_BRANCH,
      ...(sha && { sha }), // Inclut le SHA si c'est une mise à jour
    });
    
    return {
      success: true,
      message: exists ? "Article mis à jour avec succès" : "Article créé avec succès",
      slug,
    };
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error("Erreur lors de la création de l'article:", error);
    
    return {
      success: false,
      message: "Erreur lors de la création de l'article",
      error: err.message || "Erreur inconnue",
    };
  }
}

/**
 * Supprime un article du repo GitHub
 */
export async function deleteArticle(
  filename: string
): Promise<CreateArticleResponse> {
  try {
    const octokit = getOctokit();
    const { owner, repo } = getRepoInfo();
    
    const filePath = `${CONTENT_PATH}/${filename}`;
    
    // Récupère le SHA du fichier
    const { exists, sha } = await fileExists(octokit, owner, repo, filePath);
    
    if (!exists || !sha) {
      return {
        success: false,
        message: "Article non trouvé",
        error: "Le fichier n'existe pas dans le repo",
      };
    }
    
    // Supprime le fichier
    await octokit.repos.deleteFile({
      owner,
      repo,
      path: filePath,
      message: `Delete article: ${filename}`,
      sha,
      branch: GITHUB_BRANCH,
    });
    
    return {
      success: true,
      message: "Article supprimé avec succès",
    };
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error("Erreur lors de la suppression de l'article:", error);
    
    return {
      success: false,
      message: "Erreur lors de la suppression de l'article",
      error: err.message || "Erreur inconnue",
    };
  }
}

/**
 * Liste tous les fichiers d'articles sur GitHub
 */
export async function listArticlesOnGitHub(): Promise<string[]> {
  try {
    const octokit = getOctokit();
    const { owner, repo } = getRepoInfo();
    
    const { data } = await octokit.repos.getContent({
      owner,
      repo,
      path: CONTENT_PATH,
      ref: GITHUB_BRANCH,
    });
    
    if (!Array.isArray(data)) {
      return [];
    }
    
    return data
      .filter((file) => {
        const ext = file.name.split(".").pop()?.toLowerCase();
        return ["mdx", "md", "json"].includes(ext || "");
      })
      .map((file) => file.name);
  } catch (error: unknown) {
    const err = error as { status?: number };
    if (err.status === 404) {
      return [];
    }
    throw error;
  }
}

/**
 * Déclenche un rebuild Vercel (optionnel)
 * Nécessite VERCEL_DEPLOY_HOOK en variable d'environnement
 */
export async function triggerVercelRebuild(): Promise<boolean> {
  const deployHook = process.env.VERCEL_DEPLOY_HOOK;
  
  if (!deployHook) {
    console.log("VERCEL_DEPLOY_HOOK non défini, rebuild ignoré");
    return false;
  }
  
  try {
    const response = await fetch(deployHook, { method: "POST" });
    return response.ok;
  } catch (error) {
    console.error("Erreur lors du déclenchement du rebuild:", error);
    return false;
  }
}
