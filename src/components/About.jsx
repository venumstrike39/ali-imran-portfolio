import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Cpu, Wand2, Layers, CheckCircle, Video, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      title: "AI Synthesis & Concept Design",
      desc: "Prompt engineering advanced generative models (Midjourney, Runway Gen-3, Luma) with precise camera directions, lighting angles, and cinematic textures.",
      icon: Wand2
    },
    {
      title: "Rhythmic Master Editing",
      desc: "Multi-track pacing in Premiere Pro and CapCut that hooks the viewer in the first 3 seconds and holds retention throughout the entire narrative.",
      icon: Layers
    },
    {
      title: "Emotion-Driven Sound Design",
      desc: "Spatial audio layering, bespoke SFX, custom bass drops, and neural AI voiceovers that amplify visual storytelling.",
      icon: Cpu
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#071109]">
      {/* Background Lighting */}
      <div className="absolute top-1/3 -right-[200px] w-[500px] h-[500px] bg-[#78B82A]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101F12] border border-[#A8F542]/30 text-[#A8F542] text-xs font-mono-code uppercase tracking-widest mb-4">
            <Brain className="w-3.5 h-3.5 text-[#A8F542]" />
            <span>CREATIVE PHILOSOPHY</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-syne text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F5EF] max-w-3xl"
          >
            BEHIND THE <span className="text-[#A8F542] neon-text-glow">CREATIVE VISION</span>
          </motion.h2>
        </div>

        {/* Two Column Layout: Bio & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0D180F]/90 border border-[#A8F542]/20 backdrop-blur-xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A8F542]/5 blur-3xl pointer-events-none" />
              
              <p className="font-space text-xl sm:text-2xl text-[#F5F5EF] font-light leading-relaxed mb-6">
                "{personalInfo.bioParagraphs[0]}"
              </p>

              <p className="font-space text-base sm:text-lg text-[#A7B3A1] leading-relaxed mb-6">
                {personalInfo.bioParagraphs[1]}
              </p>

              <div className="pt-6 border-t border-[#19301D]">
                <p className="font-space text-base sm:text-lg text-[#A8F542] font-medium leading-relaxed italic">
                  "{personalInfo.bioParagraphs[2]}"
                </p>
              </div>

              {/* Owner Sign-off */}
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <div className="font-syne text-lg font-bold text-[#F5F5EF]">Ali Imran</div>
                  <div className="text-xs font-mono-code text-[#A7B3A1]">AI Video Creator & Video Editor</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#122514] border border-[#A8F542]/30 text-xs font-mono-code text-[#A8F542]">
                  EST. 2026
                </div>
              </div>
            </div>

            {/* Creative Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="p-5 rounded-2xl bg-[#101A11] border border-[#A8F542]/15 hover:border-[#A8F542]/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#172D1B] border border-[#A8F542]/30 flex items-center justify-center text-[#A8F542] mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-syne text-sm font-bold text-[#F5F5EF] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#A7B3A1] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Technical Toolkit & Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Tool Stack Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0D180F]/90 border border-[#A8F542]/20 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-5 h-5 text-[#A8F542]" />
                  <h3 className="font-syne text-lg font-bold text-[#F5F5EF]">AI & Production Stack</h3>
                </div>
                <span className="text-xs font-mono-code text-[#A8F542]">PRO WORKFLOW</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {personalInfo.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3 rounded-xl bg-[#101A11] border border-[#1B351E] hover:border-[#A8F542]/40 transition-all flex flex-col"
                  >
                    <span className="font-space text-sm font-bold text-[#F5F5EF]">{tool.name}</span>
                    <span className="text-[10px] font-mono-code text-[#A7B3A1] mt-0.5">{tool.category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies List */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0D180F]/90 border border-[#A8F542]/20 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2.5 mb-5">
                <Award className="w-5 h-5 text-[#A8F542]" />
                <h3 className="font-syne text-lg font-bold text-[#F5F5EF]">Core Specialties</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {personalInfo.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#122214] border border-[#A8F542]/25 text-xs font-mono-code text-[#E5EDE3]"
                  >
                    <CheckCircle className="w-3 h-3 text-[#A8F542]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#142817] to-[#0E1B10] border border-[#A8F542]/40 flex items-center justify-between">
              <div>
                <div className="font-syne text-2xl font-black text-[#A8F542]">3+ YEARS</div>
                <div className="text-xs font-mono-code text-[#A7B3A1]">High-End Video & AI Creation</div>
              </div>
              <div className="text-right">
                <div className="font-syne text-2xl font-black text-[#F5F5EF]">100%</div>
                <div className="text-xs font-mono-code text-[#A7B3A1]">Delivery Reliability</div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
