# Système de Blog

Système de blog modulaire et réutilisable pour Next.js, supportant plusieurs formats de contenu.

## Vue d'ensemble

Le module blog permet de :
- Lire des articles depuis le système de fichiers (MDX, Markdown, JSON)
- Créer/modifier des articles via l'API GitHub
- Afficher des listes d'articles avec filtres et pagination
- Gérer les catégories et tags

## Structure du Dossier `/lib/blog`

```
lib/blog/
├── index.ts           # Export principal (point d'entrée)
├── types.ts           # Interfaces TypeScript
├── parser.ts          # Lecture et parsing des articles
├── github-api.ts      # API GitHub (création d'articles)
├── utils.ts           # Fonctions utilitaires
└── components/        # Composants React
    ├── index.ts
    ├── BlogCard.tsx
    ├── BlogList.tsx
    ├── BlogArticle.tsx
    ├── BlogHeader.tsx
    ├── BlogSidebar.tsx
    └── MDXComponents.tsx
```

## Formats Supportés

### MDX (`.mdx`)

Format recommandé avec support des composants React.

```mdx
---
title: "Mon Article"
slug: "mon-article"
date: "2024-12-20"
category: "Conseils"
tags: ["maçonnerie", "construction"]
cover: "/images/cover.jpg"
excerpt: "Description courte de l'article."
author: "Jean Dupont"
published: true
---

# Contenu de l'article

Texte avec support MDX complet.

<CallToAction />
```

### Markdown (`.md`)

Format classique avec frontmatter YAML.

```md
---
title: "Mon Article"
slug: "mon-article"
date: "2024-12-20"
category: "Conseils"
tags: ["maçonnerie", "construction"]
excerpt: "Description courte."
published: true
---

# Contenu Markdown standard
```

### JSON (`.json`)

Format structuré pour génération programmatique.

```json
{
  "title": "Mon Article",
  "slug": "mon-article",
  "date": "2024-12-20",
  "category": "Conseils",
  "tags": ["maçonnerie", "construction"],
  "excerpt": "Description courte.",
  "published": true,
  "content": "# Contenu de l'article\n\nTexte en Markdown..."
}
```

## Ajouter un Article

### Méthode 1 : Fichier Local

1. Créer un fichier dans `/content/blog/` :

```bash
touch content/blog/mon-nouvel-article.mdx
```

2. Ajouter le frontmatter et le contenu :

```mdx
---
title: "Titre de l'Article"
slug: "titre-de-larticle"
date: "2024-12-20"
category: "Conseils"
tags: ["tag1", "tag2"]
excerpt: "Description pour les listes et le SEO."
published: true
---

Votre contenu ici...
```

### Méthode 2 : API Route

Envoyer une requête POST à `/api/blog/create` :

```javascript
const response = await fetch('/api/blog/create', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    format: 'mdx',
    filename: 'mon-article',
    frontmatter: {
      title: 'Mon Article',
      slug: 'mon-article',
      date: '2024-12-20',
      category: 'Conseils',
      tags: ['tag1'],
      excerpt: 'Description...',
      published: true
    },
    content: '# Contenu...'
  })
});
```

## API GitHub

Le module permet de push des articles directement sur GitHub.

### Configuration

Variables d'environnement requises :

```env
GITHUB_TOKEN=ghp_xxxxx          # Token GitHub avec accès repo
GITHUB_REPO=owner/repo          # Format: owner/repo
GITHUB_BRANCH=main              # Branche cible (défaut: main)
```

### Fonctions Disponibles

```typescript
import { createArticle, deleteArticle, listArticlesOnGitHub } from '@/lib/blog';

// Créer un article
await createArticle({
  format: 'mdx',
  filename: 'mon-article',
  frontmatter: { ... },
  content: '...'
});

// Supprimer un article
await deleteArticle('mon-article.mdx');

// Lister les articles sur GitHub
const files = await listArticlesOnGitHub();
```

## Copier dans un Autre Projet Next.js

### Étape 1 : Copier les fichiers

```bash
# Copier le module blog
cp -r lib/blog/ /path/to/other-project/lib/blog/

# Copier le dossier content
cp -r content/blog/ /path/to/other-project/content/blog/

# Copier les pages (optionnel)
cp -r app/blog/ /path/to/other-project/app/blog/
cp -r app/api/blog/ /path/to/other-project/app/api/blog/
```

### Étape 2 : Installer les dépendances

```bash
cd /path/to/other-project
npm install gray-matter remark remark-html next-mdx-remote @octokit/rest
```

### Étape 3 : Configurer Tailwind Typography (optionnel)

```bash
npm install @tailwindcss/typography
```

Dans `tailwind.config.js` :

```javascript
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

### Étape 4 : Variables d'environnement

Créer `.env.local` avec les variables GitHub si nécessaire.

## Fonctions Utilitaires

```typescript
import {
  slugify,
  formatDate,
  calculateReadingTime,
  sortByDate,
  filterByCategory,
  filterByTag,
  searchArticles,
  paginate
} from '@/lib/blog';

// Générer un slug
slugify("Mon Titre d'Article"); // "mon-titre-darticle"

// Formater une date
formatDate("2024-12-20"); // "20 décembre 2024"

// Temps de lecture
calculateReadingTime(content); // 5 (minutes)

// Pagination
paginate(articles, 1, 10); // { items, total, page, totalPages, hasMore }
```

## Composants React

```typescript
import {
  BlogCard,
  BlogList,
  BlogArticle,
  BlogHeader,
  BlogSidebar
} from '@/lib/blog';

// Carte d'article
<BlogCard article={article} />

// Liste avec filtres
<BlogList articles={articles} showFilters={true} />

// Article complet
<BlogArticle article={article} relatedArticles={related} />
```

## Composants MDX Personnalisés

Disponibles dans les fichiers MDX :

- `<CallToAction />` - Bouton d'appel à l'action
- `<BlogImage src="..." alt="..." />` - Image optimisée
- `<Alert type="info|warning|error">...</Alert>` - Alertes
- `<Quote author="...">...</Quote>` - Citations
- `<YouTube id="..." />` - Vidéos YouTube
- `<CheckList items={[...]} />` - Listes à puces
- `<Stats items={[...]} />` - Statistiques
