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
      style={{ background: "radial-gradient(ellipse at center, #8051FF15 0%, #292919 40%, #000000 100%)" }}
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#8051FF]/[0.06] blur-[100px] rounded-full animate-float" />
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-[#8051FF]/[0.04] blur-[120px] rounded-full animate-float" style={{ animationDelay: "-4s" }} />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none noise-overlay" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="cta-inner space-y-8">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 rounded-md bg-[#8051FF]/10 border border-[#8051FF]/20 text-[#8051FF] text-[11px] font-medium tracking-[0.15em] uppercase">
            Ready to stop losing leads?
          </div>

          {/* Headline */}
          <h2 className="font-display font-semibold text-white tracking-[-0.03em] text-[clamp(36px,6vw,64px)] leading-[1.05]">
            Every Delayed Lead <br className="hidden md:block" />
            <span className="text-[#8051FF]">Costs You Money</span>
          </h2>

          {/* Sub */}
          <p className="font-body font-light text-[18px] md:text-[20px] text-[#6A7282] max-w-[680px] mx-auto leading-relaxed">
            See how Leadora improves your lead handling in a quick 30-minute live demo — no commitment, no pressure, just clarity.
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-[#8051FF]/20 mx-auto" />

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button className="w-full sm:w-auto bg-[#8051FF] hover:bg-[#9B75FF] text-white font-semibold px-10 py-4 rounded-lg text-[16px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(128,81,255,0.35)] min-h-[52px]">
              Book Free Demo
            </button>
            <a
              href="https://wa.me/91"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-10 py-4 rounded-lg border border-white/[0.12] text-white hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 text-[16px] min-h-[52px]"
            >
              <MessageCircle size={18} className="text-green-400" />
              Talk on WhatsApp
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 pt-4">
            {["Free setup", "No credit card", "48h to go live", "Dedicated onboarding"].map((s) => (
              <span key={s} className="flex items-center gap-2 text-[13px] text-[#6A7282] font-body">
                <span className="text-[#8051FF] text-[16px]">✓</span> {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
