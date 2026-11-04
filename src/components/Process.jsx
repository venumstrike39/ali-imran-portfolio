import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Wand2, CheckCircle2, ArrowRight, Zap, Target } from 'lucide-react';
import { processSteps } from '../data/portfolioData';

const iconMap = {
  Compass,
  Wand2,
  CheckCircle2
};

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#0A140B]/90">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#A8F542]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101F12] border border-[#A8F542]/30 text-[#A8F542] text-xs font-mono-code uppercase tracking-widest mb-4">
            <Target className="w-3.5 h-3.5 text-[#A8F542]" />
            <span>WORKFLOW ARCHITECTURE</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F5EF] mb-4">
            MY CREATIVE <span className="text-[#A8F542] neon-text-glow">PROCESS</span>
          </h2>

          <p className="font-space text-base sm:text-lg text-[#A7B3A1] max-w-2xl leading-relaxed">
            A battle-tested 3-stage pipeline turning raw creative briefs into viral, high-retention cinematic videos.
          </p>
        </div>

        {/* 3 Step Cards with Connecting Line */}
        <div className="relative">
          
          {/* Animated Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#A8F542]/20 via-[#A8F542]/60 to-[#A8F542]/20 -translate-y-10 z-0">
            {/* Pulsing laser head */}
            <motion.div
              animate={{ x: ['0%', '100%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              className="w-24 h-[4px] bg-[#A8F542] shadow-[0_0_15px_#A8F542] -translate-y-0.5 rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = iconMap[step.icon] || Zap;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="group relative rounded-3xl bg-[#0D180F] border border-[#A8F542]/25 p-8 hover:border-[#A8F542]/70 transition-all duration-500 shadow-xl hover:shadow-[0_20px_50px_rgba(168,245,66,0.15)] flex flex-col justify-between"
                >
                  {/* Top Header Badge & Number */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#142817] border border-[#A8F542]/40 flex items-center justify-center text-[#A8F542] group-hover:scale-110 group-hover:bg-[#A8F542] group-hover:text-[#071109] transition-all duration-300 shadow-md">
                        <Icon className="w-7 h-7" />
                      </div>

                      <div className="font-syne text-4xl font-black text-[#A8F542]/40 group-hover:text-[#A8F542] transition-colors">
                        {step.number}
                      </div>
                    </div>

                    {/* Step Phase & Title */}
                    <div className="text-xs font-mono-code text-[#A8F542] uppercase tracking-widest mb-1 font-semibold">
                      STEP {step.number} — {step.phase}
                    </div>

                    <h3 className="font-syne text-2xl font-black text-[#F5F5EF] mb-3 group-hover:text-[#A8F542] transition-colors">
                      {step.title}
                    </h3>

                    <p className="font-space text-sm sm:text-base text-[#A7B3A1] leading-relaxed mb-6">
                      {step.summary}
                    </p>

                    {/* Breakdown Checklist */}
                    <div className="space-y-2.5 pt-4 border-t border-[#182C1B]">
                      {step.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs font-mono-code text-[#CBD7C8]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A8F542] mt-1.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step status chip */}
                  <div className="mt-8 pt-4 border-t border-[#182C1B] flex items-center justify-between">
                    <span className="text-[11px] font-mono-code text-[#A7B3A1]">
                      PHASE DURATION: 24-48H
                    </span>
                    <span className="text-xs font-mono-code text-[#A8F542] flex items-center gap-1">
                      EXECUTION <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  {/* Top neon indicator */}
                  <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#A8F542]/0 group-hover:via-[#A8F542] to-transparent transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
