import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalityHero from "@/components/LocalityHero";
import LocalityServices from "@/components/LocalityServices";
import LocalityFAQ from "@/components/LocalityFAQ";
import LocalityContact from "@/components/LocalityContact";

export const metadata: Metadata = {
  title: "Maçon à Aix-en-Provence | Artisan Maçonnerie Bouches-du-Rhône 13 | Devis Gratuit",
  description:
    "Maçon professionnel à Aix-en-Provence et dans les Bouches-du-Rhône (13). Construction murs, terrasses béton, rénovation façades. Artisan RGE, garantie décennale. Devis gratuit sous 24h.",
  keywords: [
    "maçon aix en provence",
    "maçonnerie aix en provence",
    "artisan maçon bouches du rhône",
    "entreprise maçonnerie 13",
    "maçon pays d'aix",
    "travaux maçonnerie aix",
    "construction mur aix en provence",
    "terrasse béton aix",
    "rénovation façade aix en provence",
    "devis maçon aix en provence",
  ],
  openGraph: {
    title: "Maçon à Aix-en-Provence | Artisan Maçonnerie Bouches-du-Rhône 13",
    description:
      "Maçon professionnel à Aix-en-Provence. Construction, rénovation, terrasses. Devis gratuit 24h.",
    url: "https://maconnerie-pro.fr/macon-aix-en-provence",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconnerie-pro.fr/macon-aix-en-provence",
  },
};

const nearbyPages = [
  { name: "Bouches-du-Rhône (13)", href: "/macon-bouches-du-rhone-13" },
  { name: "Marseille", href: "/macon-marseille" },
];

export default function MaconAixEnProvence() {
  return (
    <>
      <Header />
      <main>
        <LocalityHero
          cityName="Aix-en-Provence"
          departmentName="Bouches-du-Rhône"
          departmentCode="13"
          cityPreposition="à"
          deptPreposition="dans les"
        />

        {/* Presentation Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Votre Artisan Maçon à Aix-en-Provence et dans le Pays d&apos;Aix
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Cité du Roy René</h3>
                <p className="text-foreground-light leading-relaxed">
                  Aix-en-Provence, ancienne capitale de la Provence, est une ville d&apos;art et 
                  d&apos;histoire au patrimoine architectural exceptionnel. Notre entreprise de 
                  maçonnerie intervient dans cette cité depuis plus de 20 ans. Des hôtels 
                  particuliers du Cours Mirabeau aux bastides provençales de la campagne aixoise, 
                  nous maîtrisons les techniques traditionnelles et modernes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Pierre de Rognes et enduits à la chaux</h3>
                <p className="text-foreground-light leading-relaxed">
                  L&apos;architecture aixoise se caractérise par l&apos;utilisation de la pierre 
                  de Rognes et des enduits traditionnels à la chaux. Nos artisans maçons 
                  maîtrisent ces savoir-faire ancestraux essentiels pour la rénovation du 
                  bâti ancien. Nous réalisons également des constructions contemporaines 
                  qui s&apos;intègrent harmonieusement dans le paysage provençal.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Intervention dans le Pays d&apos;Aix</h3>
                <p className="text-foreground-light leading-relaxed">
                  Notre équipe couvre l&apos;ensemble du Pays d&apos;Aix : Aix-en-Provence bien sûr, 
                  mais aussi Venelles, Éguilles, Bouc-Bel-Air, Gardanne, Trets et toutes les 
                  communes de la métropole. Nous intervenons également au pied de la 
                  Sainte-Victoire, chère à Cézanne, pour des projets dans un cadre naturel 
                  exceptionnel.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Rénovation énergétique</h3>
                <p className="text-foreground-light leading-relaxed">
                  Le climat méditerranéen d&apos;Aix-en-Provence nécessite une bonne isolation 
                  pour maintenir la fraîcheur en été. Certifiés RGE, nous vous accompagnons 
                  dans vos projets de rénovation énergétique et vous permettons de bénéficier 
                  des aides de l&apos;État. Tous nos travaux sont couverts par notre garantie 
                  décennale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LocalityServices
          cityName="Aix-en-Provence"
          departmentName="Bouches-du-Rhône"
          departmentCode="13"
          cityPreposition="à"
          deptPreposition="dans les"
        />

        {/* Zones Covered Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Zones d&apos;Intervention dans le Pays d&apos;Aix
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Aix-en-Provence",
                "Venelles",
                "Éguilles",
                "Bouc-Bel-Air",
                "Gardanne",
                "Trets",
                "Peynier",
                "Meyreuil",
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
              Et toutes les communes du Pays d&apos;Aix et au pied de la Sainte-Victoire.
            </p>
          </div>
        </section>

        <LocalityFAQ
          cityName="Aix-en-Provence"
          departmentName="Bouches-du-Rhône"
          departmentCode="13"
          cityPreposition="à"
          deptPreposition="dans les"
        />

        <LocalityContact
          cityName="Aix-en-Provence"
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
