import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sparkles, 
  Clock, 
  Film, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export default function VideoModal({ isOpen, project, onClose }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ' && videoRef.current) {
        e.preventDefault();
        togglePlay();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setProgress((curr / dur) * 100);

    const mins = Math.floor(curr / 60);
    const secs = Math.floor(curr % 60);
    setCurrentTime(`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * (videoRef.current.duration || 0);
  };

  const toggleFullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#071109]/95 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl rounded-3xl bg-[#0A140B] border border-[#A8F542]/40 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_60px_rgba(168,245,66,0.2)] overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-[#182C1B] flex items-center justify-between bg-[#071109]/90">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A8F542] animate-pulse" />
              <span className="text-xs font-mono-code text-[#A8F542] font-semibold tracking-wider">
                {project.code || 'CINEMATIC SHOWCASE'}
              </span>
              <span className="text-white/20">|</span>
              <span className="font-syne text-sm font-bold text-[#F5F5EF] truncate max-w-[220px] sm:max-w-md">
                {project.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowHelp(!showHelp)}
                className="p-2 rounded-xl bg-[#122214] text-[#A8F542] hover:bg-[#18301B] transition-colors text-xs flex items-center gap-1.5 cursor-pointer"
                title="How to replace with your MP4 video"
              >
                <HelpCircle className="w-4 h-4" />
                <span className="hidden sm:inline font-mono-code text-[11px]">SWAP MP4 GUIDE</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-[#142316] text-[#CBD7C8] hover:text-[#A8F542] hover:bg-[#1D361F] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick MP4 Swap Instruction Banner if toggled */}
          {showHelp && (
            <div className="p-4 bg-[#142918] border-b border-[#A8F542]/30 text-xs font-mono-code text-[#F5F5EF] flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-[#A8F542] mt-0.5 flex-shrink-0" />
              <div>
                <strong>How to add your actual MP4 video:</strong> Open <code className="text-[#A8F542] bg-[#071109] px-1.5 py-0.5 rounded">src/data/portfolioData.js</code>. Look for <code className="text-[#A8F542]">videoUrl</code> in this project and replace it with your file path (e.g. <code className="text-[#A8F542]">/my-video.mp4</code> in <code className="text-[#A8F542]">public/</code>) or a direct MP4 link.
              </div>
            </div>
          )}

          {/* Video Player Display */}
          <div className="relative bg-black aspect-video w-full flex items-center justify-center overflow-hidden group">
            <video
              ref={videoRef}
              src={project.videoUrl}
              autoPlay
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              className="w-full h-full object-contain"
            />

            {/* Big Center Play/Pause Overlay indicator on click */}
            <div
              onClick={togglePlay}
              className="absolute inset-0 cursor-pointer flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors"
            >
              {!isPlaying && (
                <div className="w-20 h-20 rounded-full bg-[#A8F542] text-[#071109] flex items-center justify-center shadow-[0_0_40px_#A8F542]">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              )}
            </div>

            {/* Custom Bottom Player Control Bar */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
              {/* Progress Slider */}
              <div
                onClick={handleSeek}
                className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer overflow-hidden relative group/bar hover:h-2.5 transition-all"
              >
                <div
                  className="h-full bg-[#A8F542] shadow-[0_0_10px_#A8F542]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between text-xs font-mono-code text-white pt-1">
                <div className="flex items-center gap-3">
                  <button onClick={togglePlay} className="hover:text-[#A8F542] transition-colors cursor-pointer">
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>
                  <button onClick={toggleMute} className="hover:text-[#A8F542] transition-colors cursor-pointer">
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="text-[11px] text-[#A7B3A1]">
                    {currentTime} / {project.duration || '01:30'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-[#A8F542]">
                    {project.resolution || '4K 60FPS'}
                  </span>
                  <button onClick={toggleFullScreen} className="hover:text-[#A8F542] transition-colors cursor-pointer">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Footer in Modal */}
          <div className="p-6 bg-[#071109] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8">
                <div className="text-xs font-mono-code text-[#A8F542] uppercase tracking-wider mb-1">
                  {project.category}
                </div>
                <h3 className="font-syne text-2xl font-black text-[#F5F5EF] mb-2">
                  {project.title}
                </h3>
                <p className="font-space text-sm text-[#A7B3A1] leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-[#112013] border border-[#1B351E] text-xs font-mono-code text-[#CBD7C8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4 p-4 rounded-2xl bg-[#0D180F] border border-[#19301D] flex flex-col gap-3 text-xs font-mono-code">
                <div>
                  <span className="text-[#A7B3A1] block">CLIENT / PLATFORM</span>
                  <span className="text-[#F5F5EF] font-bold">{project.client || 'Featured Creative'}</span>
                </div>
                <div>
                  <span className="text-[#A7B3A1] block">ALI'S ROLE</span>
                  <span className="text-[#A8F542] font-semibold">{project.role || 'Concept, AI & Master Edit'}</span>
                </div>
                <div>
                  <span className="text-[#A7B3A1] block">DELIVERY SPEC</span>
                  <span className="text-[#CBD7C8]">{project.resolution} • {project.ratio}</span>
                </div>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
