"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StickyMobileCTAProps {
  onOpenModal: () => void;
}

export default function StickyMobileCTA({ onOpenModal }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls past hero (approx 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 w-full z-[80] md:hidden"
        >
          <button 
            onClick={onOpenModal}
            className="w-full h-14 bg-[#8051FF] text-white font-semibold text-lg shadow-[0_-4px_20px_rgba(0,0,0,0.4)] active:scale-95 transition-transform"
          >
            Book Free Demo
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
