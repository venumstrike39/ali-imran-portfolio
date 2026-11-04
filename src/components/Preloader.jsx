import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 700);
          }, 350);
          return 100;
        }
        // Organic acceleration
        const increment = Math.max(1, Math.floor(Math.random() * 9) + 2);
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between p-8 md:p-14 bg-[#071109] text-[#F5F5EF] overflow-hidden select-none"
        >
          {/* Top HUD Telemetry */}
          <div className="w-full flex items-center justify-between text-xs font-mono-code tracking-widest text-[#A7B3A1]/70 uppercase">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A8F542] animate-ping" />
              <span className="text-[#A8F542] font-semibold">ALI IMRAN</span>
              <span className="hidden sm:inline">| CREATIVE STUDIO 2026</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline">SYSTEM: INITIALIZING 4K AI PIPELINE</span>
              <button
                onClick={() => {
                  setIsFinished(true);
                  setTimeout(onComplete, 200);
                }}
                className="hover:text-[#A8F542] transition-colors underline decoration-[#A8F542]/40"
              >
                SKIP INTRO [ESC]
              </button>
            </div>
          </div>

          {/* Central Animated Typography */}
          <div className="text-center my-auto flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <span className="text-xs md:text-sm uppercase tracking-[0.4em] font-mono-code text-[#A8F542] block mb-2 font-medium">
                AI Video Creator & Video Editor
              </span>
              <h1 className="font-syne text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#F5F5EF] via-[#E2EBE0] to-[#5A735E]">
                PORTFOLIO
              </h1>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#A8F542]/60 to-transparent mt-4" />
            </motion.div>

            {/* Glowing Digital Counter */}
            <div className="mt-8 flex items-baseline gap-2">
              <span className="font-syne text-5xl md:text-7xl font-bold tracking-tight text-[#A8F542] neon-text-glow">
                {percent.toString().padStart(3, '0')}
              </span>
              <span className="text-xl md:text-2xl font-mono-code text-[#A7B3A1]">%</span>
            </div>
          </div>

          {/* Bottom Progress Bar & Status */}
          <div className="w-full max-w-xl mx-auto flex flex-col gap-3">
            <div className="flex justify-between text-xs font-mono-code text-[#A7B3A1]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8F542]" />
                GENERATING CINEMATIC CANVAS
              </span>
              <span>4K • 60FPS • DOLBY ATMOS</span>
            </div>
            
            <div className="w-full h-[3px] bg-[#142315] rounded-full overflow-hidden border border-[#A8F542]/20">
              <motion.div
                className="h-full bg-gradient-to-r from-[#78B82A] to-[#A8F542] shadow-[0_0_12px_#A8F542]"
                style={{ width: `${percent}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <div className="text-center text-[11px] font-mono-code text-[#A7B3A1]/50 tracking-wider">
              "TURNING CREATIVE IDEAS INTO POWERFUL VISUAL STORIES"
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
