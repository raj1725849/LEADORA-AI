"use client";

import { useState } from "react";
import { X, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    city: "",
    team_size: "1-5",
    monthly_leads: "Under 100",
    current_tool: "Excel/WhatsApp",
    timeline: "ASAP",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: window.location.hostname, // Track where the lead came from
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-[560px] bg-[#292919] border border-white/[0.08] rounded-xl p-8 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {!isSubmitted ? (
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-semibold text-[28px] text-white mb-2 tracking-[-0.02em]">
                    Book Your Free Demo
                  </h3>
                  <p className="font-body font-light text-[15px] text-[#6A7282]">
                    Help us understand your setup so we can show you exactly how Leadora fits.
                  </p>
                </div>

                {error && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="font-body text-sm text-red-200">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input 
                        required
                        type="text"
                        placeholder="Full Name *"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-5 py-4 text-white font-body text-[15px] focus:outline-none focus:border-[#8051FF]/50 transition-colors placeholder:text-white/25"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      <input 
                        required
                        type="tel"
                        placeholder="Phone / WhatsApp *"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-5 py-4 text-white font-body text-[15px] focus:outline-none focus:border-[#8051FF]/50 transition-colors placeholder:text-white/25"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input 
                        required
                        type="text"
                        placeholder="Company Name *"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-5 py-4 text-white font-body text-[15px] focus:outline-none focus:border-[#8051FF]/50 transition-colors placeholder:text-white/25"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                      <input 
                        required
                        type="text"
                        placeholder="City *"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-5 py-4 text-white font-body text-[15px] focus:outline-none focus:border-[#8051FF]/50 transition-colors placeholder:text-white/25"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="w-full h-px bg-white/[0.06]" />

                  {/* Qualification Info */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[12px] uppercase tracking-wider text-[#6A7282] ml-1">Team Size</label>
                        <select 
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-5 py-4 text-white font-body text-[15px] focus:outline-none focus:border-[#8051FF]/50 transition-colors appearance-none"
                          value={formData.team_size}
                          onChange={(e) => setFormData({...formData, team_size: e.target.value})}
                        >
                          <option value="1-5">1 - 5 Reps</option>
                          <option value="6-15">6 - 15 Reps</option>
                          <option value="16-30">16 - 30 Reps</option>
                          <option value="30+">30+ Reps</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[12px] uppercase tracking-wider text-[#6A7282] ml-1">Leads Per Month</label>
                        <select 
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-5 py-4 text-white font-body text-[15px] focus:outline-none focus:border-[#8051FF]/50 transition-colors appearance-none"
                          value={formData.monthly_leads}
                          onChange={(e) => setFormData({...formData, monthly_leads: e.target.value})}
                        >
                          <option value="Under 100">Under 100 leads</option>
                          <option value="100-500">100 - 500 leads</option>
                          <option value="500-2000">500 - 2,000 leads</option>
                          <option value="2000+">2,000+ leads</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[12px] uppercase tracking-wider text-[#6A7282] ml-1">Current Setup</label>
                        <select 
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-5 py-4 text-white font-body text-[15px] focus:outline-none focus:border-[#8051FF]/50 transition-colors appearance-none"
                          value={formData.current_tool}
                          onChange={(e) => setFormData({...formData, current_tool: e.target.value})}
                        >
                          <option value="Excel/WhatsApp">Excel & WhatsApp</option>
                          <option value="Generic CRM">Generic CRM (Zoho, etc)</option>
                          <option value="Custom Software">Custom Internal Tool</option>
                          <option value="Nothing Yet">Nothing Yet</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[12px] uppercase tracking-wider text-[#6A7282] ml-1">Timeline to Deploy</label>
                        <select 
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-5 py-4 text-white font-body text-[15px] focus:outline-none focus:border-[#8051FF]/50 transition-colors appearance-none"
                          value={formData.timeline}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                        >
                          <option value="ASAP">As soon as possible</option>
                          <option value="Next 2 Weeks">Within 2 weeks</option>
                          <option value="Next Month">Next month</option>
                          <option value="Just Exploring">Just exploring</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden bg-[#8051FF] hover:bg-[#9B75FF] disabled:opacity-70 disabled:hover:bg-[#8051FF] text-white font-semibold py-5 rounded-lg text-lg transition-all duration-300 shadow-[0_4px_20px_rgba(128,81,255,0.2)]"
                  >
                    <span className={`relative z-10 flex items-center justify-center gap-2 ${isSubmitting ? "opacity-0" : "opacity-100"}`}>
                      Book My Demo
                    </span>
                    
                    {isSubmitting && (
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      </div>
                    )}
                  </button>
                  <p className="text-center font-body text-[12px] text-[#6A7282]/60">
                    We hate spam as much as you do. Your information is secure.
                  </p>
                </form>
              </div>
            ) : (
              <div className="text-center py-16 space-y-6">
                <div className="flex justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-24 h-24 rounded-xl bg-[#8051FF]/10 border border-[#8051FF]/20 flex items-center justify-center text-[#8051FF]"
                  >
                    <CheckCircle2 size={56} />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-3xl text-white mb-3 tracking-[-0.02em]">Request Received!</h3>
                  <p className="font-body font-light text-[16px] text-[#6A7282] leading-relaxed max-w-[300px] mx-auto">
                    Thanks for reaching out, {formData.name.split(' ')[0]}. <br />
                    One of our product experts will be in touch shortly to schedule your demo.
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="mt-4 text-[#8051FF] font-body font-medium hover:underline transition-all"
                >
                  Close Modal
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
