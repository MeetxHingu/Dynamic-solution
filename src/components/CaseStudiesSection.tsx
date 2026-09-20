import React, { useState } from 'react';
import { 
  ArrowUpRight, Sparkles, TrendingUp, CheckCircle2, 
  X, Layers, ShieldCheck, Quote, ArrowRight 
} from 'lucide-react';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudy } from '../types';

interface CaseStudiesSectionProps {
  onOpenContact: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenContact }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-24 bg-[#0a0c10] relative border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-teal-400 mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>VERIFIED REPUTATION & PROOF</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real projects delivered to real clients.
            </h2>
            <p className="mt-3 text-base text-neutral-400 max-w-2xl">
              From our flagship hospital portal in Umreth to 24-hour WhatsApp bots and international bug fixes for Canada, explore the exact work we completed.
            </p>
          </div>

          <div className="mt-6 md:mt-0 font-mono text-xs text-teal-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg">
            [3 Documented Case Studies · 100% Delivery Rate]
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((item) => (
            <div
              key={item.id}
              className="group bg-[#0e1118] border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 cursor-pointer"
              onClick={() => setSelectedCase(item)}
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-52 overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1118] via-transparent to-transparent"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-700 font-mono text-xs text-teal-300 font-medium">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-white group-hover:bg-teal-400 group-hover:text-neutral-950 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                    {item.clientName} · {item.industry}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-neutral-400 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Results Metrics Row */}
                  <div className="mt-6 grid grid-cols-2 gap-2 pt-4 border-t border-neutral-800/80">
                    {item.results.slice(0, 2).map((res, i) => (
                      <div key={i} className="bg-[#141824] p-2.5 rounded-lg border border-neutral-800">
                        <div className="text-base font-extrabold text-white font-mono">{res.value}</div>
                        <div className="text-[10px] font-mono text-neutral-400 uppercase">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Tech Tags */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tags.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400">
                      {t}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[11px] font-mono text-neutral-500">
                      +{item.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="text-xs font-mono text-teal-400 font-semibold flex items-center space-x-1">
                  <span>View Architecture & Stack</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Case Study Details */}
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0e1118] border border-neutral-750 rounded-2xl shadow-2xl p-6 sm:p-8">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Client & Tag */}
              <div className="flex items-center space-x-3 mb-2">
                <span className="px-2.5 py-1 rounded bg-teal-950 text-teal-400 border border-teal-800/80 font-mono text-xs font-semibold">
                  {selectedCase.tag}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {selectedCase.clientName} · {selectedCase.industry}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {selectedCase.title}
              </h3>
              
              <div className="mt-4 text-base font-semibold text-teal-300">
                &ldquo;{selectedCase.headline}&rdquo;
              </div>

              <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
                {selectedCase.description}
              </p>

              {/* Interactive Case Study Image Showcase with Zoom and Live Pins */}
              <div className="my-6 rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden relative group">
                <div className="px-3.5 py-2 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                    <span>Interactive UI Inspection · {selectedCase.clientName}</span>
                  </div>
                  <span className="text-teal-400">Double-click or hover to inspect</span>
                </div>
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20 pointer-events-none"></div>

                  {/* Interactive Hotspot Pills on the image */}
                  <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-8 h-8 rounded-full bg-teal-400/40 animate-ping"></span>
                      <span className="px-2 py-1 rounded-full bg-teal-400 text-neutral-950 font-mono text-[10px] font-bold shadow-lg shadow-teal-500/50">
                        ⚡ Core Engine
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-8 h-8 rounded-full bg-emerald-400/40 animate-ping"></span>
                      <span className="px-2 py-1 rounded-full bg-emerald-400 text-neutral-950 font-mono text-[10px] font-bold shadow-lg shadow-emerald-500/50">
                        🔒 Security Vault
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <a
                      href="#showcase"
                      onClick={() => setSelectedCase(null)}
                      className="px-3 py-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-teal-300 border border-teal-500/40 text-xs font-mono flex items-center space-x-1.5 shadow-lg backdrop-blur-md"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Open Full Interactive Visualizer</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* 4 Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                {selectedCase.results.map((res, idx) => (
                  <div key={idx} className="bg-[#141824] border border-neutral-800 p-3 rounded-xl text-center">
                    <div className="text-xl font-bold font-mono text-teal-300">{res.value}</div>
                    <div className="text-xs font-mono text-neutral-400 mt-0.5">{res.label}</div>
                  </div>
                ))}
              </div>

              {/* Technical Architecture Details */}
              <div className="mt-6 pt-6 border-t border-neutral-800">
                <h4 className="text-xs font-mono font-bold text-neutral-300 uppercase tracking-wider mb-3 flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-teal-400" />
                  <span>Technical Implementation & Architecture:</span>
                </h4>
                <div className="space-y-2 bg-[#090b0e] p-4 rounded-xl border border-neutral-800/80">
                  {selectedCase.architectureDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs font-mono text-neutral-300">
                      <span className="text-teal-400 mt-0.5">●</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Founder Quote */}
              <div className="mt-6 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-start space-x-3.5">
                <img
                  src={selectedCase.clientQuote.avatar}
                  alt={selectedCase.clientQuote.author}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover shrink-0 border border-teal-500/30"
                />
                <div>
                  <p className="text-xs sm:text-sm text-neutral-300 italic">
                    &ldquo;{selectedCase.clientQuote.quote}&rdquo;
                  </p>
                  <div className="mt-2 text-xs font-mono text-teal-400 font-semibold">
                    {selectedCase.clientQuote.author}{' '}
                    <span className="text-neutral-500 font-normal">· {selectedCase.clientQuote.role}</span>
                  </div>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-mono font-medium"
                >
                  Close Case Study
                </button>
                <button
                  onClick={() => {
                    setSelectedCase(null);
                    onOpenContact();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-neutral-950 font-mono font-bold text-xs flex items-center space-x-2"
                >
                  <span>Build Similar System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
