"use client";

import { useEffect, useState } from "react";
import { gsap } from "@/lib/animations";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Outcomes", href: "#outcomes" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-xl border-b border-white/[0.06] py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-2 h-2 rounded-full bg-[#8051FF] shadow-[0_0_8px_rgba(128,81,255,0.6)]" />
          <span className="font-display font-semibold text-[24px] tracking-[-0.03em] text-white">
            Leadora
          </span>
        </Link>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="font-body text-[14px] font-medium text-[#6A7282] hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Action */}
        <div className="hidden lg:block">
          <button className="bg-[#8051FF] hover:bg-[#9B75FF] text-white font-semibold px-6 py-2.5 rounded-lg text-[13px] tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(128,81,255,0.4)]">
            Book a Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-8 lg:hidden animate-in fade-in duration-300">
          <button 
            className="absolute top-8 right-6 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="font-display font-semibold text-4xl text-white hover:text-[#8051FF] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <button className="mt-4 bg-[#8051FF] text-white font-semibold px-10 py-4 rounded-lg text-[16px] hover:shadow-[0_0_24px_rgba(128,81,255,0.4)] transition-all">
            Book a Demo
          </button>
        </div>
      )}
    </nav>
  );
}
