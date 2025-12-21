import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalityHero from "@/components/LocalityHero";
import LocalityServices from "@/components/LocalityServices";
import LocalityFAQ from "@/components/LocalityFAQ";
import LocalityContact from "@/components/LocalityContact";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maçon en Sarthe 72 | Entreprise Maçonnerie Le Mans | Devis Gratuit",
  description:
    "Entreprise de maçonnerie en Sarthe (72). Intervention au Mans, à La Flèche, Sablé-sur-Sarthe. Construction murs, terrasses, façades. Artisan RGE, garantie décennale. Devis gratuit.",
  keywords: [
    "maçon sarthe",
    "maçonnerie sarthe 72",
    "artisan maçon 72",
    "entreprise maçonnerie sarthe",
    "maçon le mans",
    "travaux maçonnerie sarthe",
    "construction mur sarthe",
    "terrasse béton sarthe",
    "rénovation façade sarthe",
    "devis maçon sarthe",
  ],
  openGraph: {
    title: "Maçon en Sarthe 72 | Entreprise Maçonnerie",
    description:
      "Entreprise de maçonnerie en Sarthe. Construction, rénovation. Devis gratuit.",
    url: "https://maconneriepro.fr/macon-sarthe-72",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconneriepro.fr/macon-sarthe-72",
  },
};

const nearbyPages = [
  { name: "Le Mans", href: "/macon-le-mans" },
];

const communes = [
  "Le Mans", "Allonnes", "La Flèche", "Sablé-sur-Sarthe", "Mamers",
  "Coulaines", "La Chapelle-Saint-Aubin", "Arnage", "Yvré-l'Évêque",
  "Mulsanne", "Champagné", "Ruaudin", "La Ferté-Bernard", "Écommoy",
  "Le Lude", "Château-du-Loir", "Montval-sur-Loir", "Bonnétable",
  "Connerré", "La Suze-sur-Sarthe", "Mayet", "Loué", "Parigné-l'Évêque",
  "Saint-Calais", "Vibraye", "Montfort-le-Gesnois", "Savigné-l'Évêque",
];

export default function MaconSarthe72() {
  return (
    <>
      <Header />
      <main>
        <LocalityHero
          cityName="Sarthe"
          departmentName="Sarthe"
          departmentCode="72"
          cityPreposition="en"
          deptPreposition="en"
        />

        {/* Department Presentation */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Entreprise de Maçonnerie en Sarthe (72)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Couverture complète du département</h3>
                <p className="text-foreground-light leading-relaxed">
                  Notre entreprise de maçonnerie est implantée dans le département de la Sarthe 
                  depuis plus de 20 ans. Nous intervenons sur l&apos;ensemble du territoire 
                  sarthois, du Mans jusqu&apos;aux communes les plus rurales, pour réaliser tous 
                  vos travaux de construction et de rénovation en maçonnerie.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Riche patrimoine architectural</h3>
                <p className="text-foreground-light leading-relaxed">
                  La Sarthe est un département au riche patrimoine architectural. Des maisons 
                  à pans de bois du vieux Mans aux longères berrichonnes de la campagne, en 
                  passant par les demeures bourgeoises du XIXe siècle, notre équipe d&apos;artisans 
                  maçons maîtrise l&apos;ensemble des techniques nécessaires pour intervenir sur 
                  ces différents types de bâti.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Climat océanique dégradé</h3>
                <p className="text-foreground-light leading-relaxed">
                  Le climat océanique dégradé de la Sarthe, caractérisé par des hivers doux et 
                  humides et des étés tempérés, nécessite une attention particulière aux 
                  problématiques d&apos;humidité et de drainage. Nos artisans sélectionnent des 
                  matériaux et des techniques adaptés pour garantir la pérennité de vos 
                  constructions face aux conditions climatiques locales.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Intervention rapide partout en Sarthe</h3>
                <p className="text-foreground-light leading-relaxed">
                  Que vous habitiez au Mans, à La Flèche, à Sablé-sur-Sarthe, à Mamers ou dans 
                  n&apos;importe quelle commune du département 72, nos équipes se déplacent 
                  gratuitement pour établir un devis détaillé de vos travaux de maçonnerie. 
                  Notre connaissance du territoire nous permet d&apos;intervenir rapidement et 
                  efficacement partout en Sarthe.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LocalityServices
          cityName="Sarthe"
          departmentName="Sarthe"
          departmentCode="72"
          cityPreposition="en"
          deptPreposition="en"
        />

        {/* All Communes Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Toutes les Communes de la Sarthe Couvertes
            </h2>
            <p className="text-foreground-light text-center mb-8 max-w-3xl mx-auto">
              Notre entreprise de maçonnerie intervient dans l&apos;intégralité du département 
              de la Sarthe (72). Voici les principales villes et communes où nous intervenons 
              régulièrement :
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
                Vous ne trouvez pas votre commune ? Pas d&apos;inquiétude, nous intervenons 
                dans toutes les communes de la Sarthe.
              </p>
              <Link
                href="/macon-le-mans"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Voir notre page Le Mans
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <LocalityFAQ
          cityName="Sarthe"
          departmentName="Sarthe"
          departmentCode="72"
          cityPreposition="en"
          deptPreposition="en"
        />

        <LocalityContact
          cityName="Sarthe"
          departmentName="Sarthe"
          departmentCode="72"
          cityPreposition="en"
          deptPreposition="en"
          nearbyPages={nearbyPages}
        />
      </main>
      <Footer />
    </>
  );
}
