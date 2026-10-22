import { motion } from 'framer-motion';
import { personalData } from '../../data/portfolioData';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#0a0e27]">
      {/* Background Subtle Grid & Ambient Aurora */}
      <div className="absolute inset-0 hero-grid-bg opacity-75 pointer-events-none" />
      <div className="hero-aurora" aria-hidden="true" />

      {/* Floating Vertical Social Rail (Desktop) */}
      <aside className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-40">
        <div className="w-px h-14 bg-gradient-to-b from-transparent to-slate-700" />
        <a
          href={personalData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-400 hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
          aria-label="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>
        <a
          href={personalData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-400 hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a
          href={`mailto:${personalData.email}`}
          className="p-2 text-slate-400 hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
          aria-label="Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </a>
        <div className="w-px h-14 bg-gradient-to-t from-transparent to-slate-700" />
      </aside>

      <div className="container-site relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-slate-800 bg-[#12193b]/70 backdrop-blur-sm mb-6"
            >
              <span className="status-dot" />
              <span className="font-mono text-xs text-slate-400">
                Available for new projects
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-[clamp(2.5rem,5.2vw,4.25rem)] leading-[1.08] tracking-[-0.03em] text-white max-w-[16ch] mb-6"
            >
              Building the systems businesses <span className="text-accent">run on</span>.
            </motion.h1>

            {/* Subtitle Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-[1.0625rem] text-slate-400 leading-relaxed max-w-[46ch] mb-8"
            >
              I&apos;m {personalData.name}, a full-stack engineer building ERP platforms, multi-tenant SaaS, and workflow automation that hold up when the edge cases show up.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="btn btn-primary px-6 py-3 rounded-xl font-semibold text-sm"
              >
                View selected work
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="btn btn-ghost px-6 py-3 rounded-xl text-sm font-medium"
              >
                Get in touch
              </button>
            </motion.div>

            {/* Key Metrics / Stats with vertical dividers */}
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-4 w-full max-w-xl"
            >
              <div className="border-r border-slate-800/80 pr-4 sm:pr-6">
                <dd className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                  3+
                </dd>
                <dt className="text-[11px] font-mono tracking-wider uppercase text-slate-500">
                  YEARS EXPERIENCE
                </dt>
              </div>

              <div className="border-r border-slate-800/80 pr-4 sm:pr-6">
                <dd className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                  10+
                </dd>
                <dt className="text-[11px] font-mono tracking-wider uppercase text-slate-500">
                  SYSTEMS SHIPPED
                </dt>
              </div>

              <div>
                <dd className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                  100%
                </dd>
                <dt className="text-[11px] font-mono tracking-wider uppercase text-slate-500">
                  CLIENT SATISFACTION
                </dt>
              </div>
            </motion.dl>

          </div>

          {/* Hero Right Column: Photo Frame matching reference */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="w-[280px] sm:w-[330px] lg:w-[370px]"
            >
              <div className="rounded-3xl overflow-hidden border border-slate-800 bg-[#0d1433] shadow-2xl">
                {/* Photo */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-[#11183b] to-[#0a0f28]">
                  <img
                    src="/images/Ashu.jpg"
                    alt={`${personalData.name}, full-stack systems engineer`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1433] via-transparent to-transparent opacity-60" />
                </div>

                {/* Bottom Metadata Bar */}
                <div className="px-5 py-3 bg-[#0a0f28]/95 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Addis Ababa, Ethiopia</span>
                  <span className="font-mono text-[11px] text-slate-400">UTC+3</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Center Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 pointer-events-none" aria-hidden="true">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate-500">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--accent)] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;