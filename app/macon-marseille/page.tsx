import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalityHero from "@/components/LocalityHero";
import LocalityServices from "@/components/LocalityServices";
import LocalityFAQ from "@/components/LocalityFAQ";
import LocalityContact from "@/components/LocalityContact";

export const metadata: Metadata = {
  title: "Maçon à Marseille | Artisan Maçonnerie Bouches-du-Rhône 13 | Devis Gratuit",
  description:
    "Maçon professionnel à Marseille et dans les Bouches-du-Rhône (13). Construction murs, terrasses béton, rénovation façades. Artisan RGE, garantie décennale. Devis gratuit sous 24h.",
  keywords: [
    "maçon marseille",
    "maçonnerie marseille",
    "artisan maçon bouches du rhône",
    "entreprise maçonnerie 13",
    "maçon aix en provence",
    "travaux maçonnerie marseille",
    "construction mur marseille",
    "terrasse béton marseille",
    "rénovation façade marseille",
    "devis maçon marseille",
  ],
  openGraph: {
    title: "Maçon à Marseille | Artisan Maçonnerie Bouches-du-Rhône 13",
    description:
      "Maçon professionnel à Marseille. Construction, rénovation, terrasses. Devis gratuit 24h.",
    url: "https://maconneriepro.fr/macon-marseille",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconneriepro.fr/macon-marseille",
  },
};

const nearbyPages = [
  { name: "Bouches-du-Rhône (13)", href: "/macon-bouches-du-rhone-13" },
  { name: "Aix-en-Provence", href: "/macon-marseille" },
  { name: "Nice", href: "/macon-nice" },
];

export default function MaconMarseille() {
  return (
    <>
      <Header />
      <main>
        <LocalityHero
          cityName="Marseille"
          departmentName="Bouches-du-Rhône"
          departmentCode="13"
          cityPreposition="à"
          deptPreposition="dans les"
        />

        {/* Presentation Section - New Design with Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Votre Artisan Maçon à Marseille et en Provence
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">La cité phocéenne, un territoire passionnant</h3>
                <p className="text-foreground-light leading-relaxed">
                  Deuxième ville de France, Marseille est un territoire passionnant pour un 
                  artisan maçon. Notre entreprise de maçonnerie intervient dans la cité phocéenne 
                  et l&apos;ensemble des Bouches-du-Rhône depuis plus de 20 ans, avec une 
                  expertise reconnue dans les travaux de construction et de rénovation adaptés 
                  au bâti méditerranéen.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Richesse architecturale marseillaise</h3>
                <p className="text-foreground-light leading-relaxed">
                  Marseille présente une richesse architecturale unique. Les immeubles haussmanniens 
                  du centre-ville, les bastides provençales des collines, les constructions contemporaines 
                  des quartiers en développement. Nos maçons maîtrisent toutes les techniques 
                  nécessaires pour intervenir sur ces différents types de bâtiments. La pierre 
                  de Cassis, les enduits traditionnels à la chaux : nous maîtrisons l&apos;ensemble 
                  des savoir-faire essentiels.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Adaptation au climat provençal</h3>
                <p className="text-foreground-light leading-relaxed">
                  Le climat provençal, avec son ensoleillement exceptionnel et ses épisodes de 
                  mistral, impose des contraintes spécifiques. Nos artisans sélectionnent des 
                  matériaux adaptés : bétons résistants à la chaleur, enduits respirants, 
                  systèmes de drainage efficaces. Chaque construction est conçue pour résister 
                  aux conditions climatiques méditerranéennes sur le long terme.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Rénovation énergétique sous le soleil</h3>
                <p className="text-foreground-light leading-relaxed">
                  Certifiés RGE (Reconnu Garant de l&apos;Environnement), nous accompagnons 
                  les Marseillais dans leurs projets de rénovation énergétique. L&apos;isolation 
                  thermique par l&apos;extérieur, particulièrement efficace sous le soleil de 
                  Marseille, vous permet de maintenir la fraîcheur en été tout en réalisant 
                  des économies substantielles. Bénéficiez des aides de l&apos;État.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LocalityServices
          cityName="Marseille"
          departmentName="Bouches-du-Rhône"
          departmentCode="13"
          cityPreposition="à"
          deptPreposition="dans les"
        />

        {/* Zones Covered Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Zones d&apos;Intervention dans les Bouches-du-Rhône
            </h2>
            <div className="prose prose-lg max-w-none text-foreground-light mb-8">
              <p>
                Notre entreprise de maçonnerie intervient à Marseille et dans l&apos;ensemble 
                du département des Bouches-du-Rhône (13). Nous couvrons notamment :
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Marseille",
                "Aix-en-Provence",
                "Arles",
                "Martigues",
                "Aubagne",
                "Salon-de-Provence",
                "Istres",
                "La Ciotat",
                "Vitrolles",
                "Marignane",
                "Cassis",
                "Allauch",
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
              Et toutes les communes des Bouches-du-Rhône. Déplacement gratuit pour devis.
            </p>
          </div>
        </section>

        <LocalityFAQ
          cityName="Marseille"
          departmentName="Bouches-du-Rhône"
          departmentCode="13"
          cityPreposition="à"
          deptPreposition="dans les"
        />

        <LocalityContact
          cityName="Marseille"
          departmentName="Bouches-du-Rhône"
          departmentCode="13"
          cityPreposition="à"
          deptPreposition="dans les"
          nearbyPages={nearbyPages}
        />
      </main>
      <Footer />
    </>
  );
}
