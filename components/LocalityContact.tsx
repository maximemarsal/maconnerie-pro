"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

// Déclaration pour TypeScript
declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

interface LocalityContactProps {
  cityName: string;
  departmentName: string;
  departmentCode: string;
  cityPreposition: string;
  deptPreposition: string;
  nearbyPages?: Array<{ name: string; href: string }>;
}

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  ville: string;
  codePostal: string;
  description: string;
}

interface FormErrors {
  nom?: string;
  prenom?: string;
  email?: string;
  telephone?: string;
  ville?: string;
  codePostal?: string;
  description?: string;
}

export default function LocalityContact({
  cityName,
  departmentName,
  departmentCode,
  cityPreposition,
  deptPreposition,
  nearbyPages = [],
}: LocalityContactProps) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    ville: "",
    codePostal: "",
    description: "",
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.nom) {
      newErrors.nom = "Le nom est requis";
    } else if (formData.nom.length < 2) {
      newErrors.nom = "Minimum 2 caractères";
    }
    
    if (!formData.prenom) {
      newErrors.prenom = "Le prénom est requis";
    } else if (formData.prenom.length < 2) {
      newErrors.prenom = "Minimum 2 caractères";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez entrer un email valide";
    }
    
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    if (!formData.telephone) {
      newErrors.telephone = "Le téléphone est requis";
    } else if (!phoneRegex.test(formData.telephone.replace(/\s/g, ""))) {
      newErrors.telephone = "Veuillez entrer un numéro valide";
    }
    
    if (!formData.ville) {
      newErrors.ville = "La ville est requise";
    } else if (formData.ville.length < 2) {
      newErrors.ville = "Minimum 2 caractères";
    }
    
    const postalRegex = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
    if (!formData.codePostal) {
      newErrors.codePostal = "Le code postal est requis";
    } else if (!postalRegex.test(formData.codePostal)) {
      newErrors.codePostal = "Code postal invalide";
    }
    
    if (!formData.description) {
      newErrors.description = "La description est requise";
    } else if (formData.description.length < 10) {
      newErrors.description = "Minimum 10 caractères";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: `Page ${cityName}` }),
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ nom: "", prenom: "", email: "", telephone: "", ville: "", codePostal: "", description: "" });
        // Google Ads Conversion Tracking
        if (typeof window !== "undefined" && window.gtag_report_conversion) {
          window.gtag_report_conversion();
        }
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-local" className="py-20 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contactez-Nous
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Devis Gratuit Maçonnerie {cityPreposition} {cityName}
          </h2>
          <p className="text-foreground-light text-lg max-w-3xl mx-auto leading-relaxed">
            Obtenez votre devis gratuit sous 24 heures pour tous vos travaux de maçonnerie 
            {cityPreposition} {cityName} et {deptPreposition} {departmentName} ({departmentCode}). Nos artisans se 
            déplacent gratuitement pour évaluer votre projet.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="prenom" className="block text-sm font-semibold text-foreground mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    placeholder="Jean"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.prenom ? "border-red-500" : "border-border"} bg-background focus:border-primary transition-colors text-foreground`}
                  />
                  {errors.prenom && <p className="mt-1 text-sm text-red-500">{errors.prenom}</p>}
                </div>
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-foreground mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Dupont"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.nom ? "border-red-500" : "border-border"} bg-background focus:border-primary transition-colors text-foreground`}
                  />
                  {errors.nom && <p className="mt-1 text-sm text-red-500">{errors.nom}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-border"} bg-background focus:border-primary transition-colors text-foreground`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-semibold text-foreground mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="06 12 34 56 78"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.telephone ? "border-red-500" : "border-border"} bg-background focus:border-primary transition-colors text-foreground`}
                />
                {errors.telephone && <p className="mt-1 text-sm text-red-500">{errors.telephone}</p>}
              </div>

              <div>
                <label htmlFor="ville" className="block text-sm font-semibold text-foreground mb-2">
                  Ville
                </label>
                <input
                  type="text"
                  id="ville"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  placeholder={cityName}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.ville ? "border-red-500" : "border-border"} bg-background focus:border-primary transition-colors text-foreground`}
                />
                {errors.ville && <p className="mt-1 text-sm text-red-500">{errors.ville}</p>}
              </div>

              <div>
                <label htmlFor="codePostal" className="block text-sm font-semibold text-foreground mb-2">
                  Code Postal
                </label>
                <input
                  type="text"
                  id="codePostal"
                  name="codePostal"
                  value={formData.codePostal}
                  onChange={handleChange}
                  placeholder={departmentCode === "72" ? "72000" : departmentCode === "01" ? "01000" : departmentCode === "06" ? "06000" : "13000"}
                  maxLength={5}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.codePostal ? "border-red-500" : "border-border"} bg-background focus:border-primary transition-colors text-foreground`}
                />
                {errors.codePostal && <p className="mt-1 text-sm text-red-500">{errors.codePostal}</p>}
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-foreground mb-2">
                  Description de Votre Projet
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder={`Décrivez votre projet de maçonnerie ${cityPreposition} ${cityName}...`}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.description ? "border-red-500" : "border-border"} bg-background focus:border-primary transition-colors text-foreground resize-none`}
                />
                {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors duration-300 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary-dark text-white"}`}
              >
                {isSubmitting ? "Envoi en cours..." : `Demander un Devis ${cityPreposition} ${cityName}`}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                  <strong>Demande envoyée !</strong> Nous vous recontacterons sous 24h.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                  <strong>Erreur.</strong> Veuillez réessayer.
                </div>
              )}
            </form>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Why Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Nos Engagements {cityPreposition} {cityName}
              </h3>
              <ul className="space-y-4">
                {[
                  "Devis gratuit et détaillé sous 24 heures",
                  "Déplacement gratuit " + deptPreposition + " " + departmentName,
                  "Artisans qualifiés et certifiés RGE",
                  "Garantie décennale sur tous les travaux",
                  "Prix fixés sans mauvaise surprise",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nearby Pages */}
            {nearbyPages.length > 0 && (
              <div className="bg-accent rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Nous Intervenons Aussi
                </h3>
                <div className="flex flex-wrap gap-2">
                  {nearbyPages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.href}
                      className="inline-block bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Home */}
            <div className="text-center">
              <Link
                href="/"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour à l&apos;accueil
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
