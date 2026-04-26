"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import { MapPin, LayoutPanelLeft, Activity, History, BellRing, Search, ShieldCheck, Smartphone } from "lucide-react";

const features = [
  {
    icon: MapPin,
    tag: "Routing",
    title: "Smart Lead Routing",
    text: "Auto-assign every inquiry by territory, project, team availability, or strict round-robin. Eliminate manual decisions and ensure no rep is overloaded while another sits idle.",
  },
  {
    icon: LayoutPanelLeft,
    tag: "Pipeline",
    title: "Pipeline Tracking",
    text: "See every lead's exact stage — new, contacted, negotiating, or stalled — in a real-time board. Managers get instant visibility without chasing anyone.",
  },
  {
    icon: Activity,
    tag: "Analytics",
    title: "Team Performance Analytics",
    text: "Compare response times, follow-up rates, and conversion ratios by rep or team. Replace gut feel with real data and identify top performers instantly.",
  },
  {
    icon: History,
    tag: "Reactivation",
    title: "Old Lead Reactivation",
    text: "Leadora surfaces leads dormant for 7, 14, or 30+ days automatically. Turn your existing lead pool into fresh opportunities — without spending another rupee on ads.",
  },
  {
    icon: BellRing,
    tag: "Automation",
    title: "Automated Reminders",
    text: "Follow-up tasks are created the moment a lead is assigned. If a rep misses one, Leadora sends alerts and escalates to their manager automatically.",
  },
  {
    icon: Search,
    tag: "Attribution",
    title: "Source Tracking",
    text: "Track where each lead came from — 99acres, Housing.com, Facebook, website, walk-in. Know which channel drives conversion, not just volume.",
  },
  {
    icon: ShieldCheck,
    tag: "Access",
    title: "Role-Based Access",
    text: "Managers see everything. Reps see only their own leads. Owners see the full picture. Granular permissions keep data clean and accountability clear.",
  },
  {
    icon: Smartphone,
    tag: "Mobile",
    title: "Mobile-Ready CRM",
    text: "Full CRM access on the go. Update lead status, log calls, and check tasks from any device. Built for sales reps who live on their phones.",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".feature-grid",
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
      id="features"
      className="py-28 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <div className="inline-block px-4 py-1.5 rounded-md bg-[#8051FF]/10 border border-[#8051FF]/15 text-[#8051FF] text-[11px] font-medium tracking-[0.15em] uppercase mb-6">
            Platform Capabilities
          </div>
          <h2 className="font-display font-semibold text-white tracking-[-0.03em] mb-5 text-[clamp(30px,5vw,48px)] leading-[1.1]">
            Everything Your Team Needs to <span className="text-[#8051FF]">Close More Deals</span>
          </h2>
          <p className="font-body font-light text-[17px] text-[#6A7282] leading-relaxed">
            Built for the way real estate and high-volume sales teams actually operate — not for how generic CRMs assume you work.
          </p>
        </div>

        <div className="w-16 h-px bg-[#8051FF]/20 mx-auto mb-16" />

        <div className="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card group relative bg-[#292919]/60 border border-white/[0.06] p-7 rounded-lg shadow-[0_2px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(128,81,255,0.08)] transition-all duration-500 hover:-translate-y-2 overflow-hidden hover:border-[#8051FF]/15"
            >
              {/* Tag */}
              <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#8051FF]/8 border border-[#8051FF]/10 text-[#8051FF] text-[10px] font-medium tracking-wider uppercase mb-5">
                {feature.tag}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-[#8051FF]/10 flex items-center justify-center mb-5 group-hover:bg-[#8051FF]/15 transition-colors duration-500">
                <feature.icon className="w-6 h-6 text-[#8051FF]" />
              </div>

              <h3 className="font-display font-semibold text-[20px] text-white mb-3 leading-snug tracking-[-0.01em]">
                {feature.title}
              </h3>
              <p className="font-body font-light text-[13.5px] text-[#6A7282] leading-relaxed">
                {feature.text}
              </p>

              {/* Hover bottom bar */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#8051FF] to-[#8051FF]/20 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
