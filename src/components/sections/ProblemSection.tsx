"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";
import { 
  Bell, 
  Clock, 
  Search, 
  Layers, 
  TrendingDown, 
  AlertCircle,
  Zap,
  MousePointer2,
  Share2,
  Target
} from "lucide-react";

const problems = [
  {
    id: "missed-leads",
    title: "Missed Leads",
    subtitle: "The Silent Growth Killer",
    description: "Potential customers go cold when nobody responds fast enough. Every minute of silence is a lead lost to a competitor who was faster.",
    icon: Bell,
    stat: "60%",
    statLabel: "Leads ignored",
    color: "from-[#8051FF] to-[#6B3FA0]",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-[#8051FF]/5 rounded-full blur-3xl animate-pulse" />
        <div className="relative z-10 grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`w-12 h-12 rounded-lg flex items-center justify-center border ${i > 2 ? 'border-red-500/30 bg-red-500/10' : 'border-white/10 bg-white/5'}`}>
              <Bell className={`w-5 h-5 ${i > 2 ? 'text-red-400 animate-bounce' : 'text-white/20'}`} />
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "slow-response",
    title: "Slow Response",
    subtitle: "Speed is the New Currency",
    description: "A prospect not reached within 5 minutes is 21× less likely to convert. Most teams take hours or days, essentially flushing marketing budget away.",
    icon: Clock,
    stat: "21×",
    statLabel: "Lower conversion",
    color: "from-[#8051FF] to-[#5B3FBF]",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border-2 border-white/5 flex items-center justify-center relative">
          <div className="absolute inset-0 border-t-2 border-[#8051FF] rounded-full animate-[spin_3s_linear_infinite]" />
          <Clock className="w-16 h-16 text-[#8051FF]" />
          <div className="absolute -bottom-4 bg-red-500/20 border border-red-500/40 px-3 py-1 rounded-md text-[10px] text-red-300 font-mono">
            DELAY: 45:00 MIN
          </div>
        </div>
      </div>
    )
  },
  {
    id: "poor-followup",
    title: "Poor Follow-Up",
    subtitle: "Wealth is in the Follow-up",
    description: "80% of sales require 5 follow-up calls. Yet 44% of salespeople give up after just one. You're leaving millions on the table by forgetting.",
    icon: Target,
    stat: "44%",
    statLabel: "Give up early",
    color: "from-[#8051FF] to-[#9B75FF]",
    visual: (
      <div className="relative w-full h-full flex flex-col items-center justify-center space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`w-64 h-12 rounded-lg border flex items-center px-4 space-x-3 ${i === 3 ? 'border-red-500/30 bg-red-500/5' : 'border-white/10 bg-white/5 opacity-40'}`}>
            <div className={`w-2 h-2 rounded-full ${i === 3 ? 'bg-red-500 animate-ping' : 'bg-green-500'}`} />
            <div className="h-2 w-32 bg-white/10 rounded" />
            <div className="ml-auto text-[10px] text-white/40">{i === 3 ? "MISSED" : "DONE"}</div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "no-visibility",
    title: "No Visibility",
    subtitle: "Managing in the Dark",
    description: "Without a central dashboard, you have no idea which reps are performing or where leads are leaking. You can't fix what you can't see.",
    icon: Search,
    stat: "0%",
    statLabel: "Real-time data",
    color: "from-[#8051FF] to-[#5B3FBF]",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-full max-w-[280px] aspect-video rounded-lg bg-white/5 border border-white/10 p-4 overflow-hidden relative group">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center">
            <Search className="w-12 h-12 text-white/20 animate-pulse" />
          </div>
          <div className="space-y-3">
            <div className="h-4 w-full bg-white/10 rounded" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-12 bg-white/5 rounded" />
              <div className="h-12 bg-white/5 rounded" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "scattered-systems",
    title: "Scattered Systems",
    subtitle: "The Complexity Tax",
    description: "WhatsApp, Excel, and sticky notes don't talk to each other. Information gets lost in the gaps, creating chaos for your team and your customers.",
    icon: Layers,
    stat: "3×",
    statLabel: "Operational drag",
    color: "from-[#8051FF] to-[#6B3FA0]",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-40 h-40">
          <Share2 className="absolute top-0 left-0 w-8 h-8 text-[#8051FF]/40" />
          <MousePointer2 className="absolute bottom-0 right-0 w-8 h-8 text-[#8051FF]/40" />
          <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-[#8051FF]" />
          <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
        </div>
      </div>
    )
  },
  {
    id: "revenue-leakage",
    title: "Revenue Leakage",
    subtitle: "The Invisible Drain",
    description: "Old leads are often the most valuable, but they're the first to be forgotten. You paid for those inquiries—stop letting them evaporate.",
    icon: TrendingDown,
    stat: "₹∞",
    statLabel: "Potential Loss",
    color: "from-[#8051FF] to-red-600",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-full max-w-[300px] h-32 relative">
          <svg viewBox="0 0 300 100" className="w-full h-full">
            <path 
              d="M0 20 L50 25 L100 60 L150 40 L200 80 L250 95 L300 98" 
              fill="none" 
              stroke="url(#grad-decline)" 
              strokeWidth="3"
            />
            <defs>
              <linearGradient id="grad-decline" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8051FF" />
                <stop offset="100%" stopColor="#EF4444" />
              </linearGradient>
            </defs>
          </svg>
          <AlertCircle className="absolute bottom-0 right-0 w-8 h-8 text-red-500 animate-bounce" />
        </div>
      </div>
    )
  }
];

