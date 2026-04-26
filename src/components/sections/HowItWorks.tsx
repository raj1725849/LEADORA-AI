"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bell, 
  UserCheck, 
  Zap, 
  MessageCircle, 
  AlertTriangle, 
  BarChart3, 
  Trophy,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

const workflowSteps = [
  {
    id: "lead-arrives",
    title: "New Lead Captured Instantly",
    description: "Every inquiry from your ads, website, or social media is captured in real-time. No more manual entry or copy-pasting from spreadsheets.",
    icon: Bell,
    tag: "CAPTURE"
  },
  {
    id: "auto-qual",
    title: "Automatically Organized & Qualified",
    description: "Our AI immediately categorizes the lead by project interest, budget, and intent. Your database stays clean and actionable from second one.",
    icon: UserCheck,
    tag: "INTELLIGENCE"
  },
  {
    id: "smart-routing",
    title: "Sent to the Right Salesperson in Seconds",
    description: "Leadora routes leads based on project expertise, current workload, or territory. The right rep gets the notification while the lead is still hot.",
    icon: Zap,
    tag: "ROUTING"
  },
  {
    id: "whatsapp-followup",
    title: "Immediate Follow-Up Starts Automatically",
    description: "An instant, personalized WhatsApp message is sent to the prospect. You engage before they even have a chance to look at a competitor.",
    icon: MessageCircle,
    tag: "ENGAGEMENT"
  },
  {
    id: "escalation",
    title: "No Lead Gets Forgotten",
    description: "If a salesperson doesn't respond within your set SLA, Leadora automatically escalates it to the manager. Accountability is built into the system.",
    icon: AlertTriangle,
    tag: "ACCOUNTABILITY"
  },
  {
    id: "dashboard",
    title: "Managers See Everything in Real Time",
    description: "Live dashboards track every response time and conversion rate. Identify bottlenecks and top performers without asking for status reports.",
    icon: BarChart3,
    tag: "VISIBILITY"
  },
  {
    id: "conversion",
    title: "More Leads Turn Into Revenue",
    description: "By closing the execution gap, you extract maximum value from your marketing spend. Turn your lead database into a predictable revenue engine.",
    icon: Trophy,
    tag: "RESULTS"
  }
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section on desktop
      if (window.innerWidth >= 1024) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${workflowSteps.length * 100}%`,
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const step = Math.min(
              Math.floor(self.progress * workflowSteps.length),
              workflowSteps.length - 1
            );
            setActiveStep(step);
          }
        });
      } else {
        // Mobile scroll detection
        workflowSteps.forEach((_, i) => {
          ScrollTrigger.create({
            trigger: `.mobile-trigger-${i}`,
            start: "top 50%",
            end: "bottom 50%",
            onToggle: (self) => {
              if (self.isActive) setActiveStep(i);
            }
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const VisualModule = ({ step, active }: { step: number; active: boolean }) => {
    switch (step) {
      case 0:
        return (
          <div className="relative">
            <div className={`absolute inset-0 bg-[#8051FF]/20 blur-3xl rounded-full transition-opacity duration-1000 ${active ? "opacity-100 animate-pulse" : "opacity-0"}`} />
            <div className="relative bg-[#292919] border border-[#8051FF]/30 p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-[320px] mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-full bg-[#8051FF]/10 flex items-center justify-center">
                  <Bell className="text-[#8051FF]" size={20} />
                </div>
                <div className="px-2 py-1 rounded bg-[#8051FF]/20 text-[#8051FF] text-[10px] font-bold">NEW INQUIRY</div>
              </div>
              <div className="space-y-3">
                <div className="h-4 w-3/4 bg-white/10 rounded" />
                <div className="h-3 w-1/2 bg-white/5 rounded" />
                <div className="pt-4">
                  <div className="h-2 w-full bg-[#8051FF]/20 rounded-full overflow-hidden">
                    <div className="h-full bg-[#8051FF] w-full animate-[loading_2s_linear_infinite]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="relative bg-[#292919] border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-[360px] mx-auto">
            <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <ShieldCheck className="text-emerald-500" size={16} />
              </div>
              <span className="text-white text-sm font-medium">Auto-Qualification Engine</span>
            </div>
            <div className="space-y-4">
              {[
                { label: "Lead Score", val: "High Intent", color: "text-emerald-400" },
                { label: "Interest", val: "3BHK Luxury", color: "text-white/80" },
                { label: "Budget", val: "₹2.5Cr - ₹3.5Cr", color: "text-white/80" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                  <span className="text-[11px] text-[#6A7282] uppercase tracking-wider">{item.label}</span>
                  <span className={`text-xs font-semibold ${item.color}`}>{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="relative w-full aspect-square max-w-[300px] mx-auto flex items-center justify-center">
            <div className={`absolute w-full h-full border-2 border-dashed border-[#8051FF]/20 rounded-full transition-transform duration-[20s] linear infinite ${active ? "animate-[spin_15s_linear_infinite]" : ""}`} />
            <div className="relative z-10 grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`relative p-4 rounded-xl border transition-all duration-500 ${i === 3 && active ? "bg-[#8051FF] border-[#8051FF] shadow-[0_0_30px_rgba(128,81,255,0.4)] scale-110" : "bg-[#292919] border-white/10 opacity-40 scale-90"}`}>
                  <div className={`w-8 h-8 rounded-full mb-2 flex items-center justify-center ${i === 3 && active ? "bg-white/20" : "bg-white/5"}`}>
                    <UserCheck size={16} className="text-white" />
                  </div>
                  <div className={`h-1.5 w-10 rounded ${i === 3 && active ? "bg-white/40" : "bg-white/5"}`} />
                  {i === 3 && active && (
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <Zap size={12} className="text-[#8051FF]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-[#292919] border border-white/10 rounded-3xl shadow-2xl w-full max-w-[280px] mx-auto overflow-hidden">
            <div className="bg-[#075E54] p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20" />
              <div>
                <div className="text-white text-xs font-semibold">Leadora Business</div>
                <div className="text-white/60 text-[9px]">Online</div>
              </div>
            </div>
            <div className="p-4 space-y-4 h-[240px] bg-[#E5DDD5]/5">
              <div className="bg-white/10 rounded-lg p-3 max-w-[85%] self-start border border-white/10">
                <p className="text-[11px] text-white/80">Hello Arjun! I noticed you're interested in our Luxury Project...</p>
              </div>
              <div className={`bg-[#8051FF]/20 rounded-lg p-3 max-w-[85%] ml-auto border border-[#8051FF]/30 transition-all duration-1000 ${active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 size={10} className="text-[#8051FF]" />
                  <span className="text-[9px] text-[#8051FF] font-bold uppercase tracking-tighter">Automated Message</span>
                </div>
                <p className="text-[11px] text-white/90">Sent instantly.</p>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="relative">
            <div className={`absolute inset-0 bg-red-500/10 blur-3xl transition-opacity duration-1000 ${active ? "opacity-100" : "opacity-0"}`} />
            <div className="relative bg-[#292919] border border-red-500/30 p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-[320px] mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center ${active ? "animate-bounce" : ""}`}>
                  <AlertTriangle className="text-red-500" size={20} />
                </div>
                <div>
                  <div className="text-red-500 text-[10px] font-bold tracking-widest uppercase">SLA BREACH</div>
                  <div className="text-white text-base font-semibold">No Response</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-white/60 text-xs">Manager Notified</span>
                  <div className={`w-2 h-2 rounded-full bg-[#8051FF] ${active ? "animate-ping" : ""}`} />
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="bg-[#292919] border border-white/10 p-5 md:p-6 rounded-2xl shadow-2xl w-full max-w-[380px] mx-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="text-white text-sm font-semibold">Manager Control Center</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#8051FF]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                <div className="text-[9px] text-[#6A7282] uppercase tracking-widest mb-1">Avg Response</div>
                <div className="text-xl font-bold text-[#8051FF]">4.2m</div>
              </div>
              <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                <div className="text-[9px] text-[#6A7282] uppercase tracking-widest mb-1">Conv. Rate</div>
                <div className="text-xl font-bold text-emerald-400">+28%</div>
              </div>
            </div>
            <div className="h-24 bg-black/40 rounded-xl border border-white/5 p-3 flex items-end gap-2">
              {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                <div key={i} className="flex-1 bg-[#8051FF]/20 rounded-t-sm relative overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-[#8051FF] transition-all duration-1000" style={{ height: active ? `${h}%` : '0%' }} />
                </div>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="relative">
            <div className={`absolute inset-0 bg-emerald-500/10 blur-[80px] transition-opacity duration-1000 ${active ? "opacity-100" : "opacity-0"}`} />
            <div className="relative bg-[#292919] border border-emerald-500/30 p-8 rounded-3xl shadow-2xl text-center w-full max-w-[320px] mx-auto">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-emerald-500/20">
                <Trophy className="text-emerald-500" size={32} />
              </div>
              <h4 className="text-white text-xl font-bold mb-1">Deal Closed</h4>
              <p className="text-[#6A7282] text-xs mb-6">System automation completed.</p>
              <div className="bg-black/40 py-3 px-4 rounded-2xl border border-emerald-500/10 inline-flex flex-col items-center">
                <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-[0.2em] mb-1">ROI GENERATED</span>
                <span className="text-2xl font-display font-bold text-white tracking-tighter">₹4,25,000</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="how-it-works"
      className="relative bg-black overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#8051FF]/[0.02] blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Desktop Layout (Split Sticky) */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20 min-h-screen">
          
          {/* LEFT SIDE: Sticky Animated Text Stack */}
          <div className="relative py-32 flex flex-col justify-center">
            <div className="sticky top-[30%]">
              <div className="inline-block px-4 py-1.5 rounded-md bg-[#8051FF]/10 border border-[#8051FF]/20 text-[#8051FF] text-[11px] font-medium tracking-[0.15em] uppercase mb-12">
                Leadora Automation Workflow
              </div>

              <div className="relative h-[400px]">
                <AnimatePresence mode="wait">
                  {workflowSteps.map((step, idx) => (
                    activeStep === idx && (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute inset-0"
                      >
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-14 h-14 rounded-xl bg-[#8051FF] text-white flex items-center justify-center shadow-[0_0_24px_rgba(128,81,255,0.4)]">
                            <step.icon size={28} />
                          </div>
                          <span className="text-[14px] font-mono tracking-[0.3em] text-[#8051FF]">
                            PHASE 0{idx + 1}
                          </span>
                        </div>
                        
                        <h3 className="font-display font-semibold text-5xl text-white mb-8 tracking-tight leading-[1.05]">
                          {step.title}
                        </h3>
                        
                        <p className="font-body font-light text-[20px] text-[#6A7282] leading-relaxed max-w-lg mb-10">
                          {step.description}
                        </p>

                        <div className="flex items-center gap-4 text-[#8051FF]/60 font-medium tracking-widest text-[11px] uppercase">
                          <div className="w-12 h-[1px] bg-[#8051FF]/30" />
                          <span>System Logic Active</span>
                          <ArrowRight size={14} className="animate-pulse" />
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>

              {/* Progress Bar (Custom) */}
              <div className="mt-12 flex gap-3">
                {workflowSteps.map((_, i) => (
                  <div 
                    key={i}
                    className={`h-1.5 transition-all duration-500 rounded-full ${activeStep === i ? "w-12 bg-[#8051FF]" : "w-4 bg-white/10"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Sticky Command Center Visuals */}
          <div className="relative flex items-center justify-center">
            <div className="sticky top-0 h-screen flex items-center justify-center w-full">
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                {workflowSteps.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center ${activeStep === idx ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10 pointer-events-none"}`}
                  >
                    <VisualModule step={idx} active={activeStep === idx} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (Vertical Timeline) */}
        <div className="lg:hidden py-20 space-y-32">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-md bg-[#8051FF]/10 border border-[#8051FF]/20 text-[#8051FF] text-[11px] font-medium tracking-[0.15em] uppercase mb-6">
              Leadora Workflow
            </div>
            <h2 className="font-display font-semibold text-white text-3xl tracking-tight">How it works</h2>
          </div>

          {workflowSteps.map((step, idx) => (
            <div key={step.id} className={`mobile-trigger-${idx} space-y-10`}>
              <div className={`transition-all duration-700 ${activeStep === idx ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4"}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${activeStep === idx ? "bg-[#8051FF] text-white" : "bg-white/5 text-white/40"}`}>
                    <step.icon size={22} />
                  </div>
                  <span className="text-[12px] font-mono tracking-widest text-[#8051FF]">PHASE 0{idx + 1}</span>
                </div>
                
                <h3 className="font-display font-semibold text-3xl text-white mb-4 leading-tight">{step.title}</h3>
                <p className="font-body font-light text-base text-[#6A7282] leading-relaxed mb-8">{step.description}</p>
              </div>

              {/* Mobile Visual */}
              <div className={`transition-all duration-1000 delay-100 flex justify-center ${activeStep === idx ? "opacity-100 scale-100" : "opacity-20 scale-90"}`}>
                <div className="w-full max-w-[320px]">
                  <VisualModule step={idx} active={activeStep === idx} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
