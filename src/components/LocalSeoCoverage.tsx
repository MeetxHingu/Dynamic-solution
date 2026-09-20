import React from 'react';
import { MapPin, Globe, CheckCircle2, Phone, MessageSquare, ArrowRight } from 'lucide-react';

interface LocalSeoCoverageProps {
  onOpenContact: () => void;
}

export const LocalSeoCoverage: React.FC<LocalSeoCoverageProps> = ({ onOpenContact }) => {
  const regions = [
    {
      city: 'Umreth',
      state: 'Gujarat',
      type: 'Headquarters & On-Site',
      response: 'Immediate (within 1 hr)',
      details: 'Direct in-person consultation available. Flagship healthcare deployment at Santram Hospital.',
      tags: ['Hospital Portals', 'Retail Websites', 'WhatsApp Bots']
    },
    {
      city: 'Anand & Nadiad',
      state: 'Gujarat',
      type: 'Local Coverage Hub',
      response: '< 2 Hours',
      details: 'Fast turnarounds for educational institutes, dairy businesses, clinics, and manufacturing units.',
      tags: ['Business Websites', 'Lead Gen Bots', 'AMC Support']
    },
    {
      city: 'Vadodara & Ahmedabad',
      state: 'Gujarat',
      type: 'Regional Enterprise & Tech',
      response: '< 4 Hours',
      details: 'Custom software architectures, API integrations, and e-commerce catalogs for growing companies.',
      tags: ['Custom Software', 'Payment Gateways', 'Speed Optimization']
    },
    {
      city: 'Canada & USA',
      state: 'International Remote',
      type: 'Cross-Border Deliveries',
      response: 'Same-Day Timezone Sync',
      details: 'Verified deliveries for international clients (Bhargav Patel in Canada). Clean remote repo handover.',
      tags: ['Bug Fixing', 'Responsive Repairs', 'USD Milestone Billing']
    }
  ];

  return (
    <section id="coverage" className="py-20 bg-[#080a0e] relative border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-teal-400 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>LOCAL ROOTS · GLOBAL CLIENTELE</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Serving Gujarat & international clients worldwide.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Headquartered in Umreth, Gujarat with verified code deployments across Anand, Nadiad, and overseas in Canada.
          </p>
        </div>

        {/* Coverage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((reg, idx) => (
            <div
              key={idx}
              className="bg-[#0d1017] border border-neutral-800 hover:border-teal-500/50 p-6 rounded-2xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-teal-400">
                    {reg.type}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">
                    {reg.response}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {reg.city}
                </h3>
                <div className="text-xs font-mono text-neutral-400 mb-3">
                  {reg.state}
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {reg.details}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-800/80">
                  {reg.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#131722] text-[10px] font-mono text-neutral-300 border border-neutral-750"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500">Gujarati / Hindi / English</span>
                <a
                  href={`https://wa.me/919510351986?text=${encodeURIComponent(`Hello Akshat, I am reaching out from ${reg.city} regarding a website/software project.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-400 hover:text-teal-300 flex items-center space-x-1"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Local Verification Banner */}
        <div className="mt-10 p-5 rounded-xl bg-[#0f131d] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
            <span className="text-neutral-300">
              Registered business in Umreth, Gujarat. Official GST & milestone invoices provided.
            </span>
          </div>

          <div className="flex items-center space-x-4 text-neutral-400">
            <span>Call/WhatsApp: <strong className="text-white">+91 95103 51986</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};
