import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalityHero from "@/components/LocalityHero";
import LocalityServices from "@/components/LocalityServices";
import LocalityFAQ from "@/components/LocalityFAQ";
import LocalityContact from "@/components/LocalityContact";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maçon dans l'Ain 01 | Entreprise Maçonnerie Bourg-en-Bresse | Devis Gratuit",
  description:
    "Entreprise de maçonnerie dans l'Ain (01). Intervention à Bourg-en-Bresse, Oyonnax, Gex. Construction murs, terrasses, façades. Artisan RGE, garantie décennale. Devis gratuit.",
  keywords: [
    "maçon ain",
    "maçonnerie ain 01",
    "artisan maçon 01",
    "entreprise maçonnerie ain",
    "maçon bourg en bresse",
    "travaux maçonnerie ain",
    "construction mur ain",
    "terrasse béton ain",
    "rénovation façade ain",
    "devis maçon ain",
  ],
  openGraph: {
    title: "Maçon dans l'Ain 01 | Entreprise Maçonnerie",
    description:
      "Entreprise de maçonnerie dans l'Ain. Construction, rénovation. Devis gratuit.",
    url: "https://maconnerie-pro.fr/macon-ain-01",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconnerie-pro.fr/macon-ain-01",
  },
};

const nearbyPages = [
  { name: "Bourg-en-Bresse", href: "/macon-bourg-en-bresse" },
];

const communes = [
  "Bourg-en-Bresse", "Oyonnax", "Ambérieu-en-Bugey", "Gex", "Bellegarde-sur-Valserine",
  "Miribel", "Trévoux", "Belley", "Villars-les-Dombes", "Montluel",
  "Ferney-Voltaire", "Divonne-les-Bains", "Saint-Genis-Pouilly", "Prévessin-Moëns",
  "Hauteville-Lompnes", "Lagnieu", "Meximieux", "Pont-d'Ain", "Nantua",
  "Châtillon-sur-Chalaronne", "Vonnas", "Montrevel-en-Bresse", "Buellas",
  "Péronnas", "Viriat", "Saint-Denis-lès-Bourg", "Jassans-Riottier",
];

export default function MaconAin01() {
  return (
    <>
      <Header />
      <main>
        <LocalityHero
          cityName="Ain"
          departmentName="Ain"
          departmentCode="01"
          cityPreposition="dans l'"
          deptPreposition="dans l'"
        />

        {/* Department Presentation */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Entreprise de Maçonnerie dans l&apos;Ain (01)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">De la Bresse au Jura</h3>
                <p className="text-foreground-light leading-relaxed">
                  Notre entreprise de maçonnerie intervient dans l&apos;ensemble du département 
                  de l&apos;Ain depuis plus de 20 ans. De la plaine de la Bresse aux montagnes 
                  du Jura, en passant par le Pays de Gex et la Dombes, nos artisans maçons 
                  couvrent tout le territoire du département 01.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Paysages variés, techniques adaptées</h3>
                <p className="text-foreground-light leading-relaxed">
                  L&apos;Ain est un département aux paysages variés qui présente des défis 
                  spécifiques en maçonnerie. Dans les zones montagneuses du Bugey et du Jura, 
                  les constructions doivent résister à des hivers rigoureux et à d&apos;importantes 
                  chutes de neige. Dans la plaine bressane, l&apos;architecture traditionnelle 
                  en torchis et briques demande un savoir-faire particulier pour la rénovation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Pays de Gex en plein développement</h3>
                <p className="text-foreground-light leading-relaxed">
                  Le Pays de Gex, à la frontière suisse, connaît un développement immobilier 
                  important. Nos équipes accompagnent les nombreux projets de construction neuve 
                  et d&apos;extension dans ce secteur dynamique. La Dombes, avec ses étangs et 
                  son patrimoine de maisons de caractère, nécessite une expertise en rénovation 
                  du bâti ancien que nos artisans maîtrisent parfaitement.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Intervention rapide dans tout l&apos;Ain</h3>
                <p className="text-foreground-light leading-relaxed">
                  Que vous soyez à Bourg-en-Bresse, Oyonnax, Ambérieu-en-Bugey, Gex ou dans 
                  n&apos;importe quelle commune de l&apos;Ain, nos équipes se déplacent gratuitement 
                  pour évaluer votre projet et vous proposer un devis détaillé. Notre ancrage 
                  local dans le département 01 nous permet d&apos;intervenir rapidement sur 
                  tous vos chantiers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LocalityServices
          cityName="Ain"
          departmentName="Ain"
          departmentCode="01"
          cityPreposition="dans l'"
          deptPreposition="dans l'"
        />

        {/* All Communes Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Toutes les Communes de l&apos;Ain Couvertes
            </h2>
            <p className="text-foreground-light text-center mb-8 max-w-3xl mx-auto">
              Notre entreprise de maçonnerie intervient dans l&apos;intégralité du département 
              de l&apos;Ain (01), du Pays de Gex à la Bresse, en passant par le Bugey et la Dombes.
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
                Intervention dans toutes les communes de l&apos;Ain. Déplacement gratuit pour devis.
              </p>
              <Link
                href="/macon-bourg-en-bresse"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Voir notre page Bourg-en-Bresse
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <LocalityFAQ
          cityName="Ain"
          departmentName="Ain"
          departmentCode="01"
          cityPreposition="dans l'"
          deptPreposition="dans l'"
        />

        <LocalityContact
          cityName="Ain"
          departmentName="Ain"
          departmentCode="01"
          cityPreposition="dans l'"
          deptPreposition="dans l'"
          nearbyPages={nearbyPages}
        />
      </main>
      <Footer />
    </>
  );
}
