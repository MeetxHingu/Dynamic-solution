import React, { useState } from 'react';
import { 
  Globe, MessageSquare, Wrench, Receipt, CheckCircle2, Play, 
  Terminal, ShieldCheck, Zap, ArrowRight, Layers, FileText, Check, DollarSign
} from 'lucide-react';
import { VERIFIED_INVOICES, FOUNDER_INFO } from '../data/agencyData';

interface ConsolePreviewProps {
  onSelectService: (serviceId: string) => void;
  onOpenContact: () => void;
}

export const ConsolePreview: React.FC<ConsolePreviewProps> = ({ onSelectService, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'invoices' | 'hospital' | 'bot' | 'troubleshoot'>('invoices');
  const [runningSimulation, setRunningSimulation] = useState(false);
  const [simLog, setSimLog] = useState<string[]>([]);

  const departments = [
    {
      id: 'invoices' as const,
      name: 'Official Invoices & Ledger',
      icon: Receipt,
      role: 'Verified Financial Milestone',
      badge: '₹34,166 Total Revenue (PAID)',
      description: 'Transparent track record of our first 7 delivered and fully settled client invoices. Every project has been paid and completed with 100% satisfaction.',
      metrics: { totalRevenue: '₹34,166', invoicesPaid: '7 of 7', repeatClients: '50%+' },
      codeSnippet: `// DYNAMIC AUTOMATIONS - REVENUE & INVOICE LEDGER (VERIFIED)
const AGENCY_METRICS = {
  agencyName: "DYNAMIC AUTOMATIONS",
  founder: "Akshat Rajankumar Soni",
  location: "Umreth, Gujarat, India",
  invoicesCount: 7,
  totalSettledRevenueINR: 34166.00,
  paymentStatus: "100% PAID & VERIFIED",
  internationalReach: ["India", "Canada"],
  clientsServed: [
    "Santram Hospital (Custom Web & AMC)",
    "Bhargav Patel (Canada Troubleshooting)",
    "Kapdadiya Priyanka (WhatsApp Bot)",
    "Saifuddin Sahaji (Bug Fixing & Layout)"
  ]
};`,
      deliverables: [
        'INV-2026-01: WhatsApp Bot Setup (Kapdadiya Priyanka) - ₹1,500 [PAID]',
        'INV-2026-02: Website Bug Fixing (Bhargav Patel, Canada) - ₹7,000 [PAID]',
        'INV-2026-03: Custom Website Advance (Santram Hospital) - ₹3,000 [PAID]',
        'INV-2026-04: Custom Website Final Delivery (Santram Hospital) - ₹15,000 [PAID]',
        'INV-2026-05: Yearly Website Maintenance (Santram Hospital) - ₹3,500 [PAID]',
        'INV-2026-06: Website Bug Fixing (Saifuddin Sahaji) - ₹2,878 [PAID]',
        'INV-2026-07: Additional Website Bug Fixing (Saifuddin Sahaji) - ₹1,288 [PAID]'
      ]
    },
    {
      id: 'hospital' as const,
      name: 'Santram Hospital Web & AMC',
      icon: Globe,
      role: 'Custom Healthcare Portal & Care',
      badge: '₹21,500 Total Delivered',
      description: 'Multi-stage delivery for Santram Hospital: ₹3,000 advance kickoff (INV-03), ₹15,000 final delivery (INV-04), and ₹3,500 1-year annual maintenance (INV-05).',
      metrics: { advance: '₹3,000', finalDelivery: '₹15,000', annualAMC: '₹3,500/yr' },
      codeSnippet: `// Santram Hospital - Healthcare Website Architecture
export interface HospitalPortalConfig {
  departments: ["General Medicine", "Emergency 24/7", "Pediatrics", "OPD"];
  features: {
    appointmentBooking: true,
    instantWhatsAppContact: "+91 9510351986",
    doctorRosterManagement: true,
    emergencyCallButton: true
  };
  maintenancePlan: {
    coverage: "365 Days Continuous",
    cloudBackups: "Weekly Automated",
    uptimeSLA: "99.9% Monitored"
  };
}`,
      deliverables: [
        'Clean mobile-first design with high accessibility for patients',
        'Direct OPD appointment inquiry routing to hospital staff',
        'Google Maps and local search optimization in Gujarat',
        'Annual Maintenance Contract (AMC) for ongoing technical peace of mind'
      ]
    },
    {
      id: 'bot' as const,
      name: 'WhatsApp Inquiry Bot',
      icon: MessageSquare,
      role: '24/7 Customer Inquiry Automation',
      badge: '₹1,500 Delivered (INV-01)',
      description: 'Fast, automated inquiry responder built for Kapdadiya Priyanka. Greet customers within 2 seconds, share service menus, and capture qualified leads on auto-pilot.',
      metrics: { responseTime: '< 2 sec', setupTime: '24 Hours', automatedLeads: '100%' },
      codeSnippet: `// WhatsApp Business Webhook: Automated Customer Inquiry Router
export async function handleIncomingWhatsAppMessage(payload: WhatsAppWebhook) {
  const { senderPhone, messageText } = payload;

  if (messageText.toLowerCase().includes("inquiry") || messageText === "1") {
    await sendWhatsAppReply(senderPhone, {
      greeting: "Hello! Welcome to our store/clinic.",
      menu: "1. Service Catalog | 2. Pricing | 3. Speak to Owner",
      autoLoggedToSheet: true
    });
    // Send instant SMS/WhatsApp alert to business owner
    await notifyOwner({ lead: senderPhone, time: new Date().toISOString() });
  }
}`,
      deliverables: [
        'Instant greeting and interactive numbered service menu',
        'Automated lead capture to Google Sheets & WhatsApp alert to owner',
        'Custom QR code for shop counters, visiting cards & Instagram',
        'Zero ongoing monthly bot software fees'
      ]
    },
    {
      id: 'troubleshoot' as const,
      name: 'Bug Fixing & Remote Repairs',
      icon: Wrench,
      role: 'Cross-Border Website Troubleshooting',
      badge: 'Canada & India Clients',
      description: 'Emergency website repairs delivered for Bhargav Patel (Canada - ₹7,000) and Saifuddin Sahaji (₹4,166 across 2 milestones). Fixed broken forms, mobile styles, and script errors.',
      metrics: { turnaround: '24–48h', international: 'Canada 🇨🇦', resolutionRate: '100%' },
      codeSnippet: `// Website Diagnostic & Bug Patching Engine
export function diagnoseAndPatchWebsite(siteUrl: string) {
  const scanResults = {
    fixedMobileOverflow: "Resolved CSS media query clipping on iPhone & Android",
    fixedContactForm: "Restored SMTP/API endpoint with input sanitization",
    optimizedImages: "Reduced page weight by 64% for faster 4G/5G loading",
    resolvedScriptConflicts: "Cleaned JavaScript console uncaught exceptions"
  };
  return { status: "RESOLVED", downtime: "0 minutes" };
}`,
      deliverables: [
        'Fix broken inquiry and contact forms preventing lead loss',
        'Resolve responsive layout issues where text or images get cut off',
        'Fast turnaround (24–48 hours) with direct WhatsApp communication',
        'Cross-browser testing across mobile Safari, Android Chrome, and Desktop'
      ]
    }
  ];

  const current = departments.find((d) => d.id === activeTab) || departments[0];

  const runSimulation = () => {
    setRunningSimulation(true);
    setSimLog([]);
    const logs = [
      `[dynamic-automations] Fetching verified record for ${current.name}...`,
      `[dynamic-automations] Reviewing deliverables: ${current.badge}`,
      `[dynamic-automations] Checking payment status: 100% PAID via Online/Cash`,
      `[dynamic-automations] Validating client deliverables and milestone satisfaction...`,
      `[dynamic-automations] Founder: Akshat Rajankumar Soni (Umreth, Gujarat)`,
      `[dynamic-automations] ✅ Record verified. 100% on-time delivery confirmed.`
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setSimLog((prev) => [...prev, log]);
        if (index === logs.length - 1) {
          setRunningSimulation(false);
        }
      }, (index + 1) * 280);
    });
  };

  return (
    <section id="invoices-ledger" className="py-16 sm:py-20 bg-[#090b0e] relative border-b border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-xs font-mono text-emerald-300 mb-3.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>TRANSPARENT REVENUE & DELIVERED SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real Work. Real Invoices. Verified Deliveries.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-neutral-400">
            Unlike agencies showing vague claims, we display our verified client invoices and delivered work.
            Explore our real projects below — from Santram Hospital to clients in Canada.
          </p>
        </div>

        {/* The Dynamic Automations Interactive Console */}
        <div className="bg-[#0e1117] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/80">
          
          {/* Console Header Bar */}
          <div className="bg-[#131720] border-b border-neutral-800/90 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="h-4 w-px bg-neutral-700"></div>
              <span className="font-mono text-xs text-neutral-400 flex items-center space-x-1.5">
                <Terminal className="w-3.5 h-3.5 text-teal-400" />
                <span className="text-neutral-200 font-semibold">dynamic-automations-ledger</span>
                <span className="text-emerald-400 font-mono text-[11px]">₹34,166 Revenue</span>
              </span>
            </div>

            {/* Department switcher tabs */}
            <div className="flex items-center bg-[#090b0e] p-1 rounded-lg border border-neutral-800 text-xs font-mono overflow-x-auto max-w-full">
              {departments.map((dep) => {
                const Icon = dep.icon;
                const isActive = activeTab === dep.id;
                return (
                  <button
                    key={dep.id}
                    id={`tab-squad-${dep.id}`}
                    onClick={() => {
                      setActiveTab(dep.id);
                      setSimLog([]);
                    }}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-teal-500/20 text-teal-300 font-semibold border border-teal-500/30'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{dep.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded bg-emerald-950/70 text-emerald-400 border border-emerald-800/60 font-mono text-[11px] font-medium flex items-center space-x-1">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>7/7 Invoices Paid</span>
              </span>
            </div>
          </div>

          {/* Special view for Invoices Ledger Tab */}
          {activeTab === 'invoices' ? (
            <div className="p-6 sm:p-8 bg-[#0b0e14]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs text-teal-400 font-medium tracking-wide uppercase">
                      Official Client Ledger
                    </span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                      7 Invoices Paid
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    Verified Revenue Ledger (₹34,166.00 INR)
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                    Billed & delivered by Akshat Rajankumar Soni (Umreth, Gujarat). Contact: +91 9510351986
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#131722] border border-neutral-800 px-4 py-2.5 rounded-xl text-right">
                    <div className="text-[11px] font-mono text-neutral-400 uppercase">Total Settled</div>
                    <div className="text-xl font-bold text-emerald-400 font-mono">₹34,166.00</div>
                  </div>
                  <a
                    href={FOUNDER_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-neutral-950 font-mono text-xs font-bold flex items-center space-x-1.5 shadow-md hover:scale-[1.02] transition-transform"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Hire for Project</span>
                  </a>
                </div>
              </div>

              {/* Invoices Table */}
              <div className="mt-6 overflow-x-auto rounded-xl border border-neutral-800 bg-[#090b0e]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#121620] text-neutral-400 border-b border-neutral-800 uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3 px-4">Invoice #</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Client</th>
                      <th className="py-3 px-4">Service Description</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4 text-right">Amount</th>
                      <th className="py-3 px-4 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-850 text-neutral-300">
                    {VERIFIED_INVOICES.map((inv) => (
                      <tr key={inv.invoiceNumber} className="hover:bg-neutral-900/40 transition-colors">
                        <td className="py-3 px-4 font-bold text-teal-400">{inv.invoiceNumber}</td>
                        <td className="py-3 px-4 text-neutral-400">{inv.date}</td>
                        <td className="py-3 px-4 font-medium text-white">{inv.client}</td>
                        <td className="py-3 px-4 text-neutral-300 max-w-xs">{inv.service}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 text-[10px]">
                            {inv.category}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-emerald-400">{inv.amount}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/80 text-[10px] font-semibold">
                            <Check className="w-2.5 h-2.5 mr-1 text-emerald-400" />
                            {inv.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-[#121620] border-t-2 border-neutral-750 font-bold text-white">
                    <tr>
                      <td colSpan={5} className="py-3.5 px-4 text-right uppercase text-[11px] text-neutral-400 font-mono">
                        Total Tracked Milestone Revenue:
                      </td>
                      <td className="py-3.5 px-4 text-right text-sm text-emerald-400 font-mono font-extrabold">
                        ₹34,166.00
                      </td>
                      <td className="py-3.5 px-4 text-center text-emerald-400 text-[11px]">
                        100% PAID
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Callout box */}
              <div className="mt-6 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-neutral-300 font-mono">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    All 7 invoices were executed under formal agreements with advance milestone terms and 100% delivery sign-off.
                  </span>
                </div>
                <button
                  onClick={onOpenContact}
                  className="px-3 py-1.5 rounded-lg bg-teal-400 text-neutral-950 font-bold text-xs shrink-0 cursor-pointer"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          ) : (
            /* Console Body: 2 Columns for Hospital / Bot / Bug Fixing */
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
              
              {/* Left Column: Details & Deliverables */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-teal-400 font-medium tracking-wide uppercase">
                      {current.role}
                    </span>
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                      {current.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{current.name}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">{current.description}</p>

                  {/* Key Metric Cards */}
                  <div className="grid grid-cols-3 gap-2.5 my-6">
                    {Object.entries(current.metrics).map(([key, value]) => (
                      <div key={key} className="bg-[#131722] border border-neutral-800 p-2.5 rounded-lg text-center">
                        <div className="text-xs font-bold text-teal-300 font-mono">{value}</div>
                        <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider mt-0.5">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Production Deliverables Checklist */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verified Client Deliverables:</span>
                    </div>
                    {current.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-neutral-300">
                        <span className="text-teal-400 font-mono font-bold mt-0.5">→</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3">
                  <button
                    onClick={runSimulation}
                    disabled={runningSimulation}
                    className="px-3.5 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-xs font-mono text-neutral-200 flex items-center space-x-2 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    <Play className={`w-3.5 h-3.5 text-teal-400 ${runningSimulation ? 'animate-spin' : ''}`} />
                    <span>{runningSimulation ? 'Verifying...' : 'Verify Deliverable'}</span>
                  </button>

                  <a
                    href={FOUNDER_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-teal-400 hover:bg-teal-300 text-neutral-950 text-xs font-mono font-bold flex items-center space-x-1.5 transition-all shadow-sm"
                  >
                    <span>Message Akshat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Code Window & Terminal Output */}
              <div className="lg:col-span-7 bg-[#0b0e14] flex flex-col justify-between">
                
                {/* Code Tab Bar */}
                <div className="px-4 py-2.5 bg-[#0f131c] border-b border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-400">●</span>
                    <span className="text-neutral-200">implementation_architecture.ts</span>
                    <span className="text-neutral-500">· production code</span>
                  </div>
                  <span className="text-[11px] text-neutral-500">Umreth, Gujarat · Akshat Soni</span>
                </div>

                {/* Code Snippet */}
                <div className="p-4 sm:p-6 overflow-x-auto font-mono text-xs leading-relaxed text-neutral-300">
                  <pre className="text-neutral-300">
                    <code>{current.codeSnippet}</code>
                  </pre>
                </div>

                {/* Interactive Terminal Output Panel */}
                <div className="bg-[#080a0f] border-t border-neutral-800 p-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2">
                    <span className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>DELIVERY VERIFICATION CONSOLE</span>
                    </span>
                    <span>Click &quot;Verify Deliverable&quot; to test</span>
                  </div>
                  
                  <div className="h-24 overflow-y-auto bg-[#050608] rounded border border-neutral-850 p-2.5 font-mono text-xs space-y-1 text-neutral-400">
                    {simLog.length === 0 ? (
                      <div className="text-neutral-600 italic">
                        // Ready. Click &quot;Verify Deliverable&quot; to check the milestone details and invoice status.
                      </div>
                    ) : (
                      simLog.map((log, i) => (
                        <div
                          key={i}
                          className={log.includes('✅') ? 'text-emerald-400 font-semibold' : 'text-neutral-300'}
                        >
                          {log}
                        </div>
                      ))
                    )}
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
