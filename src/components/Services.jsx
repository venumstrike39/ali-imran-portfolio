import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Film, 
  Megaphone, 
  Zap, 
  Clapperboard, 
  PenTool, 
  ArrowUpRight,
  Check
} from 'lucide-react';
import { services, personalInfo } from '../data/portfolioData';

const iconMap = {
  Sparkles,
  Film,
  Megaphone,
  Zap,
  Clapperboard,
  PenTool
};

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0A140B]/90">
      {/* Background Lighting */}
      <div className="absolute top-1/2 -left-[200px] w-[600px] h-[600px] bg-[#A8F542]/8 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101F12] border border-[#A8F542]/30 text-[#A8F542] text-xs font-mono-code uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5 text-[#A8F542]" />
            <span>CORE SERVICES</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F5EF] mb-4">
            PRODUCTION <span className="text-[#A8F542] neon-text-glow">SERVICES</span>
          </h2>

          <p className="font-space text-base sm:text-lg text-[#A7B3A1] max-w-2xl leading-relaxed">
            From generative AI conceptualization to high-impact retention editing, tailor-made for creators and brands.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => onSelectService(service.title)}
                className="group relative rounded-3xl bg-gradient-to-b from-[#101E13] to-[#0A130B] border border-[#A8F542]/20 p-8 hover:border-[#A8F542]/70 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(168,245,66,0.18)] hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                {/* Background Ambient Glow on Hover */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#A8F542]/5 rounded-full blur-3xl group-hover:bg-[#A8F542]/15 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#142918] border border-[#A8F542]/30 flex items-center justify-center text-[#A8F542] group-hover:bg-[#A8F542] group-hover:text-[#071109] group-hover:scale-108 transition-all duration-300 shadow-lg">
                      <Icon className="w-6 h-6 transition-transform duration-300" />
                    </div>

                    <div className="font-syne text-3xl font-black text-[#A7B3A1]/25 group-hover:text-[#A8F542] transition-colors">
                      {service.id}
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="font-syne text-2xl font-black text-[#F5F5EF] mb-2 group-hover:text-[#A8F542] transition-colors">
                    {service.title}
                  </h3>

                  <div className="text-xs font-mono-code text-[#A8F542] font-semibold mb-3">
                    {service.summary}
                  </div>

                  {/* Description */}
                  <p className="font-space text-xs sm:text-sm text-[#A7B3A1] leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-4 border-t border-[#182F1B]">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono-code text-[#CBD7C8]">
                        <Check className="w-3.5 h-3.5 text-[#A8F542] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-8 pt-4 border-t border-[#182F1B] flex items-center justify-between">
                  <span className="text-xs font-mono-code text-[#A8F542] uppercase tracking-wider font-semibold group-hover:underline">
                    SELECT SERVICE
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#142817] flex items-center justify-center text-[#A8F542] group-hover:bg-[#A8F542] group-hover:text-[#071109] group-hover:rotate-45 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Subtle Neon Line at Card Top */}
                <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#A8F542]/0 group-hover:via-[#A8F542] to-transparent transition-all duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Custom Retainer Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#101F12] via-[#142817] to-[#0D190E] border border-[#A8F542]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="font-syne text-2xl font-bold text-[#F5F5EF] mb-1">
              Have an ongoing or high-volume video project?
            </h4>
            <p className="font-space text-sm text-[#A7B3A1]">
              I provide flexible monthly retainers for YouTube channels, agencies, and social brands requiring regular releases.
            </p>
          </div>
          <a
            href={`https://wa.me/${personalInfo.contact.whatsappClean}?text=Hi%20Ali%20Imran,%20I%20would%20like%20to%20discuss%20a%20video%20production%20retainer.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#A8F542] text-[#071109] font-space text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-[0_0_25px_rgba(168,245,66,0.4)] hover:bg-[#bbf85d] transition-all transform hover:-translate-y-0.5"
          >
            DISCUSS A RETAINER
          </a>
        </div>

      </div>
    </section>
  );
}
