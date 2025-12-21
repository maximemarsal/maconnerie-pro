import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalityHero from "@/components/LocalityHero";
import LocalityServices from "@/components/LocalityServices";
import LocalityFAQ from "@/components/LocalityFAQ";
import LocalityContact from "@/components/LocalityContact";

export const metadata: Metadata = {
  title: "Maçon à Cannes | Artisan Maçonnerie Alpes-Maritimes 06 | Devis Gratuit",
  description:
    "Maçon professionnel à Cannes et sur la Côte d'Azur (06). Construction murs, terrasses, rénovation façades. Artisan RGE, garantie décennale. Devis gratuit sous 24h.",
  keywords: [
    "maçon cannes",
    "maçonnerie cannes",
    "artisan maçon alpes maritimes",
    "entreprise maçonnerie 06",
    "maçon côte d'azur",
    "travaux maçonnerie cannes",
    "construction mur cannes",
    "terrasse béton cannes",
    "rénovation façade cannes",
    "devis maçon cannes",
  ],
  openGraph: {
    title: "Maçon à Cannes | Artisan Maçonnerie Alpes-Maritimes 06",
    description:
      "Maçon professionnel à Cannes et Côte d'Azur. Construction, rénovation. Devis gratuit 24h.",
    url: "https://maconneriepro.fr/macon-cannes",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconneriepro.fr/macon-cannes",
  },
};

const nearbyPages = [
  { name: "Alpes-Maritimes (06)", href: "/macon-alpes-maritimes-06" },
  { name: "Nice", href: "/macon-nice" },
];

export default function MaconCannes() {
  return (
    <>
      <Header />
      <main>
        <LocalityHero
          cityName="Cannes"
          departmentName="Alpes-Maritimes"
          departmentCode="06"
          cityPreposition="à"
          deptPreposition="dans les"
        />

        {/* Presentation Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Votre Artisan Maçon à Cannes et dans le Pays de Lérins
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Capitale mondiale du cinéma</h3>
                <p className="text-foreground-light leading-relaxed">
                  Cannes, ville de prestige internationalement reconnue, possède un patrimoine 
                  immobilier d&apos;exception. Notre entreprise de maçonnerie intervient à Cannes 
                  depuis plus de 20 ans, sur les somptueuses villas de La Californie, les 
                  immeubles de standing de La Croisette ou les propriétés du Super-Cannes. 
                  Nous maîtrisons les exigences de qualité propres à cette ville d&apos;exception.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Architecture Belle Époque et moderne</h3>
                <p className="text-foreground-light leading-relaxed">
                  Du quartier historique du Suquet aux constructions contemporaines, Cannes 
                  offre une diversité architecturale remarquable. Nos artisans maîtrisent 
                  aussi bien les techniques traditionnelles (enduits à la chaux, pierres de 
                  taille) que les méthodes modernes de construction. Chaque projet est 
                  réalisé dans le respect du style architectural de la ville.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Climat méditerranéen idéal</h3>
                <p className="text-foreground-light leading-relaxed">
                  Le climat méditerranéen de Cannes, avec plus de 300 jours de soleil par an, 
                  impose des contraintes spécifiques. Nos maçons utilisent des matériaux 
                  résistants aux UV et à la chaleur, des systèmes de drainage performants et 
                  des enduits adaptés au bord de mer. Vos terrasses et façades sont conçues 
                  pour résister aux embruns et au soleil intense.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Excellence et garanties</h3>
                <p className="text-foreground-light leading-relaxed">
                  À Cannes, l&apos;exigence de qualité est une évidence. Nos artisans certifiés 
                  RGE garantissent des prestations haut de gamme couvertes par notre garantie 
                  décennale. Nous vous accompagnons également pour bénéficier des aides de 
                  l&apos;État dans vos projets de rénovation énergétique.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LocalityServices
          cityName="Cannes"
          departmentName="Alpes-Maritimes"
          departmentCode="06"
          cityPreposition="à"
          deptPreposition="dans les"
        />

        {/* Zones Covered Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Zones d&apos;Intervention autour de Cannes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Cannes",
                "Le Cannet",
                "Mougins",
                "Mandelieu",
                "Vallauris",
                "Antibes",
                "Théoule-sur-Mer",
                "Mouans-Sartoux",
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
              Et toutes les communes du Pays de Lérins et du Moyen-Pays.
            </p>
          </div>
        </section>

        <LocalityFAQ
          cityName="Cannes"
          departmentName="Alpes-Maritimes"
          departmentCode="06"
          cityPreposition="à"
          deptPreposition="dans les"
        />

        <LocalityContact
          cityName="Cannes"
          departmentName="Alpes-Maritimes"
          departmentCode="06"
          cityPreposition="à"
          deptPreposition="dans les"
          nearbyPages={nearbyPages}
        />
      </main>
      <Footer />
    </>
  );
}
