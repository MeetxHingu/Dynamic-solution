import React from 'react';
import { 
  Code, Smartphone, Server, Database, Flame, 
  Cpu, Cloud, Box, Terminal, Sparkles, Layers 
} from 'lucide-react';
import { TECH_STACKS } from '../data/agencyData';

const iconMap: Record<string, React.ElementType> = {
  Atom: Code,
  Code: Code,
  Smartphone: Smartphone,
  FileCode2: Terminal,
  Sparkles: Sparkles,
  Server: Server,
  Terminal: Terminal,
  Database: Database,
  Flame: Flame,
  Cpu: Cpu,
  Cloud: Cloud,
  Box: Box
};

export const TechStackGrid: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a0c10] relative border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-teal-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MODERN, PRODUCTION-TESTED TECH STACK</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Built with modern, maintainable stacks.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-400">
            We reject legacy spaghetti and obscure proprietary builders. 
            We build strictly with developer-adored modern frameworks that your in-house team can run with confidence.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {TECH_STACKS.map((tech) => {
            const Icon = iconMap[tech.icon] || Code;
            return (
              <div
                key={tech.name}
                className="bg-[#0e1118] border border-neutral-800/90 hover:border-neutral-700 p-4 rounded-xl flex flex-col items-center text-center group hover:bg-[#121622] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-teal-400 group-hover:border-teal-500/40 transition-colors mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-white group-hover:text-teal-300 transition-colors">
                  {tech.name}
                </div>
                <div className="text-[10px] font-mono text-neutral-500 mt-0.5">
                  {tech.category}
                </div>
                <span className="mt-2 px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[9px] font-mono text-teal-400">
                  {tech.badge}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
