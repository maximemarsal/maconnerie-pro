"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface LocalityServicesProps {
  cityName: string;
  departmentName: string;
  departmentCode: string;
  cityPreposition: string;
  deptPreposition: string;
}

const services = [
  {
    title: "Construction de Murs",
    image: "/images/What-Is-Brick-Masonry-Kemp-TX.webp",
    features: ["Murs porteurs", "Murs de soutènement", "Cloisons", "Pierre naturelle"],
  },
  {
    title: "Terrasses en Béton",
    image: "/images/Prix Terrasse Béton.jpg",
    features: ["Béton décoratif", "Dalle lisse", "Béton imprimé", "Béton désactivé"],
  },
  {
    title: "Rénovation de Façades",
    image: "/images/Maconnerie image.jpg",
    features: ["Ravalement", "Traitement fissures", "Enduits", "Isolation extérieure"],
  },
  {
    title: "Extension de Maison",
    image: "/images/Masonry Work.jpg",
    features: ["Étude personnalisée", "Fondations", "Gros œuvre", "Clé en main"],
  },
  {
    title: "Clôtures et Murets",
    image: "/images/Bricklayer.jpg",
    features: ["Murets décoratifs", "Clôtures béton", "Piliers portail", "Pierre de taille"],
  },
  {
    title: "Joints et Enduits",
    image: "/images/Maçons avec truelles sur chantier.jpg",
    features: ["Enduit traditionnel", "Enduit monocouche", "Rejointoiement", "Finitions"],
  },
];

export default function LocalityServices({
  cityName,
  departmentName,
  departmentCode,
  cityPreposition,
  deptPreposition,
}: LocalityServicesProps) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="py-20 bg-background-alt">
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
            Nos Services {cityPreposition} {cityName}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Travaux de Maçonnerie {deptPreposition} {departmentName} ({departmentCode})
          </h2>
          <p className="text-foreground-light text-lg max-w-4xl mx-auto leading-relaxed">
            Notre entreprise de maçonnerie intervient {cityPreposition} {cityName} et dans l&apos;ensemble du département {departmentCode} 
            pour tous vos projets de construction et de rénovation. Nos artisans maçons qualifiés maîtrisent 
            l&apos;ensemble des techniques de maçonnerie traditionnelle et moderne, garantissant des réalisations 
            durables et esthétiques adaptées aux spécificités architecturales de la région.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={`${service.title} ${cityPreposition} ${cityName}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title} {cityPreposition} {cityName}
                </h3>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground-light">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact-local"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  Demander un devis
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* SEO Text Block - Now in nice cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Pourquoi Choisir Notre Entreprise de Maçonnerie {cityPreposition} {cityName} ?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Expertise */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">20 ans d&apos;expertise locale</h4>
              <p className="text-foreground-light text-sm leading-relaxed">
                Implantée depuis plus de 20 ans {deptPreposition} {departmentName}, notre entreprise de maçonnerie a développé 
                une expertise reconnue dans la région. Nos artisans maçons connaissent parfaitement 
                les particularités du bâti local et les réglementations spécifiques au département {departmentCode}.
              </p>
            </div>

            {/* Card 2 - Accompagnement */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-secondary">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">Accompagnement de A à Z</h4>
              <p className="text-foreground-light text-sm leading-relaxed">
                Que vous souhaitiez construire un mur de clôture, réaliser une terrasse en béton, rénover votre 
                façade ou agrandir votre maison, nous vous accompagnons tout au long du projet. Notre équipe intervient 
                rapidement {cityPreposition} {cityName} et dans toutes les communes environnantes.
              </p>
            </div>

            {/* Card 3 - Garanties */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-accent">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">Garanties et certifications</h4>
              <p className="text-foreground-light text-sm leading-relaxed">
                Tous nos travaux de maçonnerie sont réalisés dans le respect des normes en vigueur et bénéficient 
                de notre garantie décennale. En tant qu&apos;artisans certifiés RGE, nous vous permettons de bénéficier 
                des aides de l&apos;État pour vos travaux de rénovation énergétique.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
