import React, { useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Showreel from './components/Showreel';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import CustomCursor from './components/CustomCursor';
import { showreelData } from './data/portfolioData';

export default function App() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState('');

  const handleOpenShowreel = () => {
    setActiveModalProject({
      code: "SHOWREEL 2026",
      title: showreelData.title,
      subtitle: showreelData.tagline,
      category: "MASTER SHOWREEL",
      description: showreelData.description,
      videoUrl: showreelData.videoUrl,
      duration: showreelData.duration,
      resolution: showreelData.quality,
      tags: ["AI Video", "Master Edit", "Sound Design", "Cinematic 4K"],
      client: "Ali Imran Portfolio",
      role: "AI Visual Creator & Video Editor"
    });
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedServiceForContact(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#071109] text-[#F5F5EF] selection:bg-[#A8F542] selection:text-[#071109] overflow-x-hidden">
      {/* Custom Neon Cursor Aura (Desktop Only) */}
      <CustomCursor />

      {/* Cinematic Ambient Background Canvas & Floating Constellations */}
      <BackgroundCanvas />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 01: Hero Section with Real Photo Centerpiece */}
        <Hero
          onOpenShowreel={handleOpenShowreel}
        />

        {/* 02: About Me & Behind The Creative Vision */}
        <About />

        {/* 03: My Services (6 Animated Cards) */}
        <Services onSelectService={handleSelectService} />

        {/* 04: My Projects — Main Portfolio Gallery */}
        <Projects onOpenProject={(proj) => setActiveModalProject(proj)} />

        {/* 05: Creative Showreel (Full-Width Cinema) */}
        <Showreel onPlayShowreel={handleOpenShowreel} />

        {/* 06: My Creative Process (3-Step Animated Roadmap) */}
        <Process />

        {/* 07: Contact Section */}
        <Contact selectedService={selectedServiceForContact} />
      </main>

      {/* Agency Footer */}
      <Footer />

      {/* Fullscreen Video Modal Lightbox */}
      <VideoModal
        isOpen={!!activeModalProject}
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
