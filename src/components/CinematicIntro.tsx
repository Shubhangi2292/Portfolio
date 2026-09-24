import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 598;
const LERP_FACTOR = 0.12;

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  opacity: number;
  color: string;
}

const PARTICLE_COUNT = 650;

export const CinematicIntro: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loadingBarRef = useRef<HTMLDivElement>(null);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let count = 0;
    let currentFrame = 0;
    let targetFrame = 0;
    let animId: number;

    const particles: Particle[] = [];
    const FOV = 600;

    // Initialize 3D Digital Particle System
    const colors = [
      'rgba(225, 29, 72, ',   // Deep Burgundy
      'rgba(244, 63, 94, ',   // Soft Rose
      'rgba(251, 191, 36, ',  // Warm Amber Gold
      'rgba(254, 243, 199, ', // Warm Ivory
      'rgba(168, 85, 247, '   // Subtle Tech Violet
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 2400,
        y: (Math.random() - 0.5) * 1600,
        z: Math.random() * 1500 + 10,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        vz: Math.random() * 2 + 1.5,
        size: Math.random() * 3.5 + 1.2,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const getFramePath = (index: number) => {
      const num = String(index + 1).padStart(5, '0');
      return `/frames/frame_${num}.webp`;
    };

    const getValidImage = (frameIdx: number) => {
      let img = images[frameIdx];
      if (img && img.complete && img.naturalWidth > 0) return img;
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = images[frameIdx - offset];
        const next = images[frameIdx + offset];
        if (prev && prev.complete && prev.naturalWidth > 0) return prev;
        if (next && next.complete && next.naturalWidth > 0) return next;
      }
      return null;
    };

    const smoothstep = (min: number, max: number, value: number) => {
      const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
      return x * x * (3 - 2 * x);
    };

    // Preload frames
    const firstImg = new Image();
    firstImg.onload = () => {
      images[0] = firstImg;
      count++;
      setLoadedCount(count);
      loadRemaining();
    };
    firstImg.src = getFramePath(0);

    const loadRemaining = () => {
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        img.onload = () => {
          count++;
          setLoadedCount(count);
          if (loadingBarRef.current) {
            const pct = (count / TOTAL_FRAMES) * 100;
            loadingBarRef.current.style.width = `${pct}%`;
            if (count === TOTAL_FRAMES) {
              setTimeout(() => {
                if (loadingBarRef.current) loadingBarRef.current.style.opacity = '0';
              }, 400);
            }
          }
        };
        img.src = getFramePath(i);
        images[i] = img;
      }
    };

    const drawCinematicFrame = (frameVal: number) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const cx = cw / 2;
      const cy = ch / 2;

      ctx.fillStyle = '#030204';
      ctx.fillRect(0, 0, cw, ch);

      const TRANSITION_START = 230;
      const TRANSITION_END = 350;

      let transitionProgress = 0;
      if (frameVal >= TRANSITION_START && frameVal <= TRANSITION_END) {
        transitionProgress = smoothstep(TRANSITION_START, TRANSITION_END, frameVal);
      } else if (frameVal > TRANSITION_END) {
        transitionProgress = 1;
      }

      const seq1FrameIdx = Math.min(298, Math.round(frameVal));
      const seq2FrameIdx = Math.min(597, Math.max(299, Math.round(frameVal)));

      const imgSeq1 = getValidImage(seq1FrameIdx);
      const imgSeq2 = getValidImage(seq2FrameIdx);

      const drawCoverImage = (img: HTMLImageElement, opacity: number = 1) => {
        if (!img) return;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;
        const scale = Math.max(cw / iw, ch / ih);
        const nw = iw * scale;
        const nh = ih * scale;
        const dx = (cw - nw) / 2;
        const dy = (ch - nh) / 2;

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.drawImage(img, dx, dy, nw, nh);
        ctx.restore();
      };

      if (transitionProgress === 0) {
        if (imgSeq1) drawCoverImage(imgSeq1, 1);
      } else if (transitionProgress === 1) {
        if (imgSeq2) drawCoverImage(imgSeq2, 1);
      } else {
        if (imgSeq1) drawCoverImage(imgSeq1, 1 - transitionProgress * 0.7);

        if (imgSeq2) {
          ctx.save();
          const maxRadius = Math.sqrt(cw * cw + ch * ch) * 0.7;
          const revealRadius = Math.max(10, transitionProgress * maxRadius);

          ctx.beginPath();
          ctx.arc(cx, cy, revealRadius, 0, Math.PI * 2);
          ctx.clip();

          const maskOpacity = smoothstep(0, 0.4, transitionProgress);
          drawCoverImage(imgSeq2, maskOpacity);
          ctx.restore();
        }
      }

      // 3D Particles
      let particleIntensity = 0.3;
      if (frameVal >= 200 && frameVal <= 360) {
        const norm = (frameVal - 200) / 160;
        particleIntensity = 0.3 + Math.sin(norm * Math.PI) * 0.7;
      }

      if (particleIntensity > 0.05) {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const p = particles[i];
          const scrollSpeed = 0.5 + (frameVal * 0.08);
          p.z -= p.vz * (1 + scrollSpeed * 0.02);
          if (p.z <= 1) p.z += 1500;

          const scale = FOV / (FOV + p.z);
          const px = cx + p.x * scale;
          const py = cy + p.y * scale;
          const pSize = Math.max(0.5, p.size * scale * (1 + particleIntensity));

          if (px >= -50 && px <= cw + 50 && py >= -50 && py <= ch + 50) {
            const currentAlpha = p.opacity * particleIntensity * Math.min(1, scale * 1.8);
            ctx.fillStyle = `${p.color}${currentAlpha})`;
            ctx.beginPath();
            ctx.arc(px, py, pSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        ctx.restore();
      }

      // Unified Color Grade Pass
      ctx.save();
      ctx.globalCompositeOperation = 'soft-light';
      ctx.fillStyle = 'rgba(159, 18, 57, 0.18)';
      ctx.fillRect(0, 0, cw, ch);

      ctx.globalCompositeOperation = 'screen';
      const highlightGradient = ctx.createRadialGradient(cx, cy * 0.8, 50, cx, cy, Math.max(cw, ch) * 0.6);
      highlightGradient.addColorStop(0, 'rgba(254, 243, 199, 0.06)');
      highlightGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = highlightGradient;
      ctx.fillRect(0, 0, cw, ch);

      ctx.globalCompositeOperation = 'multiply';
      const vignette = ctx.createRadialGradient(cx, cy, Math.min(cw, ch) * 0.35, cx, cy, Math.max(cw, ch) * 0.75);
      vignette.addColorStop(0, 'rgba(255, 255, 255, 1)');
      vignette.addColorStop(0.7, 'rgba(20, 15, 25, 0.85)');
      vignette.addColorStop(1, 'rgba(3, 2, 5, 0.98)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, cw, ch);

      ctx.restore();
    };

    const INTRO_STAGE_HEIGHT = 2200;

    const renderLoop = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

      let targetFrameVal = 0;
      if (scrollTop <= INTRO_STAGE_HEIGHT) {
        // Stage 1: Developer intro animation -> laptop screen zoom (frames 0 to 250)
        const introProgress = Math.max(0, Math.min(1, scrollTop / INTRO_STAGE_HEIGHT));
        targetFrameVal = introProgress * 250;
      } else {
        // Stage 2: Main website scroll (frames 250 to 597)
        const bodyScrollProgress = Math.max(0, Math.min(1, (scrollTop - INTRO_STAGE_HEIGHT) / Math.max(1, maxScroll - INTRO_STAGE_HEIGHT)));
        targetFrameVal = 250 + bodyScrollProgress * (TOTAL_FRAMES - 1 - 250);
      }

      targetFrame = Math.min(TOTAL_FRAMES - 1, Math.floor(targetFrameVal));
      currentFrame += (targetFrame - currentFrame) * LERP_FACTOR;
      drawCinematicFrame(Math.max(0, Math.min(TOTAL_FRAMES - 1, currentFrame)));

      animId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={loadingBarRef} id="loading-bar" className="fixed top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-wine-700 via-wine-500 to-amber-400 z-[100] transition-all duration-300" />
      <canvas ref={canvasRef} id="animation-canvas" className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />
    </>
  );
};
