import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalityHero from "@/components/LocalityHero";
import LocalityServices from "@/components/LocalityServices";
import LocalityFAQ from "@/components/LocalityFAQ";
import LocalityContact from "@/components/LocalityContact";

export const metadata: Metadata = {
  title: "Maçon à Bourg-en-Bresse | Artisan Maçonnerie Ain 01 | Devis Gratuit 24h",
  description:
    "Maçon professionnel à Bourg-en-Bresse et dans l'Ain (01). Construction murs, terrasses béton, rénovation façades, extensions. Artisan RGE, garantie décennale. Devis gratuit sous 24h.",
  keywords: [
    "maçon bourg en bresse",
    "maçonnerie bourg en bresse",
    "artisan maçon ain",
    "entreprise maçonnerie 01",
    "maçon ain",
    "travaux maçonnerie bourg en bresse",
    "construction mur ain",
    "terrasse béton bourg en bresse",
    "rénovation façade ain",
    "devis maçon bourg en bresse",
  ],
  openGraph: {
    title: "Maçon à Bourg-en-Bresse | Artisan Maçonnerie Ain 01",
    description:
      "Maçon professionnel à Bourg-en-Bresse. Construction, rénovation, terrasses. Devis gratuit 24h.",
    url: "https://maconneriepro.fr/macon-bourg-en-bresse",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconneriepro.fr/macon-bourg-en-bresse",
  },
};

const nearbyPages = [
  { name: "Ain (01)", href: "/macon-ain-01" },
  { name: "Oyonnax", href: "/macon-bourg-en-bresse" },
  { name: "Ambérieu-en-Bugey", href: "/macon-bourg-en-bresse" },
];

export default function MaconBourgEnBresse() {
  return (
    <>
      <Header />
      <main>
        <LocalityHero
          cityName="Bourg-en-Bresse"
          departmentName="Ain"
          departmentCode="01"
          cityPreposition="à"
          deptPreposition="dans l'"
        />

        {/* Presentation Section - New Design with Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Votre Artisan Maçon à Bourg-en-Bresse et dans l&apos;Ain
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Implantation locale depuis 20 ans</h3>
                <p className="text-foreground-light leading-relaxed">
                  Notre entreprise de maçonnerie est implantée dans l&apos;Ain depuis plus de 
                  20 ans, avec une expertise particulière sur Bourg-en-Bresse et ses environs. 
                  Préfecture du département, Bourg-en-Bresse offre un patrimoine architectural 
                  riche que nos artisans maçons connaissent parfaitement.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Un département aux multiples facettes</h3>
                <p className="text-foreground-light leading-relaxed">
                  L&apos;Ain est un département aux multiples facettes : plaine de la Bresse, 
                  montagnes du Jura, Dombes aux mille étangs. Cette diversité géographique 
                  implique des techniques de maçonnerie adaptées à chaque territoire. Nos 
                  artisans maîtrisent les spécificités du bâti bressan traditionnel en torchis 
                  et briques, comme les constructions plus modernes.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Climat continental maîtrisé</h3>
                <p className="text-foreground-light leading-relaxed">
                  Le climat continental de l&apos;Ain, avec des hivers rigoureux et des étés 
                  chauds, impose des contraintes techniques spécifiques. Nos maçons sélectionnent 
                  des matériaux adaptés à ces conditions : bétons résistants au gel, isolants 
                  performants, systèmes de drainage efficaces. Chaque construction est conçue 
                  pour affronter les écarts de température.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Isolation thermique pour hivers froids</h3>
                <p className="text-foreground-light leading-relaxed">
                  Certifiés RGE (Reconnu Garant de l&apos;Environnement), nous accompagnons les 
                  habitants de Bourg-en-Bresse et de l&apos;Ain dans leurs projets de rénovation 
                  énergétique. L&apos;isolation thermique est particulièrement importante dans 
                  notre région aux hivers froids. Bénéficiez des aides de l&apos;État pour 
                  réduire vos factures de chauffage.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LocalityServices
          cityName="Bourg-en-Bresse"
          departmentName="Ain"
          departmentCode="01"
          cityPreposition="à"
          deptPreposition="dans l'"
        />

        {/* Zones Covered Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Zones d&apos;Intervention dans l&apos;Ain
            </h2>
            <div className="prose prose-lg max-w-none text-foreground-light mb-8">
              <p>
                Notre entreprise de maçonnerie intervient à Bourg-en-Bresse et dans 
                l&apos;ensemble du département de l&apos;Ain (01). Nous couvrons notamment :
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Bourg-en-Bresse",
                "Oyonnax",
                "Ambérieu-en-Bugey",
                "Bellegarde-sur-Valserine",
                "Miribel",
                "Gex",
                "Trévoux",
                "Belley",
                "Villars-les-Dombes",
                "Montluel",
                "Ferney-Voltaire",
                "Divonne-les-Bains",
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
              Et toutes les communes de l&apos;Ain, du Pays de Gex à la Dombes.
            </p>
          </div>
        </section>

        <LocalityFAQ
          cityName="Bourg-en-Bresse"
          departmentName="Ain"
          departmentCode="01"
          cityPreposition="à"
          deptPreposition="dans l'"
        />

        <LocalityContact
          cityName="Bourg-en-Bresse"
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
