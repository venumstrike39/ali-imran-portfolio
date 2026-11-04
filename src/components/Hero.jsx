import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Film, Play, ArrowDown, ArrowUpRight, ShieldCheck, Flame, Video } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import portraitImg from '../assets/ali-imran-portrait.png';

export default function Hero({ onOpenShowreel }) {
  const scrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic Ambient Glow Pools */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#A8F542]/15 via-[#163A1D]/20 to-transparent blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#A8F542]/10 blur-[130px] rounded-full pointer-events-none z-0" />

      {/* Cinematic Oversized Animated Typography: PORTFOLIO */}
      <div className="absolute top-16 md:top-24 inset-x-0 flex justify-center pointer-events-none select-none overflow-hidden z-0">
        <motion.span
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 0.08, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-syne text-[14vw] font-black tracking-widest text-[#A8F542] leading-none whitespace-nowrap"
        >
          PORTFOLIO
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Creative Identity & Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101F12] border border-[#A8F542]/30 text-[#A8F542] text-xs font-mono-code uppercase tracking-widest mb-5 shadow-[0_0_20px_rgba(168,245,66,0.18)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#A8F542] animate-pulse" />
              <span>HELLO, I'M</span>
              <span className="text-[#A7B3A1]/40">•</span>
              <span className="text-[#F5F5EF]">AI & VIDEO SPECIALIST</span>
            </motion.div>

            {/* Name: ALI IMRAN */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-syne text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#F5F5EF] leading-[0.95] mb-5"
            >
              ALI{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A8F542] via-[#C6FB76] to-[#78B82A] drop-shadow-[0_0_35px_rgba(168,245,66,0.45)]">
                IMRAN
              </span>
            </motion.h1>

            {/* Professional Titles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#142617] border border-[#A8F542]/40 text-[#A8F542] font-space text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(168,245,66,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-[#A8F542]" />
                <span>AI VIDEO CREATOR</span>
              </div>
              <span className="text-[#A8F542]/40 font-mono-code text-sm">•</span>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0F1D11] border border-[#78B82A]/30 text-[#F5F5EF] font-space text-xs sm:text-sm font-semibold tracking-wider uppercase">
                <Film className="w-3.5 h-3.5 text-[#78B82A]" />
                <span>VIDEO EDITOR</span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-space text-lg sm:text-xl md:text-2xl text-[#E3EAE0] font-normal leading-relaxed max-w-xl mb-8 border-l-2 border-[#A8F542] pl-4 italic"
            >
              "{personalInfo.tagline}"
            </motion.p>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10"
            >
              {/* Explore My Work */}
              <button
                onClick={() => scrollTo('#projects')}
                className="group relative flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#A8F542] text-[#071109] font-space text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#bbf85d] shadow-[0_0_30px_rgba(168,245,66,0.4)] hover:shadow-[0_0_50px_rgba(168,245,66,0.7)] hover:-translate-y-1 cursor-pointer"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>

              {/* Let's Connect */}
              <button
                onClick={() => scrollTo('#contact')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#101A11] border border-[#A8F542]/30 text-[#F5F5EF] font-space text-sm font-semibold tracking-wider uppercase hover:border-[#A8F542] hover:bg-[#142617] transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-0.5"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4 text-[#A8F542]" />
              </button>

              {/* Watch Showreel Quick Trigger */}
              <button
                onClick={onOpenShowreel}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-transparent border border-[#A8F542]/20 hover:border-[#A8F542]/50 text-xs font-mono-code text-[#A7B3A1] hover:text-[#A8F542] transition-colors cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-[#18311B] flex items-center justify-center text-[#A8F542]">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>SHOWREEL [01:45]</span>
              </button>
            </motion.div>

            {/* Key Metrics / Credibility Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-[#182C1B] w-full max-w-xl"
            >
              <div>
                <div className="font-syne text-2xl sm:text-3xl font-black text-[#A8F542]">
                  {personalInfo.projectsCount}
                </div>
                <div className="text-[11px] sm:text-xs font-mono-code text-[#A7B3A1] uppercase tracking-wide">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="font-syne text-2xl sm:text-3xl font-black text-[#F5F5EF]">
                  {personalInfo.combinedViews}
                </div>
                <div className="text-[11px] sm:text-xs font-mono-code text-[#A7B3A1] uppercase tracking-wide">
                  Audience Views
                </div>
              </div>
              <div>
                <div className="font-syne text-2xl sm:text-3xl font-black text-[#78B82A]">
                  4K / 60FPS
                </div>
                <div className="text-[11px] sm:text-xs font-mono-code text-[#A7B3A1] uppercase tracking-wide">
                  Cinema Fidelity
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Ali Imran's Actual Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0"
          >
            {/* Ambient Multi-Ring Halo Behind Portrait */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-gradient-to-tr from-[#A8F542]/20 via-[#16381B]/25 to-transparent rounded-full blur-[80px] animate-pulse-slow" />
              <div className="w-[260px] sm:w-[350px] h-[260px] sm:h-[350px] border border-[#A8F542]/20 rounded-full animate-[spin_50s_linear_infinite]" />
              <div className="w-[340px] sm:w-[440px] h-[340px] sm:h-[440px] border border-dashed border-[#A8F542]/10 rounded-full" />
            </div>

            {/* Portrait Frame Container */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] z-10">
              
              {/* Outer Card with Neon Border and Glassmorphism */}
              <div className="relative rounded-3xl bg-gradient-to-b from-[#122315] via-[#0B150D] to-[#071109] border border-[#A8F542]/35 p-3 sm:p-3.5 shadow-[0_20px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(168,245,66,0.18)] overflow-hidden group">
                
                {/* HUD Camera Coordinates Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#071109]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#A8F542]/30 text-[10px] font-mono-code text-[#F5F5EF]">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-semibold tracking-wider">REC [●] 4K • 60FPS</span>
                </div>

                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-[#071109]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#A8F542]/30 text-[10px] font-mono-code text-[#A8F542]">
                  <Flame className="w-3 h-3 text-[#A8F542]" />
                  <span>CREATOR</span>
                </div>

                {/* Actual Portrait Image Container */}
                <div className="relative w-full h-[470px] sm:h-[540px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#142817] via-[#0D1A10] to-[#071109] flex items-end justify-center">
                  
                  {/* Subtle Studio Backdrop Grid */}
                  <div className="absolute inset-0 cinematic-grid opacity-35 pointer-events-none" />
                  
                  {/* Neon Spotlight Behind Torso */}
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#A8F542]/20 blur-[60px] rounded-full pointer-events-none" />

                  {/* The Actual Uploaded Image of Ali Imran */}
                  <img
                    src={portraitImg}
                    alt="Ali Imran — AI Video Creator & Video Editor"
                    className="relative z-10 w-full h-full object-contain object-bottom filter contrast-[1.03] drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Soft Vignette Fade at the very base of the card */}
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#071109] via-[#071109]/70 to-transparent z-15 pointer-events-none" />

                  {/* Bottom Creator Meta Pill */}
                  <div className="absolute bottom-4 inset-x-4 z-20 bg-[#071109]/90 backdrop-blur-xl border border-[#A8F542]/35 rounded-xl p-3 flex items-center justify-between shadow-2xl">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#142C17] border border-[#A8F542]/40 flex items-center justify-center text-[#A8F542]">
                        <Video className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-syne text-xs font-bold text-[#F5F5EF]">
                          ALI IMRAN
                        </div>
                        <div className="text-[10px] font-mono-code text-[#A8F542]">
                          AI VIDEO CREATOR // 2026
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono-code text-[#A7B3A1]">SHUTTER</div>
                      <div className="text-[11px] font-mono-code font-bold text-[#A8F542]">1/120s</div>
                    </div>
                  </div>

                </div>

                {/* Card Border Hover Glow */}
                <div className="absolute inset-0 rounded-3xl border border-[#A8F542]/0 group-hover:border-[#A8F542]/60 transition-colors pointer-events-none" />
              </div>

              {/* Floating Pill Badges around Portrait */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 z-30 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#09150B]/95 backdrop-blur-md border border-[#A8F542]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-xs font-space font-semibold text-[#F5F5EF]"
              >
                <span className="w-2 h-2 rounded-full bg-[#A8F542] animate-ping" />
                <span>AI Cinematic Storytelling</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 -left-3 z-30 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#09150B]/95 backdrop-blur-md border border-[#A8F542]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-xs font-space font-semibold text-[#A8F542]"
              >
                <ShieldCheck className="w-4 h-4 text-[#A8F542]" />
                <span>100% Original Creative Cut</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 pointer-events-none opacity-75 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono-code text-[#A7B3A1] uppercase tracking-widest">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-4 h-7 rounded-full border border-[#A8F542]/40 flex items-start justify-center p-1"
        >
          <div className="w-1 h-1.5 rounded-full bg-[#A8F542]" />
        </motion.div>
      </div>
    </section>
  );
}
