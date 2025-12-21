import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Joints et Enduits | Rejointoiement Pierre, Enduit Chaux | Devis Gratuit",
  description:
    "Application de joints et enduits par artisan maçon : rejointoiement de pierres, enduits à la chaux, crépi traditionnel. Finitions soignées, respect du patrimoine. Garantie décennale.",
  keywords: [
    "joints pierre",
    "rejointoiement",
    "enduit chaux",
    "enduit façade",
    "crépi traditionnel",
    "joint à la chaux",
    "maçon enduit",
    "devis enduit",
    "rénovation pierre",
  ],
  openGraph: {
    title: "Joints et Enduits | Maçonnerie Pro",
    description:
      "Joints et enduits traditionnels : rejointoiement pierre, enduit chaux. Artisan maçon certifié.",
    url: "https://maconnerie-pro.fr/joints-enduits",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconnerie-pro.fr/joints-enduits",
  },
};

const serviceData = {
  title: "Joints et Enduits",
  subtitle: "Rejointoiement, enduits traditionnels et modernes",
  heroDescription: "Sublimez vos murs avec des finitions de qualité. Nos artisans maîtrisent l'art des joints et enduits pour un rendu parfait et durable.",
  images: {
    hero: "/images/services/joints-enduits/hero.jpeg",
    gallery: [
      "/images/services/joints-enduits/enduit-1.jpg",
      "/images/services/joints-enduits/joints.jpeg",
      "/images/services/joints-enduits/hero.jpeg",
    ],
  },
  
  whatIsIt: {
    title: "L'Art des Joints et Enduits en Maçonnerie",
    paragraphs: [
      "Les joints et enduits sont les finitions essentielles de tout ouvrage maçonné. Ils assurent l'étanchéité des murs, protègent la maçonnerie des intempéries et contribuent à l'esthétique générale du bâtiment. Un travail de qualité dans ce domaine fait la différence entre un mur ordinaire et un ouvrage remarquable.",
      "Le rejointoiement des murs en pierre est un savoir-faire ancestral que nos artisans perpétuent. L'utilisation de mortiers à la chaux, perméables à la vapeur d'eau, est indispensable pour préserver le bâti ancien. Un joint au ciment sur de la pierre serait une erreur technique causant des désordres à terme (éclatement, infiltrations).",
      "Pour les constructions modernes, nous maîtrisons également les enduits monocouches industriels, plus rapides à appliquer et disponibles dans une large gamme de teintes et finitions. Gratté, ribbé, taloché, écrasé : chaque finition apporte un caractère différent à votre façade. Notre expertise vous guide vers le choix adapté à votre projet.",
    ],
  },

  prestations: [
    {
      title: "Rejointoiement Pierre",
      description: "Dégarni des anciens joints, application de mortier à la chaux. Joints creux, affleurés ou beurrés selon le style souhaité.",
      icon: "cube",
    },
    {
      title: "Enduit à la Chaux",
      description: "Enduit traditionnel en plusieurs couches (gobetis, corps, finition). Chaux aérienne ou hydraulique selon le support.",
      icon: "paint",
    },
    {
      title: "Enduit Monocouche",
      description: "Enduit industriel coloré dans la masse. Application en une ou deux passes, large choix de finitions et coloris.",
      icon: "layers",
    },
    {
      title: "Crépi Traditionnel",
      description: "Application à la tyrolienne ou au balai. Finition rustique pour façades de caractère.",
      icon: "sparkles",
    },
    {
      title: "Enduit Isolant",
      description: "Enduit à base de chaux-chanvre ou chaux-liège. Amélioration thermique et régulation hygrométrique.",
      icon: "home",
    },
    {
      title: "Badigeon et Patine",
      description: "Finitions décoratives à la chaux. Effet ancien, nuances subtiles, protection durable.",
      icon: "check",
    },
  ],

  realisations: [
    {
      title: "Rejointoiement Longère",
      description: "Rejointoiement complet d'une longère en pierre de 150m² de façade. Dégarni à la main, mortier chaux-sable local, finition brossée.",
    },
    {
      title: "Enduit Chaux-Chanvre",
      description: "Application d'un enduit isolant chaux-chanvre sur mur en pierre de 80m². Amélioration thermique de 30%, régulation de l'humidité.",
    },
    {
      title: "Enduit Monocouche Villa",
      description: "Enduit monocouche gratté sur villa neuve de 200m² de façade. Teinte ocre, finition uniforme, délai 1 semaine.",
    },
  ],

  whyUs: [
    {
      title: "Savoir-Faire Traditionnel",
      description: "Maîtrise des techniques anciennes : chaux aérienne, sables locaux, outils traditionnels. Respect du patrimoine bâti.",
    },
    {
      title: "Matériaux Nobles",
      description: "Utilisation de chaux de qualité (Saint-Astier, Lafarge), sables de rivière, pigments naturels. Durabilité garantie.",
    },
    {
      title: "Finitions Sur Mesure",
      description: "Adaptation de la teinte et de la texture au style de votre bâtiment. Échantillons réalisés avant validation.",
    },
    {
      title: "Garantie Décennale",
      description: "Nos travaux d'enduits et joints sont couverts par notre assurance décennale. Protection contre les décollements et infiltrations.",
    },
  ],

  faqs: [
    {
      question: "Pourquoi utiliser la chaux plutôt que le ciment ?",
      answer: "La chaux est perméable à la vapeur d'eau : elle laisse le mur \"respirer\". Le ciment, imperméable, bloque l'humidité dans les murs, provoquant condensation, moisissures et éclatement des pierres par le gel. Pour le bâti ancien (pierre, brique, torchis), la chaux est donc indispensable. Elle est aussi plus souple et absorbe mieux les micro-mouvements.",
    },
    {
      question: "Combien coûte un rejointoiement de mur en pierre ?",
      answer: "Le prix dépend de l'état des joints existants et de la finition souhaitée : 40 à 80€/m² pour un rejointoiement simple, 60 à 100€/m² pour un rejointoiement à pierre vue avec finition soignée. Le dégarni des anciens joints représente une part importante du travail. Devis gratuit après examen du mur.",
    },
    {
      question: "Quelle différence entre chaux aérienne et hydraulique ?",
      answer: "La chaux aérienne (CL) durcit au contact du CO2 de l'air : prise lente, très perméable, idéale pour le bâti ancien. La chaux hydraulique (NHL) durcit au contact de l'eau : prise plus rapide, légèrement moins perméable, adaptée aux zones humides. Nous choisissons le type de chaux selon votre support et les conditions d'exposition.",
    },
    {
      question: "Combien de temps dure un enduit à la chaux ?",
      answer: "Un enduit à la chaux bien réalisé peut durer plus de 100 ans. La longévité des bâtiments anciens le prouve. L'entretien est minimal : un badigeon de chaux tous les 15-20 ans ravive les couleurs et renforce la protection. Évitez les nettoyages agressifs (karcher haute pression) qui érodent la surface.",
    },
    {
      question: "Peut-on appliquer un enduit par temps froid ou pluvieux ?",
      answer: "Non, la température doit être supérieure à 5°C et inférieure à 30°C. Le temps doit être sec, sans pluie annoncée dans les 48h suivant l'application. La chaux a besoin de conditions stables pour carbonater correctement. Nous planifions nos chantiers en fonction de la météo pour garantir un résultat optimal.",
    },
  ],
};

export default function JointsEnduitsPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePageClient {...serviceData} />
      </main>
      <Footer />
    </>
  );
}
