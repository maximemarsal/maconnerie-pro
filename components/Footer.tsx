"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { label: "Tous nos services", href: "/services", highlight: true },
    { label: "Construction de Murs", href: "/construction-murs" },
    { label: "Terrasses Béton", href: "/terrasses-beton" },
    { label: "Rénovation Façades", href: "/renovation-facades" },
    { label: "Extension Maison", href: "/extension-maison" },
    { label: "Clôtures et Murets", href: "/clotures-murets" },
    { label: "Joints et Enduits", href: "/joints-enduits" },
  ],
  departements: [
    { label: "Toutes nos zones", href: "/zones-intervention", highlight: true },
    { label: "Sarthe (72)", href: "/macon-sarthe-72" },
    { label: "Ain (01)", href: "/macon-ain-01" },
    { label: "Alpes-Maritimes (06)", href: "/macon-alpes-maritimes-06" },
    { label: "Bouches-du-Rhône (13)", href: "/macon-bouches-du-rhone-13" },
  ],
  villes: [
    { label: "Le Mans", href: "/macon-le-mans" },
    { label: "La Flèche", href: "/macon-la-fleche" },
    { label: "Sablé-sur-Sarthe", href: "/macon-sable-sur-sarthe" },
    { label: "Bourg-en-Bresse", href: "/macon-bourg-en-bresse" },
    { label: "Oyonnax", href: "/macon-oyonnax" },
    { label: "Nice", href: "/macon-nice" },
    { label: "Cannes", href: "/macon-cannes" },
    { label: "Marseille", href: "/macon-marseille" },
    { label: "Aix-en-Provence", href: "/macon-aix-en-provence" },
  ],
  entreprise: [
    { label: "Pourquoi Nous", href: "/pourquoi-nous" },
    { label: "Nos Services", href: "/services" },
    { label: "Zones d'Intervention", href: "/zones-intervention" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="Maçonnerie Pro - Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="text-xl font-bold text-white">Maçonnerie</span>
                <span className="text-xl font-bold text-secondary">Pro</span>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed mb-6">
              Entreprise de maçonnerie professionnelle depuis plus de 20 ans. 
              Nous réalisons tous vos travaux de gros œuvre avec expertise et savoir-faire artisanal.
            </p>
            <div className="flex gap-4">
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg text-sm">
                <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Certifié RGE
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg text-sm">
                <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Garantie 10 ans
              </span>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${
                      "highlight" in link && link.highlight
                        ? "text-secondary font-semibold hover:text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Zones Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Départements</h4>
            <ul className="space-y-2">
              {footerLinks.departements.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`transition-colors text-sm ${
                      "highlight" in link && link.highlight
                        ? "text-secondary font-semibold hover:text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-bold mb-4 mt-6">Villes</h4>
            <ul className="space-y-2">
              {footerLinks.villes.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/70">
                  Lun - Ven : 8h00 - 18h00<br />
                  Sam : 9h00 - 12h00
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/70">
                  Réponse garantie sous 24h
                </span>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Demander un Devis
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              {currentYear} Maçonnerie Pro. Tous droits réservés. Artisan maçon professionnel certifié RGE.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                Mentions Légales
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Footer Text */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-white/30 text-xs leading-relaxed">
            Maçonnerie Pro est une entreprise spécialisée dans les travaux de maçonnerie pour les particuliers 
            et les professionnels. Nos artisans maçons interviennent en Sarthe (72), 
            dans l&apos;Ain (01), dans les Alpes-Maritimes (06) et dans les Bouches-du-Rhône (13) pour tous types de projets : 
            construction de murs porteurs, réalisation de terrasses en béton, ravalement et rénovation de façades, 
            extensions de maison, installation de clôtures et murets, application de joints et enduits. 
            Certifiés RGE et couverts par une garantie décennale, nous vous garantissons un travail de qualité 
            réalisé dans les règles de l&apos;art. Devis gratuit sous 24 heures pour tous vos projets de maçonnerie.
          </p>
        </div>
      </div>
    </footer>
  );
}
