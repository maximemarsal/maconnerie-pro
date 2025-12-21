import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalityHero from "@/components/LocalityHero";
import LocalityServices from "@/components/LocalityServices";
import LocalityFAQ from "@/components/LocalityFAQ";
import LocalityContact from "@/components/LocalityContact";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maçon dans les Bouches-du-Rhône 13 | Entreprise Maçonnerie Marseille Aix | Devis Gratuit",
  description:
    "Entreprise de maçonnerie dans les Bouches-du-Rhône (13). Intervention à Marseille, Aix-en-Provence, Arles. Construction, terrasses, façades. Artisan RGE. Devis gratuit en Provence.",
  keywords: [
    "maçon bouches du rhône",
    "maçonnerie bouches du rhône 13",
    "artisan maçon 13",
    "entreprise maçonnerie provence",
    "maçon marseille",
    "maçon aix en provence",
    "travaux maçonnerie 13",
    "construction mur bouches du rhône",
    "terrasse béton marseille",
    "devis maçon 13",
  ],
  openGraph: {
    title: "Maçon dans les Bouches-du-Rhône 13 | Entreprise Maçonnerie Provence",
    description:
      "Entreprise de maçonnerie en Provence. Construction, rénovation. Devis gratuit.",
    url: "https://maconnerie-pro.fr/macon-bouches-du-rhone-13",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconnerie-pro.fr/macon-bouches-du-rhone-13",
  },
};

const nearbyPages = [
  { name: "Marseille", href: "/macon-marseille" },
  { name: "Nice", href: "/macon-nice" },
];

const communes = [
  "Marseille", "Aix-en-Provence", "Arles", "Martigues", "Aubagne",
  "Salon-de-Provence", "Istres", "La Ciotat", "Vitrolles", "Marignane",
  "Miramas", "Gardanne", "Les Pennes-Mirabeau", "Allauch", "Cassis",
  "Châteauneuf-les-Martigues", "Fos-sur-Mer", "Port-de-Bouc", "Trets",
  "Tarascon", "Saint-Martin-de-Crau", "Rognac", "Berre-l'Étang",
  "Bouc-Bel-Air", "Cabriès", "Éguilles", "Venelles",
];

export default function MaconBouchesDuRhone13() {
  return (
    <>
      <Header />
      <main>
        <LocalityHero
          cityName="Bouches-du-Rhône"
          departmentName="Bouches-du-Rhône"
          departmentCode="13"
          cityPreposition="dans les"
          deptPreposition="dans les"
        />

        {/* Department Presentation */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Entreprise de Maçonnerie dans les Bouches-du-Rhône (13)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Solidement implantée en Provence</h3>
                <p className="text-foreground-light leading-relaxed">
                  Notre entreprise de maçonnerie est solidement implantée dans les 
                  Bouches-du-Rhône depuis plus de 20 ans. De Marseille à Aix-en-Provence, 
                  d&apos;Arles à La Ciotat, nos artisans maçons interviennent sur 
                  l&apos;ensemble de ce vaste département provençal pour réaliser tous 
                  vos projets de construction et de rénovation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Diversité architecturale remarquable</h3>
                <p className="text-foreground-light leading-relaxed">
                  Les Bouches-du-Rhône présentent une diversité architecturale remarquable. 
                  Les immeubles haussmanniens de Marseille, les bastides provençales du 
                  Pays d&apos;Aix, les mas camarguais d&apos;Arles, les cabanons du littoral : 
                  chaque territoire possède ses traditions constructives que nos maçons 
                  maîtrisent parfaitement. Nous utilisons la pierre de Cassis, les enduits 
                  traditionnels à la chaux.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Mistral et soleil provençal</h3>
                <p className="text-foreground-light leading-relaxed">
                  Le climat provençal, avec son ensoleillement généreux et ses épisodes 
                  de mistral violent, impose des contraintes spécifiques à la maçonnerie. 
                  Nos artisans sélectionnent des matériaux résistants aux UV, à la chaleur 
                  et aux rafales de vent. Les terrasses et façades sont conçues pour 
                  résister aux conditions climatiques méditerranéennes pendant des décennies.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Intervention rapide en Provence</h3>
                <p className="text-foreground-light leading-relaxed">
                  Que votre projet se situe à Marseille, Aix-en-Provence, Salon-de-Provence, 
                  Aubagne ou dans n&apos;importe quelle commune du département 13, nos 
                  équipes se déplacent gratuitement pour établir un devis détaillé. Notre 
                  présence locale nous permet d&apos;intervenir rapidement et d&apos;assurer 
                  un suivi régulier de vos chantiers de maçonnerie en Provence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LocalityServices
          cityName="Bouches-du-Rhône"
          departmentName="Bouches-du-Rhône"
          departmentCode="13"
          cityPreposition="dans les"
          deptPreposition="dans les"
        />

        {/* All Communes Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Toutes les Communes des Bouches-du-Rhône Couvertes
            </h2>
            <p className="text-foreground-light text-center mb-8 max-w-3xl mx-auto">
              Notre entreprise de maçonnerie intervient dans l&apos;intégralité du 
              département des Bouches-du-Rhône (13), de la Camargue au Pays d&apos;Aix, 
              en passant par le littoral marseillais.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {communes.map((commune) => (
                <div
                  key={commune}
                  className="bg-background-alt px-3 py-2 rounded-lg text-center text-sm text-foreground-light hover:bg-secondary/20 transition-colors"
                >
                  {commune}
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-foreground-light mb-4">
                Intervention dans toutes les communes des Bouches-du-Rhône. 
                Déplacement gratuit pour établir votre devis.
              </p>
              <Link
                href="/macon-marseille"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Voir notre page Marseille
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <LocalityFAQ
          cityName="Bouches-du-Rhône"
          departmentName="Bouches-du-Rhône"
          departmentCode="13"
          cityPreposition="dans les"
          deptPreposition="dans les"
        />

        <LocalityContact
          cityName="Bouches-du-Rhône"
          departmentName="Bouches-du-Rhône"
          departmentCode="13"
          cityPreposition="dans les"
          deptPreposition="dans les"
          nearbyPages={nearbyPages}
        />
      </main>
      <Footer />
    </>
  );
}
