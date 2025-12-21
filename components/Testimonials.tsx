"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Jean-Pierre Dubois",
    location: "Le Mans (72)",
    rating: 5,
    project: "Construction d'un mur de clôture",
    text: "Travail remarquable pour la construction de notre mur de clôture. L'équipe a été ponctuelle, professionnelle et le résultat dépasse nos attentes. Le mur est parfaitement aligné et les finitions sont impeccables. Je recommande vivement cette entreprise pour tous vos travaux de maçonnerie dans la Sarthe.",
  },
  {
    id: 2,
    name: "Marie-Claire Fontaine",
    location: "Nice (06)",
    rating: 5,
    project: "Terrasse en béton décoratif",
    text: "Notre terrasse en béton décoratif est magnifique. Les artisans ont su nous conseiller sur le meilleur choix de finition et le rendu est exactement ce que nous souhaitions. Chantier propre, délais respectés et prix conforme au devis. Une entreprise sérieuse sur la Côte d'Azur.",
  },
  {
    id: 3,
    name: "Philippe Martin",
    location: "Marseille (13)",
    rating: 5,
    project: "Rénovation façade complète",
    text: "Ravalement complet de notre façade avec isolation par l'extérieur. Le résultat est bluffant, notre maison a retrouvé une seconde jeunesse. L'équipe était très agréable et a travaillé avec soin malgré les contraintes d'accès. Très satisfait de cette collaboration.",
  },
  {
    id: 4,
    name: "Sylvie Renard",
    location: "Bourg-en-Bresse (01)",
    rating: 5,
    project: "Extension de maison",
    text: "Extension de 40m² réalisée dans les règles de l'art. Du terrassement jusqu'aux finitions, tout a été parfaitement exécuté. La communication avec l'entreprise était excellente et nous avons été tenus informés à chaque étape. Un grand merci à toute l'équipe.",
  },
  {
    id: 5,
    name: "Robert Lefebvre",
    location: "Aix-en-Provence (13)",
    rating: 5,
    project: "Murets et piliers en pierre",
    text: "Réalisation de murets et piliers en pierre pour notre allée. Le travail est d'une qualité exceptionnelle, on voit vraiment le savoir-faire artisanal. Les maçons sont de vrais professionnels qui maîtrisent parfaitement leur métier. Je les recommande sans hésitation.",
  },
  {
    id: 6,
    name: "Catherine Moreau",
    location: "Cannes (06)",
    rating: 5,
    project: "Joints de pierre apparente",
    text: "Rejointoiement complet de notre maison en pierre. Les artisans ont utilisé un mortier de chaux traditionnel pour respecter l'authenticité du bâtiment. Le résultat est superbe et valorise vraiment le cachet de notre maison. Professionnalisme exemplaire.",
  },
];

export default function Testimonials() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="temoignages" className="py-24 bg-white">
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
            Ils Nous Font Confiance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Témoignages de Nos Clients
          </h2>
          <p className="text-foreground-light text-lg max-w-3xl mx-auto leading-relaxed">
            La satisfaction de nos clients est notre plus belle récompense. Découvrez les avis de 
            ceux qui nous ont fait confiance pour leurs projets de maçonnerie. Chaque témoignage 
            reflète notre engagement envers l&apos;excellence et la qualité de notre travail.
          </p>
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center gap-4 mb-12"
        >
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-foreground">4.9/5</span>
            <span className="text-foreground-light ml-2">basé sur 127 avis</span>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-foreground-light hover:text-primary transition-colors"
            aria-label="Témoignage précédent"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-foreground-light hover:text-primary transition-colors"
            aria-label="Témoignage suivant"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-background-alt rounded-2xl p-8 md:p-12"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${star <= testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Project Type */}
              <div className="text-center mb-4">
                <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                  {testimonials[currentIndex].project}
                </span>
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground-light text-lg leading-relaxed text-center mb-8">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>

              {/* Author */}
              <div className="text-center">
                <p className="font-bold text-foreground text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-foreground-light">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-secondary"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-foreground-light mb-6 text-lg">
            Rejoignez nos clients satisfaits et confiez-nous votre projet de maçonnerie
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
          >
            Demander Mon Devis Gratuit
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
