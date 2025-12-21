"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const zonesData = [
  {
    department: "Sarthe",
    code: "72",
    description: "Du Mans à La Flèche, nous intervenons dans toute la Sarthe pour vos travaux de maçonnerie.",
    cities: [
      { name: "Le Mans", href: "/macon-le-mans", main: true },
      { name: "La Flèche", href: "/macon-la-fleche", main: false },
      { name: "Sablé-sur-Sarthe", href: "/macon-sable-sur-sarthe", main: false },
    ],
    deptPage: "/macon-sarthe-72",
    color: "bg-primary",
    position: { x: 200, y: 220 },
  },
  {
    department: "Ain",
    code: "01",
    description: "De Bourg-en-Bresse au Haut-Bugey, nos maçons interviennent dans tout le département de l'Ain.",
    cities: [
      { name: "Bourg-en-Bresse", href: "/macon-bourg-en-bresse", main: true },
      { name: "Oyonnax", href: "/macon-oyonnax", main: false },
    ],
    deptPage: "/macon-ain-01",
    color: "bg-secondary",
    position: { x: 420, y: 280 },
  },
  {
    department: "Alpes-Maritimes",
    code: "06",
    description: "De Nice à Cannes, nous couvrons toute la Côte d'Azur pour vos projets de maçonnerie.",
    cities: [
      { name: "Nice", href: "/macon-nice", main: true },
      { name: "Cannes", href: "/macon-cannes", main: false },
    ],
    deptPage: "/macon-alpes-maritimes-06",
    color: "bg-accent",
    position: { x: 480, y: 420 },
  },
  {
    department: "Bouches-du-Rhône",
    code: "13",
    description: "De Marseille à Aix-en-Provence, nous intervenons dans toutes les Bouches-du-Rhône.",
    cities: [
      { name: "Marseille", href: "/macon-marseille", main: true },
      { name: "Aix-en-Provence", href: "/macon-aix-en-provence", main: false },
    ],
    deptPage: "/macon-bouches-du-rhone-13",
    color: "bg-primary",
    position: { x: 380, y: 460 },
  },
];

export default function ZonesHubClient() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [hoveredDept, setHoveredDept] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-accent">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-accent-light opacity-90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, x: -20 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-white/20">
                4 Départements - Plus de 20 ans d&apos;expérience
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Nos Zones d&apos;Intervention en{" "}
                <span className="text-secondary">Maçonnerie</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Notre entreprise de maçonnerie intervient dans 4 départements français : 
                la Sarthe (72), l&apos;Ain (01), les Alpes-Maritimes (06) et les Bouches-du-Rhône (13). 
                Artisans certifiés RGE avec garantie décennale, nous réalisons tous vos travaux 
                de construction et de rénovation.
              </p>
              <Link
                href="#zones-list"
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
              >
                Découvrir nos zones
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <svg
                viewBox="0 0 600 600"
                className="w-full h-auto max-w-md mx-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* France outline */}
                <path
                  d="M280 50 L350 45 L420 60 L480 90 L520 130 L540 180 L560 240 L550 300 L530 350 L500 400 L520 450 L510 500 L480 530 L420 550 L360 560 L300 550 L240 560 L180 540 L140 500 L100 450 L80 400 L70 350 L80 300 L100 250 L120 200 L150 150 L200 100 L250 70 Z"
                  fill="rgba(255,255,255,0.1)"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                />

                {/* Department markers */}
                {zonesData.map((zone) => (
                  <g key={zone.code}>
                    <circle
                      cx={zone.position.x}
                      cy={zone.position.y}
                      r={hoveredDept === zone.code ? 40 : 35}
                      fill={hoveredDept === zone.code ? "#D4A574" : "#8B4513"}
                      className="drop-shadow-lg transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredDept(zone.code)}
                      onMouseLeave={() => setHoveredDept(null)}
                    />
                    <text
                      x={zone.position.x}
                      y={zone.position.y - 5}
                      textAnchor="middle"
                      className="fill-white font-bold pointer-events-none"
                      style={{ fontSize: "18px" }}
                    >
                      {zone.code}
                    </text>
                    <text
                      x={zone.position.x}
                      y={zone.position.y + 12}
                      textAnchor="middle"
                      className="fill-white/80 pointer-events-none"
                      style={{ fontSize: "9px" }}
                    >
                      {zone.department.length > 10 ? zone.department.substring(0, 10) + "." : zone.department}
                    </text>
                  </g>
                ))}

                {/* Connection lines */}
                <path
                  d="M200 255 Q300 350 380 425"
                  stroke="#D4A574"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                  opacity="0.4"
                />
                <path
                  d="M420 315 Q430 370 420 420"
                  stroke="#D4A574"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                  opacity="0.4"
                />
                <path
                  d="M415 455 L445 435"
                  stroke="#D4A574"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                  opacity="0.4"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zones List Section */}
      <section id="zones-list" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nos Implantations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              4 Départements, Des Dizaines de Communes
            </h2>
            <p className="text-foreground-light text-lg max-w-3xl mx-auto">
              Sélectionnez votre département pour découvrir toutes les villes où nous intervenons. 
              Déplacement gratuit pour établir votre devis dans toutes nos zones d&apos;intervention.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {zonesData.map((zone, index) => (
              <motion.div
                key={zone.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border hover:shadow-xl transition-shadow"
              >
                <div className={`${zone.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white/70 text-sm">Département</span>
                      <h3 className="text-2xl font-bold">{zone.department} ({zone.code})</h3>
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl font-bold">{zone.code}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-foreground-light mb-6">{zone.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                      Villes principales
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {zone.cities.map((city) => (
                        <Link
                          key={city.href}
                          href={city.href}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            city.main
                              ? "bg-primary text-white hover:bg-primary-dark"
                              : "bg-background-alt text-foreground hover:bg-secondary/20"
                          }`}
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={zone.deptPage}
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    Voir toutes les communes du {zone.code}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Votre Projet de Maçonnerie, Notre Expertise
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Quel que soit votre département, nos artisans maçons certifiés RGE se déplacent 
              gratuitement pour établir un devis détaillé de vos travaux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Demander un Devis Gratuit
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Text */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-foreground-light">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Artisan Maçon dans Toute la France
            </h2>
            <p>
              Notre entreprise de maçonnerie intervient dans quatre départements français stratégiquement 
              répartis sur le territoire national. En <strong>Sarthe (72)</strong>, nous couvrons Le Mans, 
              La Flèche et Sablé-sur-Sarthe. Dans l&apos;<strong>Ain (01)</strong>, nos équipes interviennent 
              à Bourg-en-Bresse et Oyonnax. Sur la Côte d&apos;Azur, nous sommes présents dans les 
              <strong>Alpes-Maritimes (06)</strong> à Nice et Cannes. Enfin, en Provence, nous couvrons 
              les <strong>Bouches-du-Rhône (13)</strong> avec Marseille et Aix-en-Provence.
            </p>
            <p>
              Chaque département présente des spécificités architecturales et climatiques que nos artisans 
              maçons maîtrisent parfaitement. Du bâti traditionnel sarthois aux constructions méditerranéennes, 
              nous adaptons nos techniques et nos matériaux pour garantir des réalisations durables et 
              esthétiques.
            </p>
            <p>
              Certifiés RGE (Reconnu Garant de l&apos;Environnement) et couverts par une garantie décennale, 
              nous vous accompagnons dans tous vos projets : construction de murs, terrasses en béton, 
              rénovation de façades, extensions de maison, clôtures et murets. Contactez-nous pour un 
              devis gratuit dans votre département.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
