import React, { useState, useEffect } from 'react';
import { Terminal, ArrowUpRight, Menu, X, Sparkles, CheckCircle2, MessageSquare, Phone, Lock } from 'lucide-react';
import { FOUNDER_INFO } from '../data/agencyData';

interface NavbarProps {
  onOpenEstimator: () => void;
  onOpenContact: () => void;
  onOpenAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator, onOpenContact, onOpenAdmin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090b0e]/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a href="#" className="flex items-center space-x-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-black font-bold shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-200">
                <Terminal className="w-5 h-5 text-neutral-950 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <span className="font-mono text-base sm:text-lg font-bold tracking-tight text-white">
                    dynamic<span className="text-teal-400">.automations</span>
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 -mt-1 hidden sm:block">
                  Umreth, Gujarat · By Akshat Soni
                </span>
              </div>
            </a>

            {/* Live Availability Badge */}
            <div className="hidden lg:flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px] text-neutral-400">
                Status: <span className="text-emerald-400 font-medium">Taking New Client Projects</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-neutral-900/60 border border-neutral-800/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <a
              href="#services"
              className="px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded-full transition-colors"
            >
              Services
            </a>
            <a
              href="#invoices-ledger"
              className="px-3 py-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 rounded-full transition-colors font-mono"
            >
              ₹ Ledger
            </a>
            <a
              href="#audit"
              className="px-3 py-1.5 text-xs font-medium text-amber-300 hover:text-white hover:bg-amber-950/40 rounded-full transition-colors"
            >
              Free Audit
            </a>
            <a
              href="#insights"
              className="px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded-full transition-colors"
            >
              SEO Guides
            </a>
            <a
              href="#estimator"
              className="px-3 py-1.5 text-xs font-medium text-teal-400 hover:text-teal-300 hover:bg-teal-950/40 rounded-full transition-colors flex items-center space-x-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>₹ Calculator</span>
            </a>
            <a
              href="#pricing"
              className="px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded-full transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded-full transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center space-x-2.5">
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="px-2.5 py-2 text-xs font-mono text-neutral-400 hover:text-teal-300 hover:bg-neutral-800/80 border border-neutral-800 rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer"
                title="Founder Admin Portal (Inquiries Database)"
              >
                <Lock className="w-3.5 h-3.5 text-teal-400" />
                <span className="hidden xl:inline">Admin</span>
              </button>
            )}

            <a
              href={FOUNDER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-mono font-medium text-emerald-300 hover:text-white hover:bg-emerald-950/50 border border-emerald-500/40 rounded-lg transition-all flex items-center space-x-1.5"
              title="Chat directly with Akshat Soni on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              id="nav-btn-start-project"
              onClick={onOpenContact}
              className="relative group overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 text-neutral-950 text-xs font-bold font-mono tracking-wide shadow-sm hover:shadow-teal-500/20 hover:scale-[1.02] transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <span>Get Project Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={FOUNDER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono flex items-center space-x-1"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
            </a>
            <button
              onClick={onOpenContact}
              className="px-2.5 py-1.5 rounded-md bg-teal-400 text-neutral-950 text-xs font-bold font-mono"
            >
              Quote
            </button>
            <button
              id="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-neutral-800/80 bg-[#0c0e12] rounded-xl px-4 space-y-3 shadow-xl">
            <div className="flex items-center justify-between py-1 text-xs text-neutral-400 font-mono">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Akshat Soni · Umreth, Gujarat</span>
              </div>
              <span className="text-emerald-400 font-bold">{FOUNDER_INFO.phone}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-neutral-300 hover:bg-neutral-800"
              >
                Services
              </a>
              <a
                href="#invoices-ledger"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-emerald-300 hover:bg-neutral-800 font-mono"
              >
                ₹ Invoices
              </a>
              <a
                href="#case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-neutral-300 hover:bg-neutral-800"
              >
                Delivered Work
              </a>
              <a
                href="#showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-teal-300 hover:bg-neutral-800 font-bold"
              >
                Visualizer
              </a>
              <a
                href="#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-teal-400 hover:bg-neutral-800"
              >
                ₹ Cost Estimator
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-neutral-300 hover:bg-neutral-800"
              >
                Pricing Plans
              </a>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={FOUNDER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-bold flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Message on WhatsApp (+91 9510351986)</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 rounded-lg bg-teal-400 text-neutral-950 text-xs font-mono font-bold"
              >
                Request Free Consultation
              </button>

              {onOpenAdmin && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="w-full py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-teal-300 text-xs font-mono flex items-center justify-center space-x-2"
                >
                  <Lock className="w-3.5 h-3.5 text-teal-400" />
                  <span>Founder Admin Panel (Leads DB)</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
