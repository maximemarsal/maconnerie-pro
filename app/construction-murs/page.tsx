import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Construction de Murs | Maçon Professionnel | Murs Porteurs, Pierre, Parpaing",
  description:
    "Construction de murs par artisan maçon professionnel : murs porteurs, murs de refend, murs en pierre, parpaings, briques. Garantie décennale, devis gratuit sous 24h.",
  keywords: [
    "construction mur",
    "mur porteur",
    "mur de refend",
    "mur en pierre",
    "mur parpaing",
    "mur brique",
    "maçon mur",
    "construction maçonnerie",
    "devis mur",
    "artisan maçon",
  ],
  openGraph: {
    title: "Construction de Murs | Maçonnerie Pro",
    description:
      "Construction de tous types de murs : porteurs, pierre, parpaings. Artisan maçon certifié, garantie décennale.",
    url: "https://maconneriepro.fr/construction-murs",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconneriepro.fr/construction-murs",
  },
};

const serviceData = {
  title: "Construction de Murs",
  subtitle: "Murs porteurs, en pierre, parpaings ou briques",
  heroDescription: "Nos artisans maçons construisent tous types de murs avec précision et savoir-faire. Du mur porteur au mur décoratif, nous garantissons solidité et durabilité pour votre projet.",
  images: {
    hero: "/images/services/construction-murs/hero.png",
    gallery: [
      "/images/services/construction-murs/mur-brique.jpg",
      "/images/services/construction-murs/macon-mur.jpg",
      "/images/services/construction-murs/hero.png",
    ],
  },
  
  whatIsIt: {
    title: "Qu'est-ce que la Construction de Murs ?",
    paragraphs: [
      "La construction de murs est l'une des activités fondamentales de la maçonnerie. Elle consiste à ériger des structures verticales servant de séparation, de soutien ou de protection. Chaque type de mur répond à des besoins spécifiques et nécessite des techniques de mise en œuvre adaptées.",
      "Un mur porteur supporte le poids de la structure supérieure (toiture, étages) et doit être dimensionné en conséquence. Un mur de refend, également porteur, divise l'espace intérieur tout en assurant une fonction structurelle. Les murs de clôture, quant à eux, délimitent et protègent votre propriété.",
      "Le choix des matériaux (pierre naturelle, parpaing, brique, béton cellulaire) dépend de nombreux facteurs : contraintes structurelles, isolation thermique et phonique souhaitée, esthétique recherchée, budget disponible. Notre expertise vous guide vers la solution optimale pour votre projet.",
    ],
  },

  prestations: [
    {
      title: "Murs Porteurs",
      description: "Construction de murs structurels supportant les charges de la toiture et des étages. Dimensionnement précis, ferraillage adapté, respect des normes sismiques.",
      icon: "building",
    },
    {
      title: "Murs de Refend",
      description: "Murs intérieurs porteurs divisant l'espace tout en assurant la stabilité de l'ensemble. Intégration des passages de porte et réseaux.",
      icon: "layout",
    },
    {
      title: "Murs en Pierre",
      description: "Construction traditionnelle en pierre de taille ou moellons. Maçonnerie à joints fins ou apparents selon le style architectural souhaité.",
      icon: "cube",
    },
    {
      title: "Murs en Parpaing",
      description: "Solution économique et performante pour tous types de constructions. Parpaings creux ou pleins, avec isolation intégrée ou rapportée.",
      icon: "grid",
    },
    {
      title: "Murs en Brique",
      description: "Briques traditionnelles, monomur ou briques de parement. Excellentes performances thermiques et esthétique chaleureuse.",
      icon: "layers",
    },
    {
      title: "Murs de Soutènement",
      description: "Ouvrages retenant les terres sur terrains en pente. Calcul des poussées, drainage, réalisation en béton armé ou gabions.",
      icon: "shield",
    },
  ],

  realisations: [
    {
      title: "Construction Neuve",
      description: "Élévation des murs d'une maison individuelle de 120m² en parpaings avec chaînages béton. Respect du plan architecte et des délais.",
    },
    {
      title: "Extension en Pierre",
      description: "Agrandissement d'une longère en pierre de pays. Raccord parfait avec l'existant, respect du caractère architectural traditionnel.",
    },
    {
      title: "Mur de Soutènement",
      description: "Réalisation d'un mur de soutènement de 25m linéaires en béton armé sur terrain pentu. Drainage et barbacanes intégrés.",
    },
  ],

  whyUs: [
    {
      title: "Expertise Technique",
      description: "Plus de 20 ans d'expérience dans la construction de murs. Maîtrise de toutes les techniques, du traditionnel au moderne.",
    },
    {
      title: "Matériaux de Qualité",
      description: "Sélection rigoureuse des matériaux auprès de fournisseurs reconnus. Parpaings normés, mortiers adaptés, aciers certifiés.",
    },
    {
      title: "Respect des Normes",
      description: "Construction conforme aux DTU et normes en vigueur. Prise en compte des exigences parasismiques selon la zone géographique.",
    },
    {
      title: "Garantie Décennale",
      description: "Tous nos travaux de construction sont couverts par notre assurance décennale. Votre investissement est protégé sur le long terme.",
    },
  ],

  faqs: [
    {
      question: "Quelle est la différence entre un mur porteur et un mur de refend ?",
      answer: "Un mur porteur supporte les charges venant de la toiture ou des étages supérieurs et se situe généralement en périphérie du bâtiment. Un mur de refend est également porteur mais se trouve à l'intérieur du bâtiment, divisant l'espace tout en participant à la stabilité de l'ensemble. Les deux nécessitent un dimensionnement précis par un professionnel.",
    },
    {
      question: "Quel matériau choisir pour construire un mur ?",
      answer: "Le choix dépend de plusieurs critères : la pierre offre cachet et durabilité mais coûte plus cher ; le parpaing est économique et polyvalent ; la brique monomur assure d'excellentes performances thermiques ; le béton cellulaire combine légèreté et isolation. Nous vous conseillons en fonction de votre projet, budget et contraintes techniques.",
    },
    {
      question: "Combien de temps dure la construction d'un mur ?",
      answer: "La durée dépend de la longueur, la hauteur et le type de mur. En moyenne, comptez 2 à 3 jours pour un mur de clôture de 10m linéaires, 1 à 2 semaines pour les murs d'une extension, plusieurs semaines pour une maison complète. Nous vous communiquons un planning détaillé lors du devis.",
    },
    {
      question: "Faut-il un permis de construire pour un mur ?",
      answer: "Cela dépend de la nature et des dimensions du mur. Un mur de clôture de moins de 2m ne nécessite généralement qu'une déclaration préalable. Les murs porteurs d'une construction neuve ou extension sont inclus dans le permis de construire global. Nous vous accompagnons dans les démarches administratives.",
    },
    {
      question: "Comment se déroule un chantier de construction de mur ?",
      answer: "Les étapes principales sont : 1) Préparation du terrain et traçage, 2) Réalisation des fondations ou semelles, 3) Montage des premiers rangs avec réglage de niveau, 4) Élévation progressive avec incorporation des chaînages, 5) Finitions (enduit, rejointoiement). Nous assurons un suivi rigoureux à chaque étape.",
    },
  ],
};

export default function ConstructionMursPage() {
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
