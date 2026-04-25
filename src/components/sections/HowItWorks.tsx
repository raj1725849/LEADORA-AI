"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Lead Captured Instantly",
    text: "Every inquiry from web forms, WhatsApp, Facebook, 99acres, phone — flows into Leadora in real time. Zero manual data entry. Nothing falls through.",
    tag: "Capture",
  },
  {
    number: "02",
    title: "Smart Auto Assignment",
    text: "Leadora instantly routes each lead to the right salesperson. Rules based on project, territory, availability, or round-robin fairness — enforced automatically.",
    tag: "Assignment",
  },
  {
    number: "03",
    title: "Follow-Up Tasks Triggered",
    text: "The moment a lead is assigned, a follow-up task is created with a deadline. The rep knows exactly what to do, when to do it, and what's next.",
    tag: "Automation",
  },
  {
    number: "04",
    title: "Escalation if Ignored",
    text: "Miss a follow-up SLA and Leadora escalates to the manager automatically. No lead is silently dropped. No rep can hide an ignored inquiry.",
    tag: "Accountability",
  },
  {
    number: "05",
    title: "Manager Visibility Dashboard",
    text: "Live dashboards give managers a real-time view of every lead, every stage, every rep's activity. No more asking 'what happened to that lead?'",
    tag: "Visibility",
  },
  {
    number: "06",
    title: "Better Conversion Potential",
    text: "With every lead followed up, every stage tracked, and escalation enforced — conversion rates improve on the exact same lead volume you already have.",
    tag: "Results",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".step-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".steps-grid",
            start: "top bottom",
            once: true,
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1A0D2E 0%, #2D1B4E 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lavender/5 blur-[80px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[11px] font-medium tracking-[0.15em] uppercase mb-6">
            The Leadora Workflow
          </div>
          <h2 className="font-display font-semibold text-white tracking-[-0.02em] mb-5 text-[clamp(36px,5vw,60px)] leading-[1.08]">
            How Leadora <span className="italic text-gold">Fixes the Entire Flow</span>
          </h2>
          <p className="font-body font-light text-[18px] text-white/60 leading-relaxed">
            From inquiry to conversion — every step is automated, tracked, and accountable. No manual effort required.
          </p>
        </div>
        <div className="w-16 h-px bg-gold/40 mx-auto mb-16" />

        {/* Steps Grid */}
        <div className="steps-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="step-card group relative p-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-gold/20 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Step number bg */}
              <div className="absolute top-4 right-5 font-display font-bold text-[64px] leading-none text-white/[0.04] select-none group-hover:text-white/[0.07] transition-colors duration-500">
                {step.number}
              </div>

              {/* Tag */}
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-medium tracking-wider uppercase mb-5">
                {step.tag}
              </div>

              {/* Number badge */}
              <div className="w-10 h-10 rounded-full border-2 border-gold/40 flex items-center justify-center font-display font-bold text-gold text-lg mb-6 group-hover:border-gold group-hover:shadow-[0_0_12px_rgba(212,168,83,0.3)] transition-all duration-500">
                {idx + 1}
              </div>

              <h3 className="font-display font-semibold text-[22px] text-white mb-4 leading-snug">
                {step.title}
              </h3>
              <p className="font-body font-light text-[14px] text-white/60 leading-relaxed">
                {step.text}
              </p>

              {/* Connector line (visual only) */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-gold/50 to-transparent transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-16 text-center">
          <p className="font-body font-light text-[15px] text-white/40">
            The whole system runs on autopilot — <span className="text-white/70 font-medium">so your team can focus on closing, not chasing.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
