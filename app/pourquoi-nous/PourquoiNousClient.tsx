"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const engagements = [
  {
    title: "20 Ans d'Expérience",
    description: "Deux décennies de savoir-faire transmis et perfectionné. Chaque projet bénéficie de notre expertise accumulée sur des centaines de chantiers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Certification RGE",
    description: "Reconnu Garant de l'Environnement, notre certification vous permet de bénéficier des aides de l'État pour vos travaux de rénovation énergétique.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Garantie Décennale",
    description: "Tous nos travaux sont couverts par une assurance décennale. Votre investissement est protégé pendant 10 ans contre les malfaçons structurelles.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Devis Gratuit 24h",
    description: "Nous nous engageons à vous fournir un devis détaillé sous 24 heures. Déplacement gratuit pour évaluer votre projet sur place.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: "Matériaux de Qualité",
    description: "Nous sélectionnons rigoureusement nos matériaux auprès de fournisseurs reconnus. Parpaings normés, mortiers adaptés, aciers certifiés.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Respect des Délais",
    description: "Un planning précis est établi en amont. Nous nous engageons sur des délais réalistes et les respectons, sauf conditions météo exceptionnelles.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const valeurs = [
  {
    title: "Savoir-Faire Artisanal",
    description: "Nos artisans maçons perpétuent un savoir-faire transmis de génération en génération. Chaque mur, chaque terrasse, chaque enduit est réalisé avec la précision et l'attention du travail bien fait. Nous maîtrisons aussi bien les techniques traditionnelles (pierre, chaux) que les méthodes modernes de construction.",
  },
  {
    title: "Écoute et Conseil",
    description: "Votre projet est unique. Nous prenons le temps de comprendre vos besoins, votre budget et vos contraintes pour vous proposer la solution la plus adaptée. Notre rôle ne se limite pas à l'exécution : nous vous conseillons sur les choix techniques, les matériaux et les démarches administratives.",
  },
  {
    title: "Transparence Totale",
    description: "Pas de mauvaise surprise avec nous. Nos devis sont détaillés et complets, incluant tous les postes de dépenses. Le prix annoncé est le prix final, sauf modifications demandées en cours de chantier. Nous vous informons régulièrement de l'avancement des travaux.",
  },
  {
    title: "Propreté du Chantier",
    description: "Un chantier propre est un chantier bien géré. Nous protégeons les zones non concernées par les travaux, évacuons régulièrement les gravats et laissons les lieux dans un état impeccable à la fin du chantier. Votre quotidien est impacté au minimum.",
  },
];

const chiffres = [
  { value: "20+", label: "Années d'expérience" },
  { value: "500+", label: "Projets réalisés" },
  { value: "100%", label: "Clients satisfaits" },
  { value: "24h", label: "Délai de réponse" },
];

const temoignages = [
  {
    text: "Excellent travail sur notre extension de maison. L'équipe a été professionnelle du début à la fin. Le résultat dépasse nos attentes.",
    author: "Marie et Pierre D.",
    location: "Le Mans (72)",
    project: "Extension 35m²",
  },
  {
    text: "Ravalement de façade impeccable. Les délais ont été respectés et le prix correspondait exactement au devis. Je recommande vivement.",
    author: "Jean-Claude M.",
    location: "Nice (06)",
    project: "Ravalement façade",
  },
  {
    text: "Notre terrasse en béton imprimé est magnifique. L'artisan nous a très bien conseillés sur le choix du motif et de la couleur.",
    author: "Isabelle L.",
    location: "Marseille (13)",
    project: "Terrasse 50m²",
  },
];

export default function PourquoiNousClient() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-accent">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-accent-light opacity-90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-white/20">
              Notre Engagement Qualité
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Pourquoi Choisir{" "}
              <span className="text-secondary">Maçonnerie Pro</span> ?
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Depuis plus de 20 ans, nous bâtissons la confiance avec nos clients. Découvrez 
              les valeurs et les engagements qui font de nous un partenaire de choix pour vos 
              projets de maçonnerie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engagements Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nos Engagements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              6 Raisons de Nous Faire Confiance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engagements.map((engagement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  {engagement.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{engagement.title}</h3>
                <p className="text-foreground-light leading-relaxed">{engagement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {chiffres.map((chiffre, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">{chiffre.value}</div>
                <div className="text-white/70 text-lg">{chiffre.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nos Valeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              L&apos;Artisanat au Cœur de Notre Métier
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {valeurs.map((valeur, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background-alt rounded-2xl p-8 border-l-4 border-primary"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">{valeur.title}</h3>
                <p className="text-foreground-light leading-relaxed">{valeur.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-20 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Témoignages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Ce Que Disent Nos Clients
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {temoignages.map((temoignage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground-light mb-6 italic">&quot;{temoignage.text}&quot;</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{temoignage.author}</p>
                  <p className="text-sm text-foreground-light">{temoignage.location} - {temoignage.project}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Notre Processus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Comment Nous Travaillons
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Prise de Contact", description: "Appelez-nous ou remplissez le formulaire. Nous vous recontactons sous 24h." },
              { step: "2", title: "Visite Technique", description: "Déplacement gratuit pour évaluer votre projet et prendre les mesures." },
              { step: "3", title: "Devis Détaillé", description: "Vous recevez un devis complet et transparent sous 24-48h." },
              { step: "4", title: "Réalisation", description: "Nos artisans réalisent vos travaux dans les règles de l'art." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground-light text-sm">{item.description}</p>
              </motion.div>
            ))}
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
              Prêt à Nous Faire Confiance ?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour discuter de votre projet. 
              Devis gratuit et sans engagement sous 24 heures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Demander un Devis
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Voir nos services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
