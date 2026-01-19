"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FormData {
  nomPrenom: string;
  email: string;
  telephone: string;
  ville: string;
  codePostal: string;
  description: string;
}

interface FormErrors {
  nomPrenom?: string;
  email?: string;
  telephone?: string;
  ville?: string;
  codePostal?: string;
  description?: string;
}

export default function ContactForm() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  
  const [formData, setFormData] = useState<FormData>({
    nomPrenom: "",
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
    
    if (!formData.nomPrenom) {
      newErrors.nomPrenom = "Le nom et prénom sont requis";
    } else if (formData.nomPrenom.length < 2) {
      newErrors.nomPrenom = "Minimum 2 caractères";
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
      newErrors.codePostal = "Code postal invalide (5 chiffres)";
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ nomPrenom: "", email: "", telephone: "", ville: "", codePostal: "", description: "" });
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
    <section id="contact" className="py-24 bg-background-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contactez-Nous
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Demandez Votre Devis Gratuit
          </h2>
          <p className="text-foreground-light text-lg max-w-3xl mx-auto leading-relaxed">
            Remplissez ce formulaire simple et recevez votre devis personnalisé sous 24 heures. 
            Nos experts étudient chaque demande avec attention pour vous proposer la solution 
            la plus adaptée à votre projet de maçonnerie.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom/Prénom */}
              <div>
                <label htmlFor="nomPrenom" className="block text-sm font-semibold text-foreground mb-2">
                  Nom et Prénom
                </label>
                <input
                  type="text"
                  id="nomPrenom"
                  name="nomPrenom"
                  value={formData.nomPrenom}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.nomPrenom ? "border-red-500" : "border-border"
                  } bg-background focus:border-primary transition-colors text-foreground placeholder:text-foreground-light/50`}
                />
                {errors.nomPrenom && (
                  <p className="mt-1 text-sm text-red-500">{errors.nomPrenom}</p>
                )}
              </div>

              {/* Email */}
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
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-border"
                  } bg-background focus:border-primary transition-colors text-foreground placeholder:text-foreground-light/50`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="telephone" className="block text-sm font-semibold text-foreground mb-2">
                  Numéro de Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="06 12 34 56 78"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.telephone ? "border-red-500" : "border-border"
                  } bg-background focus:border-primary transition-colors text-foreground placeholder:text-foreground-light/50`}
                />
                {errors.telephone && (
                  <p className="mt-1 text-sm text-red-500">{errors.telephone}</p>
                )}
              </div>

              {/* Ville */}
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
                  placeholder="Le Mans"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.ville ? "border-red-500" : "border-border"
                  } bg-background focus:border-primary transition-colors text-foreground placeholder:text-foreground-light/50`}
                />
                {errors.ville && (
                  <p className="mt-1 text-sm text-red-500">{errors.ville}</p>
                )}
              </div>

              {/* Postal Code */}
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
                  placeholder="72000"
                  maxLength={5}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.codePostal ? "border-red-500" : "border-border"
                  } bg-background focus:border-primary transition-colors text-foreground placeholder:text-foreground-light/50`}
                />
                {errors.codePostal && (
                  <p className="mt-1 text-sm text-red-500">{errors.codePostal}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-foreground mb-2">
                  Description de Votre Projet
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Décrivez votre projet de maçonnerie : type de travaux souhaités, surface estimée, contraintes particulières..."
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.description ? "border-red-500" : "border-border"
                  } bg-background focus:border-primary transition-colors text-foreground placeholder:text-foreground-light/50 resize-none`}
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-primary-dark text-white"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  "Envoyer Ma Demande de Devis"
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                  <strong>Demande envoyée avec succès !</strong>
                  <br />
                  Nous vous recontacterons sous 24 heures.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                  <strong>Une erreur est survenue.</strong>
                  <br />
                  Veuillez réessayer ou nous contacter par téléphone.
                </div>
              )}

              {/* Privacy Notice */}
              <p className="text-xs text-foreground-light text-center">
                En soumettant ce formulaire, vous acceptez que vos données soient utilisées 
                pour traiter votre demande de devis. Vos informations restent confidentielles 
                et ne seront jamais partagées avec des tiers.
              </p>
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
            {/* Image */}
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/homme-en-train-de-faire-sa-terrasse-en-beton-768x471.png"
                alt="Artisan maçon au travail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Réponse Garantie</p>
                <p className="text-white/80">sous 24 heures</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Pourquoi Nous Contacter ?
              </h3>
              <ul className="space-y-4">
                {[
                  "Devis détaillé et transparent, sans engagement",
                  "Réponse personnalisée sous 24 heures ouvrées",
                  "Conseils d'experts pour optimiser votre projet",
                  "Estimation précise des délais de réalisation",
                  "Accompagnement complet de A à Z",
                ].map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground-light">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-accent rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Réponse Garantie sous 24h</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Nos équipes étudient chaque demande avec attention. 
                Nous vous recontactons rapidement pour discuter de votre projet.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-white/90">
                  <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Devis gratuit et sans engagement
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Déplacement gratuit pour évaluation
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center text-secondary font-semibold hover:text-white transition-colors"
              >
                Voir la page contact complète
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