export default function ProblemSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length === 0) return;

      // --- PHASE 1: Header entrance (before pin) ---
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          }
        }
      );

      // Deck fades in slightly after header
      gsap.fromTo(deckRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 60%",
            end: "top 10%",
            scrub: 1,
          }
        }
      );

      // --- PHASE 2: Pinned card deck animation ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: `+=${cards.length * 120}%`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        }
      });

      // Header fades out as cards start cycling
      tl.to(headerRef.current, {
        opacity: 0,
        y: -80,
        duration: 0.6,
        ease: "power2.inOut"
      }, 0);

      // Initial card deck state
      cards.forEach((card, i) => {
        if (i === 0) {
          gsap.set(card, { y: 0, scale: 1, opacity: 1, zIndex: cards.length });
        } else {
          gsap.set(card, { 
            y: 40 + (i * 18), 
            scale: 1 - (i * 0.04), 
            opacity: Math.max(0, 1 - (i * 0.25)),
            zIndex: cards.length - i 
          });
        }
      });

      // Set first dot active
      gsap.set("#dot-0", { backgroundColor: "rgba(128, 81, 255, 1)" });

      // Card transitions — one at a time
      const cardStart = 0.4;

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        const nextCard = cards[i + 1];
        const furtherCards = cards.slice(i + 2);
        const t = cardStart + i;

        // Current card exits upward
        tl.to(card, {
          y: -window.innerHeight * 0.6,
          opacity: 0,
          scale: 0.92,
          duration: 1,
          ease: "power2.inOut"
        }, t);

        // Next card rises into primary position
        if (nextCard) {
          tl.to(nextCard, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut"
          }, t);
        }

        // Shift remaining deck cards up
        furtherCards.forEach((fCard, fi) => {
          tl.to(fCard, {
            y: 40 + (fi * 18),
            scale: 1 - ((fi + 1) * 0.04),
            opacity: Math.max(0, 1 - ((fi + 1) * 0.25)),
            duration: 1,
            ease: "power2.inOut"
          }, t);
        });

        // Progress dots
        tl.to(`#dot-${i}`, {
          backgroundColor: "rgba(128, 81, 255, 0.3)",
          duration: 0.4,
        }, t);
        tl.to(`#dot-${i + 1}`, {
          backgroundColor: "rgba(128, 81, 255, 1)",
          duration: 0.4,
        }, t);
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef}>
      {/* ── Transition Zone: Visual breathing space ── */}
      <div className="relative z-20 py-24 md:py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8051FF]/15 to-transparent" />
        </div>
      </div>

      {/* ── Pinned Section ── */}
      <section
        ref={pinRef}
        id="problem"
        className="relative min-h-screen bg-black overflow-hidden"
      >
        {/* Ambient Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#8051FF]/[0.03] blur-[120px] rounded-full" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#8051FF]/[0.02] blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 h-screen w-full flex flex-col items-center justify-center">
          
          {/* Header */}
          <div ref={headerRef} className="absolute top-12 md:top-20 text-center z-50 px-6 pointer-events-none w-full max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#8051FF]/10 border border-[#8051FF]/20 text-[#9B75FF] text-[10px] font-medium tracking-[0.2em] uppercase mb-4">
              <AlertCircle className="w-3 h-3" />
              Revenue Leakage
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold text-white tracking-[-0.03em] mb-4">
              The Problems <span className="text-[#8051FF]">We Fix</span>
            </h2>
            <p className="text-[#6A7282] text-sm md:text-base font-light max-w-xl mx-auto">
              Most businesses lose more revenue through execution gaps than marketing failures.
            </p>
          </div>

          {/* Deck */}
          <div ref={deckRef} className="relative w-full max-w-6xl px-4 md:px-10 h-[500px] md:h-[600px] mt-28 md:mt-4">
            {problems.map((problem, index) => (
              <div
                key={problem.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="absolute inset-0 w-full h-full flex items-center justify-center p-2 md:p-0 will-change-transform"
              >
                <div className="w-full h-full bg-[#292919] border border-white/[0.08] rounded-xl md:rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
                  
                  {/* Content Side */}
                  <div className="flex-[1.2] p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
                    <problem.icon className="absolute -right-10 -bottom-10 w-64 h-64 text-white/[0.02] -rotate-12 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center text-white shadow-lg shadow-[#8051FF]/20`}>
                          <problem.icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="text-[#8051FF]/70 text-xs font-mono tracking-widest uppercase">
                            {problem.subtitle}
                          </h4>
                          <h3 className="text-3xl md:text-5xl font-semibold text-white mt-1 tracking-[-0.02em]">
                            {problem.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-[#6A7282] text-base md:text-lg leading-relaxed mb-10 font-light max-w-xl">
                        {problem.description}
                      </p>

                      <div className="grid grid-cols-2 gap-8 items-end max-w-sm">
                        <div>
                          <div className="text-4xl md:text-6xl font-semibold text-white mb-2 tracking-tighter">
                            {problem.stat}
                          </div>
                          <div className="text-[10px] md:text-xs text-[#6A7282] uppercase tracking-[0.2em] font-medium">
                            {problem.statLabel}
                          </div>
                        </div>
                        <div className="pb-3">
                          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${problem.color} rounded-full`}
                              style={{ width: index % 2 === 0 ? '85%' : '65%' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className="flex-1 bg-black/30 relative overflow-hidden flex items-center justify-center p-8 border-t md:border-t-0 md:border-l border-white/[0.06]">
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                    <div className="relative z-10 w-full h-full flex items-center justify-center scale-90 md:scale-110">
                      {problem.visual}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-8 flex items-center gap-6 z-50">
            <div className="flex gap-2">
              {problems.map((_, i) => (
                <div 
                  key={i} 
                  className="w-1.5 h-1.5 rounded-full bg-white/10 transition-colors duration-500" 
                  id={`dot-${i}`}
                />
              ))}
            </div>
            <div className="text-[9px] text-[#6A7282]/50 uppercase tracking-[0.4em] animate-pulse">
              Scroll to explore
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
