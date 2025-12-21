import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalityHero from "@/components/LocalityHero";
import LocalityServices from "@/components/LocalityServices";
import LocalityFAQ from "@/components/LocalityFAQ";
import LocalityContact from "@/components/LocalityContact";

export const metadata: Metadata = {
  title: "Maçon au Mans | Artisan Maçonnerie Sarthe 72 | Devis Gratuit 24h",
  description:
    "Maçon professionnel au Mans et en Sarthe (72). Construction murs, terrasses béton, rénovation façades, extensions. Artisan RGE, garantie décennale. Devis gratuit sous 24h.",
  keywords: [
    "maçon le mans",
    "maçonnerie le mans",
    "artisan maçon sarthe",
    "entreprise maçonnerie 72",
    "maçon sarthe",
    "travaux maçonnerie le mans",
    "construction mur le mans",
    "terrasse béton le mans",
    "rénovation façade le mans",
    "devis maçon le mans",
  ],
  openGraph: {
    title: "Maçon au Mans | Artisan Maçonnerie Sarthe 72",
    description:
      "Maçon professionnel au Mans. Construction, rénovation, terrasses. Devis gratuit sous 24h.",
    url: "https://maconnerie-pro.fr/macon-le-mans",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconnerie-pro.fr/macon-le-mans",
  },
};

const nearbyPages = [
  { name: "Sarthe (72)", href: "/macon-sarthe-72" },
  { name: "La Flèche", href: "/macon-le-mans" },
  { name: "Sablé-sur-Sarthe", href: "/macon-le-mans" },
];

export default function MaconLeMans() {
  return (
    <>
      <Header />
      <main>
        <LocalityHero
          cityName="Le Mans"
          departmentName="Sarthe"
          departmentCode="72"
          cityPreposition="au"
          deptPreposition="en"
        />

        {/* Presentation Section - New Design with Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Votre Artisan Maçon au Mans et en Sarthe
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Une expertise de plus de 20 ans</h3>
                <p className="text-foreground-light leading-relaxed">
                  Implantée au cœur du Mans depuis plus de 20 ans, notre entreprise de maçonnerie 
                  est devenue une référence incontournable pour tous les travaux de gros œuvre et 
                  de rénovation dans le département de la Sarthe (72). Notre équipe d&apos;artisans 
                  maçons qualifiés intervient quotidiennement au Mans et dans toutes les communes 
                  environnantes pour réaliser vos projets de construction et de rénovation.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Patrimoine architectural du Mans</h3>
                <p className="text-foreground-light leading-relaxed">
                  Le Mans, ville historique reconnue pour son patrimoine architectural exceptionnel, 
                  nécessite des compétences spécifiques en maçonnerie. Nos artisans maîtrisent aussi 
                  bien les techniques de construction moderne que les méthodes traditionnelles 
                  indispensables pour la rénovation du bâti ancien. Que votre projet concerne une 
                  maison du vieux Mans ou un pavillon des quartiers résidentiels, nous adaptons nos 
                  techniques à chaque situation.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Connaissance du territoire sarthois</h3>
                <p className="text-foreground-light leading-relaxed">
                  Notre connaissance approfondie du territoire sarthois nous permet d&apos;intervenir 
                  rapidement et efficacement. Nous connaissons les spécificités du sol, les 
                  contraintes urbanistiques locales et les matériaux les mieux adaptés au climat 
                  de la région. Cette expertise locale est un atout majeur pour la réussite de 
                  vos travaux de maçonnerie au Mans.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Certification RGE et aides de l&apos;État</h3>
                <p className="text-foreground-light leading-relaxed">
                  En tant qu&apos;entreprise de maçonnerie certifiée RGE (Reconnu Garant de l&apos;Environnement), 
                  nous vous accompagnons également dans vos projets de rénovation énergétique. 
                  Isolation thermique par l&apos;extérieur, ravalement de façade avec isolation : 
                  bénéficiez des aides de l&apos;État pour améliorer les performances énergétiques 
                  de votre habitation au Mans.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LocalityServices
          cityName="Le Mans"
          departmentName="Sarthe"
          departmentCode="72"
          cityPreposition="au"
          deptPreposition="en"
        />

        {/* Zones Covered Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Zones d&apos;Intervention autour du Mans
            </h2>
            <div className="prose prose-lg max-w-none text-foreground-light mb-8">
              <p>
                Notre entreprise de maçonnerie intervient au Mans et dans l&apos;ensemble du 
                département de la Sarthe (72). Nous couvrons notamment les communes suivantes :
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Le Mans",
                "Allonnes",
                "La Flèche",
                "Sablé-sur-Sarthe",
                "Mamers",
                "Coulaines",
                "La Chapelle-Saint-Aubin",
                "Arnage",
                "Yvré-l'Évêque",
                "Mulsanne",
                "Champagné",
                "Ruaudin",
              ].map((city) => (
                <div
                  key={city}
                  className="bg-background-alt px-4 py-2 rounded-lg text-center text-foreground-light"
                >
                  {city}
                </div>
              ))}
            </div>
            <p className="text-center text-foreground-light mt-8">
              Et toutes les autres communes du département 72. Déplacement gratuit pour devis.
            </p>
          </div>
        </section>

        <LocalityFAQ
          cityName="Le Mans"
          departmentName="Sarthe"
          departmentCode="72"
          cityPreposition="au"
          deptPreposition="en"
        />

        <LocalityContact
          cityName="Le Mans"
          departmentName="Sarthe"
          departmentCode="72"
          cityPreposition="au"
          deptPreposition="en"
          nearbyPages={nearbyPages}
        />
      </main>
      <Footer />
    </>
  );
}
