"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import { MessageCircle } from "lucide-react";

export default function FinalCTA() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-inner > *", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-32 relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at center, #6B3FA0 0%, #2D1B4E 40%, #1A0D2E 100%)" }}
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-lavender/15 blur-[100px] rounded-full animate-float" />
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-violet/20 blur-[120px] rounded-full animate-float" style={{ animationDelay: "-4s" }} />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none noise-overlay" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="cta-inner space-y-8">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-gold/15 border border-gold/25 text-gold text-[11px] font-medium tracking-[0.15em] uppercase">
            Ready to stop losing leads?
          </div>

          {/* Headline */}
          <h2 className="font-display font-semibold text-white tracking-[-0.02em] text-[clamp(40px,6vw,76px)] leading-[1.05]">
            Every Delayed Lead <br className="hidden md:block" />
            <span className="italic text-gold">Costs You Money</span>
          </h2>

          {/* Sub */}
          <p className="font-body font-light text-[18px] md:text-[20px] text-white/70 max-w-[680px] mx-auto leading-relaxed">
            See how Leadora improves your lead handling in a quick 30-minute live demo — no commitment, no pressure, just clarity.
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-gold/30 mx-auto" />

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button className="w-full sm:w-auto bg-gold hover:bg-gold-light text-plum-deep font-bold px-10 py-4 rounded-full text-[16px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(212,168,83,0.35)] min-h-[52px]">
              Book Free Demo
            </button>
            <a
              href="https://wa.me/91"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-10 py-4 rounded-full border border-white/25 text-white hover:border-white/60 hover:bg-white/5 transition-all duration-300 text-[16px] min-h-[52px]"
            >
              <MessageCircle size={18} className="text-green-400" />
              Talk on WhatsApp
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 pt-4">
            {["Free setup", "No credit card", "48h to go live", "Dedicated onboarding"].map((s) => (
              <span key={s} className="flex items-center gap-2 text-[13px] text-white/40 font-body">
                <span className="text-gold text-[16px]">✓</span> {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
