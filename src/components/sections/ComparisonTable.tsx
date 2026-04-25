"use client";

import { Check, X, Minus } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

type ColVal = { val: string; ok: boolean | "mid" };
type Row = { label: string; manual: ColVal; generic: ColVal; leadora: ColVal };

const rows: Row[] = [
  {
    label: "Lead Capture",
    manual: { val: "Manual / Excel", ok: false },
    generic: { val: "Partial automation", ok: "mid" },
    leadora: { val: "Automated from all sources", ok: true },
  },
  {
    label: "Auto Assignment",
    manual: { val: "Boss decides manually", ok: false },
    generic: { val: "Manual in CRM", ok: "mid" },
    leadora: { val: "Rule-based, instant", ok: true },
  },
  {
    label: "Follow-Up Reminders",
    manual: { val: "None", ok: false },
    generic: { val: "Manual setup", ok: "mid" },
    leadora: { val: "Automated + Escalation", ok: true },
  },
  {
    label: "Escalation System",
    manual: { val: "None", ok: false },
    generic: { val: "None", ok: false },
    leadora: { val: "Built-in, automatic", ok: true },
  },
  {
    label: "Manager Dashboard",
    manual: { val: "None", ok: false },
    generic: { val: "Limited", ok: "mid" },
    leadora: { val: "Real-time, complete", ok: true },
  },
  {
    label: "Old Lead Reactivation",
    manual: { val: "Never happens", ok: false },
    generic: { val: "Manual export/filter", ok: "mid" },
    leadora: { val: "Automated surfacing", ok: true },
  },
  {
    label: "Daily Reports",
    manual: { val: "Zero", ok: false },
    generic: { val: "Generic exports", ok: "mid" },
    leadora: { val: "Automated to managers", ok: true },
  },
  {
    label: "Built for Real Estate",
    manual: { val: "No", ok: false },
    generic: { val: "No", ok: false },
    leadora: { val: "Yes — purpose-built", ok: true },
  },
];


function Cell({ col }: { col: ColVal }) {
  if (col.ok === true) {
    return (
      <td className="py-5 px-6 text-center bg-violet/[0.04]">
        <div className="flex items-center justify-center gap-2">
          <Check size={14} className="text-gold flex-shrink-0" />
          <span className="text-[13px] font-body text-white/85 text-left">{col.val}</span>
        </div>
      </td>
    );
  }
  if (col.ok === "mid") {
    return (
      <td className="py-5 px-6 text-center">
        <div className="flex items-center justify-center gap-2">
          <Minus size={14} className="text-white/25 flex-shrink-0" />
          <span className="text-[13px] font-body text-white/40 text-left">{col.val}</span>
        </div>
      </td>
    );
  }
  return (
    <td className="py-5 px-6 text-center">
      <div className="flex items-center justify-center gap-2">
        <X size={14} className="text-white/20 flex-shrink-0" />
        <span className="text-[13px] font-body text-white/25 text-left">{col.val}</span>
      </div>
    </td>
  );
}

export default function ComparisonTable() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".comparison-row", {
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "table",
          start: "top 82%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="comparison"
      className="py-28"
      style={{ background: "linear-gradient(180deg, #1A0D2E 0%, #0D0619 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[11px] font-medium tracking-[0.15em] uppercase mb-6">
            How We Compare
          </div>
          <h2 className="font-display font-semibold text-white tracking-[-0.02em] mb-5 text-[clamp(36px,5vw,60px)] leading-[1.08]">
            Leadora vs. <span className="italic text-gold">The Alternatives</span>
          </h2>
          <p className="font-body font-light text-[18px] text-white/55 leading-relaxed">
            Most businesses outgrow their tools without realizing it. Here's an honest comparison.
          </p>
        </div>
        <div className="w-16 h-px bg-gold/40 mx-auto mb-14" />

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 px-6 text-left font-body font-medium text-[13px] text-white/40 uppercase tracking-wider w-[25%]">Feature</th>
                <th className="py-6 px-6 text-center font-body font-semibold text-[15px] text-white/40 w-[25%]">
                  Manual Process
                  <div className="text-[11px] font-light text-white/20 mt-1 tracking-normal normal-case">Excel, WhatsApp</div>
                </th>
                <th className="py-6 px-6 text-center font-body font-semibold text-[15px] text-white/40 w-[25%]">
                  Generic CRM
                  <div className="text-[11px] font-light text-white/20 mt-1 tracking-normal normal-case">Salesforce, Zoho</div>
                </th>
                <th className="py-6 px-6 text-center relative w-[25%]">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-plum-deep text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
                    Best Choice
                  </div>
                  <div className="font-display font-bold text-[24px] text-gold mt-2">Leadora</div>
                  <div className="text-[11px] font-body text-gold/50 mt-1">Purpose-built for your team</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={row.label}
                  className={`comparison-row border-b border-white/[0.05] ${idx % 2 === 0 ? "bg-white/[0.01]" : ""}`}
                >
                  <td className="py-5 px-6 font-body font-medium text-[14px] text-white/70">
                    {row.label}
                  </td>
                  <Cell col={row.manual} />
                  <Cell col={row.generic} />
                  <Cell col={row.leadora} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom nudge */}
        <div className="mt-14 text-center">
          <button className="bg-gold hover:bg-gold-light text-plum-deep font-bold px-10 py-4 rounded-full text-[15px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,168,83,0.3)]">
            Book Free Demo — See Leadora Live
          </button>
        </div>
      </div>
    </section>
  );
}
