"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is Leadora only for real estate?",
    a: "Not at all. Leadora is purpose-built for any business that handles a high volume of incoming leads — real estate developers, builders, agencies, automobile dealerships, ed-tech companies, and B2B sales teams. If your revenue depends on following up with inquiries, Leadora is built for you.",
  },
  {
    q: "Can it work with my current team structure?",
    a: "Yes. Leadora adapts to your structure, not the other way around. Whether you have 3 salespeople or 300, whether they work by territory, project, or round-robin — you define the rules and Leadora enforces them. No restructuring required.",
  },
  {
    q: "How quickly can we go live?",
    a: "Most teams are fully live within 48–72 hours. We handle the entire onboarding: configuration, integrations, and team training. You don't need an IT team. You just need to show up for the kickoff call.",
  },
  {
    q: "Is training required for the sales team?",
    a: "Minimal. The salesperson interface is intentionally simple — they see their leads, their tasks, and what they need to do next. No complex dashboards. Training typically takes 30 minutes. Managers need slightly more, but it's still within a single session.",
  },
  {
    q: "Can workflows be customized for our process?",
    a: "Yes. You can define your own lead stages, SLA timelines, assignment rules, escalation logic, and notification preferences. Leadora gives you the framework — you configure it to match how your business actually works.",
  },
  {
    q: "How is this different from a generic CRM like Salesforce or Zoho?",
    a: "Generic CRMs are built for global enterprise workflows. Leadora is built specifically for high-volume lead follow-up in markets like India's real estate sector. That means auto-escalation is built-in, WhatsApp and Indian lead portals integrate natively, and the setup doesn't require a consultant or months of customization.",
  },
  {
    q: "What happens if a salesperson leaves the team?",
    a: "All their leads are automatically visible and can be instantly reassigned. Nothing is tied to a personal device or WhatsApp number. Data stays with the company — not the individual.",
  },
  {
    q: "Is our lead data secure?",
    a: "Yes. All data is encrypted at rest and in transit. Your lead database is private to your organization and never shared with other businesses. We follow industry-standard security practices and can provide details on our infrastructure on request.",
  },
];

function FAQItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-white/[0.08]">
      <button
        className="w-full py-6 flex items-start justify-between text-left gap-4 group"
        onClick={toggle}
      >
        <span className={`font-body font-medium text-[16px] md:text-[17px] leading-snug transition-colors duration-300 ${isOpen ? "text-gold" : "text-white group-hover:text-lavender"}`}>
          {q}
        </span>
        <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center mt-0.5 transition-all duration-400 ${isOpen ? "border-gold bg-gold/10 rotate-0" : "border-white/20 rotate-0 group-hover:border-lavender/50"}`}>
          {isOpen ? <Minus size={12} className="text-gold" /> : <Plus size={12} className="text-white/50" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-body font-light text-[15px] text-white/65 leading-relaxed pb-6 max-w-[720px]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28" style={{ background: "linear-gradient(180deg, #1A0D2E 0%, #2D1B4E 100%)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-lavender/10 border border-lavender/20 text-lavender text-[11px] font-medium tracking-[0.15em] uppercase mb-6">
            Common Questions
          </div>
          <h2 className="font-display font-semibold text-white tracking-[-0.02em] mb-5 text-[clamp(36px,5vw,60px)] leading-[1.08]">
            Questions We Get <span className="italic text-gold">Asked a Lot</span>
          </h2>
          <p className="font-body font-light text-[18px] text-white/55 leading-relaxed">
            Everything you need to know before your first conversation with us.
          </p>
        </div>
        <div className="w-16 h-px bg-gold/40 mx-auto mb-14" />

        <div>
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === idx}
              toggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>

        {/* Bottom prompt */}
        <div className="mt-14 text-center">
          <p className="font-body font-light text-[14px] text-white/35">
            Still have questions?{" "}
            <a href="https://wa.me/91" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline font-medium">
              Chat with us on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
