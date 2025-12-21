"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface LocalityHeroProps {
  cityName: string;
  departmentName: string;
  departmentCode: string;
  cityPreposition: string; // "au" pour Le Mans, "à" pour Nice, etc.
  deptPreposition: string; // "en" pour Sarthe, "dans l'" pour Ain, "dans les" pour Alpes-Maritimes
  backgroundImage?: string;
}

export default function LocalityHero({
  cityName,
  departmentName,
  departmentCode,
  cityPreposition,
  deptPreposition,
  backgroundImage = "/images/Masonry Trade Image 1200x800.webp",
}: LocalityHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={`Maçon ${cityPreposition} ${cityName} - Travaux de maçonnerie`}
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-secondary/30">
            Artisans certifiés RGE - {departmentName} ({departmentCode})
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Maçon {cityPreposition}{" "}
            <span className="text-secondary">{cityName}</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl">Artisan Maçonnerie {deptPreposition} {departmentName}</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-3xl">
            Votre entreprise de maçonnerie de confiance {cityPreposition} {cityName} et {deptPreposition} {departmentName} ({departmentCode}). 
            Construction de murs, terrasses en béton, rénovation de façades, extensions de maison. 
            Devis gratuit sous 24 heures, garantie décennale incluse.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="#contact-local"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Devis Gratuit {cityPreposition} {cityName}
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 backdrop-blur-sm"
            >
              Voir Tous Nos Services
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Garantie Décennale</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Intervention {departmentCode}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Artisans Certifiés RGE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
