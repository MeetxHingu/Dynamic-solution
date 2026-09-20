import React from 'react';
import { ArrowRight, Sparkles, Shield, Code2, Zap, Terminal, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';
import { FOUNDER_INFO } from '../data/agencyData';

interface HeroProps {
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator, onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-radial-gradient">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800/90 shadow-inner mb-6">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
          </span>
          <span className="text-xs font-mono font-medium text-neutral-300">
            DYNAMIC AUTOMATIONS · UMRETH, GUJARAT
          </span>
          <span className="text-neutral-600">|</span>
          <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>₹34,000+ Verified Revenue Milestone</span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-5xl mx-auto leading-[1.14]">
          Custom Websites, WhatsApp Bots{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-400 to-teal-200">
            & Rapid Tech Troubleshooting.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed font-normal">
          Founded by <span className="text-white font-medium">Akshat Rajankumar Soni</span> in Umreth, Gujarat. 
          We engineer high-converting business websites, 24/7 automated WhatsApp inquiry bots, and emergency bug fixing 
          for local hospitals, commercial businesses, and international clients with <span className="text-emerald-400 font-mono font-semibold">100% on-time milestone delivery</span>.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-lg mx-auto">
          <a
            href={FOUNDER_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-mono font-bold text-sm shadow-lg shadow-emerald-500/25 hover:scale-[1.02] transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-neutral-950 text-neutral-950" />
            <span>WhatsApp Chat (+91 9510351986)</span>
            <ArrowRight className="w-4 h-4 text-neutral-950" />
          </a>

          <button
            id="hero-btn-estimator"
            onClick={onOpenEstimator}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 text-neutral-200 border border-neutral-700 font-mono font-medium text-sm transition-all hover:border-neutral-600 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>Calculate Project Cost (₹)</span>
          </button>
        </div>

        {/* Trust & Guarantee Micro-tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-neutral-400 font-mono">
          <span className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>7/7 Official Invoices Paid</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Milestone Billing (Advance + Final Delivery)</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Trusted in Gujarat & Canada 🇨🇦</span>
          </span>
        </div>

        {/* Real Metrics Grid - Based on Real Invoices */}
        <div className="mt-14 pt-10 border-t border-neutral-800/80 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
            
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">₹34,166</div>
              <div className="text-xs sm:text-sm text-neutral-400 mt-1">Verified Revenue</div>
              <div className="text-[11px] text-emerald-400 font-mono mt-0.5">Bootstrapped Milestone</div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">7 / 7</div>
              <div className="text-xs sm:text-sm text-neutral-400 mt-1">Invoices Delivered & Paid</div>
              <div className="text-[11px] text-teal-400 font-mono mt-0.5">100% Client Payment Rate</div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">24–48h</div>
              <div className="text-xs sm:text-sm text-neutral-400 mt-1">Bug Fixing Turnaround</div>
              <div className="text-[11px] text-emerald-400 font-mono mt-0.5">Fast Emergency Repairs</div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">₹3,500<span className="text-sm font-normal text-neutral-400">/yr</span></div>
              <div className="text-xs sm:text-sm text-neutral-400 mt-1">Annual Maintenance AMC</div>
              <div className="text-[11px] text-teal-400 font-mono mt-0.5">Trusted by Santram Hospital</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
