"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const zonesData = [
  { name: "Sarthe (72)", href: "/macon-sarthe-72", cities: ["Le Mans", "La Flèche", "Sablé-sur-Sarthe"] },
  { name: "Ain (01)", href: "/macon-ain-01", cities: ["Bourg-en-Bresse", "Oyonnax"] },
  { name: "Alpes-Maritimes (06)", href: "/macon-alpes-maritimes-06", cities: ["Nice", "Cannes"] },
  { name: "Bouches-du-Rhône (13)", href: "/macon-bouches-du-rhone-13", cities: ["Marseille", "Aix-en-Provence"] },
];

export default function ContactPageClient() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  
  const [formData, setFormData] = useState({
    email: "",
    telephone: "",
    codePostal: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ email: "", telephone: "", codePostal: "", description: "" });
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
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark opacity-90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-white/20">
              Réponse garantie sous 24h
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Contactez-Nous
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Décrivez votre projet et recevez un devis gratuit et personnalisé sous 24 heures. 
              Nos artisans se déplacent gratuitement pour évaluer vos besoins.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Demandez Votre Devis Gratuit
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-foreground mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      required
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="codePostal" className="block text-sm font-medium text-foreground mb-2">
                    Code Postal *
                  </label>
                  <input
                    type="text"
                    id="codePostal"
                    required
                    value={formData.codePostal}
                    onChange={(e) => setFormData({ ...formData, codePostal: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="72000"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                    Description du Projet *
                  </label>
                  <textarea
                    id="description"
                    required
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Décrivez votre projet : type de travaux, dimensions approximatives, délai souhaité..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Votre demande a été envoyée avec succès. Nous vous recontactons sous 24h.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Une erreur est survenue. Veuillez réessayer.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma Demande de Devis"}
                </button>

                <p className="text-sm text-foreground-light text-center">
                  En soumettant ce formulaire, vous acceptez d&apos;être recontacté par nos équipes.
                </p>
              </form>
            </motion.div>

            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">Informations Pratiques</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Horaires</p>
                      <p className="text-foreground-light">Lun - Ven : 8h00 - 18h00</p>
                      <p className="text-foreground-light">Sam : 9h00 - 12h00</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Délai de Réponse</p>
                      <p className="text-foreground-light">24 heures maximum</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Intervention</p>
                      <p className="text-foreground-light">Déplacement gratuit pour devis</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Engagements */}
              <div className="bg-accent rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Nos Engagements</h3>
                <ul className="space-y-4">
                  {[
                    "Devis gratuit et sans engagement",
                    "Déplacement gratuit pour évaluation",
                    "Réponse garantie sous 24h",
                    "Prix fixe, pas de surprise",
                    "Artisans certifiés RGE",
                    "Garantie décennale sur tous travaux",
                  ].map((engagement, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{engagement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">Liens Utiles</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/services" className="text-primary hover:text-primary-dark font-medium">
                    Nos Services
                  </Link>
                  <Link href="/pourquoi-nous" className="text-primary hover:text-primary-dark font-medium">
                    Pourquoi Nous
                  </Link>
                  <Link href="/zones-intervention" className="text-primary hover:text-primary-dark font-medium">
                    Zones d&apos;Intervention
                  </Link>
                  <Link href="/" className="text-primary hover:text-primary-dark font-medium">
                    Accueil
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zones Section */}
      <section className="py-20 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Zones d&apos;Intervention
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Nous Intervenons dans 4 Départements
            </h2>
            <p className="text-foreground-light text-lg max-w-2xl mx-auto">
              Vérifiez que votre commune fait partie de notre zone d&apos;intervention.
            </p>
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
                  className="block bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-foreground mb-3">{zone.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {zone.cities.map((city) => (
                      <span
                        key={city}
                        className="bg-background-alt px-2 py-1 rounded text-xs text-foreground-light"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Questions Fréquentes
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Comment se passe la demande de devis ?",
                answer: "Remplissez le formulaire ci-dessus avec les détails de votre projet. Nous vous recontactons sous 24h pour convenir d'un rendez-vous. Un artisan se déplace gratuitement chez vous pour évaluer les travaux et prendre les mesures nécessaires. Vous recevez ensuite un devis détaillé sous 24-48h.",
              },
              {
                question: "Le devis est-il vraiment gratuit ?",
                answer: "Oui, le devis est totalement gratuit et sans engagement. Le déplacement de notre artisan pour l'évaluation sur site est également gratuit. Vous êtes libre d'accepter ou de refuser notre proposition.",
              },
              {
                question: "Dans quels délais pouvez-vous intervenir ?",
                answer: "Selon notre planning et l'urgence de votre projet, nous pouvons généralement intervenir sous 1 à 3 semaines après acceptation du devis. Pour les urgences (fuite, mur effondré...), nous faisons notre maximum pour intervenir sous 48h.",
              },
              {
                question: "Quels modes de paiement acceptez-vous ?",
                answer: "Nous acceptons les paiements par chèque, virement bancaire et espèces. Un acompte peut être demandé à la signature du devis, le solde étant réglé à la fin des travaux. Pour les chantiers importants, un échelonnement peut être convenu.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-background-alt rounded-xl p-6"
              >
                <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-foreground-light">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
