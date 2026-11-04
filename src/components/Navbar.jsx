import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SHOWREEL', href: '#showreel' },
    { label: 'PROCESS', href: '#process' },
    { label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['home', 'about', 'services', 'projects', 'showreel', 'process', 'contact'];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#071109]/80 backdrop-blur-xl border-b border-[#A8F542]/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#home');
            }}
            className="group flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#1A331E] to-[#0B170D] border border-[#A8F542]/40 flex items-center justify-center group-hover:border-[#A8F542] transition-colors shadow-[0_0_15px_rgba(168,245,66,0.15)]">
              <span className="font-syne font-black text-sm text-[#A8F542] tracking-tighter">AI</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#A8F542] shadow-[0_0_8px_#A8F542] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-syne text-lg md:text-xl font-extrabold tracking-tight text-[#F5F5EF] group-hover:text-[#A8F542] transition-colors">
                ALI IMRAN
              </span>
              <span className="text-[10px] font-mono-code text-[#A7B3A1] tracking-widest uppercase -mt-1 hidden sm:block">
                AI Video & Editor
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#101A11]/70 border border-[#A8F542]/15 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono-code uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#071109] font-bold'
                      : 'text-[#A7B3A1] hover:text-[#F5F5EF]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-[#A8F542] rounded-full shadow-[0_0_18px_rgba(168,245,66,0.5)] z-[-1]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Status Indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101A11]/60 border border-[#A8F542]/20 text-[11px] font-mono-code text-[#A7B3A1]">
              <span className="w-2 h-2 rounded-full bg-[#A8F542] animate-pulse" />
              <span>FREELANCE OPEN</span>
            </div>

            {/* Quick Contact CTA */}
            <a
              href={`https://wa.me/${personalInfo.contact.whatsappClean}?text=Hi%20Ali%20Imran,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20video%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A8F542] text-[#071109] font-space text-xs font-bold tracking-wide uppercase shadow-[0_0_20px_rgba(168,245,66,0.35)] hover:bg-[#bbf85d] hover:shadow-[0_0_30px_rgba(168,245,66,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>LET'S TALK</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#101A11] border border-[#A8F542]/30 text-[#A8F542] hover:bg-[#152417] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-30 p-5 bg-[#071109]/95 backdrop-blur-2xl border-b border-[#A8F542]/25 shadow-2xl lg:hidden flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className={`flex items-center justify-between p-3 rounded-xl font-space font-medium text-sm transition-all text-left ${
                      isActive
                        ? 'bg-[#122314] text-[#A8F542] border border-[#A8F542]/30 font-bold'
                        : 'text-[#A7B3A1] hover:text-[#F5F5EF] hover:bg-[#0D180F]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-[#A8F542]" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#19301D] flex flex-col gap-3">
              <a
                href={`https://wa.me/${personalInfo.contact.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#A8F542] text-[#071109] font-space font-bold text-xs uppercase tracking-wider shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                CHAT ON WHATSAPP
              </a>
              <div className="text-center text-xs font-mono-code text-[#A7B3A1]/70">
                mirzaaliimran13@gmail.com
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
