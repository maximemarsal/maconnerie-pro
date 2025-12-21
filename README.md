# Maçonnerie Pro

Site web d'acquisition de leads pour une entreprise de maçonnerie professionnelle. Optimisé SEO avec pages locales, blog intégré et formulaire de contact.

## Stack Technique

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Blog**: Système multi-format (MDX, Markdown, JSON) avec API GitHub
- **Email**: Nodemailer
- **Déploiement**: Vercel

## Structure du Projet

```
massonerie/
├── app/                    # Pages Next.js (App Router)
│   ├── api/               # Routes API (contact, blog)
│   ├── blog/              # Pages blog dynamiques
│   ├── contact/           # Page contact
│   ├── macon-*/           # Pages locales SEO (villes/départements)
│   ├── services/          # Hub services
│   ├── zones-intervention/# Hub zones géographiques
│   ├── layout.tsx         # Layout racine avec metadata SEO
│   └── page.tsx           # Page d'accueil
├── components/            # Composants React réutilisables
├── content/
│   └── blog/             # Articles de blog (MDX, MD, JSON)
├── lib/
│   └── blog/             # Système de blog réutilisable
├── public/
│   └── images/           # Assets images et logo
└── tailwind.config.js    # Configuration Tailwind
```

## Installation

```bash
# Cloner le repo
git clone https://github.com/your-username/massonerie.git
cd massonerie

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Variables d'Environnement

Créer un fichier `.env.local` à la racine du projet :

```env
# Email (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=destination@email.com

# GitHub API (pour création d'articles blog à distance)
GITHUB_TOKEN=ghp_your_github_token
GITHUB_REPO=owner/repo
GITHUB_BRANCH=main

# Vercel (optionnel - pour rebuild automatique)
VERCEL_DEPLOY_HOOK=https://api.vercel.com/v1/integrations/deploy/...
```

## Scripts

```bash
npm run dev    # Serveur de développement
npm run build  # Build de production
npm run start  # Serveur de production
npm run lint   # Vérification ESLint
```

## Fonctionnalités

### SEO

- Metadata complètes (title, description, keywords)
- Open Graph et Twitter Cards
- JSON-LD (LocalBusiness)
- Sitemap dynamique
- robots.txt

### Pages Locales

- Pages par département (Sarthe 72, Ain 01, Alpes-Maritimes 06, Bouches-du-Rhône 13)
- Pages par ville (Le Mans, Nice, Marseille, etc.)
- Contenu optimisé pour le référencement local

### Blog

- Support multi-format (MDX, Markdown, JSON)
- Catégories et tags
- Articles liés
- API GitHub pour publication à distance
- Composants MDX personnalisés

### Contact

- Formulaire avec validation
- Envoi d'email via Nodemailer
- Feedback utilisateur

## Déploiement

### Vercel (recommandé)

1. Push le code sur GitHub
2. Connecter le repo sur [Vercel](https://vercel.com)
3. Configurer les variables d'environnement
4. Déployer

### Autre hébergeur

```bash
npm run build
npm run start
```

## Licence

Tous droits réservés © Maçonnerie Pro
