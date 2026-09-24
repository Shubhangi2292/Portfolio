// Cinematic Scroll Animation Engine with Volumetric Particle Bridge
// Scene 1: Developer Portfolio Technology (Frames 1 - 299)
// Transition: Digital Particle Dispersal & Silhouette Emergence (Frames 240 - 350)
// Scene 2: Person Walking Sequence (Frames 300 - 598)

const TOTAL_FRAMES = 598;
const LERP_FACTOR = 0.12;

const canvas = document.getElementById('animation-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d', { alpha: false })!;
const loadingBar = document.getElementById('loading-bar') as HTMLDivElement;

const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
let loadedCount = 0;
let currentFrame = 0;
let targetFrame = 0;

// Particle System Data Structure
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
  pulsePhase: number;
}

const PARTICLE_COUNT = 650;
const particles: Particle[] = [];
const FOV = 600;

function initParticles() {
  const colors = [
    'rgba(225, 29, 72, ',   // Deep Burgundy / Carmine
    'rgba(244, 63, 94, ',   // Soft Rose
    'rgba(251, 191, 36, ',  // Warm Amber Gold
    'rgba(254, 243, 199, ', // Warm Ivory
    'rgba(168, 85, 247, '   // Subtle Tech Violet
  ];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const colorBase = colors[Math.floor(Math.random() * colors.length)];
    particles.push({
      x: (Math.random() - 0.5) * 2400,
      y: (Math.random() - 0.5) * 1600,
      z: Math.random() * 1500 + 10,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      vz: Math.random() * 2 + 1.5,
      size: Math.random() * 3.5 + 1.2,
      opacity: Math.random() * 0.7 + 0.3,
      color: colorBase,
      pulsePhase: Math.random() * Math.PI * 2
    });
  }
}

initParticles();

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  
  if (ctx) {
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
  }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function getFramePath(index: number): string {
  const frameNum = String(index + 1).padStart(5, '0');
  return `/frames/frame_${frameNum}.webp`;
}

// Preload frames with high-priority first frame
function preloadImages() {
  const firstImg = new Image();
  firstImg.onload = () => {
    images[0] = firstImg;
    loadedCount++;
    loadRemaining();
  };
  firstImg.src = getFramePath(0);
}

function loadRemaining() {
  for (let i = 1; i < TOTAL_FRAMES; i++) {
    const img = new Image();
    img.onload = () => {
      loadedCount++;
      if (loadingBar) {
        const pct = (loadedCount / TOTAL_FRAMES) * 100;
        loadingBar.style.width = `${pct}%`;
        if (loadedCount === TOTAL_FRAMES) {
          setTimeout(() => {
            loadingBar.style.opacity = '0';
          }, 400);
        }
      }
    };
    img.src = getFramePath(i);
    images[i] = img;
  }
}

function getScrollProgress(): number {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  return Math.max(0, Math.min(1, scrollTop / maxScroll));
}

// Helper to get loaded image or nearest available loaded frame
function getValidImage(frameIdx: number): HTMLImageElement | null {
  let img = images[frameIdx];
  if (img && img.complete && img.naturalWidth > 0) return img;

  for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
    const prev = images[frameIdx - offset];
    const next = images[frameIdx + offset];
    if (prev && prev.complete && prev.naturalWidth > 0) return prev;
    if (next && next.complete && next.naturalWidth > 0) return next;
  }
  return null;
}

