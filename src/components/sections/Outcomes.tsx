"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

const metrics = [
  {
    value: "3×",
    label: "Faster Response Time",
    sub: "vs. industry average",
  },
  {
    value: "40%",
    label: "Less Lead Leakage",
    sub: "no lead left behind",
  },
  {
    value: "100%",
    label: "Team Visibility",
    sub: "real-time for managers",
  },
  {
    value: "24/7",
    label: "Lead Tracking",
    sub: "no manual check-ins",
  },
  {
    value: "30-50%",
    label: "Conversion Uplift",
    sub: "on the same lead volume",
  },
  {
    value: "48h",
    label: "To Go Live",
    sub: "full onboarding included",
  },
];

const outcomes = [
  {
    number: "01",
    title: "Faster Response",
    text: "Cut response time from hours to minutes. The single biggest lever for improving lead conversion — and the easiest to fix with automation.",
  },
  {
    number: "02",
    title: "Team Discipline",
    text: "When follow-ups are automated and escalations are built in, discipline is no longer optional. Every rep knows what to do, and managers see when they don't.",
  },
  {
    number: "03",
    title: "Better Conversion",
    text: "Teams using Leadora see 30–50% improvement in lead-to-meeting conversion without spending more on lead generation. Same leads. Better results.",
  },
  {
    number: "04",
    title: "Zero Lead Leakage",
    text: "Every inquiry is logged, assigned, and followed up. If a rep goes quiet, Leadora escalates. No lead is ever silently dropped again.",
  },
];

export default function Outcomes() {
  const sectionRef = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".metric-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.07,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".metrics-grid",
            start: "top bottom",
            once: true,
          },
        }
      );
      gsap.fromTo(
        ".outcome-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".outcomes-list",
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
      id="outcomes"
      className="py-28 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-6">
          <div className="inline-block px-4 py-1.5 rounded-md bg-[#8051FF]/10 border border-[#8051FF]/15 text-[#8051FF] text-[11px] font-medium tracking-[0.15em] uppercase mb-6">
            Proven Results
          </div>
          <h2 className="font-display font-semibold text-white tracking-[-0.03em] mb-5 text-[clamp(30px,5vw,48px)] leading-[1.1]">
            Same Leads. <span className="text-[#8051FF]">Better Results.</span>
          </h2>
          <p className="font-body font-light text-[17px] text-[#6A7282] leading-relaxed">
            You don't need more leads. You need to stop wasting the ones you already have. These are the outcomes Leadora teams see.
          </p>
        </div>
        <div className="w-16 h-px bg-[#8051FF]/20 mx-auto mb-16" />

        {/* Metrics Grid */}
        <div className="metrics-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-24">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="metric-card group text-center p-6 rounded-lg bg-[#292919]/50 border border-white/[0.06] hover:shadow-[0_8px_32px_rgba(128,81,255,0.06)] transition-all duration-400 hover:-translate-y-1 hover:border-[#8051FF]/15"
            >
              <div className="font-display font-semibold text-[clamp(28px,4vw,40px)] leading-none mb-2 text-[#8051FF]">
                {m.value}
              </div>
              <div className="font-body font-semibold text-[13px] text-white mb-1 leading-snug">
                {m.label}
              </div>
              <div className="font-body text-[11px] text-[#6A7282] uppercase tracking-wider">
                {m.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Outcome details 2-col grid */}
        <div className="outcomes-list grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((o) => (
            <div
              key={o.number}
              className="outcome-item group flex gap-6 p-8 bg-[#292919]/50 rounded-lg border border-white/[0.06] hover:shadow-[0_8px_32px_rgba(128,81,255,0.06)] hover:-translate-y-1 transition-all duration-400 hover:border-[#8051FF]/15"
            >
              <div className="font-display font-semibold text-[36px] text-[#8051FF]/20 group-hover:text-[#8051FF]/40 transition-colors duration-400 leading-none mt-1 flex-shrink-0 select-none">
                {o.number}
              </div>
              <div>
                <h3 className="font-display font-semibold text-[24px] text-white mb-3 tracking-[-0.01em]">
                  {o.title}
                </h3>
                <p className="font-body font-light text-[15px] text-[#6A7282] leading-relaxed">
                  {o.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
