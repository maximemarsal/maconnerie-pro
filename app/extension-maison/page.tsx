import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Extension Maison | Agrandissement, Surélévation | Devis Gratuit",
  description:
    "Extension et agrandissement de maison par artisan maçon : extension latérale, surélévation, véranda maçonnée. Gagnez de l'espace sans déménager. Garantie décennale.",
  keywords: [
    "extension maison",
    "agrandissement maison",
    "surélévation maison",
    "extension latérale",
    "véranda maçonnée",
    "ajout étage",
    "maçon extension",
    "devis extension",
    "construction extension",
  ],
  openGraph: {
    title: "Extension Maison | Maçonnerie Pro",
    description:
      "Extension et agrandissement de maison. Artisan maçon certifié, garantie décennale.",
    url: "https://maconnerie-pro.fr/extension-maison",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconnerie-pro.fr/extension-maison",
  },
};

const serviceData = {
  title: "Extension Maison",
  subtitle: "Agrandissement, surélévation, véranda maçonnée",
  heroDescription: "Gagnez de l'espace sans déménager grâce à nos solutions d'extension sur mesure. Nos artisans réalisent votre projet d'agrandissement dans le respect de l'existant.",
  images: {
    hero: "/images/services/extension-maison/hero.webp",
    gallery: [
      "/images/services/extension-maison/extension-1.jpg",
      "/images/services/extension-maison/extension-2.jpg",
      "/images/services/extension-maison/hero.webp",
    ],
  },
  
  whatIsIt: {
    title: "Pourquoi Agrandir Votre Maison ?",
    paragraphs: [
      "L'extension de maison est la solution idéale lorsque votre habitation devient trop petite pour vos besoins : arrivée d'un enfant, besoin d'un bureau, création d'une suite parentale, aménagement d'une pièce de vie plus grande. Plutôt que de déménager avec tous les coûts et contraintes associés, l'extension vous permet de rester dans votre quartier tout en adaptant votre logement.",
      "Plusieurs solutions existent selon la configuration de votre terrain et de votre maison : l'extension latérale exploite le jardin, la surélévation ajoute un étage sur une construction existante, l'excavation crée des pièces en sous-sol. Chaque projet nécessite une étude technique approfondie pour garantir la solidité de l'ensemble et le respect des règles d'urbanisme.",
      "Notre expertise en maçonnerie nous permet de réaliser des extensions parfaitement intégrées à votre habitation existante. Nous assurons la jonction entre l'ancien et le nouveau, la reprise en sous-œuvre si nécessaire, et garantissons l'étanchéité et l'isolation de l'ensemble. Votre extension bénéficie de notre garantie décennale.",
    ],
  },

  prestations: [
    {
      title: "Extension Latérale",
      description: "Agrandissement au sol sur le terrain disponible. Construction de nouveaux murs, toiture plate ou en pente, liaison avec l'existant.",
      icon: "expand",
    },
    {
      title: "Surélévation",
      description: "Ajout d'un étage partiel ou complet. Étude de la structure existante, renforcement si nécessaire, création de l'accès.",
      icon: "building",
    },
    {
      title: "Véranda Maçonnée",
      description: "Construction d'une véranda avec soubassement maçonné. Muret périphérique, seuils, intégration des baies vitrées.",
      icon: "home",
    },
    {
      title: "Aménagement Sous-Sol",
      description: "Excavation et création de pièces en sous-sol. Cuvelage, drainage, ventilation. Idéal pour studio, cave à vin, home cinéma.",
      icon: "layers",
    },
    {
      title: "Garage Attenant",
      description: "Construction d'un garage accolé à la maison. Fondations, murs, dalle, toiture. Possibilité d'aménagement ultérieur.",
      icon: "grid",
    },
    {
      title: "Liaison Ancien/Nouveau",
      description: "Création des ouvertures entre l'existant et l'extension. Pose de linteaux, reprise des réseaux, finitions intérieures.",
      icon: "layout",
    },
  ],

  realisations: [
    {
      title: "Extension 40m² Plain-Pied",
      description: "Construction d'une extension de 40m² pour créer une suite parentale et un bureau. Toiture plate végétalisée, baies coulissantes, raccordement parfait à l'existant.",
    },
    {
      title: "Surélévation Partielle",
      description: "Ajout de 2 chambres par surélévation au-dessus du garage. Renforcement de la structure, escalier intérieur, isolation renforcée.",
    },
    {
      title: "Véranda sur Muret",
      description: "Réalisation d'un muret de soubassement pour accueillir une véranda de 25m². Intégration parfaite avec la façade existante en pierre.",
    },
  ],

  whyUs: [
    {
      title: "Étude Technique Complète",
      description: "Analyse de la structure existante, étude de sol, dimensionnement des fondations. Votre projet est sécurisé dès la conception.",
    },
    {
      title: "Coordination de Chantier",
      description: "Gestion de l'ensemble des intervenants : terrassier, charpentier, couvreur. Un seul interlocuteur pour tout votre projet.",
    },
    {
      title: "Respect de l'Existant",
      description: "Raccordement soigné entre l'ancien et le nouveau. Harmonie architecturale, étanchéité parfaite, isolation continue.",
    },
    {
      title: "Garantie Décennale",
      description: "Votre extension est couverte par notre assurance décennale. Structure, étanchéité, solidité garanties 10 ans.",
    },
  ],

  faqs: [
    {
      question: "Quelle autorisation pour une extension de maison ?",
      answer: "Pour une extension de moins de 40m² (ou 20m² hors zone urbaine PLU), une déclaration préalable suffit. Au-delà, un permis de construire est obligatoire. Si la surface totale après extension dépasse 150m², le recours à un architecte devient obligatoire. Nous vous accompagnons dans les démarches administratives.",
    },
    {
      question: "Combien coûte une extension de maison ?",
      answer: "Le prix d'une extension varie selon la complexité : 1200 à 1800€/m² pour une extension simple, 1500 à 2500€/m² pour une surélévation (plus technique). Ces tarifs incluent le gros œuvre, la toiture et la mise hors d'eau. L'aménagement intérieur (isolation, placo, électricité) est en supplément.",
    },
    {
      question: "Peut-on vivre dans la maison pendant les travaux ?",
      answer: "Dans la plupart des cas, oui. L'extension se construit d'abord de manière indépendante. La liaison avec l'existant (percement des murs, création d'ouvertures) est réalisée en fin de chantier. Nous organisons les travaux pour minimiser les nuisances et sécuriser les zones de vie.",
    },
    {
      question: "Quelle fondation pour une extension ?",
      answer: "Le type de fondation dépend de la nature du sol et du projet. En général, nous réalisons des semelles filantes ou un radier béton. Si le sol est de mauvaise qualité, des micropieux peuvent être nécessaires. Une étude de sol (G2) est recommandée pour les projets importants.",
    },
    {
      question: "Comment assurer la continuité thermique entre l'ancien et le nouveau ?",
      answer: "La jonction entre l'extension et l'existant est un point critique. Nous traitons les ponts thermiques par une isolation continue (par l'extérieur ou l'intérieur). L'étanchéité à l'air est assurée par des bandes d'arase et des membranes adaptées. L'extension respecte la RT2012/RE2020.",
    },
  ],
};

export default function ExtensionMaisonPage() {
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
