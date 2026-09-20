import React, { useState, useMemo } from 'react';
import { 
  Calculator, Check, Sparkles, Clock, ArrowRight, ShieldCheck, 
  Layers, Smartphone, Globe, Server, Cpu, Database, MessageSquare, Wrench
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ProjectEstimatorProps {
  initialService?: ServiceItem | null;
  onProceedToInquiry: (summary: {
    platform: string;
    features: string[];
    timeline: string;
    estimatedCost: string;
    estimatedWeeks: string;
    squadRecommendation: string;
  }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ 
  initialService, 
  onProceedToInquiry 
}) => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [platform, setPlatform] = useState<'website' | 'whatsapp-bot' | 'bug-fix' | 'amc'>('website');

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'whatsapp-routing',
    'contact-form',
    'mobile-responsive'
  ]);

  const [pace, setPace] = useState<'rush' | 'standard'>('standard');
  const [includeDomainSSL, setIncludeDomainSSL] = useState(true);

  const platformOptions = [
    {
      id: 'website' as const,
      name: 'Custom Business / Hospital Website',
      icon: Globe,
      desc: 'Mobile-friendly, high speed, SEO ready',
      baseDays: '7–12 Days',
      baseCostINR: 12000,
      baseCostUSD: 160
    },
    {
      id: 'whatsapp-bot' as const,
      name: 'WhatsApp Business Bot & Auto-Reply',
      icon: MessageSquare,
      desc: '24/7 menu, greeting, Google Sheets sync',
      baseDays: '24–48 Hours',
      baseCostINR: 1500,
      baseCostUSD: 25
    },
    {
      id: 'bug-fix' as const,
      name: 'Website Bug Fixing & Diagnostics',
      icon: Wrench,
      desc: 'Fix broken forms, mobile layout, errors',
      baseDays: '24–48 Hours',
      baseCostINR: 3500,
      baseCostUSD: 50
    },
    {
      id: 'amc' as const,
      name: 'Annual Maintenance Contract (AMC)',
      icon: ShieldCheck,
      desc: 'Weekly backups, uptime, security updates',
      baseDays: '365 Days Care',
      baseCostINR: 3500,
      baseCostUSD: 50
    }
  ];

  const featureOptions = [
    { id: 'whatsapp-routing', label: 'Click-to-WhatsApp Smart Routing', costINR: 500, costUSD: 10 },
    { id: 'contact-form', label: 'Email / SMS Notification on Leads', costINR: 800, costUSD: 12 },
    { id: 'mobile-responsive', label: '100% Mobile Responsive Optimization', costINR: 1200, costUSD: 18 },
    { id: 'sheets-sync', label: 'Google Sheets Automatic Lead Logger', costINR: 1000, costUSD: 15 },
    { id: 'appointment-system', label: 'Doctor / Client Appointment Booking', costINR: 2000, costUSD: 30 },
    { id: 'speed-optimization', label: 'Core Web Vitals & Image Compression', costINR: 1000, costUSD: 15 },
    { id: 'qr-code', label: 'WhatsApp QR Code for Store Counters', costINR: 400, costUSD: 8 },
    { id: 'social-meta', label: 'WhatsApp / Social Link Preview Card', costINR: 600, costUSD: 10 }
  ];

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Calculations
  const estimate = useMemo(() => {
    const selectedPlatformData = platformOptions.find((p) => p.id === platform) || platformOptions[0];
    
    let totalINR = selectedPlatformData.baseCostINR;
    let totalUSD = selectedPlatformData.baseCostUSD;

    selectedFeatures.forEach((featId) => {
      const feat = featureOptions.find((f) => f.id === featId);
      if (feat) {
        totalINR += feat.costINR;
        totalUSD += feat.costUSD;
      }
    });

    if (includeDomainSSL) {
      totalINR += 800;
      totalUSD += 12;
    }

    if (pace === 'rush') {
      totalINR = Math.round(totalINR * 1.15);
      totalUSD = Math.round(totalUSD * 1.15);
    }

    const costString = currency === 'INR' 
      ? `₹${totalINR.toLocaleString('en-IN')}` 
      : `$${totalUSD.toLocaleString('en-US')}`;

    const advancePayment = currency === 'INR'
      ? `₹${Math.round(totalINR * 0.5).toLocaleString('en-IN')}`
      : `$${Math.round(totalUSD * 0.5).toLocaleString('en-US')}`;

    const finalPayment = currency === 'INR'
      ? `₹${(totalINR - Math.round(totalINR * 0.5)).toLocaleString('en-IN')}`
      : `$${(totalUSD - Math.round(totalUSD * 0.5)).toLocaleString('en-US')}`;

    return {
      timeline: selectedPlatformData.baseDays,
      costDisplay: costString,
      advancePayment,
      finalPayment,
      squad: 'Direct Founder Engineering (Akshat Soni)',
      rawCost: costString
    };
  }, [platform, selectedFeatures, pace, includeDomainSSL, currency]);

  const handleProceed = () => {
    const currentPlatform = platformOptions.find((p) => p.id === platform)?.name || 'Custom Website';
    const currentFeatureLabels = selectedFeatures.map(
      (fId) => featureOptions.find((f) => f.id === fId)?.label || fId
    );
    if (includeDomainSSL) {
      currentFeatureLabels.push('Domain & SSL Security Setup');
    }

    onProceedToInquiry({
      platform: currentPlatform,
      features: currentFeatureLabels,
      timeline: pace === 'rush' ? '24–48 Hours Priority' : estimate.timeline,
      estimatedCost: estimate.costDisplay,
      estimatedWeeks: estimate.timeline,
      squadRecommendation: 'Akshat Soni (Dynamic Automations, Umreth)'
    });
  };

  return (
    <section id="estimator" className="py-24 bg-[#090b0e] relative border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-teal-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARENT MILESTONE CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculate your project cost & milestones instantly.
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Choose what you need. Zero surprise charges. We follow a strict 50% advance and 50% after live demonstration and satisfaction.
          </p>

          {/* Currency Switcher */}
          <div className="mt-5 inline-flex items-center bg-neutral-900 p-1 rounded-xl border border-neutral-800">
            <button
              onClick={() => setCurrency('INR')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                currency === 'INR' ? 'bg-teal-400 text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              🇮🇳 Indian Rupees (₹)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                currency === 'USD' ? 'bg-teal-400 text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              🌐 International USD ($)
            </button>
          </div>
        </div>

        {/* Interactive Estimator Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Inputs Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-[#0d1016] border border-neutral-800 p-6 sm:p-8 rounded-2xl">
            
            {/* Step 1: Select Platform */}
            <div>
              <label className="block text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                01. Choose Service Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {platformOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = platform === opt.id;
                  const baseCost = currency === 'INR' ? `₹${opt.baseCostINR.toLocaleString('en-IN')}` : `$${opt.baseCostUSD}`;
                  return (
                    <button
                      key={opt.id}
                      id={`estimator-platform-${opt.id}`}
                      type="button"
                      onClick={() => setPlatform(opt.id)}
                      className={`text-left p-4 rounded-xl border transition-all flex items-start space-x-3 cursor-pointer ${
                        isSelected
                          ? 'bg-teal-950/40 border-teal-500/70 text-white shadow-sm'
                          : 'bg-[#121620] border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-teal-500 text-neutral-950' : 'bg-neutral-800 text-neutral-400'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold font-mono">{opt.name}</div>
                        <div className="text-xs text-neutral-400 mt-0.5">{opt.desc}</div>
                        <div className="text-xs font-mono text-teal-400 font-semibold mt-2">
                          From {baseCost} · {opt.baseDays}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Technical Features */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider">
                  02. Project Add-ons & Customizations ({selectedFeatures.length} selected)
                </label>
                <span className="text-[11px] font-mono text-neutral-500">Tap to toggle</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureOptions.map((feat) => {
                  const isSelected = selectedFeatures.includes(feat.id);
                  const addCost = currency === 'INR' ? `+₹${feat.costINR}` : `+$${feat.costUSD}`;
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 rounded-lg border text-left text-xs font-mono flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-teal-500/10 border-teal-500/60 text-teal-200'
                          : 'bg-[#121620] border-neutral-800/80 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isSelected ? 'bg-teal-400 border-teal-400 text-neutral-950' : 'border-neutral-700'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="truncate">{feat.label}</span>
                      </div>
                      <span className="text-[10px] text-teal-400 font-semibold ml-2 shrink-0">{addCost}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Deployment & Priority */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
              <div className="bg-[#121620] border border-neutral-800 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold font-mono text-neutral-200">Domain & SSL Setup</div>
                  <div className="text-[11px] text-neutral-400">DNS configuration & HTTPS lock</div>
                </div>
                <button
                  type="button"
                  onClick={() => setIncludeDomainSSL(!includeDomainSSL)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                    includeDomainSSL ? 'bg-teal-500' : 'bg-neutral-800'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                      includeDomainSSL ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="bg-[#121620] border border-neutral-800 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold font-mono text-neutral-200">Delivery Speed</div>
                  <div className="text-[11px] text-neutral-400">
                    {pace === 'rush' ? '24–48h Priority Delivery' : 'Standard Turnaround'}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setPace(pace === 'rush' ? 'standard' : 'rush')}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-bold cursor-pointer transition-colors ${
                    pace === 'rush' 
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-500/40' 
                      : 'bg-neutral-800 text-neutral-300'
                  }`}
                >
                  {pace === 'rush' ? '⚡ Urgent 24h' : 'Standard'}
                </button>
              </div>
            </div>

          </div>

          {/* Right Summary Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#0f131c] border border-neutral-800 rounded-2xl p-6 sm:p-8 sticky top-28 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="text-xs font-mono font-semibold text-teal-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>VERIFIED QUOTE BREAKDOWN</span>
              </div>
              <span className="font-mono text-[11px] text-neutral-400">No Hidden Fees</span>
            </div>

            {/* Main Calculated Values */}
            <div className="my-6 space-y-4">
              <div className="bg-[#090b0e] border border-neutral-800/80 p-4 rounded-xl">
                <div className="text-xs font-mono text-neutral-400 uppercase">Estimated Turnaround</div>
                <div className="text-3xl font-extrabold text-white font-mono mt-1 flex items-baseline space-x-2">
                  <span>{estimate.timeline}</span>
                  <span className="text-xs font-normal text-teal-400 font-sans">Direct handoff</span>
                </div>
              </div>

              <div className="bg-[#090b0e] border border-neutral-800/80 p-4 rounded-xl">
                <div className="text-xs font-mono text-neutral-400 uppercase">Total Estimated Investment</div>
                <div className="text-3xl font-extrabold text-teal-300 font-mono mt-1">
                  {estimate.costDisplay}
                </div>
                
                {/* Milestone Split */}
                <div className="mt-3 pt-3 border-t border-neutral-800 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="bg-neutral-900/80 p-2 rounded">
                    <span className="text-neutral-500 block text-[10px]">50% ON START:</span>
                    <span className="text-white font-semibold">{estimate.advancePayment}</span>
                  </div>
                  <div className="bg-neutral-900/80 p-2 rounded">
                    <span className="text-neutral-500 block text-[10px]">50% ON LIVE DEMO:</span>
                    <span className="text-emerald-400 font-semibold">{estimate.finalPayment}</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-300 space-y-1 font-mono">
                <div className="text-neutral-400 text-[11px] uppercase">Engineered Directly By:</div>
                <div className="text-emerald-400 font-semibold">Akshat Rajankumar Soni (Founder)</div>
                <div className="text-neutral-400 text-[11px]">Umreth, Anand, Gujarat · Remote worldwide</div>
              </div>
            </div>

            {/* Included in estimate list */}
            <div className="space-y-2 py-4 border-t border-neutral-800 text-xs text-neutral-300">
              <div className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% full source code and admin credentials handover</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct 1-on-1 WhatsApp support during & after delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>30-day free post-launch bug fixing warranty</span>
              </div>
            </div>

            {/* Action button */}
            <button
              id="estimator-btn-submit-scope"
              onClick={handleProceed}
              className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-neutral-950 font-mono font-bold text-sm shadow-md shadow-teal-500/20 flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <span>Get Started with this Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center mt-3">
              <span className="text-[11px] font-mono text-neutral-500">
                ⚡ Direct response via WhatsApp: typically &lt; 30 minutes
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
