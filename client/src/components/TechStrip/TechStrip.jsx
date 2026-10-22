import { technologiesStrip } from '../../data/portfolioData';

const TechStrip = () => {
  return (
    <div className="border-y border-slate-800/80 bg-[#070b1e]/60 py-4 overflow-hidden">
      <div className="container-site mb-2">
        <span className="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-slate-500">
          Core Technologies &amp; Frameworks
        </span>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-8 items-center py-1">
          {[...technologiesStrip, ...technologiesStrip, ...technologiesStrip].map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-300 px-3 py-1.5 rounded-lg bg-[#0e1538] border border-slate-800 shadow-sm shrink-0"
            >
              <i className={`bi ${tech.icon} text-accent`}></i>
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStrip;
