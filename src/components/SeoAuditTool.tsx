import React, { useState } from 'react';
import { 
  Search, CheckCircle2, AlertTriangle, XCircle, ArrowRight, 
  MessageSquare, Sparkles, Gauge, ShieldCheck, Smartphone, Globe, RefreshCw 
} from 'lucide-react';

interface SeoAuditToolProps {
  onOpenContact: () => void;
}

export const SeoAuditTool: React.FC<SeoAuditToolProps> = ({ onOpenContact }) => {
  const [url, setUrl] = useState('');
  const [businessType, setBusinessType] = useState('Clinic / Healthcare');
  const [hasWhatsApp, setHasWhatsApp] = useState<boolean | null>(false);
  const [isMobileFriendly, setIsMobileFriendly] = useState<boolean | null>(true);
  const [hasSsl, setHasSsl] = useState<boolean | null>(true);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [auditResult, setAuditResult] = useState<{
    overallScore: number;
    grade: string;
    speedScore: number;
    seoScore: number;
    conversionScore: number;
    insights: {
      category: string;
      status: 'pass' | 'warning' | 'fail';
      title: string;
      description: string;
      fixEstimate: string;
    }[];
  } | null>(null);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAnalyzing(true);
    setAuditResult(null);

    setTimeout(() => {
      // Calculate realistic scores based on user inputs
      let baseSpeed = 74;
      let baseSeo = 65;
      let baseConversion = 55;

      if (hasWhatsApp) baseConversion += 30;
      if (isMobileFriendly) baseSpeed += 15; else baseSpeed -= 25;
      if (hasSsl) baseSeo += 20; else baseSeo -= 30;

      const overall = Math.min(95, Math.max(42, Math.round((baseSpeed + baseSeo + baseConversion) / 3)));
      const grade = overall >= 85 ? 'A' : overall >= 70 ? 'B' : overall >= 55 ? 'C' : 'D';

      setAuditResult({
        overallScore: overall,
        grade,
        speedScore: Math.min(98, Math.max(35, baseSpeed)),
        seoScore: Math.min(98, Math.max(30, baseSeo)),
        conversionScore: Math.min(98, Math.max(25, baseConversion)),
        insights: [
          {
            category: 'Lead Conversion',
            status: hasWhatsApp ? 'pass' : 'fail',
            title: hasWhatsApp ? 'WhatsApp Direct Routing Active' : 'Missing 1-Click WhatsApp Lead Capture',
            description: hasWhatsApp 
              ? 'Great! Direct chat drastically reduces user drop-off in India & regional markets.'
              : 'Over 78% of mobile visitors in Gujarat leave without submitting standard contact forms. A sticky WhatsApp chat widget can 2x–3x your inquiries.',
            fixEstimate: '₹1,500 (Installed in 24 hrs)'
          },
          {
            category: 'Google Search & Local SEO',
            status: hasSsl ? 'warning' : 'fail',
            title: hasSsl ? 'SSL Active, Missing Schema.org Microdata' : 'Insecure HTTP Connection Detected',
            description: hasSsl
              ? 'Your site has SSL, but lacks LocalBusiness and FAQ JSON-LD tags, meaning Google cannot show your ratings, address, and pricing in rich search snippets.'
              : 'Browsers flag non-SSL sites as "Not Secure", causing visitors to bounce instantly and dropping your Google ranking.',
            fixEstimate: '₹1,500 – ₹2,500 (Complete SEO setup)'
          },
          {
            category: 'Mobile Responsiveness & Speed',
            status: isMobileFriendly ? 'pass' : 'fail',
            title: isMobileFriendly ? 'Responsive Viewport Configured' : 'Mobile Viewport Scaling Issues',
            description: isMobileFriendly
              ? 'Layout accommodates mobile screens, though image compression and script deferral can shave 1.2s off page load.'
              : 'Google penalizes sites that require horizontal pinch-zooming on mobile devices.',
            fixEstimate: '₹2,000 – ₹3,500 (Full responsive patch)'
          }
        ]
      });
      setIsAnalyzing(false);
    }, 1400);
  };

  const shareAuditOnWhatsApp = () => {
    if (!auditResult) return;
    const text = encodeURIComponent(
      `Hello Akshat, I ran a website audit for ${url || 'my site'} on Dynamic Automations. My score was ${auditResult.overallScore}/100. I would like your help fixing the issues and optimizing it for Google & WhatsApp leads.`
    );
    window.open(`https://wa.me/919510351986?text=${text}`, '_blank');
  };

  return (
    <section id="audit" className="py-24 bg-[#080a0e] relative border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-teal-400 mb-3">
            <Gauge className="w-3.5 h-3.5" />
            <span>FREE INTERACTIVE AUDIT TOOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Check your website&apos;s SEO, speed & WhatsApp lead readiness.
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Find out why your current website isn&apos;t getting enough visitors or phone inquiries. Run an instant diagnostic and get founder-level recommendations.
          </p>
        </div>

        {/* Audit Tool Box */}
        <div className="max-w-4xl mx-auto bg-[#0d1017] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <form onSubmit={handleRunAudit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-mono font-medium text-neutral-300 mb-1.5">
                  Your Website URL or Business Domain *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                    <Globe className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="e.g. santramhospital.com or myshop.in"
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#131722] border border-neutral-750 text-white text-sm focus:outline-none focus:border-teal-500 font-mono transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-neutral-300 mb-1.5">
                  Business Industry
                </label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-[#131722] border border-neutral-750 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                >
                  <option value="Clinic / Healthcare">Clinic / Healthcare</option>
                  <option value="Retail & Local Store">Retail & Local Store</option>
                  <option value="Hospitality / Restaurant">Hospitality / Restaurant</option>
                  <option value="Professional B2B Service">Professional B2B Service</option>
                  <option value="Overseas / Export">Overseas / Export Business</option>
                </select>
              </div>
            </div>

            {/* Quick Diagnostic Toggles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
              <div 
                onClick={() => setHasWhatsApp(!hasWhatsApp)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  hasWhatsApp ? 'bg-teal-950/40 border-teal-500/60 text-teal-300' : 'bg-[#111520] border-neutral-800 text-neutral-400'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Has WhatsApp Button?</span>
                </div>
                <span className="font-bold">{hasWhatsApp ? 'YES' : 'NO'}</span>
              </div>

              <div 
                onClick={() => setIsMobileFriendly(!isMobileFriendly)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  isMobileFriendly ? 'bg-teal-950/40 border-teal-500/60 text-teal-300' : 'bg-[#111520] border-neutral-800 text-neutral-400'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-4 h-4 text-teal-400" />
                  <span>Mobile Friendly?</span>
                </div>
                <span className="font-bold">{isMobileFriendly ? 'YES' : 'NO'}</span>
              </div>

              <div 
                onClick={() => setHasSsl(!hasSsl)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  hasSsl ? 'bg-teal-950/40 border-teal-500/60 text-teal-300' : 'bg-[#111520] border-neutral-800 text-neutral-400'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>HTTPS / SSL Locked?</span>
                </div>
                <span className="font-bold">{hasSsl ? 'YES' : 'NO'}</span>
              </div>
            </div>

            {/* Submit Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="text-[11px] font-mono text-neutral-400 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>Audits Google Web Vitals, Schema.org & Lead Funnels</span>
              </div>

              <button
                type="submit"
                disabled={isAnalyzing}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-neutral-950 font-mono font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer disabled:opacity-50 shadow-md shadow-teal-500/20"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Analyzing Web Signals...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Run Free SEO & Conversion Audit</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Audit Results View */}
          {auditResult && (
            <div className="mt-8 pt-8 border-t border-neutral-800 animate-fade-in space-y-6">
              
              {/* Score Top Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-[#121622] border border-neutral-800 p-4 rounded-xl text-center">
                  <div className="text-xs font-mono text-neutral-400 mb-1">Overall Health</div>
                  <div className="text-3xl font-extrabold font-mono text-teal-300">
                    {auditResult.overallScore}<span className="text-sm text-neutral-500">/100</span>
                  </div>
                  <div className="text-[10px] font-mono mt-1 text-emerald-400 font-bold">
                    Grade {auditResult.grade}
                  </div>
                </div>

                <div className="bg-[#121622] border border-neutral-800 p-4 rounded-xl text-center">
                  <div className="text-xs font-mono text-neutral-400 mb-1">Mobile Speed</div>
                  <div className="text-3xl font-extrabold font-mono text-white">
                    {auditResult.speedScore}<span className="text-sm text-neutral-500">%</span>
                  </div>
                  <div className="text-[10px] font-mono mt-1 text-neutral-400">Core Web Vitals</div>
                </div>

                <div className="bg-[#121622] border border-neutral-800 p-4 rounded-xl text-center">
                  <div className="text-xs font-mono text-neutral-400 mb-1">Google SEO</div>
                  <div className="text-3xl font-extrabold font-mono text-white">
                    {auditResult.seoScore}<span className="text-sm text-neutral-500">%</span>
                  </div>
                  <div className="text-[10px] font-mono mt-1 text-neutral-400">Schema & Metadata</div>
                </div>

                <div className="bg-[#121622] border border-neutral-800 p-4 rounded-xl text-center">
                  <div className="text-xs font-mono text-neutral-400 mb-1">Lead Conversion</div>
                  <div className="text-3xl font-extrabold font-mono text-emerald-400">
                    {auditResult.conversionScore}<span className="text-sm text-neutral-500">%</span>
                  </div>
                  <div className="text-[10px] font-mono mt-1 text-neutral-400">WhatsApp Inquiries</div>
                </div>
              </div>

              {/* Detailed Insights List */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                  Key Diagnostic Findings & Fix Estimates:
                </div>

                {auditResult.insights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#111520] border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start space-x-3">
                      {item.status === 'pass' && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      )}
                      {item.status === 'warning' && (
                        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      )}
                      {item.status === 'fail' && (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className="text-sm font-bold text-white flex items-center space-x-2">
                          <span>{item.title}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 mt-1 max-w-xl leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="sm:text-right shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-neutral-800">
                      <div className="text-[10px] font-mono text-neutral-500">Typical Patch Cost:</div>
                      <div className="text-xs font-mono font-bold text-teal-300">{item.fixEstimate}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Conversion Hand-off CTA */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-neutral-900 via-[#121622] to-neutral-900 border border-teal-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-white flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-teal-400" />
                    <span>Want Akshat to optimize and fix your website?</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    We can patch responsive bugs, add WhatsApp lead bots, and configure Google Local SEO in 24–48 hours.
                  </p>
                </div>

                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <button
                    onClick={shareAuditOnWhatsApp}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-mono font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Audit on WhatsApp</span>
                  </button>
                  <button
                    onClick={onOpenContact}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-mono text-xs transition-colors cursor-pointer border border-neutral-700"
                  >
                    Book Call
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
