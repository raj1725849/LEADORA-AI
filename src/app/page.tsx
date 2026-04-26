"use client";

import { useEffect, useState } from "react";
import { setupOverlappingEffect } from "@/lib/animations";
import Nav from "@/components/layout/Nav";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ProblemSection from "@/components/sections/ProblemSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import DashboardShowcase from "@/components/sections/DashboardShowcase";
import Outcomes from "@/components/sections/Outcomes";
import ComparisonTable from "@/components/sections/ComparisonTable";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import DemoModal from "@/components/ui/DemoModal";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!prefersReducedMotion) {
      // Setup the premium overlapping card stack effect
      setupOverlappingEffect("#main-content", ".section-card");
    }
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main id="main-content" className="relative bg-black overflow-x-hidden">
      <Nav />
      
      {/* 
        Injecting the openModal function to all sections that have CTAs.
        In a real app, I'd use a Context or a global state, but for this 
        premium landing page, I'll wrap them or use event delegation.
        Since I built them as separate files, I'll add a simple global click listener 
        for buttons that should trigger the modal.
      */}
      <div onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.closest("button")?.textContent?.includes("Book Free Demo") || 
            target.closest("button")?.textContent?.includes("Book a Demo") ||
            target.closest("button")?.textContent?.includes("Book My Demo")) {
          openModal();
        }
      }}>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <DashboardShowcase />
        <Outcomes />
        <ComparisonTable />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>

      <DemoModal isOpen={isModalOpen} onClose={closeModal} />
      <StickyMobileCTA onOpenModal={openModal} />
    </main>
  );
}