// Smoothstep ease curve
function smoothstep(min: number, max: number, value: number): number {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

// Draw cinematic scene with particle bridge & unified color grade
function drawCinematicFrame(frameVal: number) {
  const cw = canvas.width;
  const ch = canvas.height;
  const cx = cw / 2;
  const cy = ch / 2;

  ctx.fillStyle = '#030204';
  ctx.fillRect(0, 0, cw, ch);

  // Define transition boundaries (Frames 240 to 350)
  const TRANSITION_START = 230;
  const TRANSITION_END = 350;

  let transitionProgress = 0;
  if (frameVal >= TRANSITION_START && frameVal <= TRANSITION_END) {
    transitionProgress = smoothstep(TRANSITION_START, TRANSITION_END, frameVal);
  } else if (frameVal > TRANSITION_END) {
    transitionProgress = 1;
  }

  // Calculate actual frame indices for Scene 1 and Scene 2
  const seq1FrameIdx = Math.min(298, Math.round(frameVal));
  const seq2FrameIdx = Math.min(597, Math.max(299, Math.round(frameVal)));

  const imgSeq1 = getValidImage(seq1FrameIdx);
  const imgSeq2 = getValidImage(seq2FrameIdx);

  // Helper function to draw image with aspect ratio cover
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
    // Pure Scene 1 (Developer Portfolio)
    if (imgSeq1) drawCoverImage(imgSeq1, 1);
  } else if (transitionProgress === 1) {
    // Pure Scene 2 (Person Walking)
    if (imgSeq2) drawCoverImage(imgSeq2, 1);
  } else {
    // CINEMATIC PARTICLE BRIDGE TRANSITION (Scene 1 -> Particle Cloud -> Scene 2 Silhouette Reveal)
    
    // 1. Draw Scene 1 as base layer with fading opacity
    if (imgSeq1) drawCoverImage(imgSeq1, 1 - transitionProgress * 0.7);

    // 2. Draw Scene 2 using expanding radial particle mask (silhouette reveal)
    if (imgSeq2) {
      ctx.save();
      
      // Radius of reveal portal grows dynamically with transition
      const maxRadius = Math.sqrt(cw * cw + ch * ch) * 0.7;
      const revealRadius = Math.max(10, transitionProgress * maxRadius);

      ctx.beginPath();
      ctx.arc(cx, cy, revealRadius, 0, Math.PI * 2);
      ctx.clip();

      // Soft feathering opacity at border
      const maskOpacity = smoothstep(0, 0.4, transitionProgress);
      drawCoverImage(imgSeq2, maskOpacity);
      
      ctx.restore();
    }
  }

  // -------------------------------------------------------------
  // DYNAMIC 3D DIGITAL PARTICLE BRIDGE ENGINE
  // -------------------------------------------------------------
  // Particle intensity ramps up during transition and lingers as ambient dust
  let particleIntensity = 0.3; // Baseline ambient dust
  if (frameVal >= 200 && frameVal <= 360) {
    // Peak particle cloud during transition
    const norm = (frameVal - 200) / 160;
    particleIntensity = 0.3 + Math.sin(norm * Math.PI) * 0.7;
  }

  if (particleIntensity > 0.05) {
    ctx.save();
    ctx.globalCompositeOperation = 'screen';

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particles[i];

      // Scroll speed moves particles forward toward viewer
      const scrollSpeed = 0.5 + (frameVal * 0.08);
      p.z -= p.vz * (1 + scrollSpeed * 0.02);
      if (p.z <= 1) p.z += 1500;

      // Project 3D to 2D
      const scale = FOV / (FOV + p.z);
      const px = cx + p.x * scale;
      const py = cy + p.y * scale;
      const pSize = Math.max(0.5, p.size * scale * (1 + particleIntensity));

      if (px >= -50 && px <= cw + 50 && py >= -50 && py <= ch + 50) {
        const currentAlpha = p.opacity * particleIntensity * Math.min(1, scale * 1.8);
        
        // Render glowing particle dot
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(px, py, pSize, 0, Math.PI * 2);
        ctx.fill();

        // Extra soft light halo for larger particles
        if (pSize > 2) {
          const halo = ctx.createRadialGradient(px, py, 0, px, py, pSize * 3);
          halo.addColorStop(0, `${p.color}${currentAlpha * 0.4})`);
          halo.addColorStop(1, `${p.color}0)`);
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(px, py, pSize * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    ctx.restore();
  }

  // -------------------------------------------------------------
  // UNIFIED CINEMATIC COLOR GRADE & ATMOSPHERIC PASS
  // -------------------------------------------------------------
  ctx.save();
  
  // 1. Deep Burgundy Warm Lighting Overlay (Unifies color palette across both scenes)
  ctx.globalCompositeOperation = 'soft-light';
  ctx.fillStyle = 'rgba(159, 18, 57, 0.18)'; // Rich Burgundy Glow
  ctx.fillRect(0, 0, cw, ch);

  // 2. Warm Ivory Highlight Boost
  ctx.globalCompositeOperation = 'screen';
  const highlightGradient = ctx.createRadialGradient(cx, cy * 0.8, 50, cx, cy, Math.max(cw, ch) * 0.6);
  highlightGradient.addColorStop(0, 'rgba(254, 243, 199, 0.06)'); // Ivory Highlight
  highlightGradient.addColorStop(0.6, 'rgba(159, 18, 57, 0.03)');
  highlightGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = highlightGradient;
  ctx.fillRect(0, 0, cw, ch);

  // 3. Cinematic Editorial Vignette & Dark Charcoal Haze
  ctx.globalCompositeOperation = 'multiply';
  const vignette = ctx.createRadialGradient(cx, cy, Math.min(cw, ch) * 0.35, cx, cy, Math.max(cw, ch) * 0.75);
  vignette.addColorStop(0, 'rgba(255, 255, 255, 1)');
  vignette.addColorStop(0.7, 'rgba(20, 15, 25, 0.85)');
  vignette.addColorStop(1, 'rgba(3, 2, 5, 0.98)');
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, cw, ch);

  ctx.restore();
}

function render() {
  const progress = getScrollProgress();
  targetFrame = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES));
  
  // Smooth inertia lerp physics
  currentFrame += (targetFrame - currentFrame) * LERP_FACTOR;
  
  const frameToDraw = Math.max(0, Math.min(TOTAL_FRAMES - 1, currentFrame));
  drawCinematicFrame(frameToDraw);

  requestAnimationFrame(render);
}

// Initialize
preloadImages();
requestAnimationFrame(render);
