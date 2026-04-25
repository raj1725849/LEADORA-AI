"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

export default function DashboardShowcase() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".dash-header", {
        y: 30, opacity: 0, duration: 0.9, ease: "power2.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 85%" },
      });
      gsap.from(".dash-mockup", {
        y: 60, opacity: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".dash-mockup", start: "top 80%" },
      });
      gsap.from(".dash-stat", {
        y: 20, opacity: 0, duration: 0.7, stagger: 0.12,
        scrollTrigger: { trigger: ".dash-stats", start: "top 85%" },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const pipelineData = [
    { stage: "New", count: 47, pct: 100, color: "bg-lavender/60" },
    { stage: "Contacted", count: 31, pct: 66, color: "bg-violet/70" },
    { stage: "Proposal", count: 18, pct: 38, color: "bg-gold/60" },
    { stage: "Negotiating", count: 9, pct: 19, color: "bg-gold" },
    { stage: "Closed", count: 4, pct: 9, color: "bg-green-400" },
  ];

  const teamData = [
    { name: "Arjun S.", rate: "94%", leads: 18, status: "top" },
    { name: "Priya K.", rate: "87%", leads: 15, status: "good" },
    { name: "Rohan M.", rate: "71%", leads: 12, status: "ok" },
    { name: "Divya R.", rate: "55%", leads: 9, status: "warn" },
  ];

  return (
    <section
      ref={containerRef}
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #2D1B4E 0%, #1A0D2E 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-violet/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="dash-header max-w-3xl mx-auto text-center mb-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-violet/20 border border-violet/30 text-lavender text-[11px] font-medium tracking-[0.15em] uppercase mb-6">
            Live Dashboard
          </div>
          <h2 className="font-display font-semibold text-white tracking-[-0.02em] mb-5 text-[clamp(36px,5vw,60px)] leading-[1.08]">
            See Everything. <span className="italic text-gold">Miss Nothing.</span>
          </h2>
          <p className="font-body font-light text-[18px] text-white/60 leading-relaxed">
            Leadora gives managers complete real-time visibility. No more chasing updates. No more end-of-day surprises.
          </p>
        </div>
        <div className="w-16 h-px bg-gold/40 mx-auto mb-16" />

        {/* Dashboard Mockup */}
        <div className="dash-mockup bg-[#0E0720] rounded-2xl border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Browser chrome */}
          <div className="h-10 bg-[#1A0D2E] border-b border-white/5 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
            </div>
            <div className="flex-1 mx-4">
              <div className="max-w-[200px] mx-auto h-5 bg-white/5 rounded-full flex items-center justify-center">
                <span className="text-[10px] text-white/20 font-mono">app.leadora.in/dashboard</span>
              </div>
            </div>
          </div>

          {/* Main layout */}
          <div className="flex">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-16 bg-[#12082A] border-r border-white/5 items-center py-6 gap-5">
              {["⊞","◈","◉","⊕","⊘"].map((icon, i) => (
                <div key={i} className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm ${i === 0 ? "bg-violet/30 text-lavender" : "text-white/20 hover:text-white/50"}`}>
                  {icon}
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8 space-y-6">
              {/* Top row KPIs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Leads Today", val: "47", delta: "+12%", up: true },
                  { label: "Avg Response", val: "11m", delta: "-43%", up: true },
                  { label: "Follow-Ups Due", val: "8", delta: "!", up: false },
                  { label: "Conv. Rate", val: "23%", delta: "+5pts", up: true },
                ].map((k) => (
                  <div key={k.label} className="bg-white/[0.04] rounded-xl p-4 border border-white/5">
                    <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{k.label}</p>
                    <div className="flex items-end gap-2">
                      <span className="font-display font-bold text-2xl text-white">{k.val}</span>
                      <span className={`text-[11px] font-medium mb-0.5 ${k.up ? "text-emerald-400" : "text-amber-400"}`}>{k.delta}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mid row — pipeline + team */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pipeline */}
                <div className="bg-white/[0.03] rounded-xl p-5 border border-white/5">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider">Lead Pipeline</p>
                    <span className="text-[10px] text-white/30">Live</span>
                  </div>
                  <div className="space-y-3">
                    {pipelineData.map((row) => (
                      <div key={row.stage} className="flex items-center gap-3">
                        <span className="text-[11px] text-white/40 w-20 flex-shrink-0">{row.stage}</span>
                        <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full ${row.color} rounded-full`} style={{ width: `${row.pct}%` }} />
                        </div>
                        <span className="text-[11px] text-white/50 w-6 text-right">{row.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team leaderboard */}
                <div className="bg-white/[0.03] rounded-xl p-5 border border-white/5">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider">Team Follow-Up Rate</p>
                    <span className="text-[10px] text-white/30">This week</span>
                  </div>
                  <div className="space-y-3">
                    {teamData.map((rep, i) => (
                      <div key={rep.name} className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-violet/20 flex items-center justify-center text-[10px] text-lavender flex-shrink-0">
                          {rep.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between mb-1">
                            <span className="text-[12px] text-white/70">{rep.name}</span>
                            <span className={`text-[11px] font-semibold ${
                              rep.status === "top" ? "text-emerald-400" :
                              rep.status === "good" ? "text-green-400" :
                              rep.status === "ok" ? "text-amber-400" : "text-red-400"
                            }`}>{rep.rate}</span>
                          </div>
                          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${
                              rep.status === "top" ? "bg-emerald-400" :
                              rep.status === "good" ? "bg-green-400" :
                              rep.status === "ok" ? "bg-amber-400" : "bg-red-400"
                            }`} style={{ width: rep.rate }} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom row — follow-up tasks */}
              <div className="bg-white/[0.03] rounded-xl p-5 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider">Pending Tasks</p>
                  <span className="text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">8 due today</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { name: "Rahul Gupta", action: "Call back — 2nd follow-up", time: "11:30 AM", urgent: true },
                    { name: "Meena Shah", action: "Share project brochure", time: "1:00 PM", urgent: false },
                    { name: "Vijay Patel", action: "Site visit confirmation", time: "3:00 PM", urgent: false },
                  ].map((task) => (
                    <div key={task.name} className={`p-3 rounded-lg border ${task.urgent ? "border-amber-400/20 bg-amber-400/5" : "border-white/5 bg-white/[0.02]"}`}>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="text-[12px] font-medium text-white/80">{task.name}</span>
                        {task.urgent && <span className="text-[9px] text-amber-400 border border-amber-400/30 px-1.5 py-0.5 rounded-full flex-shrink-0">Urgent</span>}
                      </div>
                      <p className="text-[11px] text-white/40 mb-1.5">{task.action}</p>
                      <p className="text-[10px] text-white/25">{task.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stat callouts */}
        <div className="dash-stats grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { val: "3×", label: "Faster Response Time", desc: "vs teams without Leadora" },
            { val: "0", label: "Leads Dropped", desc: "escalation prevents silent drops" },
            { val: "100%", label: "Manager Visibility", desc: "real-time without asking" },
          ].map((s) => (
            <div key={s.val} className="dash-stat text-center p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
              <div className="font-display font-bold text-[48px] text-gold leading-none mb-2">{s.val}</div>
              <div className="font-body font-semibold text-white text-[15px] mb-1">{s.label}</div>
              <div className="font-body text-[12px] text-white/35 uppercase tracking-widest">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
