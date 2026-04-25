"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import { Clock, Bell, BarChart3, Table2, Users, RefreshCcw } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    stat: "21×",
    title: "Slow First Response",
    body: "Leads go cold fast. A prospect not reached within 30 minutes is 21× less likely to convert. Most teams reply in hours.",
  },
  {
    icon: Bell,
    stat: "60%",
    title: "Missed Follow-Ups",
    body: "60% of warm prospects never get a second touchpoint. Sales reps get busy, forget, and move on — losing deals that were almost won.",
  },
  {
    icon: BarChart3,
    stat: "0%",
    title: "No Team Visibility",
    body: "Owners have no real-time view of lead status. You're managing blind — finding out about dropped leads only when it's too late.",
  },
  {
    icon: Table2,
    stat: "3×",
    title: "Manual Chaos",
    body: "Excel sheets, WhatsApp groups, sticky notes. Triple the effort, triple the errors. This system breaks the moment you scale past two reps.",
  },
  {
    icon: Users,
    stat: "40%",
    title: "Uneven Lead Distribution",
    body: "Senior reps hoard leads. New joiners go idle. Unfair distribution wastes 40% of your team's capacity every single day.",
  },
  {
    icon: RefreshCcw,
    stat: "₹∞",
    title: "Old Leads Wasted",
    body: "You paid for every past inquiry. But leads older than 30 days are almost never followed up on. That's money already spent — and lost.",
  },
];

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".problem-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            once: true,
          },
        }
      );
      gsap.fromTo(
        ".pain-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".pain-grid",
            start: "top bottom",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative z-30 py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1A0D2E 0%, #2D1B4E 100%)" }}
    >
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="problem-header max-w-3xl mx-auto text-center mb-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-[11px] font-medium tracking-[0.15em] uppercase mb-6">
            The Hidden Revenue Problem
          </div>
          <h2 className="font-display font-semibold text-white tracking-[-0.02em] mb-5 text-[clamp(36px,5vw,60px)] leading-[1.08]">
            Where Most Businesses <span className="italic text-gold">Lose Revenue</span>
          </h2>
          <p className="font-body font-light text-[18px] text-white/60 leading-relaxed">
            Most revenue loss doesn't happen before the inquiry — it happens after. The lead came in. Your team just didn't respond fast enough, follow up consistently, or track it properly.
          </p>
        </div>

        {/* Thin accent line */}
        <div className="w-16 h-px bg-gold/40 mx-auto mb-16" />

        {/* Cards */}
        <div className="pain-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="pain-card group relative p-8 rounded-2xl border border-white/[0.07] hover:border-gold/30 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Stat badge top right */}
              <div className="absolute top-6 right-6 font-display font-bold text-[22px] text-gold/30 group-hover:text-gold/60 transition-colors duration-500">
                {point.stat}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-lavender/10 flex items-center justify-center mb-6 group-hover:bg-lavender/20 group-hover:scale-110 transition-all duration-500">
                <point.icon className="w-5 h-5 text-lavender" />
              </div>

              <h3 className="font-body font-semibold text-[17px] text-white mb-3">
                {point.title}
              </h3>
              <p className="font-body font-light text-[14px] text-white/60 leading-relaxed">
                {point.body}
              </p>

              {/* Bottom left gold bar on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-gold/60 to-transparent transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 p-8 rounded-2xl border border-gold/20 bg-gold/5 max-w-3xl mx-auto text-center">
          <p className="font-body text-[16px] text-white/80 leading-relaxed">
            <span className="font-semibold text-gold">The hard truth:</span> You're spending money on ads, portals, and marketing to generate leads. But without a system, most of those leads simply vanish — and you never know it.
          </p>
        </div>
      </div>
    </section>
  );
}
