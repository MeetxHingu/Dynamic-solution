import React, { useState } from 'react';
import { X, CheckCircle2, Send, Terminal, Sparkles, Clock, ShieldCheck, MessageSquare, Phone } from 'lucide-react';
import { PricingPlan } from '../types';
import { saveInquiry } from '../data/inquiryStorage';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: PricingPlan | null;
  estimatorSummary?: {
    platform: string;
    features: string[];
    timeline: string;
    estimatedCost: string;
    estimatedWeeks: string;
    squadRecommendation: string;
  } | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  estimatorSummary
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [budgetTier, setBudgetTier] = useState(estimatorSummary ? 'estimator-quote' : '₹10k-₹25k');
  const [timelinePreference, setTimelinePreference] = useState('Immediately (Within 24–48 hours)');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || (!email.trim() && !phone.trim())) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newEntry = saveInquiry({
        name,
        phone: phone || 'Not provided',
        email: email || 'Not provided',
        businessName,
        serviceRequested: estimatorSummary 
          ? `${estimatorSummary.platform} (${estimatorSummary.squadRecommendation})`
          : selectedPlan
          ? `Pricing Plan: ${selectedPlan.name}`
          : 'Custom Software & Web Development',
        budgetTier: estimatorSummary ? estimatorSummary.estimatedCost : budgetTier,
        timeline: estimatorSummary ? estimatorSummary.estimatedWeeks : timelinePreference,
        projectDescription: projectDescription || (estimatorSummary ? `Features: ${estimatorSummary.features.join(', ')}` : ''),
        source: estimatorSummary ? 'estimator' : 'contact_modal',
        status: 'new',
        notes: 'Submitted via website contact modal.'
      });
      setTicketId(newEntry.ticketId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Akshat, my name is ${name || 'Client'}. I would like to discuss a project: ${estimatorSummary ? estimatorSummary.platform : businessName || 'software service'}.`
    );
    window.open(`https://wa.me/919510351986?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#0d1016] border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8">
        
        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation Screen */
          <div className="py-8 text-center space-y-6 animate-scale-up">
            <div className="w-16 h-16 rounded-2xl bg-teal-950/80 border border-teal-500/60 flex items-center justify-center text-teal-400 mx-auto shadow-lg shadow-teal-500/10">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-emerald-400 mb-2">
                <span>Inquiry Registered</span>
                <span>•</span>
                <span className="font-bold text-white">{ticketId}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Project Scope Received!
              </h3>
              <p className="mt-3 text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{name}</span>. Akshat Rajankumar Soni (Founder, Dynamic Automations) will review your specifications and reply via WhatsApp/Phone <span className="text-teal-300 font-mono">{phone || email}</span> within 30 minutes.
              </p>
            </div>

            {/* Ticket Summary Box */}
            <div className="bg-[#121622] border border-neutral-800 rounded-xl p-4 text-left font-mono text-xs space-y-2 max-w-md mx-auto text-neutral-300">
              <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                <span className="text-neutral-500">Service:</span>
                <span className="text-white font-medium">
                  {estimatorSummary ? estimatorSummary.platform : 'Custom Software / Website'}
                </span>
              </div>
              <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                <span className="text-neutral-500">Turnaround:</span>
                <span className="text-teal-400 font-semibold">
                  {estimatorSummary ? estimatorSummary.estimatedWeeks : timelinePreference}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Estimated Cost:</span>
                <span className="text-emerald-400 font-semibold">
                  {estimatorSummary ? estimatorSummary.estimatedCost : budgetTier}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={openWhatsAppDirect}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-mono font-bold text-xs shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </button>
              
              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-mono font-bold text-xs transition-all cursor-pointer"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          /* Main Inquiry Form */
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-teal-400 mb-2">
              <Terminal className="w-4 h-4" />
              <span>DYNAMIC AUTOMATIONS · DIRECT INQUIRY</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white">
              Start your project with Akshat Soni.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Direct founder communication from Umreth, Gujarat. Transparent 50/50 milestone billing.
            </p>

            {/* Scope / Plan Banner if coming from Estimator or Pricing */}
            {(estimatorSummary || selectedPlan) && (
              <div className="my-5 p-4 rounded-xl bg-[#131722] border border-neutral-800 text-xs font-mono space-y-1.5">
                <div className="text-teal-400 font-bold uppercase tracking-wide flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Configured Scope Attached:</span>
                </div>
                {estimatorSummary && (
                  <div className="text-neutral-300">
                    <span className="text-white font-medium">{estimatorSummary.platform}</span> ({estimatorSummary.estimatedWeeks}) · Estimated: <span className="text-emerald-400 font-bold">{estimatorSummary.estimatedCost}</span>
                    <div className="text-[11px] text-neutral-400 mt-1">
                      Features: {estimatorSummary.features.join(', ')}
                    </div>
                  </div>
                )}
                {selectedPlan && (
                  <div className="text-neutral-300">
                    Selected Service: <span className="text-white font-bold">{selectedPlan.name}</span> ({selectedPlan.price} / {selectedPlan.billingPeriod})
                  </div>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-neutral-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Patel / Saifuddin Sahaji"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border border-neutral-800 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-neutral-300 mb-1.5">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210 / +1 (Canada)"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border border-neutral-800 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-neutral-300 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border border-neutral-800 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-neutral-300 mb-1.5">
                    Business / Hospital Name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Santram Clinic, Retail Shop"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border border-neutral-800 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-neutral-300 mb-1.5">
                    Project Budget Range
                  </label>
                  <select
                    value={budgetTier}
                    onChange={(e) => setBudgetTier(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border border-neutral-800 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                  >
                    {estimatorSummary && (
                      <option value="estimator-quote">Use Estimator Quote ({estimatorSummary.estimatedCost})</option>
                    )}
                    <option value="₹1,500–₹3,500">₹1,500 – ₹3,500 (WhatsApp Bot or Quick Fix)</option>
                    <option value="₹3,500–₹7,000">₹3,500 – ₹7,000 (Website Bug Fixing / AMC)</option>
                    <option value="₹12,000–₹25,000">₹12,000 – ₹25,000 (Full Custom Website / Portal)</option>
                    <option value="USD $50–$300">USD $50 – $300 (International Canada/US Client)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-neutral-300 mb-1.5">
                    Required Delivery Window
                  </label>
                  <select
                    value={timelinePreference}
                    onChange={(e) => setTimelinePreference(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border border-neutral-800 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                  >
                    <option value="Immediately (Within 24–48 hours)">Immediately (Within 24–48 hours)</option>
                    <option value="Within 1–2 weeks">Within 1–2 weeks</option>
                    <option value="This Month">This Month</option>
                    <option value="Need Consultation First">Need Consultation First</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-neutral-300 mb-1.5">
                  Project Notes or Current Website URL (Optional)
                </label>
                <textarea
                  rows={3}
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Tell us what you'd like to build, what bugs need fixing, or share existing links..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border border-neutral-800 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center space-x-1.5 text-[11px] font-mono text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>50% Advance · 50% on Live Handover</span>
                </div>

                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={openWhatsAppDirect}
                    className="px-4 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-emerald-400 font-mono text-xs flex items-center justify-center space-x-1.5 cursor-pointer border border-neutral-700"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-neutral-950 font-mono font-bold text-xs shadow-md shadow-teal-500/20 flex items-center justify-center space-x-2 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Project Scope</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
