import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/agencyData';

interface FaqSectionProps {
  onOpenContact: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#090b0e] relative border-t border-neutral-850">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-teal-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Everything you need to know about working with us.
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Clear terms, zero legal surprises, and 100% intellectual property ownership.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#0e1118] border border-neutral-800 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-teal-400">
                      {faq.category}
                    </span>
                    <span className="text-base font-semibold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-teal-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-neutral-800/80 text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#0f131d] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-teal-950/60 border border-teal-800/60 flex items-center justify-center text-teal-400 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Have a specialized technical question?</div>
              <div className="text-xs text-neutral-400">Speak directly with one of our engineering partners.</div>
            </div>
          </div>
          <button
            onClick={onOpenContact}
            className="px-4 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-mono font-medium text-neutral-200 border border-neutral-700 transition-colors shrink-0"
          >
            Direct Inquiry
          </button>
        </div>

      </div>
    </section>
  );
};
