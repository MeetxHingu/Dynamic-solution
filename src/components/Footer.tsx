import React, { useState } from 'react';
import { Terminal, ArrowUpRight, MessageSquare, Phone, MapPin, ShieldCheck, Lock, Share2, Check, Copy } from 'lucide-react';

interface FooterProps {
  onOpenEstimator: () => void;
  onOpenContact: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimator, onOpenContact, onOpenAdmin }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareData = {
      title: 'Dynamic Automations — Software & Web Development by Akshat Soni',
      text: 'Check out Dynamic Automations: High-performance websites, WhatsApp bots, and clinic portals built in Umreth, Gujarat.',
      url: shareUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // Fallback to clipboard if cancelled or unsupported
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <footer className="bg-[#07080b] border-t border-neutral-850 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-neutral-850">
          
          {/* Brand Col (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-400 flex items-center justify-center text-neutral-950 font-bold">
                <Terminal className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="font-mono text-lg font-bold text-white tracking-tight">
                Dynamic<span className="text-teal-400">Automations</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Custom software, healthcare web portals, WhatsApp business inquiry bots, and website repairs. Founded by Akshat Rajankumar Soni in Umreth, Gujarat.
            </p>

            {/* Founder Contact & Location */}
            <div className="space-y-1.5 text-xs font-mono text-neutral-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Umreth, Dist. Anand, Gujarat, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:+919510351986" className="hover:text-white transition-colors">
                  +91 95103 51986
                </a>
              </div>
            </div>

            {/* Live Ops Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Accepting New Website & Bot Projects</span>
            </div>
          </div>

          {/* Nav Links: Capabilities */}
          <div>
            <div className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-3">
              Core Services
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  Custom Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  WhatsApp Business Bots
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  Website Bug Fixing & Repairs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  Annual Maintenance (AMC)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  Doctor & Clinic Portals
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links: Studio */}
          <div>
            <div className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-3">
              Verified Proof
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#console-preview" className="hover:text-teal-300 transition-colors text-emerald-400">
                  Verified Invoices (₹34,166)
                </a>
              </li>
              <li>
                <button onClick={onOpenEstimator} className="hover:text-teal-300 transition-colors text-left cursor-pointer">
                  Sprint Milestone Calculator
                </button>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-teal-300 transition-colors">
                  Santram Hospital Case Study
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-teal-300 transition-colors">
                  Client Reviews (India & Canada)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-teal-300 transition-colors">
                  50/50 Payment Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links: Kickoff */}
          <div>
            <div className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-3">
              Direct Contact
            </div>
            <div className="space-y-3 text-xs">
              <p className="text-neutral-400">
                Speak directly with founder Akshat Soni on WhatsApp for instant project scoping.
              </p>
              
              <a
                href="https://wa.me/919510351986?text=Hello%20Akshat,%20I%20am%20interested%20in%20discussing%20a%20website%20or%20software%20project."
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-mono font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={onOpenContact}
                className="w-full py-2.5 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-mono font-bold text-xs flex items-center justify-center space-x-1 transition-colors cursor-pointer border border-neutral-700"
              >
                <span>Request Detailed Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono gap-4">
          <div>
            &copy; {new Date().getFullYear()} Dynamic Automations. Founded by Akshat Rajankumar Soni, Umreth, Gujarat.
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="text-emerald-400">● 7 Verified Invoices Delivered</span>
            <span>•</span>
            <span>100% Client Code Ownership</span>
            <span>•</span>
            <button
              onClick={handleShare}
              className="text-neutral-400 hover:text-white flex items-center space-x-1.5 cursor-pointer transition-colors px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800"
              title="Share or copy website link"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-300 font-bold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3 h-3 text-teal-400" />
                  <span>Share Website</span>
                </>
              )}
            </button>
            {onOpenAdmin && (
              <>
                <span>•</span>
                <button
                  onClick={onOpenAdmin}
                  className="text-teal-400 hover:text-teal-300 flex items-center space-x-1 cursor-pointer transition-colors"
                >
                  <Lock className="w-3 h-3" />
                  <span>Admin Portal</span>
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
