import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsVisible(true);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if target is clickable
      const target = e.target;
      const isClickable = 
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.getAttribute('role') === 'button';

      setIsPointer(!!isClickable);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let frameId;
    const smoothFollow = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      frameId = requestAnimationFrame(smoothFollow);
    };
    frameId = requestAnimationFrame(smoothFollow);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(frameId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Tiny sharp center dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div
          className={`w-2 h-2 rounded-full bg-[#A8F542] shadow-[0_0_10px_#A8F542] ${
            isPointer ? 'scale-150' : 'scale-100'
          } transition-transform duration-200`}
        />
      </div>

      {/* Smooth floating aura ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-40 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${trailing.x}px, ${trailing.y}px, 0)`,
        }}
      >
        <div
          className={`rounded-full border border-[#A8F542]/50 bg-[#A8F542]/5 transition-all duration-300 ease-out ${
            isPointer
              ? 'w-12 h-12 scale-125 border-[#A8F542] shadow-[0_0_20px_rgba(168,245,66,0.3)]'
              : 'w-8 h-8 scale-100'
          }`}
        />
      </div>
    </>
  );
}
