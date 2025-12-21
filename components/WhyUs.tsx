"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const advantages = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Plus de 20 Ans d'Expérience",
    description:
      "Deux décennies de savoir-faire dans la maçonnerie nous permettent de maîtriser parfaitement chaque technique et de répondre à tous vos besoins avec expertise et précision.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Artisans Certifiés RGE",
    description:
      "Nos maçons sont certifiés Reconnu Garant de l'Environnement, vous assurant des travaux réalisés dans le respect des normes environnementales et éligibles aux aides de l'État.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Devis Gratuit sous 24h",
    description:
      "Recevez votre devis détaillé et transparent en moins de 24 heures. Nous nous engageons à vous fournir une estimation précise et sans surprise pour votre projet de maçonnerie.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Garantie Décennale",
    description:
      "Tous nos travaux sont couverts par une garantie décennale, vous assurant une protection complète pendant 10 ans contre tout défaut de construction ou malfaçon.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Matériaux Premium",
    description:
      "Nous sélectionnons uniquement des matériaux de construction haut de gamme auprès de fournisseurs certifiés pour garantir la qualité et la durabilité de chaque réalisation.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Respect des Délais",
    description:
      "Nous nous engageons contractuellement sur les délais de réalisation. Notre organisation rigoureuse et notre expérience nous permettent de tenir nos promesses sans compromis.",
  },
];

const stats = [
  { value: "500+", label: "Projets Réalisés" },
  { value: "20+", label: "Années d'Expérience" },
  { value: "98%", label: "Clients Satisfaits" },
  { value: "4", label: "Départements Couverts" },
];

export default function WhyUs() {
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });

  return (
    <section id="avantages" className="py-24 bg-white">
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
            Nos Engagements
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Pourquoi Choisir Nos Services ?
          </h2>
          <p className="text-foreground-light text-lg max-w-3xl mx-auto leading-relaxed">
            Faire appel à notre entreprise de maçonnerie, c&apos;est s&apos;assurer d&apos;un travail de qualité, 
            réalisé par des professionnels passionnés qui placent votre satisfaction au cœur de leurs priorités. 
            Découvrez ce qui fait notre différence.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-background-alt rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-border"
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {advantage.title}
              </h3>
              <p className="text-foreground-light leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/Masonry Equipment Journal.webp"
              alt="Équipement de maçonnerie professionnel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-accent/90" />
          </div>
          <div className="relative z-10 py-16 px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isStatsInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-secondary text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-foreground-light max-w-4xl mx-auto leading-relaxed">
            <strong className="text-foreground">Notre réputation parle d&apos;elle-même.</strong> Depuis plus de deux 
            décennies, nous accompagnons les particuliers et les professionnels dans leurs projets de maçonnerie. 
            Notre équipe d&apos;artisans qualifiés met son expertise à votre service pour transformer vos idées en 
            réalisations concrètes, durables et esthétiques. La satisfaction de nos clients est notre meilleure 
            publicité, et chaque nouveau projet est l&apos;occasion de prouver notre engagement envers l&apos;excellence.
          </p>
          <Link
            href="/pourquoi-nous"
            className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors mt-6"
          >
            En savoir plus sur nos engagements
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
