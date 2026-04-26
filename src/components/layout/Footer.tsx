"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 relative overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8051FF]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[#8051FF] shadow-[0_0_8px_rgba(128,81,255,0.6)]" />
              <span className="font-display font-semibold text-[24px] tracking-[-0.03em] text-white">
                Leadora
              </span>
            </Link>
            <p className="font-body font-light text-[15px] text-[#6A7282] leading-relaxed max-w-[240px]">
              Turn Every Lead Into Opportunity. Purpose-built for high-volume sales teams.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h4 className="font-body font-semibold text-white/80 tracking-wider uppercase text-[12px]">Product</h4>
            <ul className="space-y-4">
              {["Features", "How It Works", "Outcomes", "Pricing"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="font-body text-[14px] text-[#6A7282] hover:text-[#8051FF] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h4 className="font-body font-semibold text-white/80 tracking-wider uppercase text-[12px]">Support</h4>
            <ul className="space-y-4">
              {["Contact", "Privacy Policy", "Terms of Service", "Documentation"].map((item) => (
                <li key={item}>
                  <Link href="/" className="font-body text-[14px] text-[#6A7282] hover:text-[#8051FF] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <h4 className="font-body font-semibold text-white/80 tracking-wider uppercase text-[12px]">Get Started</h4>
            <button className="w-full bg-[#8051FF] hover:bg-[#9B75FF] text-white font-semibold px-6 py-3 rounded-lg text-[14px] transition-all duration-300 hover:shadow-[0_0_20px_rgba(128,81,255,0.3)]">
              Book a Demo
            </button>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <p className="font-body text-[13px] text-[#6A7282]/60">
            © 2025 Leadora CRM. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="font-body text-[13px] text-[#6A7282]/60 hover:text-white transition-colors">Twitter</Link>
            <Link href="/" className="font-body text-[13px] text-[#6A7282]/60 hover:text-white transition-colors">LinkedIn</Link>
            <Link href="/" className="font-body text-[13px] text-[#6A7282]/60 hover:text-white transition-colors">Instagram</Link>
          </div>
        </div>
      </div>

      {/* BIG BRAND NAME LEADORA */}
      <div className="relative mt-auto pt-12 pb-4 select-none pointer-events-none overflow-hidden">
        <h2 className="text-[clamp(100px,25vw,400px)] font-display font-bold leading-none text-center tracking-tighter">
          <span className="bg-gradient-to-b from-white/[0.08] to-transparent bg-clip-text text-transparent">
            LEADORA
          </span>
        </h2>
        {/* Glow effect behind the big text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-[#8051FF]/[0.03] blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
