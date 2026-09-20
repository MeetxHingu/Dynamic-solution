import React, { useState } from 'react';
import { BookOpen, ChevronRight, Clock, ArrowRight, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

interface SeoArticlesSectionProps {
  onOpenContact: () => void;
}

export const SeoArticlesSection: React.FC<SeoArticlesSectionProps> = ({ onOpenContact }) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>('whatsapp-automation');

  const articles = [
    {
      id: 'whatsapp-automation',
      tag: 'Lead Generation',
      readTime: '4 min read',
      title: 'How WhatsApp Automation Bots Double Inquiries for Local Businesses in Gujarat',
      subtitle: 'Why traditional website contact forms lose 80% of leads and how a 24/7 WhatsApp response bot captures customers instantly.',
      highlights: [
        'Over 90% of Indian smartphone users prefer messaging businesses on WhatsApp over filling out static email forms.',
        'Immediate automated greetings with branch hours, services, and price lists increase same-day conversions.',
        'Direct synchronization with Google Sheets gives owners real-time customer numbers without complex CRM software.'
      ],
      content: `In local markets like Umreth, Anand, and across Gujarat, mobile traffic accounts for over 85% of visits to local business websites. When a prospective customer lands on a webpage looking for a doctor's appointment, a shop's inventory, or pricing, they want answers immediately.

Static contact forms that ask for "First Name, Last Name, Email, Subject, and Message" create unnecessary friction. Most visitors bounce without submitting. 

By integrating an automated WhatsApp Business Bot:
1. One-tap initiation: The customer taps a floating button and WhatsApp opens directly with a pre-filled greeting.
2. 24/7 Interactive Menu: The bot immediately replies with options: [1] Book Appointment, [2] View Price List, [3] Speak with Owner.
3. Automated Spreadsheet Logging: Every conversation logs the user's name, phone number, and inquiry into a secure Google Sheet, alerting the owner via SMS/Notification instantly.

Dynamic Automations deploys complete WhatsApp inquiry bots for businesses in under 24 hours starting at ₹1,500.`
    },
    {
      id: 'clinic-hospital-portals',
      tag: 'Healthcare Web Design',
      readTime: '5 min read',
      title: 'Essential Features for Hospital & Doctor Clinic Websites: Lessons from Umreth Healthcare Portals',
      subtitle: 'A breakdown of the critical digital requirements for medical institutions, based on our production deployment for Santram Hospital.',
      highlights: [
        'Dedicated OPD schedules and specialist doctor roster cards that load in under 1 second on 4G networks.',
        '1-tap emergency ambulance calling and Google Maps hospital navigation buttons.',
        'High-contrast accessible typography optimized for senior citizens and patient families.'
      ],
      content: `A medical clinic or hospital website serves a fundamentally different purpose than an ordinary commercial site. Patients and their families are often visiting under stress and urgently need clear, reliable information.

Key engineering pillars we implemented for Santram Hospital in Umreth include:
- Doctor Speciality Timetables: Clearly organized tables showing which consulting physicians (Cardiologist, Pediatrician, Orthopedic, General Surgeon) are available on specific days and visiting hours.
- Zero-Bloat Mobile Architecture: When emergency patients search for the hospital, bloated animations or heavy video files can delay loading by 5 to 8 seconds. We engineer lightweight pages that load in under 1.2 seconds even on patchy mobile connections.
- OPD Appointment & Inquiry Flow: Simple, clean booking forms that send patient details directly to hospital reception via WhatsApp or email, reducing waiting room bottlenecks.
- Local SEO & Google Business Profile Sync: Embedding official address coordinates, emergency contact lines, and Schema.org MedicalOrganization metadata so patients searching on Google Maps find verified information.`
    },
    {
      id: 'core-web-vitals',
      tag: 'Google Ranking & Speed',
      readTime: '4 min read',
      title: 'Why Fixing Website Bugs Fast Directly Boosts Your Google Search Ranking',
      subtitle: 'Understanding Google Core Web Vitals, mobile viewport penalties, and how rapid troubleshooting protects your search placement.',
      highlights: [
        'Google uses PageSpeed and Core Web Vitals (LCP, CLS, INP) as direct ranking factors for mobile search.',
        'Broken contact forms and Javascript console errors cause Google crawlers to flag pages as degraded.',
        'Even a 1-second delay in page responsiveness decreases mobile customer retention by over 20%.'
      ],
      content: `Many business owners invest in website design but notice their rankings dropping over time. In most cases, the culprit is unmaintained code, broken scripts, or unresponsive mobile styling.

Google evaluates websites using Core Web Vitals:
1. Largest Contentful Paint (LCP): How quickly the main content loads. Ideal is under 2.5 seconds.
2. Cumulative Layout Shift (CLS): Prevents elements from shifting unexpectedly while loading, which frustrates mobile users who accidentally click the wrong button.
3. Interaction to Next Paint (INP): Measures responsiveness when a user taps a button or navigation menu.

Common bugs that harm your search ranking:
- Broken submit buttons on contact forms that prevent leads from going through.
- Unoptimized 5MB banner images that choke mobile data connections.
- Expired or misconfigured SSL certificates causing Google Chrome to display full-screen "Your connection is not private" warning screens.

Our rapid bug fixing service diagnoses and resolves these critical issues within 24 to 48 hours for local and international clients.`
    },
    {
      id: 'amc-maintenance',
      tag: 'Maintenance & Security',
      readTime: '3 min read',
      title: 'Website AMC: What Every Small Business Owner Should Check Every Month',
      subtitle: 'The essential routine maintenance checklist that prevents website downtime, security breaches, and lost revenue.',
      highlights: [
        'Automated weekly database backups safeguard against server host failures and accidental deletions.',
        'Domain and SSL auto-renewals ensure your website never goes offline unexpectedly.',
        'Routine script and security patches protect customer data and maintain browser compatibility.'
      ],
      content: `Launching a website is not a one-time event; it is ongoing business infrastructure. Just like physical machinery or air conditioning requires periodic servicing, web software requires regular maintenance.

What our Annual Maintenance Contract (AMC) covers for businesses:
- Domain & DNS Health Monitoring: Ensuring nameservers, MX email records, and SSL certificates remain active without disruption.
- Content & Pricing Updates: Updating banners, festival announcements, doctor timings, or new product photos within hours of request.
- Security & Malware Scanning: Checking for unauthorized redirects, malicious scripts, and outdated third-party libraries.
- Routine Backups: Maintaining off-site cloud backups so that if a hosting provider experiences downtime, your business website can be restored in minutes.

For just ₹3,500/year, Dynamic Automations provides continuous peace of mind and priority support.`
    }
  ];

  const currentArticle = articles.find(a => a.id === selectedArticleId) || articles[0];

  return (
    <section id="insights" className="py-24 bg-[#090b0e] relative border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-teal-400 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE HUB & SEO GUIDES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Practical guides to growing your business online.
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            In-depth technical insights and local playbooks written by founder Akshat Soni. Learn how smart automation and clean code drive real revenue.
          </p>
        </div>

        {/* 2-Column Reader Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Article Selector Tabs (4 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
              Featured Articles:
            </div>
            {articles.map((art) => {
              const isSelected = art.id === selectedArticleId;
              return (
                <div
                  key={art.id}
                  onClick={() => setSelectedArticleId(art.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#121622] border-teal-500/70 shadow-lg shadow-teal-500/5'
                      : 'bg-[#0e1118] border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-teal-400">
                      {art.tag}
                    </span>
                    <span className="text-neutral-500 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <h3 className={`text-sm font-bold leading-snug transition-colors ${
                    isSelected ? 'text-white' : 'text-neutral-300'
                  }`}>
                    {art.title}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                    {art.subtitle}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs font-mono">
                    <span className={`flex items-center space-x-1 ${
                      isSelected ? 'text-teal-300 font-semibold' : 'text-neutral-500'
                    }`}>
                      <span>Read Full Guide</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Full Reader Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#0e1118] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <article>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-3">
                <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-teal-400 font-bold">
                  {currentArticle.tag}
                </span>
                <span className="text-neutral-500">•</span>
                <span className="text-neutral-400 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentArticle.readTime}</span>
                </span>
                <span className="text-neutral-500">•</span>
                <span className="text-neutral-400">Published by Akshat Soni</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                {currentArticle.title}
              </h2>

              <p className="mt-2 text-sm text-teal-300/90 font-medium">
                {currentArticle.subtitle}
              </p>

              {/* Takeaway Highlights Box */}
              <div className="my-6 p-4 rounded-xl bg-[#141824] border border-neutral-800 space-y-2">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  <span>Key Executive Takeaways</span>
                </div>
                {currentArticle.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Body Text */}
              <div className="text-sm text-neutral-300 leading-relaxed space-y-4 whitespace-pre-line font-normal">
                {currentArticle.content}
              </div>

              {/* Bottom Project CTA Box */}
              <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-neutral-400">Ready to implement this solution?</div>
                  <div className="text-sm font-bold text-white">Get a direct quote from Akshat Soni on WhatsApp</div>
                </div>

                <a
                  href={`https://wa.me/919510351986?text=${encodeURIComponent(`Hello Akshat, I read your guide on "${currentArticle.title}" and would like to implement this for my business.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-mono font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer shrink-0"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>
            </article>
          </div>

        </div>

      </div>
    </section>
  );
};
