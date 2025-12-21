import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Clôtures et Murets | Murs de Clôture, Piliers, Soutènement | Devis Gratuit",
  description:
    "Construction de clôtures et murets par artisan maçon : murs de clôture, piliers, murs de soutènement. Délimitez et sécurisez votre propriété. Garantie décennale.",
  keywords: [
    "clôture maçonnée",
    "mur de clôture",
    "muret jardin",
    "pilier portail",
    "mur de soutènement",
    "clôture béton",
    "maçon clôture",
    "devis clôture",
    "muret pierre",
  ],
  openGraph: {
    title: "Clôtures et Murets | Maçonnerie Pro",
    description:
      "Construction de clôtures et murets : murs, piliers, soutènement. Artisan maçon certifié.",
    url: "https://maconneriepro.fr/clotures-murets",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconneriepro.fr/clotures-murets",
  },
};

const serviceData = {
  title: "Clôtures et Murets",
  subtitle: "Murs de clôture, piliers, soutènement",
  heroDescription: "Délimitez et sécurisez votre propriété avec des clôtures et murets durables. Nos artisans réalisent des ouvrages esthétiques et résistants au temps.",
  images: {
    hero: "/images/services/clotures-murets/hero.jpg",
    gallery: [
      "/images/services/clotures-murets/cloture-1.jpg",
      "/images/services/clotures-murets/portail.png",
      "/images/services/clotures-murets/hero.jpg",
    ],
  },
  
  whatIsIt: {
    title: "L'Importance d'une Clôture Maçonnée",
    paragraphs: [
      "La clôture maçonnée est bien plus qu'une simple délimitation de propriété. Elle assure la sécurité de votre terrain, préserve votre intimité et valorise votre bien immobilier. Contrairement aux clôtures légères (grillage, bois), un mur maçonné offre une durabilité exceptionnelle et nécessite peu d'entretien.",
      "Les possibilités esthétiques sont nombreuses : mur plein en parpaings enduits, muret surmonté d'une grille, alternance de piliers et claustras, mur en pierre apparente. Le choix dépend de vos préférences, du style architectural de votre maison et des règles d'urbanisme locales. Notre expertise vous guide vers la solution optimale.",
      "Au-delà de la clôture périphérique, nous réalisons également des murs de soutènement pour les terrains en pente, des murets de jardin pour structurer vos espaces extérieurs, et des piliers pour portails et portillons. Chaque ouvrage est dimensionné et construit selon les règles de l'art pour garantir sa pérennité.",
    ],
  },

  prestations: [
    {
      title: "Murs de Clôture",
      description: "Murs pleins en parpaings, briques ou béton. Hauteur adaptée à vos besoins, finition enduit ou parement pierre.",
      icon: "grid",
    },
    {
      title: "Murets avec Grille",
      description: "Soubassement maçonné surmonté d'une clôture métallique. Combinaison sécurité et transparence visuelle.",
      icon: "layout",
    },
    {
      title: "Piliers de Portail",
      description: "Construction de piliers pour portail battant ou coulissant. Ferraillage, gaines électriques, chapeau décoratif.",
      icon: "building",
    },
    {
      title: "Murs de Soutènement",
      description: "Ouvrages retenant les terres sur terrains pentus. Béton armé, barbacanes de drainage, calcul des poussées.",
      icon: "shield",
    },
    {
      title: "Murets Décoratifs",
      description: "Petits murs de jardin pour structurer vos espaces : massifs, terrasses, allées. Pierre, brique ou béton.",
      icon: "sparkles",
    },
    {
      title: "Murs en Pierre",
      description: "Clôtures traditionnelles en pierre locale ou de parement. Montage à joints fins ou maçonnés, couronnement adapté.",
      icon: "cube",
    },
  ],

  realisations: [
    {
      title: "Clôture 45m Linéaires",
      description: "Construction d'un mur de clôture de 1,80m de haut sur 45m. Parpaings de 20, enduit gratté, chapeau béton. Portail et portillon intégrés.",
    },
    {
      title: "Mur de Soutènement 3m",
      description: "Réalisation d'un mur de soutènement de 3m de haut en béton banché. Ferraillage calculé, barbacanes tous les 3m, escalier intégré.",
    },
    {
      title: "Piliers pour Portail Coulissant",
      description: "Construction de 2 piliers en pierre de taille pour portail coulissant motorisé. Gaines électriques, éclairage intégré, interphone.",
    },
  ],

  whyUs: [
    {
      title: "Étude du Terrain",
      description: "Analyse des pentes, nature du sol, mitoyenneté. Dimensionnement adapté aux contraintes de votre terrain.",
    },
    {
      title: "Respect des Règles",
      description: "Connaissance des PLU locaux et règles de mitoyenneté. Votre clôture est conforme aux réglementations en vigueur.",
    },
    {
      title: "Finitions Soignées",
      description: "Couronnement, chapeaux, piliers décoratifs. Chaque détail est travaillé pour un rendu esthétique irréprochable.",
    },
    {
      title: "Garantie Décennale",
      description: "Votre clôture maçonnée est couverte par notre assurance décennale. Solidité et stabilité garanties 10 ans.",
    },
  ],

  faqs: [
    {
      question: "Quelle hauteur maximale pour un mur de clôture ?",
      answer: "La hauteur maximale dépend du règlement local (PLU). En général, elle est limitée à 2m en limite de propriété. Des dérogations existent selon les zones (3,20m en zone urbaine de certaines communes). Nous consultons le PLU de votre commune et vous conseillons sur la hauteur autorisée.",
    },
    {
      question: "Faut-il une autorisation pour construire un mur de clôture ?",
      answer: "Une déclaration préalable de travaux est généralement nécessaire pour tout mur de clôture visible depuis la voie publique. En zone protégée (ABF), les contraintes sont plus strictes. Pour les murs de soutènement de plus de 2m, un permis de construire peut être requis. Nous vous accompagnons dans les démarches.",
    },
    {
      question: "Combien coûte un mur de clôture maçonné ?",
      answer: "Le prix dépend de la hauteur, des matériaux et des finitions : 150 à 250€/mètre linéaire pour un mur en parpaings enduit de 1,50m, 300 à 500€/ml pour un mur en pierre, 400 à 800€/ml pour un mur de soutènement en béton armé. Devis gratuit sur site.",
    },
    {
      question: "Comment est construite la fondation d'un mur de clôture ?",
      answer: "La fondation est dimensionnée selon la hauteur du mur et la nature du sol. En général, nous réalisons une semelle filante de 40 à 60 cm de large et 30 à 50 cm de profondeur, ferraillée et coulée hors gel. Pour les murs de soutènement, la semelle peut être en T renversé.",
    },
    {
      question: "Peut-on construire un mur en limite de propriété ?",
      answer: "Oui, vous pouvez construire un mur en limite de propriété (mur privatif) ou en mitoyenneté avec l'accord du voisin. Les règles de mitoyenneté définissent les droits et obligations de chaque partie. Nous vous conseillons sur le cadre juridique et pouvons réaliser un bornage si nécessaire.",
    },
  ],
};

export default function CloturesMuretsPage() {
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
