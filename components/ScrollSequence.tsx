'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';

const FRAME_COUNT = 91;
const SEQUENCE_DIR = '/sequence/';

export default function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [loadedFrames, setLoadedFrames] = useState<number>(0);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Track the scroll percentage inside the container body (0.0 to 1.0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth scroll progression map perfectly for jitter-free Canvas transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Preload Image Sequence (0-119)
  useEffect(() => {
    let isCancelled = false;

    const preloadImages = async () => {
      const loaded: HTMLImageElement[] = [];
      let count = 0;

      const promises = Array.from({ length: FRAME_COUNT }, (_, i) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = `${SEQUENCE_DIR}frame_${i}.jpg`;

          img.onload = () => {
            if (isCancelled) return;
            count++;
            setLoadedFrames(count);
            loaded[i] = img;
            resolve();
          };

          img.onerror = () => {
            // Resolve silently to prevent blocking UX on failed image load
            if (isCancelled) return;
            count++;
            setLoadedFrames(count);
            loaded[i] = img;
            resolve();
          };
        });
      });

      await Promise.all(promises);
      if (isCancelled) return;

      setImages(loaded);

      // Artificial delay (600ms) for aesthetic perception of loading finishing gracefully
      setTimeout(() => setIsLoaded(true), 600);
    };

    preloadImages();

    return () => {
      isCancelled = true;
      // Reset image sources to free up memory footprint when destroyed
      images.forEach(img => {
        img.src = '';
      });
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Canvas Frame Rendering
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = images[index];
    if (!img || !img.complete || img.naturalWidth === 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    // "Contain" scaling relative to canvas device dimensions for fluid responsiveness
    const scale = Math.min(
      canvas.width / img.width,
      canvas.height / img.height
    );

    const drawWidth = img.width * scale;
    const drawHeight = img.height * scale;
    const x = (canvas.width - drawWidth) / 2;
    const y = (canvas.height - drawHeight) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Smooth pixel manipulation for larger scales
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, x, y, drawWidth, drawHeight);
  };

  // Attach Resize listeners and Scroll change effects to Draw canvas frames
  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // We isolate handleResize logic out to properly bind dimensions 
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      // Fire redraw safely after a repaint event 
      requestAnimationFrame(() => {
        const currentProgress = smoothProgress.get();
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(currentProgress * FRAME_COUNT)
        );
        renderFrame(frameIndex);
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Map `smoothProgress` value onto image frames
    const unsubscribe = smoothProgress.on('change', (latest) => {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(latest * FRAME_COUNT)
      );
      renderFrame(frameIndex);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      unsubscribe();
      // Safely dispose the webgl context theoretically if we were using it, here 2d clears automatically
    };
  }, [isLoaded, images]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadingPercent = Math.round((loadedFrames / FRAME_COUNT) * 100);

  return (
    <>
      {/* Loading Screen Overlay (Polished minimal preloader UI) */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white">
          <div className="flex flex-col items-center space-y-8">
            <div className="relative flex items-center justify-center">
              <div className="w-12 h-12 border-t-2 border-r-2 border-white/80 rounded-full animate-spin" />
              <div className="absolute w-8 h-8 border-b-2 border-l-2 border-white/40 rounded-full animate-[spin_1.5s_linear_reverse_infinite]" />
            </div>

            <div className="text-sm font-medium tracking-[0.2em] text-white/50">
              INITIALIZING EXPERIENCE
            </div>

            <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-white transition-all duration-[50ms] ease-out"
                style={{ width: `${loadingPercent}%` }}
              />
            </div>

            <div className="text-xs font-mono text-white/30 tracking-widest">{loadingPercent}%</div>
          </div>
        </div>
      )}

      {/* Main Container - Drives the exact length of the scroll journey (400vh) */}
      <div ref={containerRef} className="relative w-full" style={{ height: '400vh' }}>

        {/* Sticky wrapper pinning our interaction point to the viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#050505]">

          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover"
            style={{
              width: '100%',
              height: '100%'
            }}
          />

          {isLoaded && (
            <>
              {/* Visual affordance for intro scroll */}
              <ScrollIndicator scrollYProgress={smoothProgress} />

              {/* Scrollytelling Sequences overlayed on top of animated Canvas */}
              <ScrollytellingBeat
                scrollYProgress={smoothProgress}
                range={[0, 0.20]}
                title="ACTIVITY CAMP"
                subtitle="AI based Activity Program Initiated by KERALA STATE RUTRONIX"
                align="center"
              />

              <ScrollytellingBeat
                scrollYProgress={smoothProgress}
                range={[0.25, 0.45]}
                title="30+ AI Based Courses"
                subtitle="AI based Activity Program Initiated by KERALA STATE RUTRONIX"
                align="left"
              />

              <ScrollytellingBeat
                scrollYProgress={smoothProgress}
                range={[0.50, 0.70]}
                title=""
                subtitle="PLAY | CREATE | INNOVATE"
                align="right"
              />


            </>
          )}

        </div>
      </div>
    </>
  );
}

// ------------------------------------------------------------- 
// Micro-Components: Internal logic wrappers for the UI overlays 
// ------------------------------------------------------------- 

function ScrollIndicator({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Fades indicator out perfectly across the first 10% scroll 
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-12 left-0 right-0 flex flex-col items-center justify-center text-white/50 space-y-3 pointer-events-none"
    >
      <span className="text-xs tracking-[0.2em] font-medium uppercase text-white/60">Scroll to Explore</span>
      <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
    </motion.div>
  );
}

function ScrollytellingBeat({
  scrollYProgress,
  range,
  title,
  subtitle,
  align
}: {
  scrollYProgress: MotionValue<number>;
  range: [number, number];
  title: string;
  subtitle: string;
  align: 'center' | 'left' | 'right';
}) {
  const [start, end] = range;
  const padding = 0.05; // Fade duration relative padding 

  const opacityMap = [
    start,
    start + padding,
    end - padding,
    end
  ];

  /* Mapping fade-in vs fade-out on the scroll mapping timeline */
  const opacity = useTransform(
    scrollYProgress,
    opacityMap,
    [0, 1, 1, 0]
  );

  /* Translates vertically starting +20px inside the void entering its peak and ending -20px ascending further */
  const yOffset = useTransform(
    scrollYProgress,
    opacityMap,
    [20, 0, 0, -20]
  );

  return (
    <motion.div
      style={{ opacity, y: yOffset }}
      className={`absolute inset-0 flex flex-col justify-center px-8 sm:px-12 md:px-24 xl:px-32 pointer-events-none mx-auto max-w-[1500px]
        ${align === 'center' ? 'items-center text-center' : align === 'left' ? 'items-start text-left' : 'items-end text-right'}
      `}
    >
      <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white/90 tracking-tighter leading-[0.9] mb-8">
        {title}
      </h2>
      <p className="text-xl md:text-2xl text-white/60 max-w-xl font-light leading-relaxed tracking-wide">
        {subtitle}
      </p>
    </motion.div>
  );
}
