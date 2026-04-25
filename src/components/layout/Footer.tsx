"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0D0619] pt-24 pb-12 relative overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span className="font-display font-bold text-[28px] tracking-tight text-white">
                Leadora
              </span>
            </Link>
            <p className="font-body font-light text-[15px] text-white/50 leading-relaxed max-w-[240px]">
              Turn Every Lead Into Opportunity. Purpose-built for high-volume sales teams.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h4 className="font-body font-semibold text-white tracking-wider uppercase text-[12px]">Product</h4>
            <ul className="space-y-4">
              {["Features", "How It Works", "Outcomes", "Pricing"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="font-body text-[14px] text-white/40 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h4 className="font-body font-semibold text-white tracking-wider uppercase text-[12px]">Support</h4>
            <ul className="space-y-4">
              {["Contact", "Privacy Policy", "Terms of Service", "Documentation"].map((item) => (
                <li key={item}>
                  <Link href="/" className="font-body text-[14px] text-white/40 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <h4 className="font-body font-semibold text-white tracking-wider uppercase text-[12px]">Get Started</h4>
            <button className="w-full bg-gold hover:bg-gold-light text-plum-deep font-bold px-6 py-3 rounded-full text-[14px] transition-all duration-300">
              Book a Demo
            </button>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-[13px] text-white/30">
            © 2025 Leadora CRM. All rights reserved.
          </p>
          <p className="font-body text-[13px] text-white/30">
            Built for Real Estate & Sales Teams in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
