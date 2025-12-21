"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/pourquoi-nous", label: "Pourquoi Nous" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const servicesData = [
  { label: "Construction de Murs", href: "/construction-murs" },
  { label: "Terrasses Béton", href: "/terrasses-beton" },
  { label: "Rénovation Façades", href: "/renovation-facades" },
  { label: "Extension Maison", href: "/extension-maison" },
  { label: "Clôtures et Murets", href: "/clotures-murets" },
  { label: "Joints et Enduits", href: "/joints-enduits" },
];

const zonesData = [
  {
    department: "Sarthe (72)",
    deptHref: "/macon-sarthe-72",
    cities: [
      { label: "Maçon au Mans", href: "/macon-le-mans" },
      { label: "La Flèche", href: "/macon-la-fleche" },
      { label: "Sablé-sur-Sarthe", href: "/macon-sable-sur-sarthe" },
    ],
  },
  {
    department: "Ain (01)",
    deptHref: "/macon-ain-01",
    cities: [
      { label: "Bourg-en-Bresse", href: "/macon-bourg-en-bresse" },
      { label: "Oyonnax", href: "/macon-oyonnax" },
    ],
  },
  {
    department: "Alpes-Maritimes (06)",
    deptHref: "/macon-alpes-maritimes-06",
    cities: [
      { label: "Nice", href: "/macon-nice" },
      { label: "Cannes", href: "/macon-cannes" },
    ],
  },
  {
    department: "Bouches-du-Rhône (13)",
    deptHref: "/macon-bouches-du-rhone-13",
    cities: [
      { label: "Marseille", href: "/macon-marseille" },
      { label: "Aix-en-Provence", href: "/macon-aix-en-provence" },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isZonesOpen, setIsZonesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileZonesOpen, setIsMobileZonesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const zonesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (zonesDropdownRef.current && !zonesDropdownRef.current.contains(event.target as Node)) {
        setIsZonesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Maçonnerie Pro - Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
              priority
            />
            <div>
              <span className={`text-xl font-bold ${isScrolled ? "text-foreground" : "text-white"}`}>
                Maçonnerie
              </span>
              <span className={`text-xl font-bold ${isScrolled ? "text-primary" : "text-secondary"}`}>
                Pro
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Services Dropdown */}
            <div ref={servicesDropdownRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground-light" : "text-white/90"
                }`}
              >
                Nos Services
                <svg
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-border overflow-hidden"
                  >
                    <div className="p-2">
                      <Link
                        href="/services"
                        className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5 rounded-lg mb-2"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Tous nos services
                      </Link>
                      <div className="border-t border-border my-2" />
                      {servicesData.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-background-alt hover:text-primary rounded-lg transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Zones Dropdown */}
            <div ref={zonesDropdownRef} className="relative">
              <button
                onClick={() => setIsZonesOpen(!isZonesOpen)}
                onMouseEnter={() => setIsZonesOpen(true)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground-light" : "text-white/90"
                }`}
              >
                Zones d&apos;intervention
                <svg
                  className={`w-4 h-4 transition-transform ${isZonesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isZonesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setIsZonesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-border overflow-hidden"
                  >
                    <div className="p-2">
                      <Link
                        href="/zones-intervention"
                        className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5 rounded-lg mb-2"
                        onClick={() => setIsZonesOpen(false)}
                      >
                        Voir toutes nos zones
                      </Link>
                      <div className="border-t border-border my-2" />
                      
                      {zonesData.map((zone, index) => (
                        <div key={index} className="mb-2 last:mb-0">
                          <Link
                            href={zone.deptHref}
                            onClick={() => setIsZonesOpen(false)}
                            className="block px-4 py-2 text-xs font-bold text-foreground-light uppercase tracking-wider hover:text-primary transition-colors"
                          >
                            {zone.department}
                          </Link>
                          {zone.cities.map((city) => (
                            <Link
                              key={city.href}
                              href={city.href}
                              onClick={() => setIsZonesOpen(false)}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-background-alt hover:text-primary rounded-lg transition-colors"
                            >
                              {city.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground-light" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-foreground" : "bg-white"
                } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-foreground" : "bg-white"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-foreground" : "bg-white"
                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-border"
          >
            <div className="px-4 py-6 space-y-2">
              {/* Mobile Services Accordion */}
              <div className="border-b border-border pb-2">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-foreground-light hover:text-primary font-medium py-2"
                >
                  <span>Nos Services</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-1"
                    >
                      <Link
                        href="/services"
                        onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                        className="block text-primary font-semibold py-2"
                      >
                        Tous nos services
                      </Link>
                      {servicesData.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                          className="block text-foreground-light hover:text-primary py-1.5 text-sm"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Zones Accordion */}
              <div className="border-b border-border pb-2">
                <button
                  onClick={() => setIsMobileZonesOpen(!isMobileZonesOpen)}
                  className="flex items-center justify-between w-full text-foreground-light hover:text-primary font-medium py-2"
                >
                  <span>Zones d&apos;intervention</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isMobileZonesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {isMobileZonesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-2"
                    >
                      <Link
                        href="/zones-intervention"
                        onClick={() => { setIsMobileMenuOpen(false); setIsMobileZonesOpen(false); }}
                        className="block text-primary font-semibold py-2"
                      >
                        Voir toutes nos zones
                      </Link>
                      {zonesData.map((zone, index) => (
                        <div key={index} className="mb-2">
                          <Link
                            href={zone.deptHref}
                            onClick={() => { setIsMobileMenuOpen(false); setIsMobileZonesOpen(false); }}
                            className="block text-xs font-bold text-foreground-light uppercase tracking-wider py-1 hover:text-primary transition-colors"
                          >
                            {zone.department}
                          </Link>
                          {zone.cities.map((city) => (
                            <Link
                              key={city.href}
                              href={city.href}
                              onClick={() => { setIsMobileMenuOpen(false); setIsMobileZonesOpen(false); }}
                              className="block text-foreground-light hover:text-primary py-1.5 pl-2 text-sm"
                            >
                              {city.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground-light hover:text-primary font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold text-center mt-4"
              >
                Devis Gratuit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
