import React from 'react';
import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/agencyData';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 bg-[#090b0e] relative border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-teal-400 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT ENGAGEMENT MODELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transparent pricing. 50/50 milestone payments.
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Clear fixed-price packages with 50% advance upon kickoff and 50% only after full live demonstration and your complete satisfaction.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 ${
                  isPopular
                    ? 'bg-[#10141e] border-2 border-teal-500/80 shadow-2xl shadow-teal-500/10'
                    : 'bg-[#0e1118] border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-teal-400 text-neutral-950 font-mono text-xs font-bold shadow-md uppercase tracking-wider flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Most Popular for Startups</span>
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-teal-400 uppercase tracking-wider font-semibold">
                      {plan.tier}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 bg-neutral-900 px-2.5 py-0.5 rounded border border-neutral-800">
                      {plan.turnaroundTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed min-h-[38px]">
                    {plan.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="my-6 p-4 rounded-xl bg-[#090b0e] border border-neutral-800/80">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                        {plan.price}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">
                        / {plan.billingPeriod}
                      </span>
                    </div>
                    <div className="text-[11px] text-neutral-400 mt-1">
                      Ideal for: <span className="text-neutral-300">{plan.idealFor}</span>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 pt-2">
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                      Plan Includes:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs text-neutral-300">
                        <div className="w-4 h-4 rounded-full bg-teal-950 text-teal-400 flex items-center justify-center shrink-0 mt-0.5 border border-teal-800/80">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="mt-8 pt-6 border-t border-neutral-800">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3 rounded-xl font-mono font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      isPopular
                        ? 'bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-neutral-950 shadow-md shadow-teal-500/20'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="mt-3 text-center text-[10px] font-mono text-neutral-500 flex items-center justify-center space-x-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>Includes 30-Day Bug Warranty</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
