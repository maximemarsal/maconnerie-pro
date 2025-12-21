import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalityHero from "@/components/LocalityHero";
import LocalityServices from "@/components/LocalityServices";
import LocalityFAQ from "@/components/LocalityFAQ";
import LocalityContact from "@/components/LocalityContact";

export const metadata: Metadata = {
  title: "Maçon à La Flèche | Artisan Maçonnerie Sarthe 72 | Devis Gratuit 24h",
  description:
    "Maçon professionnel à La Flèche et en Sarthe (72). Construction murs, terrasses béton, rénovation façades, extensions. Artisan RGE, garantie décennale. Devis gratuit sous 24h.",
  keywords: [
    "maçon la flèche",
    "maçonnerie la flèche",
    "artisan maçon sarthe",
    "entreprise maçonnerie 72",
    "maçon sarthe",
    "travaux maçonnerie la flèche",
    "construction mur la flèche",
    "terrasse béton la flèche",
    "rénovation façade la flèche",
    "devis maçon la flèche",
  ],
  openGraph: {
    title: "Maçon à La Flèche | Artisan Maçonnerie Sarthe 72",
    description:
      "Maçon professionnel à La Flèche. Construction, rénovation, terrasses. Devis gratuit sous 24h.",
    url: "https://maconneriepro.fr/macon-la-fleche",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconneriepro.fr/macon-la-fleche",
  },
};

const nearbyPages = [
  { name: "Sarthe (72)", href: "/macon-sarthe-72" },
  { name: "Le Mans", href: "/macon-le-mans" },
  { name: "Sablé-sur-Sarthe", href: "/macon-sable-sur-sarthe" },
];

export default function MaconLaFleche() {
  return (
    <>
      <Header />
      <main>
        <LocalityHero
          cityName="La Flèche"
          departmentName="Sarthe"
          departmentCode="72"
          cityPreposition="à"
          deptPreposition="en"
        />

        {/* Presentation Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Votre Artisan Maçon à La Flèche et dans le Sud-Sarthe
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Expertise locale à La Flèche</h3>
                <p className="text-foreground-light leading-relaxed">
                  Notre entreprise de maçonnerie intervient à La Flèche et dans tout le sud de la Sarthe 
                  depuis plus de 20 ans. Sous-préfecture du département, La Flèche est une ville riche 
                  en patrimoine architectural que nos artisans maçons connaissent parfaitement. Du 
                  Prytanée national militaire aux maisons de caractère du centre historique, nous 
                  maîtrisons les techniques adaptées à chaque type de bâti.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Vallée du Loir et environs</h3>
                <p className="text-foreground-light leading-relaxed">
                  Située au cœur de la vallée du Loir, La Flèche bénéficie d&apos;un cadre naturel 
                  exceptionnel. Notre équipe intervient également dans les communes voisines : 
                  Bazouges-sur-le-Loir, Clermont-Créans, Crosmières, Le Lude. Nous connaissons 
                  les spécificités du sol et les réglementations locales pour des constructions 
                  durables et conformes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Réactivité et proximité</h3>
                <p className="text-foreground-light leading-relaxed">
                  Notre implantation en Sarthe nous permet d&apos;intervenir rapidement à La Flèche, 
                  généralement sous 48 heures pour les urgences. Pour un devis, nous nous déplaçons 
                  gratuitement sous 24 heures. Cette proximité garantit un suivi de chantier 
                  régulier et une grande réactivité face à vos demandes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Garanties et certifications</h3>
                <p className="text-foreground-light leading-relaxed">
                  Tous nos travaux de maçonnerie à La Flèche sont couverts par notre garantie 
                  décennale. En tant qu&apos;artisans certifiés RGE, nous vous permettons de 
                  bénéficier des aides de l&apos;État pour vos projets de rénovation énergétique. 
                  Isolation thermique, ravalement de façade : améliorez le confort de votre 
                  habitation tout en réduisant vos factures.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LocalityServices
          cityName="La Flèche"
          departmentName="Sarthe"
          departmentCode="72"
          cityPreposition="à"
          deptPreposition="en"
        />

        {/* Zones Covered Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Zones d&apos;Intervention autour de La Flèche
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "La Flèche",
                "Le Lude",
                "Bazouges-sur-le-Loir",
                "Clermont-Créans",
                "Crosmières",
                "Luché-Pringé",
                "Mareil-sur-Loir",
                "Thorée-les-Pins",
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
              Et toutes les communes du sud de la Sarthe. Déplacement gratuit pour devis.
            </p>
          </div>
        </section>

        <LocalityFAQ
          cityName="La Flèche"
          departmentName="Sarthe"
          departmentCode="72"
          cityPreposition="à"
          deptPreposition="en"
        />

        <LocalityContact
          cityName="La Flèche"
          departmentName="Sarthe"
          departmentCode="72"
          cityPreposition="à"
          deptPreposition="en"
          nearbyPages={nearbyPages}
        />
      </main>
      <Footer />
    </>
  );
}
