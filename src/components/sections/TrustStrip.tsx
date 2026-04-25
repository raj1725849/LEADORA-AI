"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import { Zap, Eye, Target, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Faster Follow-Ups",
    text: "Response time cut from hours to minutes.",
    metric: "3× faster",
  },
  {
    icon: Eye,
    title: "Complete Visibility",
    text: "Managers see every lead, every stage, in real time.",
    metric: "100% coverage",
  },
  {
    icon: Target,
    title: "Team Accountability",
    text: "Every lead assigned. Every action logged. Escalations automatic.",
    metric: "0 leads dropped",
  },
  {
    icon: TrendingUp,
    title: "Better Results",
    text: "30–50% conversion uplift on the same lead volume.",
    metric: "Same leads, more revenue",
  },
];

export default function TrustStrip() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pillar", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 bg-plum-deep">
      {/* Top separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`pillar flex flex-col items-center text-center lg:items-start lg:text-left lg:px-10 ${
                idx !== pillars.length - 1 ? "lg:border-r lg:border-white/[0.08]" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                <pillar.icon className="w-5 h-5 text-gold" />
              </div>
              <div className="font-display font-bold text-gold text-[14px] tracking-wide mb-2">
                {pillar.metric}
              </div>
              <h3 className="font-body font-semibold text-[14px] text-white mb-1.5 uppercase tracking-wider">
                {pillar.title}
              </h3>
              <p className="font-body font-light text-[13px] text-white/40 leading-snug max-w-[180px] lg:max-w-none">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
