import React from 'react';
import { Quote, Star, CheckCircle, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/agencyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0c10] relative border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-teal-400 mb-3">
            <Star className="w-3.5 h-3.5 fill-teal-400 text-teal-400" />
            <span>AUTHENTIC CLIENT REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by businesses in India & Canada.
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Real feedback from healthcare administrators, retail founders, and remote clients who hired Akshat Soni to deliver their websites, bots, and code fixes.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#0e1118] border border-neutral-800 p-7 rounded-2xl flex flex-col justify-between hover:border-neutral-700 transition-all duration-200 shadow-lg"
            >
              <div>
                {/* Metric Callout */}
                <div className="bg-[#141824] border border-neutral-800 p-3 rounded-xl mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-extrabold text-teal-300 font-mono">{t.metric}</div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">{t.metricLabel}</div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-neutral-900 text-[10px] font-mono text-neutral-400 border border-neutral-800">
                    {t.serviceProvided}
                  </span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="mt-8 pt-5 border-t border-neutral-800 flex items-center space-x-3.5">
                <img
                  src={t.avatar}
                  alt={t.client}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-teal-500/30"
                />
                <div>
                  <div className="text-sm font-bold text-white flex items-center space-x-1.5">
                    <span>{t.client}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-teal-400" />
                  </div>
                  <div className="text-xs text-neutral-400 font-mono">
                    {t.role}, <span className="text-neutral-300 font-semibold">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
