import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalityHero from "@/components/LocalityHero";
import LocalityServices from "@/components/LocalityServices";
import LocalityFAQ from "@/components/LocalityFAQ";
import LocalityContact from "@/components/LocalityContact";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maçon dans les Alpes-Maritimes 06 | Entreprise Maçonnerie Nice Cannes | Devis Gratuit",
  description:
    "Entreprise de maçonnerie dans les Alpes-Maritimes (06). Intervention à Nice, Cannes, Antibes, Grasse. Construction, terrasses, façades. Artisan RGE. Devis gratuit Côte d'Azur.",
  keywords: [
    "maçon alpes maritimes",
    "maçonnerie alpes maritimes 06",
    "artisan maçon 06",
    "entreprise maçonnerie côte d'azur",
    "maçon nice",
    "maçon cannes",
    "travaux maçonnerie 06",
    "construction mur alpes maritimes",
    "terrasse béton nice",
    "devis maçon 06",
  ],
  openGraph: {
    title: "Maçon dans les Alpes-Maritimes 06 | Entreprise Maçonnerie Côte d'Azur",
    description:
      "Entreprise de maçonnerie sur la Côte d'Azur. Construction, rénovation. Devis gratuit.",
    url: "https://maconneriepro.fr/macon-alpes-maritimes-06",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconneriepro.fr/macon-alpes-maritimes-06",
  },
};

const nearbyPages = [
  { name: "Nice", href: "/macon-nice" },
  { name: "Marseille", href: "/macon-marseille" },
];

const communes = [
  "Nice", "Cannes", "Antibes", "Grasse", "Menton", "Cagnes-sur-Mer",
  "Saint-Laurent-du-Var", "Vallauris", "Vence", "Mougins", "Mandelieu-la-Napoule",
  "Villeneuve-Loubet", "Roquebrune-Cap-Martin", "Beausoleil", "Le Cannet",
  "Carros", "Valbonne", "Biot", "La Trinité", "Peymeinade",
  "Contes", "Mouans-Sartoux", "La Colle-sur-Loup", "Saint-André-de-la-Roche",
  "Villefranche-sur-Mer", "Èze", "Saint-Jean-Cap-Ferrat",
];

export default function MaconAlpesMaritimes06() {
  return (
    <>
      <Header />
      <main>
        <LocalityHero
          cityName="Alpes-Maritimes"
          departmentName="Alpes-Maritimes"
          departmentCode="06"
          cityPreposition="dans les"
          deptPreposition="dans les"
        />

        {/* Department Presentation */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Entreprise de Maçonnerie dans les Alpes-Maritimes (06)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Plus de 20 ans sur la Côte d&apos;Azur</h3>
                <p className="text-foreground-light leading-relaxed">
                  Notre entreprise de maçonnerie est présente sur la Côte d&apos;Azur depuis 
                  plus de 20 ans. Des plages de Nice aux villages perchés de l&apos;arrière-pays, 
                  en passant par Cannes, Antibes et Grasse, nous intervenons dans l&apos;ensemble 
                  des Alpes-Maritimes pour tous vos travaux de maçonnerie.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Diversité architecturale exceptionnelle</h3>
                <p className="text-foreground-light leading-relaxed">
                  Les Alpes-Maritimes offrent une diversité architecturale exceptionnelle. 
                  Sur le littoral, les somptueuses villas Belle Époque côtoient les immeubles 
                  modernes. Dans l&apos;arrière-pays, les villages perchés préservent un 
                  patrimoine de pierres sèches et de constructions traditionnelles. Nos 
                  artisans maçons maîtrisent toutes ces techniques.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Climat méditerranéen maîtrisé</h3>
                <p className="text-foreground-light leading-relaxed">
                  Le climat méditerranéen des Alpes-Maritimes, avec son ensoleillement exceptionnel 
                  et ses épisodes de pluies intenses, impose des contraintes spécifiques. Nos 
                  maçons utilisent des matériaux adaptés à ces conditions : bétons résistants 
                  aux UV et à la chaleur, systèmes d&apos;étanchéité performants, enduits 
                  respirants capables de gérer les écarts d&apos;hygrométrie.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Du littoral à l&apos;arrière-pays</h3>
                <p className="text-foreground-light leading-relaxed">
                  De la corniche niçoise au pays grassois, du littoral cannois aux vallées 
                  de la Vésubie et de la Tinée, nos équipes se déplacent gratuitement dans 
                  tout le département 06 pour établir un devis précis de vos travaux. Notre 
                  implantation locale nous permet d&apos;intervenir rapidement et de vous 
                  garantir un suivi de chantier optimal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LocalityServices
          cityName="Alpes-Maritimes"
          departmentName="Alpes-Maritimes"
          departmentCode="06"
          cityPreposition="dans les"
          deptPreposition="dans les"
        />

        {/* All Communes Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Toutes les Communes des Alpes-Maritimes Couvertes
            </h2>
            <p className="text-foreground-light text-center mb-8 max-w-3xl mx-auto">
              Notre entreprise de maçonnerie intervient sur l&apos;ensemble de la Côte d&apos;Azur, 
              du littoral méditerranéen jusqu&apos;aux villages de montagne de l&apos;arrière-pays niçois.
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
                Intervention dans toutes les communes des Alpes-Maritimes, y compris 
                le Moyen et le Haut-Pays.
              </p>
              <Link
                href="/macon-nice"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Voir notre page Nice
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <LocalityFAQ
          cityName="Alpes-Maritimes"
          departmentName="Alpes-Maritimes"
          departmentCode="06"
          cityPreposition="dans les"
          deptPreposition="dans les"
        />

        <LocalityContact
          cityName="Alpes-Maritimes"
          departmentName="Alpes-Maritimes"
          departmentCode="06"
          cityPreposition="dans les"
          deptPreposition="dans les"
          nearbyPages={nearbyPages}
        />
      </main>
      <Footer />
    </>
  );
}
