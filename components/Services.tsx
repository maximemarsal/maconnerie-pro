"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Construction de Murs",
    href: "/construction-murs",
    description:
      "Réalisation de murs porteurs, murs de soutènement et cloisons en parpaings, briques ou pierres. Nos maçons experts garantissent une construction solide et durable, conforme aux normes en vigueur. Chaque mur est conçu pour résister aux contraintes mécaniques et climatiques pendant des décennies.",
    image: "/images/What-Is-Brick-Masonry-Kemp-TX.webp",
    features: ["Murs porteurs", "Murs de soutènement", "Cloisons intérieures", "Pierre naturelle"],
  },
  {
    id: 2,
    title: "Terrasses en Béton",
    href: "/terrasses-beton",
    description:
      "Conception et réalisation de terrasses en béton décoratif, dalle béton lisse ou imprimé. Nous créons des espaces extérieurs durables et esthétiques qui valorisent votre propriété. Nos techniques modernes garantissent une finition impeccable et une résistance optimale aux intempéries.",
    image: "/images/Prix Terrasse Béton.jpg",
    features: ["Béton décoratif", "Dalle lisse", "Béton imprimé", "Béton désactivé"],
  },
  {
    id: 3,
    title: "Rénovation de Façades",
    href: "/renovation-facades",
    description:
      "Ravalement et rénovation complète de façades : nettoyage, réparation des fissures, application d'enduits et peintures. Nous redonnons vie à vos façades en alliant esthétisme et protection durable contre les agressions extérieures. Un diagnostic précis permet d'identifier les travaux nécessaires.",
    image: "/images/Maconnerie image.jpg",
    features: ["Ravalement complet", "Traitement fissures", "Enduits", "Isolation extérieure"],
  },
  {
    id: 4,
    title: "Extension de Maison",
    href: "/extension-maison",
    description:
      "Agrandissement de votre espace de vie avec des extensions sur mesure. De la conception à la réalisation, nous prenons en charge l'ensemble du projet : fondations, élévation des murs, toiture et finitions. Chaque extension est pensée pour s'intégrer harmonieusement à l'existant.",
    image: "/images/Masonry Work.jpg",
    features: ["Étude personnalisée", "Fondations", "Gros œuvre", "Clé en main"],
  },
  {
    id: 5,
    title: "Clôtures et Murets",
    href: "/clotures-murets",
    description:
      "Installation de clôtures et murets en béton, pierre ou parpaings pour délimiter et sécuriser votre propriété. Nous proposons des solutions esthétiques et durables adaptées à vos besoins et au style de votre habitat. Chaque réalisation est conçue pour résister dans le temps.",
    image: "/images/Bricklayer.jpg",
    features: ["Murets décoratifs", "Clôtures béton", "Piliers portail", "Pierre de taille"],
  },
  {
    id: 6,
    title: "Joints et Enduits",
    href: "/joints-enduits",
    description:
      "Application d'enduits traditionnels ou modernes et rejointoiement de murs en pierre ou briques. Nos techniques artisanales assurent une finition parfaite et une protection optimale de vos murs. Nous maîtrisons les enduits à la chaux, ciment et les finitions décoratives.",
    image: "/images/Maçons avec truelles sur chantier.jpg",
    features: ["Enduit traditionnel", "Enduit monocouche", "Rejointoiement", "Finitions décoratives"],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className={`relative h-64 md:h-full min-h-[300px] overflow-hidden ${index % 2 !== 0 ? "md:order-2" : ""}`}>
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 md:hidden">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
              {String(service.id).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={`p-6 md:p-10 flex flex-col justify-center ${index % 2 !== 0 ? "md:order-1" : ""}`}>
          <div className="hidden md:block mb-4">
            <span className="bg-secondary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
              Service {String(service.id).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-foreground-light leading-relaxed mb-6">
            {service.description}
          </p>
          <ul className="grid grid-cols-2 gap-2 mb-6">
            {service.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-foreground-light"
              >
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href={service.href}
            className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            En savoir plus
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="py-24 bg-background-alt">
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
            Nos Expertises
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Services de Maçonnerie Professionnelle
          </h2>
          <p className="text-foreground-light text-lg max-w-3xl mx-auto leading-relaxed">
            Découvrez l&apos;ensemble de nos prestations de maçonnerie. Chaque projet est réalisé avec 
            le plus grand soin par nos artisans qualifiés, utilisant des matériaux de première qualité 
            pour garantir des réalisations durables et esthétiques.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-foreground-light mb-6">
            Vous avez un projet spécifique ? Nos experts sont à votre écoute pour vous conseiller.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
          >
            Obtenir un Devis Gratuit
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
