import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalityHero from "@/components/LocalityHero";
import LocalityServices from "@/components/LocalityServices";
import LocalityFAQ from "@/components/LocalityFAQ";
import LocalityContact from "@/components/LocalityContact";

export const metadata: Metadata = {
  title: "Maçon à Sablé-sur-Sarthe | Artisan Maçonnerie 72 | Devis Gratuit 24h",
  description:
    "Maçon professionnel à Sablé-sur-Sarthe et en Sarthe (72). Construction murs, terrasses béton, rénovation façades, extensions. Artisan RGE, garantie décennale. Devis gratuit sous 24h.",
  keywords: [
    "maçon sablé sur sarthe",
    "maçonnerie sablé sur sarthe",
    "artisan maçon sarthe",
    "entreprise maçonnerie 72",
    "travaux maçonnerie sablé",
    "construction mur sablé sur sarthe",
    "terrasse béton sablé",
    "rénovation façade sablé sur sarthe",
    "devis maçon sablé sur sarthe",
  ],
  openGraph: {
    title: "Maçon à Sablé-sur-Sarthe | Artisan Maçonnerie Sarthe 72",
    description:
      "Maçon professionnel à Sablé-sur-Sarthe. Construction, rénovation, terrasses. Devis gratuit sous 24h.",
    url: "https://maconnerie-pro.fr/macon-sable-sur-sarthe",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://maconnerie-pro.fr/macon-sable-sur-sarthe",
  },
};

const nearbyPages = [
  { name: "Sarthe (72)", href: "/macon-sarthe-72" },
  { name: "Le Mans", href: "/macon-le-mans" },
  { name: "La Flèche", href: "/macon-la-fleche" },
];

export default function MaconSableSurSarthe() {
  return (
    <>
      <Header />
      <main>
        <LocalityHero
          cityName="Sablé-sur-Sarthe"
          departmentName="Sarthe"
          departmentCode="72"
          cityPreposition="à"
          deptPreposition="en"
        />

        {/* Presentation Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Votre Artisan Maçon à Sablé-sur-Sarthe
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Au carrefour de trois départements</h3>
                <p className="text-foreground-light leading-relaxed">
                  Sablé-sur-Sarthe occupe une position stratégique au carrefour de la Sarthe, 
                  de la Mayenne et du Maine-et-Loire. Notre entreprise de maçonnerie intervient 
                  dans ce secteur dynamique depuis plus de 20 ans. La ville, célèbre pour ses 
                  sablés et son château, possède un patrimoine architectural que nos artisans 
                  maçons connaissent parfaitement.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Bassin de vie étendu</h3>
                <p className="text-foreground-light leading-relaxed">
                  Le bassin de vie de Sablé-sur-Sarthe s&apos;étend sur de nombreuses communes : 
                  Solesmes avec son abbaye, Précigné, Asnières-sur-Vègre classé parmi les plus 
                  beaux villages de France, Juigné-sur-Sarthe. Notre équipe intervient dans 
                  toute cette zone pour vos projets de construction et de rénovation en maçonnerie.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Intervention rapide</h3>
                <p className="text-foreground-light leading-relaxed">
                  Notre présence en Sarthe nous permet d&apos;être réactifs à Sablé-sur-Sarthe. 
                  Nous intervenons généralement sous 48 heures pour les travaux urgents et 
                  nous déplaçons gratuitement sous 24 heures pour établir un devis. Cette 
                  proximité est un atout majeur pour le suivi régulier de vos chantiers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-background-alt to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Artisans certifiés RGE</h3>
                <p className="text-foreground-light leading-relaxed">
                  Nos artisans sont certifiés RGE (Reconnu Garant de l&apos;Environnement), 
                  ce qui vous permet de bénéficier des aides de l&apos;État pour vos travaux 
                  de rénovation énergétique à Sablé-sur-Sarthe. Tous nos travaux sont couverts 
                  par notre garantie décennale pour votre tranquillité d&apos;esprit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LocalityServices
          cityName="Sablé-sur-Sarthe"
          departmentName="Sarthe"
          departmentCode="72"
          cityPreposition="à"
          deptPreposition="en"
        />

        {/* Zones Covered Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Zones d&apos;Intervention autour de Sablé-sur-Sarthe
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Sablé-sur-Sarthe",
                "Solesmes",
                "Précigné",
                "Asnières-sur-Vègre",
                "Juigné-sur-Sarthe",
                "Pincé",
                "Auvers-le-Hamon",
                "Louailles",
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
              Et toutes les communes de l&apos;ouest sarthois. Déplacement gratuit pour devis.
            </p>
          </div>
        </section>

        <LocalityFAQ
          cityName="Sablé-sur-Sarthe"
          departmentName="Sarthe"
          departmentCode="72"
          cityPreposition="à"
          deptPreposition="en"
        />

        <LocalityContact
          cityName="Sablé-sur-Sarthe"
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
