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
      className="py-28 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-violet/10 border border-violet/20 text-violet text-[11px] font-medium tracking-[0.15em] uppercase mb-6">
            Platform Capabilities
          </div>
          <h2 className="font-display font-semibold text-plum-deep tracking-[-0.02em] mb-5 text-[clamp(36px,5vw,60px)] leading-[1.08]">
            Everything Your Team Needs to <span className="italic text-gold">Close More Deals</span>
          </h2>
          <p className="font-body font-light text-[18px] text-text-mid leading-relaxed">
            Built for the way real estate and high-volume sales teams actually operate — not for how generic CRMs assume you work.
          </p>
        </div>

        <div className="w-16 h-px bg-gold/40 mx-auto mb-16" />

        <div className="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card group relative bg-white border border-plum/[0.06] p-7 rounded-2xl shadow-[0_2px_16px_rgba(45,27,78,0.06)] hover:shadow-[0_12px_40px_rgba(45,27,78,0.12)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Tag */}
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-violet/8 border border-violet/10 text-violet text-[10px] font-medium tracking-wider uppercase mb-5">
                {feature.tag}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-violet/5 flex items-center justify-center mb-5 group-hover:bg-violet/10 transition-colors duration-500">
                <feature.icon className="w-6 h-6 text-lavender" />
              </div>

              <h3 className="font-display font-semibold text-[20px] text-plum-deep mb-3 leading-snug">
                {feature.title}
              </h3>
              <p className="font-body font-light text-[13.5px] text-text-mid leading-relaxed">
                {feature.text}
              </p>

              {/* Hover bottom bar */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-gold to-gold/20 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
