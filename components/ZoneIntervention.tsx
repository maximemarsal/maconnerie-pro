"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const zones = [
  {
    code: "72",
    name: "Sarthe",
    href: "/macon-sarthe-72",
    cities: ["Le Mans", "La Flèche", "Sablé-sur-Sarthe", "Mamers", "Allonnes"],
    description:
      "Intervention sur l'ensemble du département de la Sarthe. Nos équipes interviennent au Mans et ses environs pour tous vos projets de maçonnerie, de la construction neuve à la rénovation.",
  },
  {
    code: "01",
    name: "Ain",
    href: "/macon-ain-01",
    cities: ["Bourg-en-Bresse", "Oyonnax", "Ambérieu-en-Bugey", "Bellegarde", "Miribel"],
    description:
      "Nos artisans maçons couvrent l'intégralité du département de l'Ain. De Bourg-en-Bresse au Pays de Gex, nous réalisons vos travaux de maçonnerie avec le même niveau d'excellence.",
  },
  {
    code: "06",
    name: "Alpes-Maritimes",
    href: "/macon-alpes-maritimes-06",
    cities: ["Nice", "Cannes", "Antibes", "Grasse", "Menton"],
    description:
      "Nous intervenons sur toute la Côte d'Azur, de Nice à Cannes en passant par l'arrière-pays. Notre connaissance du terrain et des contraintes locales garantit des réalisations adaptées.",
  },
  {
    code: "13",
    name: "Bouches-du-Rhône",
    href: "/macon-bouches-du-rhone-13",
    cities: ["Marseille", "Aix-en-Provence", "Arles", "Martigues", "Aubagne"],
    description:
      "De Marseille à Aix-en-Provence, nos équipes de maçons professionnels sont mobilisées pour répondre à tous vos besoins en maçonnerie dans les Bouches-du-Rhône.",
  },
];

export default function ZoneIntervention() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="zones" className="py-24 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Notre Couverture Géographique
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Zones d&apos;Intervention
          </h2>
          <p className="text-foreground-light text-lg max-w-3xl mx-auto leading-relaxed">
            Nos équipes de maçons professionnels interviennent dans quatre départements français. 
            Que vous soyez dans le nord-ouest ou le sud-est de la France, nos artisans se déplacent 
            pour réaliser vos projets de maçonnerie avec le même engagement de qualité.
          </p>
        </motion.div>

        {/* Zones Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {zones.map((zone, index) => (
            <motion.div
              key={zone.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-border"
            >
              <Link href={zone.href} className="block">
                <div className="flex items-start gap-6">
                  {/* Department Code */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">{zone.code}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {zone.name}
                    </h3>
                    <p className="text-foreground-light text-sm leading-relaxed mb-4">
                      {zone.description}
                    </p>

                    {/* Cities */}
                    <div className="flex flex-wrap gap-2">
                      {zone.cities.map((city) => (
                        <span
                          key={city}
                          className="inline-block bg-secondary/20 text-primary-dark px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-border"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Votre Commune n&apos;est Pas Listée ?
              </h3>
              <p className="text-foreground-light leading-relaxed mb-6">
                Nos zones d&apos;intervention couvrent l&apos;intégralité des départements 72, 01, 06 et 13. 
                Si votre ville n&apos;apparaît pas dans la liste ci-dessus, cela ne signifie pas que nous 
                n&apos;intervenons pas chez vous. Nous nous déplaçons dans toutes les communes de ces 
                départements, y compris les zones rurales et les villages les plus reculés. N&apos;hésitez 
                pas à nous contacter pour vérifier notre disponibilité dans votre secteur.
              </p>
              <p className="text-foreground-light leading-relaxed">
                <strong className="text-foreground">Déplacement gratuit</strong> pour l&apos;établissement 
                du devis dans l&apos;ensemble de nos zones d&apos;intervention. Nos artisans viennent 
                directement sur place évaluer votre projet et vous proposer une solution adaptée 
                à vos besoins et à votre budget.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg"
              >
                Vérifier Mon Éligibilité
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* SEO Text Block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 prose prose-lg max-w-none text-foreground-light"
        >
          <p className="leading-relaxed">
            <strong className="text-foreground">Entreprise de maçonnerie intervenant sur quatre départements français</strong>, 
            notre société dispose d&apos;équipes locales dans chaque région pour assurer une réactivité optimale. 
            Que vous recherchiez un <strong className="text-foreground">maçon au Mans</strong>, un 
            <strong className="text-foreground"> artisan maçon à Nice</strong>, des 
            <strong className="text-foreground"> travaux de maçonnerie à Marseille</strong> ou une 
            <strong className="text-foreground"> entreprise de gros œuvre dans l&apos;Ain</strong>, 
            nos professionnels sont à votre disposition.
          </p>
          <p className="leading-relaxed mt-4">
            Notre organisation nous permet d&apos;intervenir rapidement pour les urgences tout en 
            maintenant un haut niveau de qualité sur chaque chantier. Les délais d&apos;intervention 
            sont généralement compris entre 48 heures et une semaine selon la nature et l&apos;ampleur 
            des travaux. Pour les projets importants, nous établissons un planning détaillé en 
            concertation avec vous afin de garantir le respect des échéances convenues.
          </p>
        </motion.div>

        {/* Link to full zones page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Link
            href="/zones-intervention"
            className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            Voir toutes nos zones d&apos;intervention
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
