"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/animations";
import { Play } from "lucide-react";
import Image from "next/image";

const TOTAL_FRAMES = 240;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new (window.Image as any)();
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/frames/ezgif-frame-${frameNum}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Canvas animation
  useEffect(() => {
    if (!isLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const render = (frameIndex: number) => {
      const img = images[frameIndex];
      if (!img) return;

      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // Cover effect
      const imgRatio = img.width / img.height;
      const canvasRatio = canvasWidth / canvasHeight;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgRatio > canvasRatio) {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgRatio;
        offsetX = (canvasWidth - drawWidth) / 2;
        offsetY = 0;
      } else {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        offsetX = 0;
        offsetY = (canvasHeight - drawHeight) / 2;
      }

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Initial render
    render(0);

    // Animation loop for breathing effect
    const airship = { frame: 0 };
    const tl = gsap.to(airship, {
      frame: TOTAL_FRAMES - 1,
      snap: "frame",
      ease: "none",
      duration: 10,
      repeat: -1,
      onUpdate: () => render(airship.frame),
    });

    // Breathing scale effect
    gsap.to(canvas, {
      scale: 1.1,
      duration: 14,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, [isLoaded, images]);

  // Content animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word reveal
      const title = document.querySelector(".hero-title");
      if (title) {
        const words = title.textContent?.split(" ") || [];
        title.innerHTML = words
          .map((word) => `<span class="inline-block overflow-hidden"><span class="word inline-block">${word}</span></span>`)
          .join(" ");

        gsap.from(".word", {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.5,
        });
      }

      // Other elements
      gsap.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".hero-sub", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.2,
      });

      gsap.from(".hero-ctas", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-6"
    >
      {/* Background Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/25 to-black/95 pointer-events-none" />
      <div className="absolute inset-0 z-10 opacity-[0.02] pointer-events-none noise-overlay mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-20 max-w-[900px] w-full">
        <div className="hero-badge glass inline-flex items-center gap-3 px-4 py-2 rounded-lg mb-8 border-white/[0.08]">
          <span className="w-2 h-2 rounded-full bg-[#8051FF] animate-pulse shadow-[0_0_8px_rgba(128,81,255,0.8)]" />
          <span className="text-[12px] font-medium tracking-wider uppercase text-white/80">
            Now available: CRM for real estate & sales teams
          </span>
        </div>

        <h1 className="hero-title font-display font-semibold text-white leading-[1.05] tracking-[-0.03em] mb-6 text-[clamp(44px,8vw,96px)]">
          Stop Losing <span className="text-[#8051FF]">Revenue</span> to Missed Leads
        </h1>

        <p className="hero-sub font-body font-light text-[18px] md:text-[20px] text-white/70 leading-relaxed mb-10 max-w-[700px] mx-auto">
          The ultimate lead management software to help businesses respond faster, automate sales follow-up, and convert more from the leads they already pay for.
        </p>

        <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative bg-[#8051FF] hover:bg-[#9B75FF] text-white font-semibold px-9 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(128,81,255,0.5)] overflow-hidden">
            <span className="relative z-10">Book Free Demo</span>
          </button>
          
          <button className="flex items-center gap-2 px-9 py-4 rounded-lg border border-white/[0.12] text-white hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300">
            <Play className="w-4 h-4 fill-current" />
            <span className="font-medium">Watch Product Tour</span>
          </button>
        </div>
      </div>

      {/* Social Proof Strip */}
      <div className="absolute bottom-12 left-0 w-full z-20 px-6 flex flex-col items-center">
        <p className="text-[13px] font-medium text-white/30 uppercase tracking-[0.12em] mb-6">
          Trusted by real estate teams across India
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-30 grayscale hover:opacity-50 transition-opacity duration-500">
          <span className="text-xl font-display font-semibold tracking-tight">VISTARA</span>
          <span className="text-xl font-display font-semibold tracking-tight">MANSION</span>
          <span className="text-xl font-display font-semibold tracking-tight">SKYLINE</span>
          <span className="text-xl font-display font-semibold tracking-tight">METRO</span>
        </div>
      </div>
    </section>
  );
}
