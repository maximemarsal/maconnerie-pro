import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalityHero from "@/components/LocalityHero";
import LocalityServices from "@/components/LocalityServices";
import LocalityFAQ from "@/components/LocalityFAQ";
import LocalityContact from "@/components/LocalityContact";

export const metadata: Metadata = {
  title: "Maçon à Nice | Artisan Maçonnerie Alpes-Maritimes 06 | Devis Gratuit",
  description:
    "Maçon professionnel à Nice et dans les Alpes-Maritimes (06). Construction murs, terrasses, rénovation façades. Artisan RGE, garantie décennale. Devis gratuit sous 24h sur la Côte d'Azur.",
  keywords: [
    "maçon nice",
    "maçonnerie nice",
    "artisan maçon alpes maritimes",
    "entreprise maçonnerie 06",
    "maçon côte d'azur",
    "travaux maçonnerie nice",
    "construction mur nice",
    "terrasse béton nice",
    "rénovation façade nice",
    "devis maçon nice",
  ],
  openGraph: {
    title: "Maçon à Nice | Artisan Maçonnerie Alpes-Maritimes 06",
    description:
      "Maçon professionnel à Nice et Côte d'Azur. Construction, rénovation. Devis gratuit 24h.",
    url: "https://maconnerie-pro.fr/macon-nice",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconnerie-pro.fr/macon-nice",
  },
};

const nearbyPages = [
  { name: "Alpes-Maritimes (06)", href: "/macon-alpes-maritimes-06" },
  { name: "Cannes", href: "/macon-nice" },
  { name: "Antibes", href: "/macon-nice" },
  { name: "Marseille", href: "/macon-marseille" },
];

export default function MaconNice() {
  return (
    <>
      <Header />
      <main>
        <LocalityHero
          cityName="Nice"
          departmentName="Alpes-Maritimes"
          departmentCode="06"
          cityPreposition="à"
          deptPreposition="dans les"
        />

        {/* Presentation Section - New Design with Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Votre Artisan Maçon à Nice et sur la Côte d&apos;Azur
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">20 ans d&apos;expérience sur la Côte d&apos;Azur</h3>
                <p className="text-foreground-light leading-relaxed">
                  Notre entreprise de maçonnerie est fière d&apos;intervenir à Nice et sur 
                  l&apos;ensemble de la Côte d&apos;Azur depuis plus de 20 ans. La capitale des 
                  Alpes-Maritimes, avec son climat méditerranéen et son patrimoine architectural 
                  unique, requiert des compétences spécifiques que nos artisans maçons maîtrisent 
                  parfaitement.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Diversité architecturale niçoise</h3>
                <p className="text-foreground-light leading-relaxed">
                  Nice offre une diversité architecturale exceptionnelle : immeubles Belle Époque 
                  de la Promenade des Anglais, villas provençales du Mont Boron, constructions 
                  modernes des quartiers résidentiels. Nos maçons s&apos;adaptent à chaque style 
                  pour réaliser des travaux en parfaite harmonie avec le bâti existant. Nous 
                  maîtrisons les techniques traditionnelles comme les enduits à la chaux.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Matériaux adaptés au climat méditerranéen</h3>
                <p className="text-foreground-light leading-relaxed">
                  Le climat méditerranéen de Nice impose des contraintes spécifiques : chaleur 
                  estivale, embruns marins, pluies parfois intenses. Nos artisans sélectionnent 
                  des matériaux adaptés à ces conditions pour garantir la durabilité de vos 
                  constructions. Terrasses en béton résistant aux UV, murs avec traitement 
                  anti-humidité, façades protégées contre les agressions climatiques.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Rénovation énergétique et aides de l&apos;État</h3>
                <p className="text-foreground-light leading-relaxed">
                  Entreprise de maçonnerie certifiée RGE, nous vous accompagnons dans vos 
                  projets de rénovation énergétique à Nice. L&apos;isolation thermique par 
                  l&apos;extérieur est particulièrement adaptée au climat niçois, permettant 
                  de conserver la fraîcheur en été et de réduire vos factures de climatisation. 
                  Bénéficiez des aides de l&apos;État pour vos travaux.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LocalityServices
          cityName="Nice"
          departmentName="Alpes-Maritimes"
          departmentCode="06"
          cityPreposition="à"
          deptPreposition="dans les"
        />

        {/* Zones Covered Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Zones d&apos;Intervention sur la Côte d&apos;Azur
            </h2>
            <div className="prose prose-lg max-w-none text-foreground-light mb-8">
              <p>
                Notre entreprise de maçonnerie intervient à Nice et dans l&apos;ensemble du 
                département des Alpes-Maritimes (06). Nous couvrons notamment :
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Nice",
                "Cannes",
                "Antibes",
                "Grasse",
                "Menton",
                "Cagnes-sur-Mer",
                "Saint-Laurent-du-Var",
                "Vallauris",
                "Vence",
                "Mougins",
                "Villeneuve-Loubet",
                "Mandelieu",
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
              Et toutes les communes des Alpes-Maritimes, y compris l&apos;arrière-pays.
            </p>
          </div>
        </section>

        <LocalityFAQ
          cityName="Nice"
          departmentName="Alpes-Maritimes"
          departmentCode="06"
          cityPreposition="à"
          deptPreposition="dans les"
        />

        <LocalityContact
          cityName="Nice"
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
