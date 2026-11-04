import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  MessageSquare, 
  Mail, 
  Send, 
  Sparkles, 
  Copy, 
  Check, 
  Phone, 
  ArrowUpRight,
  AtSign
} from 'lucide-react';
import { LinkedInIcon, ThreadsIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: selectedService || 'AI Video Production',
    budget: '$500 - $1,500',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.contact.whatsapp);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#A8F542', '#78B82A', '#F5F5EF', '#34D399']
    });

    // Generate WhatsApp direct text
    const text = encodeURIComponent(
      `Hello Ali Imran!\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.service}\nBudget: ${formData.budget}\nMessage: ${formData.message}`
    );
    const waUrl = `https://wa.me/${personalInfo.contact.whatsappClean}?text=${text}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#071109]">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#A8F542]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101F12] border border-[#A8F542]/30 text-[#A8F542] text-xs font-mono-code uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A8F542]" />
            <span>START A COLLABORATION</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-[#F5F5EF] mb-4">
            LET'S CREATE <span className="text-[#A8F542] neon-text-glow">SOMETHING AMAZING.</span>
          </h2>

          <p className="font-space text-base sm:text-xl text-[#A7B3A1] max-w-2xl leading-relaxed">
            Have a creative idea or a project in mind? Let's turn it into something extraordinary.
          </p>
        </div>

        {/* Contact Grid: Direct Channels & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Links & Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            {/* Quick Contact Buttons */}
            <div className="p-8 rounded-3xl bg-[#0D180F] border border-[#A8F542]/25 shadow-2xl flex flex-col gap-5">
              <h3 className="font-syne text-xl font-bold text-[#F5F5EF]">
                Direct Contact Channels
              </h3>
              <p className="text-xs sm:text-sm text-[#A7B3A1] leading-relaxed">
                Available globally for freelance contracts, creative direction, and high-volume video retainers.
              </p>

              {/* WhatsApp Working Button */}
              <a
                href={`https://wa.me/${personalInfo.contact.whatsappClean}?text=Hi%20Ali%20Imran,%20let's%20discuss%20a%20project!`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-[#122415] border border-[#A8F542]/30 hover:border-[#A8F542] transition-all hover:bg-[#162D1A] hover:shadow-[0_0_25px_rgba(168,245,66,0.25)]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#1A3B1E] flex items-center justify-center text-[#A8F542] group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-mono-code text-[#A7B3A1]">WHATSAPP (INSTANT CHAT)</div>
                    <div className="font-space font-bold text-sm text-[#F5F5EF]">{personalInfo.contact.whatsapp}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#A8F542] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              {/* Email Working Button */}
              <a
                href={`mailto:${personalInfo.contact.email}?subject=Project%20Inquiry%20for%20Ali%20Imran`}
                className="group flex items-center justify-between p-4 rounded-2xl bg-[#101A11] border border-[#1E3B21] hover:border-[#A8F542] transition-all hover:bg-[#142316]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#162919] flex items-center justify-center text-[#A8F542] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-mono-code text-[#A7B3A1]">DIRECT EMAIL</div>
                    <div className="font-space font-bold text-sm text-[#F5F5EF] truncate max-w-[200px] sm:max-w-none">
                      {personalInfo.contact.email}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#A8F542] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              {/* One-Click Copy Actions */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2.5 rounded-xl bg-[#09120B] border border-[#1A301D] hover:border-[#A8F542]/40 text-xs font-mono-code text-[#CBD7C8] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#A8F542]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'COPIED EMAIL' : 'COPY EMAIL'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="px-3.5 py-2.5 rounded-xl bg-[#09120B] border border-[#1A301D] hover:border-[#A8F542]/40 text-xs font-mono-code text-[#CBD7C8] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#A8F542]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'COPIED PHONE' : 'COPY PHONE'}</span>
                </button>
              </div>
            </div>

            {/* Social Network Cards */}
            <div className="p-7 rounded-3xl bg-[#0D180F] border border-[#A8F542]/20 shadow-xl flex flex-col gap-4">
              <span className="text-xs font-mono-code text-[#A7B3A1] uppercase tracking-wider">
                Professional Networks & Socials
              </span>

              <div className="grid grid-cols-2 gap-3">
                {/* LinkedIn Link */}
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#101A11] border border-[#1E3B21] hover:border-[#A8F542] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#142817] flex items-center justify-center text-[#A8F542] group-hover:bg-[#A8F542] group-hover:text-[#071109] transition-colors">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-space text-xs font-bold text-[#F5F5EF]">LinkedIn</div>
                    <div className="text-[10px] font-mono-code text-[#A7B3A1]">Ali Imran</div>
                  </div>
                </a>

                {/* Threads Link */}
                <a
                  href={personalInfo.contact.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#101A11] border border-[#1E3B21] hover:border-[#A8F542] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#142817] flex items-center justify-center text-[#A8F542] group-hover:bg-[#A8F542] group-hover:text-[#071109] transition-colors">
                    <AtSign className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-space text-xs font-bold text-[#F5F5EF]">Threads</div>
                    <div className="text-[10px] font-mono-code text-[#A7B3A1]">@ghost._.exe0</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Location & Response Time Pill */}
            <div className="p-4 rounded-2xl bg-[#122214] border border-[#A8F542]/25 flex items-center justify-between text-xs font-mono-code text-[#A7B3A1]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A8F542] animate-pulse" />
                <span>AVERAGE RESPONSE: UNDER 2 HOURS</span>
              </div>
              <span className="text-[#A8F542] font-semibold">2026 READY</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0D180F] border border-[#A8F542]/30 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
              
              <div className="mb-6">
                <h3 className="font-syne text-2xl font-bold text-[#F5F5EF] mb-2">
                  Send a Creative Brief
                </h3>
                <p className="text-xs sm:text-sm text-[#A7B3A1]">
                  Fill out your project requirements below to receive a personalized quote and production roadmap.
                </p>
              </div>

              {submitted ? (
                <div className="py-14 flex flex-col items-center text-center my-auto">
                  <div className="w-16 h-16 rounded-full bg-[#1A381E] border border-[#A8F542] flex items-center justify-center text-[#A8F542] mb-4 shadow-[0_0_30px_#A8F542]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-syne text-2xl font-bold text-[#F5F5EF] mb-2">
                    Inquiry Prepared!
                  </h4>
                  <p className="font-space text-sm text-[#A7B3A1] max-w-md mb-6">
                    Thank you, {formData.name}. Opening your WhatsApp conversation with Ali Imran to connect immediately...
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#142617] border border-[#A8F542]/30 text-xs font-mono-code text-[#A8F542] hover:bg-[#1A331E]"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-code text-[#CBD7C8] mb-1.5 uppercase">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe / Brand Name"
                        className="w-full px-4 py-3 rounded-xl bg-[#101A11] border border-[#1F3A22] text-[#F5F5EF] placeholder-[#576654] text-sm focus:outline-none focus:border-[#A8F542] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code text-[#CBD7C8] mb-1.5 uppercase">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#101A11] border border-[#1F3A22] text-[#F5F5EF] placeholder-[#576654] text-sm focus:outline-none focus:border-[#A8F542] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-code text-[#CBD7C8] mb-1.5 uppercase">
                        SERVICE REQUIRED
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#101A11] border border-[#1F3A22] text-[#F5F5EF] text-sm focus:outline-none focus:border-[#A8F542] transition-colors cursor-pointer"
                      >
                        <option value="AI Video Production">AI Video Production</option>
                        <option value="Video Editing">Video Editing (Shorts / Reels)</option>
                        <option value="AI Advertisements">AI Advertisements / UGC</option>
                        <option value="Product Promotion">Product & Brand Promotion</option>
                        <option value="Animated & Cartoon Videos">Animated & Cartoon Videos</option>
                        <option value="Script & Creative Development">Script & Concept Development</option>
                        <option value="Full Retainer / Other">Full Retainer / Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code text-[#CBD7C8] mb-1.5 uppercase">
                        PROJECT BUDGET
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#101A11] border border-[#1F3A22] text-[#F5F5EF] text-sm focus:outline-none focus:border-[#A8F542] transition-colors cursor-pointer"
                      >
                        <option value="$300 - $800">$300 - $800 (Starter Project)</option>
                        <option value="$800 - $2,000">$800 - $2,000 (Commercial Standard)</option>
                        <option value="$2,000 - $5,000">$2,000 - $5,000 (Multi-Video / Retainer)</option>
                        <option value="$5,000+">$5,000+ (Enterprise / Full Campaign)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-[#CBD7C8] mb-1.5 uppercase">
                      PROJECT BRIEF / DETAILS *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your video goals, target timeline, aesthetic references, or narrative ideas..."
                      className="w-full px-4 py-3 rounded-xl bg-[#101A11] border border-[#1F3A22] text-[#F5F5EF] placeholder-[#576654] text-sm focus:outline-none focus:border-[#A8F542] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#A8F542] text-[#071109] font-space text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#bbf85d] shadow-[0_0_30px_rgba(168,245,66,0.4)] transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT BRIEF & CONNECT ON WHATSAPP</span>
                  </button>

                  <div className="text-center text-[11px] font-mono-code text-[#A7B3A1]/60">
                    🔒 Zero spam. Direct transmission to Ali Imran's official communications.
                  </div>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
