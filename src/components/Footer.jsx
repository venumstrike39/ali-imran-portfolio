import React from 'react';
import { ArrowUp, Sparkles, MessageSquare, Mail, AtSign, Heart } from 'lucide-react';
import { LinkedInIcon, ThreadsIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050D07] border-t border-[#162B19] pt-16 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#A8F542]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#142617] items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#142817] border border-[#A8F542]/40 flex items-center justify-center text-[#A8F542] font-syne font-black text-base shadow-[0_0_15px_rgba(168,245,66,0.2)]">
                AI
              </div>
              <span className="font-syne text-2xl font-black tracking-tight text-[#F5F5EF]">
                ALI IMRAN
              </span>
            </div>

            <p className="font-space text-sm text-[#A7B3A1] max-w-sm mb-6 leading-relaxed">
              High-end AI video creator and video editor turning complex concepts into visually stunning, platform-ready cinematic masterpieces.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${personalInfo.contact.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0D180F] border border-[#1E3B21] hover:border-[#A8F542] flex items-center justify-center text-[#A7B3A1] hover:text-[#A8F542] hover:bg-[#122314] transition-all"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="w-10 h-10 rounded-xl bg-[#0D180F] border border-[#1E3B21] hover:border-[#A8F542] flex items-center justify-center text-[#A7B3A1] hover:text-[#A8F542] hover:bg-[#122314] transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0D180F] border border-[#1E3B21] hover:border-[#A8F542] flex items-center justify-center text-[#A7B3A1] hover:text-[#A8F542] hover:bg-[#122314] transition-all"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.contact.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0D180F] border border-[#1E3B21] hover:border-[#A8F542] flex items-center justify-center text-[#A7B3A1] hover:text-[#A8F542] hover:bg-[#122314] transition-all"
                title="Threads"
              >
                <AtSign className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-3">
            <h4 className="font-syne text-sm font-bold text-[#F5F5EF] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono-code text-[#A7B3A1]">
              {['Home', 'About', 'Services', 'Projects', 'Showreel', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#A8F542] transition-colors flex items-center gap-1.5"
                  >
                    <span>/</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Line & Status */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="font-syne text-sm font-bold text-[#F5F5EF] uppercase tracking-wider mb-4">
                Availability & Status
              </h4>
              <div className="p-4 rounded-2xl bg-[#0A140B] border border-[#182F1B] mb-4">
                <div className="flex items-center gap-2 text-xs font-mono-code text-[#A8F542] font-semibold mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#A8F542] animate-pulse" />
                  <span>BOOKING FOR 2026</span>
                </div>
                <div className="text-xs text-[#A7B3A1]">
                  Currently open for select brand campaigns, creator partnerships, and AI animation projects.
                </div>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-between p-3 rounded-xl bg-[#101F12] border border-[#A8F542]/30 text-xs font-mono-code text-[#A8F542] hover:bg-[#152918] transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[#A7B3A1]/70">
          <div>
            © 2026 ALI IMRAN. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2">
            <span>ENGINEERED FOR CINEMATIC EXCELLENCE</span>
            <span>•</span>
            <span className="text-[#A8F542]">4K READY</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
