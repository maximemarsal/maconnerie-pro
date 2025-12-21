import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalityHero from "@/components/LocalityHero";
import LocalityServices from "@/components/LocalityServices";
import LocalityFAQ from "@/components/LocalityFAQ";
import LocalityContact from "@/components/LocalityContact";

export const metadata: Metadata = {
  title: "Maçon à Oyonnax | Artisan Maçonnerie Ain 01 | Devis Gratuit 24h",
  description:
    "Maçon professionnel à Oyonnax et dans l'Ain (01). Construction murs, terrasses béton, rénovation façades, extensions. Artisan RGE, garantie décennale. Devis gratuit sous 24h dans le Haut-Bugey.",
  keywords: [
    "maçon oyonnax",
    "maçonnerie oyonnax",
    "artisan maçon ain",
    "entreprise maçonnerie 01",
    "maçon haut bugey",
    "travaux maçonnerie oyonnax",
    "construction mur oyonnax",
    "terrasse béton oyonnax",
    "rénovation façade oyonnax",
    "devis maçon oyonnax",
  ],
  openGraph: {
    title: "Maçon à Oyonnax | Artisan Maçonnerie Ain 01",
    description:
      "Maçon professionnel à Oyonnax et Haut-Bugey. Construction, rénovation, terrasses. Devis gratuit sous 24h.",
    url: "https://maconneriepro.fr/macon-oyonnax",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconneriepro.fr/macon-oyonnax",
  },
};

const nearbyPages = [
  { name: "Ain (01)", href: "/macon-ain-01" },
  { name: "Bourg-en-Bresse", href: "/macon-bourg-en-bresse" },
];

export default function MaconOyonnax() {
  return (
    <>
      <Header />
      <main>
        <LocalityHero
          cityName="Oyonnax"
          departmentName="Ain"
          departmentCode="01"
          cityPreposition="à"
          deptPreposition="dans l'"
        />

        {/* Presentation Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Votre Artisan Maçon à Oyonnax et dans le Haut-Bugey
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Capitale de la Plastics Vallée</h3>
                <p className="text-foreground-light leading-relaxed">
                  Oyonnax, deuxième ville de l&apos;Ain, est le cœur économique du Haut-Bugey. 
                  Notre entreprise de maçonnerie intervient dans ce secteur dynamique depuis 
                  plus de 20 ans. Nous accompagnons aussi bien les particuliers que les 
                  professionnels de la Plastics Vallée pour tous leurs projets de construction 
                  et de rénovation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Expertise montagne et climat rigoureux</h3>
                <p className="text-foreground-light leading-relaxed">
                  Située à 500 mètres d&apos;altitude au pied du Jura, Oyonnax connaît des 
                  hivers rigoureux avec d&apos;importantes chutes de neige. Nos maçons maîtrisent 
                  les techniques de construction adaptées à ce climat : fondations renforcées, 
                  isolation performante, matériaux résistants au gel. Chaque réalisation est 
                  conçue pour durer.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Intervention dans le Haut-Bugey</h3>
                <p className="text-foreground-light leading-relaxed">
                  Notre équipe intervient dans toute la communauté d&apos;agglomération du 
                  Haut-Bugey : Oyonnax, Bellignat, Martignat, Groissiat, Arbent, ainsi que 
                  Nantua et son lac. Nous connaissons parfaitement les contraintes urbanistiques 
                  de cette zone de montagne et vous accompagnons dans toutes vos démarches.
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
                  Les hivers froids d&apos;Oyonnax rendent l&apos;isolation thermique primordiale. 
                  Certifiés RGE, nous vous accompagnons dans vos projets de rénovation énergétique 
                  et vous permettons de bénéficier des aides de l&apos;État. Réduisez vos factures 
                  de chauffage grâce à nos solutions d&apos;isolation performantes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LocalityServices
          cityName="Oyonnax"
          departmentName="Ain"
          departmentCode="01"
          cityPreposition="à"
          deptPreposition="dans l'"
        />

        {/* Zones Covered Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Zones d&apos;Intervention dans le Haut-Bugey
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Oyonnax",
                "Bellignat",
                "Martignat",
                "Groissiat",
                "Arbent",
                "Nantua",
                "Montréal-la-Cluse",
                "Izernore",
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
              Et toutes les communes du Haut-Bugey. Déplacement gratuit pour devis.
            </p>
          </div>
        </section>

        <LocalityFAQ
          cityName="Oyonnax"
          departmentName="Ain"
          departmentCode="01"
          cityPreposition="à"
          deptPreposition="dans l'"
        />

        <LocalityContact
          cityName="Oyonnax"
          departmentName="Ain"
          departmentCode="01"
          cityPreposition="à"
          deptPreposition="dans l'"
          nearbyPages={nearbyPages}
        />
      </main>
      <Footer />
    </>
  );
}
