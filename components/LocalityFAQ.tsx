"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface LocalityFAQProps {
  cityName: string;
  departmentName: string;
  departmentCode: string;
  cityPreposition: string;
  deptPreposition: string;
  customFaqs?: Array<{ question: string; answer: string }>;
}

export default function LocalityFAQ({
  cityName,
  departmentName,
  departmentCode,
  cityPreposition,
  deptPreposition,
  customFaqs,
}: LocalityFAQProps) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const defaultFaqs = [
    {
      question: `Quels sont vos délais d'intervention ${cityPreposition} ${cityName} ?`,
      answer: `Nous intervenons généralement sous 48 heures à 1 semaine ${cityPreposition} ${cityName} et ${deptPreposition} ${departmentName} (${departmentCode}), selon la nature et l'urgence des travaux. Pour un devis, nous nous déplaçons gratuitement sous 24 heures. Notre proximité avec ${cityName} nous permet d'être réactifs et de répondre rapidement à vos demandes de travaux de maçonnerie.`,
    },
    {
      question: `Quel est le prix d'un maçon ${cityPreposition} ${cityName} ?`,
      answer: `Les tarifs de maçonnerie ${cityPreposition} ${cityName} varient selon le type de travaux : comptez entre 40 et 70 euros/m² pour un mur en parpaings, 80 à 150 euros/m² pour une terrasse en béton, et 30 à 60 euros/m² pour un ravalement de façade. Nous établissons des devis gratuits et détaillés pour chaque projet ${deptPreposition} ${departmentName}, sans engagement de votre part.`,
    },
    {
      question: `Intervenez-vous dans toutes les communes ${deptPreposition} ${departmentName} ?`,
      answer: `Oui, notre entreprise de maçonnerie intervient dans l'intégralité du département ${departmentCode}. Nous couvrons ${cityName} et toutes les communes environnantes, y compris les zones rurales et les villages. Le déplacement est gratuit pour l'établissement du devis ${deptPreposition} ${departmentName}.`,
    },
    {
      question: `Quelles garanties proposez-vous pour vos travaux ${cityPreposition} ${cityName} ?`,
      answer: `Tous nos travaux de maçonnerie réalisés ${cityPreposition} ${cityName} sont couverts par notre garantie décennale, qui vous protège pendant 10 ans contre tout défaut de construction. Nous sommes également assurés en responsabilité civile professionnelle. En tant qu'artisans certifiés RGE, nous vous permettons de bénéficier des aides de l'État pour vos travaux de rénovation.`,
    },
    {
      question: `Comment obtenir un devis pour des travaux de maçonnerie ${cityPreposition} ${cityName} ?`,
      answer: `Pour obtenir un devis gratuit ${cityPreposition} ${cityName}, vous pouvez remplir notre formulaire de contact en ligne ou nous appeler directement. Un de nos artisans se déplacera gratuitement chez vous sous 24 heures pour évaluer votre projet et vous proposer un devis détaillé. Nos devis sont clairs, sans frais cachés, et valables 30 jours.`,
    },
    {
      question: `Quels types de matériaux utilisez-vous pour la maçonnerie ${cityPreposition} ${cityName} ?`,
      answer: `Nous utilisons exclusivement des matériaux de qualité premium adaptés au climat et aux normes de construction ${deptPreposition} ${departmentName}. Parpaings, briques, pierres naturelles, béton armé, enduits traditionnels ou modernes : nous sélectionnons les matériaux les plus adaptés à chaque projet ${cityPreposition} ${cityName}, en privilégiant les fournisseurs locaux quand c'est possible.`,
    },
  ];

  const faqs = customFaqs || defaultFaqs;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Questions Fréquentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            FAQ Maçonnerie {cityPreposition} {cityName}
          </h2>
          <p className="text-foreground-light text-lg max-w-3xl mx-auto leading-relaxed">
            Retrouvez les réponses aux questions les plus fréquentes concernant nos services 
            de maçonnerie {cityPreposition} {cityName} et {deptPreposition} {departmentName} ({departmentCode}).
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-background-alt rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-foreground-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-foreground-light mb-4">
            Vous avez d&apos;autres questions sur nos services {cityPreposition} {cityName} ?
          </p>
          <a
            href="#contact-local"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Contactez-nous
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
