import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseCoords = useRef({ x: -100, y: -100 });
  const currentCoords = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseCoords.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering over element with data-cursor or interactive tag
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;
      const interactiveTarget = target?.closest('button, a, input, textarea, [role="button"]') as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else if (interactiveTarget) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const render = () => {
      currentCoords.current.x = lerp(currentCoords.current.x, mouseCoords.current.x, 0.18);
      currentCoords.current.y = lerp(currentCoords.current.y, mouseCoords.current.y, 0.18);

      setPosition({
        x: currentCoords.current.x,
        y: currentCoords.current.y,
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out will-change-transform flex items-center justify-center"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={`rounded-full flex items-center justify-center transition-all duration-200 border ${
          isHovered
            ? cursorText
              ? 'w-14 h-14 bg-wine-950/90 border-wine-500/80 backdrop-blur-sm shadow-[0_0_15px_rgba(176,42,67,0.4)]'
              : 'w-10 h-10 bg-wine-900/30 border-wine-400/60 scale-110 backdrop-blur-[2px]'
            : 'w-3 h-3 bg-cream-100 border-wine-500/50 shadow-[0_0_8px_rgba(255,255,255,0.6)]'
        }`}
      >
        {cursorText && (
          <span className="text-[9px] font-mono tracking-widest text-cream-100 uppercase select-none font-bold">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
