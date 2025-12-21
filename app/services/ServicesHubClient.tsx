"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const servicesData = [
  {
    title: "Construction de Murs",
    href: "/construction-murs",
    description: "Murs porteurs, murs de refend, murs en pierre, parpaings ou briques. Construction solide et durable pour tous vos projets.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "bg-primary",
  },
  {
    title: "Terrasses Béton",
    href: "/terrasses-beton",
    description: "Terrasses en béton classique, décoratif, imprimé ou désactivé. Créez un espace extérieur esthétique et fonctionnel.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    color: "bg-secondary",
  },
  {
    title: "Rénovation Façades",
    href: "/renovation-facades",
    description: "Ravalement, nettoyage, réparation et embellissement de vos façades. Redonnez vie à votre habitation.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: "bg-accent",
  },
  {
    title: "Extension Maison",
    href: "/extension-maison",
    description: "Agrandissement, surélévation, véranda maçonnée. Gagnez de l'espace sans déménager avec nos solutions sur mesure.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    color: "bg-primary",
  },
  {
    title: "Clôtures et Murets",
    href: "/clotures-murets",
    description: "Murets de clôture, piliers, murs de soutènement. Délimitez et sécurisez votre propriété avec style.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    color: "bg-secondary",
  },
  {
    title: "Joints et Enduits",
    href: "/joints-enduits",
    description: "Application d'enduits traditionnels ou modernes, rejointoiement de pierres. Finitions soignées pour un rendu parfait.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    color: "bg-accent",
  },
];

const zonesData = [
  { name: "Sarthe (72)", href: "/macon-sarthe-72", cities: ["Le Mans", "La Flèche", "Sablé-sur-Sarthe"] },
  { name: "Ain (01)", href: "/macon-ain-01", cities: ["Bourg-en-Bresse", "Oyonnax"] },
  { name: "Alpes-Maritimes (06)", href: "/macon-alpes-maritimes-06", cities: ["Nice", "Cannes"] },
  { name: "Bouches-du-Rhône (13)", href: "/macon-bouches-du-rhone-13", cities: ["Marseille", "Aix-en-Provence"] },
];

export default function ServicesHubClient() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark opacity-90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-white/20">
              Expertise et Savoir-Faire depuis plus de 20 ans
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Nos Services de{" "}
              <span className="text-secondary">Maçonnerie</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              De la construction de murs aux finitions les plus soignées, nous mettons notre expertise 
              au service de tous vos projets. Artisans certifiés RGE, garantie décennale incluse.
            </p>
            <Link
              href="#services-list"
              className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-accent px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Découvrir nos prestations
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-list" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nos Prestations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Une Gamme Complète de Services
            </h2>
            <p className="text-foreground-light text-lg max-w-3xl mx-auto">
              Quel que soit votre projet de maçonnerie, nous avons la solution adaptée. 
              Cliquez sur un service pour en savoir plus.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="block bg-white rounded-2xl shadow-lg overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className={`${service.color} p-6 text-white`}>
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-foreground-light mb-4">{service.description}</p>
                    <span className="inline-flex items-center text-primary font-semibold">
                      En savoir plus
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Notre Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Plus de 20 Ans au Service de Vos Projets
              </h2>
              <div className="space-y-4 text-foreground-light leading-relaxed">
                <p>
                  Notre entreprise de maçonnerie a bâti sa réputation sur un savoir-faire artisanal 
                  transmis de génération en génération. Chaque projet, qu&apos;il s&apos;agisse d&apos;une 
                  simple réparation ou d&apos;une construction complète, bénéficie de notre attention 
                  aux détails et de notre exigence de qualité.
                </p>
                <p>
                  Nous intervenons sur tous types de bâtiments : maisons individuelles, immeubles, 
                  bâtiments agricoles, locaux commerciaux. Notre équipe maîtrise aussi bien les 
                  techniques traditionnelles de la pierre de taille que les méthodes modernes 
                  de construction en béton armé.
                </p>
                <p>
                  Certifiés RGE (Reconnu Garant de l&apos;Environnement), nous vous accompagnons 
                  également dans vos projets de rénovation énergétique et vous aidons à bénéficier 
                  des aides de l&apos;État disponibles.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-foreground-light text-sm">Années d&apos;expérience</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-foreground-light text-sm">Projets réalisés</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-foreground-light text-sm">Clients satisfaits</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">10</div>
                <div className="text-foreground-light text-sm">Ans de garantie</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zones Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nos Zones d&apos;Intervention
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Nous Intervenons dans 4 Départements
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {zonesData.map((zone, index) => (
              <motion.div
                key={zone.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={zone.href}
                  className="block bg-background-alt rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-foreground mb-3">{zone.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {zone.cities.map((city) => (
                      <span
                        key={city}
                        className="bg-white px-3 py-1 rounded-full text-sm text-foreground-light"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/zones-intervention"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Voir toutes nos zones d&apos;intervention
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à Concrétiser Votre Projet ?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour obtenir un devis gratuit et personnalisé. 
              Nos artisans se déplacent gratuitement pour évaluer votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
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
              Entreprise de Maçonnerie Générale
            </h2>
            <p>
              Maçonnerie Pro est votre partenaire de confiance pour tous vos travaux de maçonnerie. 
              Notre gamme complète de services couvre l&apos;ensemble des besoins en construction et 
              rénovation : <strong>construction de murs</strong> (porteurs, de refend, en pierre ou parpaings), 
              <strong>réalisation de terrasses en béton</strong> (classique, décoratif, imprimé ou désactivé), 
              <strong>rénovation de façades</strong> (ravalement, nettoyage, réparation), 
              <strong>extensions de maison</strong> (agrandissement, surélévation), 
              <strong>clôtures et murets</strong> (piliers, murs de soutènement), et 
              <strong>joints et enduits</strong> (traditionnels ou modernes).
            </p>
            <p>
              Chaque service est réalisé par des artisans qualifiés, formés aux techniques traditionnelles 
              comme aux méthodes modernes. Nous utilisons exclusivement des matériaux de qualité, 
              sélectionnés pour leur durabilité et leur résistance aux conditions climatiques de chaque région.
            </p>
            <p>
              Présents en <strong>Sarthe (72)</strong>, dans l&apos;<strong>Ain (01)</strong>, 
              dans les <strong>Alpes-Maritimes (06)</strong> et dans les <strong>Bouches-du-Rhône (13)</strong>, 
              nous adaptons nos techniques aux spécificités architecturales et climatiques de chaque territoire. 
              Devis gratuit sous 24 heures, garantie décennale sur tous nos travaux.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
