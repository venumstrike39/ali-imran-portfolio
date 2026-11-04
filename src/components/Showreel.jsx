import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, Sparkles, Film, Maximize2, Shield } from 'lucide-react';
import { showreelData } from '../data/portfolioData';

export default function Showreel({ onPlayShowreel }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="showreel" className="py-24 relative overflow-hidden bg-[#0A140B]/80">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#A8F542]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101F12] border border-[#A8F542]/30 text-[#A8F542] text-xs font-mono-code uppercase tracking-widest mb-4">
            <Film className="w-3.5 h-3.5 text-[#A8F542]" />
            <span>CINEMATIC SHOWREEL</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F5EF] mb-4">
            A WORLD OF <span className="text-[#A8F542] neon-text-glow">VISUAL CREATIVITY</span>
          </h2>

          <p className="font-space text-base sm:text-lg text-[#A7B3A1] max-w-2xl leading-relaxed">
            {showreelData.description}
          </p>
        </div>

        {/* Large Cinematic Video Display Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onPlayShowreel}
          className="relative group cursor-pointer rounded-3xl overflow-hidden border border-[#A8F542]/30 bg-[#071109] shadow-[0_20px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(168,245,66,0.15)] transition-all duration-500 hover:border-[#A8F542]/70 hover:shadow-[0_20px_100px_rgba(168,245,66,0.25)]"
        >
          {/* 21:9 or 16:9 Aspect Ratio Display */}
          <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden">
            {/* Poster Background */}
            <img
              src={showreelData.poster}
              alt="Ali Imran Showreel"
              className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 group-hover:brightness-[0.85] transition-all duration-700 ease-out"
            />

            {/* Dark Vignette & Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071109] via-transparent to-[#071109]/70 pointer-events-none" />
            <div className="absolute inset-0 bg-radial from-transparent via-[#071109]/30 to-[#071109]/90 pointer-events-none" />

            {/* Animated Green Laser Border Sweep Effect */}
            <div className="absolute inset-0 border-2 border-[#A8F542]/20 group-hover:border-[#A8F542]/60 rounded-3xl transition-colors pointer-events-none" />

            {/* Centered Pulsing Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* Multi-layered Pulsing Rings */}
                <div className="absolute w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-[#A8F542]/20 animate-ping pointer-events-none" />
                <div className="absolute w-20 sm:w-28 h-20 sm:h-28 rounded-full bg-[#A8F542]/30 animate-pulse-slow pointer-events-none" />
                
                {/* Main Play Circle */}
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 w-16 sm:w-22 h-16 sm:h-22 rounded-full bg-[#A8F542] flex items-center justify-center text-[#071109] shadow-[0_0_40px_#A8F542] group-hover:bg-[#bbf85d] transition-all duration-300"
                >
                  <Play className="w-7 sm:w-10 h-7 sm:h-10 fill-current ml-1" />
                </motion.div>
              </div>
            </div>

            {/* Top Telemetry Overlay */}
            <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between text-xs font-mono-code z-20 pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#071109]/85 backdrop-blur-md border border-[#A8F542]/30 text-[#A8F542]">
                <span className="w-2 h-2 rounded-full bg-[#A8F542] animate-pulse" />
                <span>MASTER SHOWREEL // 2026</span>
              </div>
              <div className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-lg bg-[#071109]/85 backdrop-blur-md border border-[#A8F542]/20 text-[#A7B3A1]">
                <span>{showreelData.quality}</span>
                <span>•</span>
                <span>DOLBY 5.1 MIX</span>
              </div>
            </div>

            {/* Bottom Controls / Info Bar Preview */}
            <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#071109]/90 backdrop-blur-xl border border-[#A8F542]/25 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#142617] border border-[#A8F542]/30 flex items-center justify-center text-[#A8F542]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-syne text-sm sm:text-base font-bold text-[#F5F5EF]">
                    {showreelData.title}
                  </div>
                  <div className="text-xs font-mono-code text-[#A8F542]">
                    DIRECTED & EDITED BY ALI IMRAN
                  </div>
                </div>
              </div>

              {/* Soundwave Simulation */}
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-1 h-6 px-3 py-1 rounded-lg bg-[#101A11] border border-[#A8F542]/20">
                  <span className="text-[10px] font-mono-code text-[#A7B3A1] mr-1">AUDIO</span>
                  {[18, 28, 14, 32, 22, 10, 30, 24, 16, 26, 12].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: isHovered ? [h * 0.4, h, h * 0.6] : h * 0.6 }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                      className="w-1 bg-[#A8F542] rounded-full"
                      style={{ height: `${h * 0.5}px` }}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono-code text-[#A7B3A1] bg-[#122314] px-3 py-2 rounded-lg border border-[#A8F542]/20">
                  <Maximize2 className="w-3.5 h-3.5 text-[#A8F542]" />
                  <span>CLICK TO EXPAND [{showreelData.duration}]</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Customizer Note for Ali Imran */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono-code text-[#A7B3A1]/70 text-center">
          <Shield className="w-3.5 h-3.5 text-[#A8F542]" />
          <span>Ready for your full MP4 showreel video file — instantly swappable in <code className="text-[#A8F542]">portfolioData.js</code></span>
        </div>

      </div>
    </section>
  );
}
