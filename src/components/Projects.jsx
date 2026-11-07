import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Clock, 
  Film, 
  Eye, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { categories, projects as defaultProjects } from '../data/portfolioData';

// Individual Card with real hover-to-preview
function ProjectCard({ project, onOpen }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && project.videoUrl) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpen(project)}
      className="group relative rounded-3xl bg-[#0D180F] border border-[#A8F542]/20 overflow-hidden hover:border-[#A8F542]/70 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(168,245,66,0.2)] hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
    >
      {/* Video & Thumbnail Preview Area */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#0A130B]">
        {/* Static Thumbnail */}
        <img
          src={project.thumbnail}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-105 filter brightness-75' : 'scale-100 filter brightness-90'
          }`}
        />

        {/* Real Hover-to-Preview Video */}
        {project.videoUrl && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            preload="metadata"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D180F] via-transparent to-black/60 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-md bg-[#071109]/90 backdrop-blur-md border border-[#A8F542]/35 text-[11px] font-mono-code text-[#A8F542] font-bold tracking-wider">
            {project.code}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-[#071109]/90 backdrop-blur-md border border-white/10 text-[10px] font-mono-code text-[#CBD7C8]">
            {project.resolution}
          </span>
        </div>

        {/* Center Hover Play Button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={`w-14 h-14 rounded-full bg-[#A8F542] text-[#071109] flex items-center justify-center shadow-[0_0_30px_#A8F542] transition-all duration-300 transform ${
              isHovered ? 'scale-110 opacity-90' : 'scale-90 opacity-0 group-hover:opacity-100'
            }`}
          >
            <Play className="w-6 h-6 fill-current ml-0.5" />
          </div>
        </div>

        {/* Hover-to-preview LIVE indicator */}
        {isHovered && (
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 z-10 px-2.5 py-0.5 rounded-full bg-[#071109]/90 border border-[#A8F542]/50 text-[10px] font-mono-code text-[#A8F542] flex items-center gap-1.5 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8F542]" />
            <span>PREVIEWING</span>
          </div>
        )}

        {/* Duration Chip */}
        <div className="absolute bottom-3 right-3 z-10 px-2 py-0.5 rounded bg-[#071109]/85 border border-[#A8F542]/20 text-[10px] font-mono-code text-[#CBD7C8] flex items-center gap-1 pointer-events-none">
          <Clock className="w-3 h-3 text-[#A8F542]" />
          <span>{project.duration}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Category Pill */}
          <div className="text-[11px] font-mono-code text-[#A8F542] uppercase tracking-wider mb-2 font-bold">
            {project.category}
          </div>

          {/* Project Title */}
          <h3 className="font-syne text-xl sm:text-2xl font-black text-[#F5F5EF] mb-2 group-hover:text-[#A8F542] transition-colors leading-tight">
            {project.title}
          </h3>

          {/* Project Subtitle / Brief */}
          <p className="font-space text-xs sm:text-sm text-[#A7B3A1] line-clamp-2 leading-relaxed mb-4">
            {project.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {(Array.isArray(project.tags) ? project.tags : []).map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded-md bg-[#122214] border border-[#1C361F] text-[10px] font-mono-code text-[#CBD7C8]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer */}
        <div className="pt-4 border-t border-[#182C1B] flex items-center justify-between text-xs font-mono-code">
          <span className="text-[#A7B3A1] group-hover:text-[#F5F5EF] flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-[#A8F542]" />
            CLICK FOR 4K PLAYER
          </span>
          <span className="text-[#A8F542] font-semibold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
            OPEN <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card Top Glow Border Sweep */}
      <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#A8F542]/0 group-hover:via-[#A8F542] to-transparent transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}

export default function Projects({ onOpenProject }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProjects = selectedCategory === "ALL" 
    ? defaultProjects 
    : defaultProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#071109]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 -right-[200px] w-[600px] h-[600px] bg-[#A8F542]/8 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-[150px] w-[500px] h-[500px] bg-[#78B82A]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101F12] border border-[#A8F542]/30 text-[#A8F542] text-xs font-mono-code uppercase tracking-widest mb-4">
            <Film className="w-3.5 h-3.5 text-[#A8F542]" />
            <span>PORTFOLIO GALLERY</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F5EF] mb-4">
            FEATURED <span className="text-[#A8F542] neon-text-glow">PROJECTS</span>
          </h2>

          <p className="font-space text-base sm:text-lg text-[#A7B3A1] max-w-2xl leading-relaxed">
            AI-assisted cartoon storytelling, automotive sensory content, and high-converting commercial video editing.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-12 scrollbar-none gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono-code uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-[#071109] font-bold shadow-[0_0_20px_rgba(168,245,66,0.4)]'
                    : 'text-[#A7B3A1] bg-[#0E1B11] border border-[#1A331E] hover:border-[#A8F542]/40 hover:text-[#F5F5EF]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#A8F542] rounded-full z-[-1]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={onOpenProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
