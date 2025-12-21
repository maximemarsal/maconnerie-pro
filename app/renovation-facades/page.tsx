import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Rénovation Façades | Ravalement, Nettoyage, Enduit | Devis Gratuit",
  description:
    "Rénovation et ravalement de façades par artisan maçon : nettoyage, réparation fissures, enduit, peinture. Redonnez vie à votre habitation. Garantie décennale, devis gratuit.",
  keywords: [
    "rénovation façade",
    "ravalement façade",
    "nettoyage façade",
    "enduit façade",
    "peinture façade",
    "réparation fissure",
    "crépi extérieur",
    "isolation extérieure",
    "maçon façade",
  ],
  openGraph: {
    title: "Rénovation Façades | Maçonnerie Pro",
    description:
      "Ravalement et rénovation de façades : nettoyage, enduit, peinture. Artisan certifié RGE.",
    url: "https://maconneriepro.fr/renovation-facades",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconneriepro.fr/renovation-facades",
  },
};

const serviceData = {
  title: "Rénovation Façades",
  subtitle: "Ravalement, nettoyage, enduit et peinture",
  heroDescription: "Redonnez vie à votre habitation avec une façade rénovée. Nos artisans maîtrisent toutes les techniques de ravalement pour un résultat durable et esthétique.",
  images: {
    hero: "/images/services/renovation-facades/hero.png",
    gallery: [
      "/images/services/renovation-facades/facade-1.jpg",
      "/images/services/renovation-facades/facade-2.jpg",
      "/images/services/renovation-facades/hero.png",
    ],
  },
  
  whatIsIt: {
    title: "L'Importance de la Rénovation de Façade",
    paragraphs: [
      "La façade est la première impression que donne votre habitation. Au fil du temps, elle subit les agressions climatiques : pluie, vent, gel, pollution, UV. Ces facteurs provoquent des dégradations visibles (salissures, mousses, fissures) et invisibles (infiltrations, perte d'étanchéité). La rénovation de façade est donc essentielle pour préserver l'intégrité de votre bâtiment.",
      "Au-delà de l'aspect esthétique, le ravalement de façade peut être l'occasion d'améliorer les performances énergétiques de votre habitat. L'isolation thermique par l'extérieur (ITE), réalisée lors du ravalement, permet de réduire significativement vos factures de chauffage tout en supprimant les ponts thermiques.",
      "En tant qu'artisans certifiés RGE, nous vous accompagnons dans vos projets de rénovation énergétique et vous aidons à bénéficier des aides de l'État (MaPrimeRénov', CEE, éco-PTZ). Notre expertise couvre tous les types de façades : pierre, brique, béton, enduit traditionnel ou moderne.",
    ],
  },

  prestations: [
    {
      title: "Nettoyage de Façade",
      description: "Nettoyage haute pression, gommage, sablage ou nettoyage chimique selon le support. Élimination des mousses, lichens et salissures.",
      icon: "sparkles",
    },
    {
      title: "Réparation des Fissures",
      description: "Diagnostic des fissures, traitement adapté (rebouchage, agrafage, injection de résine). Garantie de non-réapparition.",
      icon: "wrench",
    },
    {
      title: "Enduit de Façade",
      description: "Application d'enduits traditionnels (chaux) ou modernes (monocouche). Large choix de finitions : gratté, ribbé, taloché, écrasé.",
      icon: "paint",
    },
    {
      title: "Peinture de Façade",
      description: "Peintures microporeuses, hydrofuges, anti-mousses. Protection durable et embellissement de votre façade.",
      icon: "layers",
    },
    {
      title: "Isolation par l'Extérieur (ITE)",
      description: "Pose d'isolant (polystyrène, laine de roche, fibre de bois) et finition enduit ou bardage. Performances énergétiques optimales.",
      icon: "home",
    },
    {
      title: "Rejointoiement Pierre",
      description: "Réfection des joints de pierre à la chaux. Respect du caractère architectural, perméabilité à la vapeur d'eau préservée.",
      icon: "cube",
    },
  ],

  realisations: [
    {
      title: "Ravalement Maison de Ville",
      description: "Ravalement complet d'une maison de ville : nettoyage, réparation des fissures, enduit monocouche gratté. Transformation radicale en 2 semaines.",
    },
    {
      title: "ITE Maison Années 70",
      description: "Isolation thermique par l'extérieur d'un pavillon. Pose de 14 cm de polystyrène graphité, enduit de finition. Gain énergétique de 40%.",
    },
    {
      title: "Restauration Façade Pierre",
      description: "Restauration d'une façade en pierre de taille : nettoyage doux, rejointoiement à la chaux, traitement hydrofuge. Respect du patrimoine.",
    },
  ],

  whyUs: [
    {
      title: "Certification RGE",
      description: "Artisans certifiés RGE pour vos travaux de rénovation énergétique. Accès aux aides de l'État et crédit d'impôt.",
    },
    {
      title: "Diagnostic Complet",
      description: "Étude approfondie de votre façade avant intervention. Identification des pathologies et proposition de solutions adaptées.",
    },
    {
      title: "Techniques Adaptées",
      description: "Maîtrise des techniques traditionnelles (chaux) et modernes. Respect du caractère architectural de votre bâtiment.",
    },
    {
      title: "Garantie Décennale",
      description: "Tous nos travaux de ravalement sont garantis 10 ans. Protection contre les infiltrations et malfaçons.",
    },
  ],

  faqs: [
    {
      question: "Le ravalement de façade est-il obligatoire ?",
      answer: "Dans de nombreuses communes, le ravalement de façade est obligatoire tous les 10 ans. Cette obligation figure généralement dans le règlement sanitaire départemental. La mairie peut vous mettre en demeure de réaliser les travaux. Au-delà de l'obligation, le ravalement protège votre patrimoine et valorise votre bien.",
    },
    {
      question: "Combien coûte un ravalement de façade ?",
      answer: "Le prix varie selon l'état de la façade et les travaux nécessaires : 30 à 50€/m² pour un simple nettoyage, 50 à 80€/m² pour un ravalement avec enduit, 100 à 180€/m² pour une ITE complète. Nous établissons un devis détaillé après diagnostic de votre façade. Les aides peuvent couvrir jusqu'à 75% du coût d'une ITE.",
    },
    {
      question: "Quelle est la meilleure période pour un ravalement ?",
      answer: "Le printemps et l'automne sont les périodes idéales : températures modérées (entre 10 et 25°C), faible risque de gel et de fortes chaleurs. L'été est possible en évitant les périodes de canicule. Nous adaptons notre planning aux conditions météorologiques pour garantir une prise optimale des enduits.",
    },
    {
      question: "Faut-il un permis pour un ravalement de façade ?",
      answer: "Le ravalement simple nécessite une déclaration préalable de travaux en mairie. Si vous modifiez l'aspect de la façade (couleur, matériaux) ou si vous êtes en zone protégée (ABF), les contraintes sont plus strictes. Nous vous accompagnons dans les démarches administratives.",
    },
    {
      question: "Qu'est-ce que la certification RGE et pourquoi est-elle importante ?",
      answer: "RGE signifie Reconnu Garant de l'Environnement. Cette certification atteste de notre compétence en rénovation énergétique. Elle est obligatoire pour que vous puissiez bénéficier des aides de l'État (MaPrimeRénov', CEE). Choisir un artisan RGE, c'est l'assurance d'un travail de qualité et d'économies sur vos travaux.",
    },
  ],
};

export default function RenovationFacadesPage() {
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
