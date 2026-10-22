import { technologiesStrip } from '../../data/portfolioData';

const TechStrip = () => {
  return (
    <div className="border-y border-slate-200 dark:border-white/[0.08] bg-slate-100/50 dark:bg-white/[0.02] py-4 overflow-hidden">
      <div className="container-site mb-2">
        <span className="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-slate-500 dark:text-slate-400">
          Core Technologies & Frameworks
        </span>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-8 items-center py-1">
          {[...technologiesStrip, ...technologiesStrip, ...technologiesStrip].map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg bg-white/70 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] shadow-sm shrink-0"
            >
              <i className={`bi ${tech.icon} text-cyan-500`}></i>
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStrip;
