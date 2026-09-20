import React, { useState } from 'react';
import { 
  Globe, Smartphone, Server, Cpu, Palette, ShieldCheck, 
  ArrowRight, Check, Sparkles, Layers, MessageSquare, Wrench, ShoppingCart, Zap 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem, ServiceCategory } from '../types';

interface ServicesSectionProps {
  onSelectServiceForScope: (service: ServiceItem) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Server,
  Cpu,
  Palette,
  ShieldCheck,
  MessageSquare,
  Wrench,
  ShoppingCart,
  Zap
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForScope }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const filteredServices = activeCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-[#0a0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-teal-400 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>DELIVERED & VERIFIED SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Practical tech solutions for real businesses.
            </h2>
            <p className="mt-3 text-base text-neutral-400 max-w-2xl">
              From hospital & clinic portals with patient inquiries to 24/7 WhatsApp response bots 
              and cross-border bug fixing — we deliver on time with zero fluff.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1.5 bg-[#121620] p-1.5 rounded-xl border border-neutral-800 self-start md:self-auto">
            {(['all', 'web', 'ai', 'backend', 'design'] as ServiceCategory[]).map((cat) => (
              <button
                key={cat}
                id={`filter-service-${cat}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all capitalize cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-teal-400 text-neutral-950 font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {cat === 'all' ? 'All Services' : cat === 'ai' ? 'WhatsApp / Bots' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <div
                key={service.id}
                className="group relative bg-[#0e1117] hover:bg-[#131722] border border-neutral-800 hover:border-neutral-700 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-black/50"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-teal-950/60 border border-teal-800/50 flex items-center justify-center text-teal-400 group-hover:scale-105 group-hover:bg-teal-900/50 transition-all">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    {service.badge && (
                      <span className="px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700 font-mono text-[11px] font-medium">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-teal-400/90 mt-1 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-6 pt-5 border-t border-neutral-800/80 space-y-2.5">
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                      Key Deliverables
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-8 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <div className="text-xs font-mono text-neutral-400">
                    Delivery: <span className="text-emerald-400 font-semibold">{service.avgTimeline}</span>
                  </div>
                  
                  <button
                    onClick={() => onSelectServiceForScope(service)}
                    className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-teal-400 hover:text-teal-300 transition-colors group/btn cursor-pointer"
                  >
                    <span>Calculate Cost</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
