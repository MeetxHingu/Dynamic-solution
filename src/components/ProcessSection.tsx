import React from 'react';
import { Compass, Code2, Rocket, ShieldCheck, Check, ArrowRight, MessageSquare } from 'lucide-react';

interface ProcessSectionProps {
  onOpenContact: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenContact }) => {
  const steps = [
    {
      num: '01',
      title: 'Direct WhatsApp Scope & Fixed Quote',
      timeframe: 'Day 1 (Within 2 hrs)',
      icon: MessageSquare,
      description: 'Discuss your project directly with founder Akshat Soni. We lock down your exact requirements, pages or bot menu flows, and agree on a transparent fixed cost.',
      deliverables: [
        'Clear project feature checklist & delivery date',
        'Transparent fixed pricing quote (no hourly fluff)',
        'Zero-obligation free consultation on WhatsApp',
        'Official invoice estimate with 50% milestone'
      ]
    },
    {
      num: '02',
      title: '50% Advance & Rapid Engineering',
      timeframe: 'Days 1 – 4',
      icon: Code2,
      description: 'Work kicks off immediately upon advance receipt. We build clean, responsive code tailored to your exact business branding with zero template bloat.',
      deliverables: [
        'Live private staging preview link within 48h',
        'Mobile responsiveness testing (iPhone & Android)',
        'Integration of WhatsApp routing, forms, or bot menus',
        'Regular progress screenshots & updates'
      ]
    },
    {
      num: '03',
      title: 'Live Testing, Revisions & Client Sign-off',
      timeframe: 'Days 5 – 7',
      icon: Rocket,
      description: 'You test the live website or WhatsApp bot thoroughly. We fine-tune copy, buttons, forms, and test email/SMS delivery until you are 100% satisfied.',
      deliverables: [
        'End-to-end form & click-to-chat testing',
        'Speed & Core Web Vitals optimization',
        'Client revision requests addressed promptly',
        'Final client approval of all deliverables'
      ]
    },
    {
      num: '04',
      title: '50% Final Settlement & 100% Handover',
      timeframe: 'Launch Day',
      icon: ShieldCheck,
      description: 'Final invoice settled. We connect your custom domain, activate SSL security, hand over all credentials, and start your 30-day bug warranty.',
      deliverables: [
        'Custom domain DNS setup & HTTPS SSL lock',
        '100% source code, hosting, and admin keys handover',
        '30-day complimentary post-launch bug warranty',
        'Optional Annual Maintenance Contract (AMC)'
      ]
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#090b0e] relative border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-teal-400 mb-3">
            <Rocket className="w-3.5 h-3.5" />
            <span>TRANSPARENT 4-STEP SPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How we take your project from idea to live delivery.
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            A straightforward, milestone-based process backed by direct founder communication. Fast, dependable, and honest.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#0e1118] border border-neutral-800/90 hover:border-neutral-700 p-6 rounded-2xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold font-mono text-teal-400">
                      {step.num}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
                      {step.timeframe}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#141824] border border-neutral-750 flex items-center justify-center text-teal-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-neutral-800 space-y-2">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider font-semibold">
                      Milestone Deliverable
                    </div>
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-2 text-[11px] text-neutral-300">
                        <Check className="w-3 h-3 text-teal-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-800/60 font-mono text-[11px] text-neutral-500 flex items-center justify-between">
                  <span>Step {idx + 1} of 4</span>
                  <span className="text-emerald-400">● 50/50 Protected</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Sprint Banner */}
        <div className="mt-12 bg-gradient-to-r from-neutral-900 via-[#10141d] to-neutral-900 border border-neutral-800 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Need an urgent website fix or bot setup?</h3>
            <p className="text-sm text-neutral-400 mt-1">
              Message us directly on WhatsApp. We can often diagnose and resolve critical website bugs or deploy an inquiry bot within 24 hours.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-neutral-950 font-mono font-bold text-xs shadow-md shadow-teal-500/20 flex items-center space-x-2 shrink-0 transition-all cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
