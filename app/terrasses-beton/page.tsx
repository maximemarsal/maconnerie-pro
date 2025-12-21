import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Terrasses Béton | Béton Décoratif, Imprimé, Désactivé | Devis Gratuit",
  description:
    "Réalisation de terrasses en béton par artisan maçon : béton classique, décoratif, imprimé, désactivé. Créez un espace extérieur durable et esthétique. Garantie décennale.",
  keywords: [
    "terrasse béton",
    "béton décoratif",
    "béton imprimé",
    "béton désactivé",
    "dalle béton",
    "terrasse extérieure",
    "maçon terrasse",
    "devis terrasse béton",
    "aménagement extérieur",
  ],
  openGraph: {
    title: "Terrasses Béton | Maçonnerie Pro",
    description:
      "Terrasses en béton classique, décoratif ou imprimé. Artisan maçon certifié, garantie décennale.",
    url: "https://maconneriepro.fr/terrasses-beton",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconneriepro.fr/terrasses-beton",
  },
};

const serviceData = {
  title: "Terrasses Béton",
  subtitle: "Béton classique, décoratif, imprimé ou désactivé",
  heroDescription: "Transformez votre extérieur avec une terrasse en béton durable et esthétique. Nos artisans maîtrisent toutes les techniques pour créer l'espace de vos rêves.",
  images: {
    hero: "/images/services/terrasses-beton/hero.jpg",
    gallery: [
      "/images/services/terrasses-beton/terrasse-beton.webp",
      "/images/services/terrasses-beton/terrasse-caniveau.jpg",
      "/images/services/terrasses-beton/hero.jpg",
    ],
  },
  
  whatIsIt: {
    title: "Pourquoi Choisir une Terrasse en Béton ?",
    paragraphs: [
      "La terrasse en béton est le choix privilégié pour aménager un espace extérieur durable, pratique et esthétique. Matériau polyvalent par excellence, le béton offre une résistance exceptionnelle aux intempéries, au gel et à l'usure quotidienne. Correctement réalisée, une terrasse en béton peut durer plusieurs décennies sans entretien majeur.",
      "Au-delà de sa robustesse, le béton offre aujourd'hui une infinité de possibilités décoratives. Le béton imprimé reproduit l'aspect de matériaux nobles comme la pierre, l'ardoise ou le bois. Le béton désactivé laisse apparaître les granulats pour un rendu naturel et antidérapant. Le béton ciré ou lissé apporte une touche contemporaine à votre extérieur.",
      "Notre expertise en terrasses béton couvre toutes les étapes : terrassement, préparation du sol, coffrage, ferraillage, coulage, finitions et traitements de surface. Chaque projet est étudié pour garantir une évacuation des eaux optimale et une parfaite intégration à votre environnement.",
    ],
  },

  prestations: [
    {
      title: "Béton Classique",
      description: "Dalle en béton lissé ou brossé, solution économique et durable. Finition uniforme, possibilité de colorisation dans la masse.",
      icon: "grid",
    },
    {
      title: "Béton Imprimé",
      description: "Reproduction fidèle de la pierre, du pavé ou du bois grâce à des moules. Large choix de motifs et de coloris pour un rendu unique.",
      icon: "layers",
    },
    {
      title: "Béton Désactivé",
      description: "Surface antidérapante laissant apparaître les granulats. Idéal pour les zones de passage et les bords de piscine.",
      icon: "sparkles",
    },
    {
      title: "Béton Ciré Extérieur",
      description: "Finition lisse et contemporaine, traitement hydrofuge et anti-UV. Rendu moderne et élégant pour terrasses design.",
      icon: "paint",
    },
    {
      title: "Dallage sur Plot",
      description: "Pose de dalles béton sur plots réglables. Solution technique pour terrasses sur étanchéité ou passage de réseaux.",
      icon: "layout",
    },
    {
      title: "Escaliers Béton",
      description: "Création d'escaliers extérieurs en béton. Marches coulées sur place ou préfabriquées, garde-corps intégrés.",
      icon: "building",
    },
  ],

  realisations: [
    {
      title: "Terrasse Béton Imprimé 60m²",
      description: "Réalisation d'une terrasse en béton imprimé motif pierre de Bourgogne. Joints creux, traitement anti-mousse, bordures intégrées.",
    },
    {
      title: "Plage de Piscine Désactivé",
      description: "Coulage d'une plage de piscine en béton désactivé granulats clairs. Surface antidérapante, évacuation des eaux optimisée.",
    },
    {
      title: "Dalle Béton avec Pergola",
      description: "Création d'une dalle béton de 45m² avec réservations pour poteaux de pergola. Légère pente pour écoulement, finition brossée.",
    },
  ],

  whyUs: [
    {
      title: "Maîtrise Technique",
      description: "20 ans d'expérience en terrasses béton. Maîtrise parfaite du coulage, des finitions décoratives et des traitements de surface.",
    },
    {
      title: "Bétons de Qualité",
      description: "Approvisionnement auprès de centrales certifiées. Formulations adaptées à chaque usage et aux conditions climatiques locales.",
    },
    {
      title: "Finitions Soignées",
      description: "Attention particulière aux détails : joints de dilatation, pentes d'écoulement, raccords avec l'existant, traitement des bords.",
    },
    {
      title: "Garantie Décennale",
      description: "Tous nos travaux sont couverts par notre assurance décennale. Votre terrasse est garantie contre les malfaçons structurelles.",
    },
  ],

  faqs: [
    {
      question: "Quelle épaisseur pour une terrasse en béton ?",
      answer: "L'épaisseur standard d'une terrasse béton est de 10 à 15 cm. Pour une terrasse carrossable (passage de véhicules), nous préconisons 15 à 20 cm avec ferraillage renforcé. L'épaisseur dépend également de la nature du sol et des charges prévues. Nous étudions chaque projet pour dimensionner correctement votre terrasse.",
    },
    {
      question: "Combien coûte une terrasse en béton ?",
      answer: "Le prix varie selon le type de béton choisi : comptez 50 à 80€/m² pour du béton classique, 80 à 120€/m² pour du béton désactivé, 100 à 150€/m² pour du béton imprimé. Ces tarifs incluent la préparation du sol, le coffrage, le coulage et les finitions. Nous établissons un devis détaillé gratuit après étude de votre projet.",
    },
    {
      question: "Quel délai pour réaliser une terrasse en béton ?",
      answer: "La réalisation d'une terrasse de taille moyenne (30-50m²) prend généralement 3 à 5 jours : 1 jour de préparation et coffrage, 1 jour de coulage, puis 2-3 jours de séchage avant les finitions. Le béton atteint sa résistance optimale après 28 jours, période pendant laquelle nous recommandons de limiter les charges lourdes.",
    },
    {
      question: "Comment entretenir une terrasse en béton ?",
      answer: "L'entretien d'une terrasse béton est minimal : nettoyage régulier à l'eau claire, passage du karcher une fois par an (pression modérée). Pour les bétons décoratifs, nous appliquons un traitement hydrofuge et anti-mousse qu'il convient de renouveler tous les 3 à 5 ans. Évitez les produits acides et le sel de déneigement.",
    },
    {
      question: "Peut-on couler une terrasse béton par temps froid ou chaud ?",
      answer: "Le béton ne doit pas être coulé par temps de gel (en dessous de 5°C) ni en pleine canicule (au-dessus de 35°C). En période froide, nous utilisons des adjuvants antigel et protégeons le béton frais. En été, nous coulons tôt le matin et maintenons le béton humide. Ces précautions garantissent une prise optimale et évitent les fissures.",
    },
  ],
};

export default function TerrasseBetonPage() {
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
