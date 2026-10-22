import { motion } from 'framer-motion';
import { personalData } from '../../data/portfolioData';
import { downloadCV } from '../../utils/downloadCV';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleDownloadCV = async () => {
    await downloadCV('Ashenafi_Sileshi_Resume.pdf');
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Subtle Grid & Ambient Glow */}
      <div className="absolute inset-0 hero-grid-bg opacity-40 dark:opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] hero-glow-blob pointer-events-none blur-3xl opacity-60 dark:opacity-40" />

      {/* Floating Vertical Social Rail (Desktop) */}
      <aside className="hidden 2xl:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-slate-400 dark:to-slate-700" />
        <a
          href={personalData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
          aria-label="GitHub"
        >
          <i className="bi bi-github text-lg"></i>
        </a>
        <a
          href={personalData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
          aria-label="LinkedIn"
        >
          <i className="bi bi-linkedin text-lg"></i>
        </a>
        <a
          href={personalData.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
          aria-label="Telegram"
        >
          <i className="bi bi-telegram text-lg"></i>
        </a>
        <a
          href={`mailto:${personalData.email}`}
          className="p-2 text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
          aria-label="Email"
        >
          <i className="bi bi-envelope-fill text-lg"></i>
        </a>
        <div className="w-px h-12 bg-gradient-to-t from-transparent to-slate-400 dark:to-slate-700" />
      </aside>

      <div className="container-site relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-sm mb-6"
            >
              <span className="status-dot" />
              <span className="font-mono text-xs font-medium text-slate-700 dark:text-slate-300">
                {personalData.availability}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-extrabold text-[clamp(2.35rem,5.2vw,4.15rem)] leading-[1.08] tracking-[-0.03em] text-slate-900 dark:text-white max-w-[17ch] mb-6"
            >
              Engineering the web systems that businesses{' '}
              <span className="text-cyan-500">rely on</span>.
            </motion.h1>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-[48ch] mb-8"
            >
              Hi, I&apos;m <span className="font-semibold text-slate-900 dark:text-white">{personalData.name}</span>. 
              I design and develop full-stack platforms, scalable APIs, and clean user interfaces that hold up under real-world load.
            </motion.p>

            {/* CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="btn btn-primary"
              >
                <span>View Selected Work</span>
                <i className="bi bi-arrow-down-short text-lg"></i>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="btn btn-ghost"
              >
                <span>Get in touch</span>
                <i className="bi bi-chat-text text-sm"></i>
              </button>

              <button
                onClick={handleDownloadCV}
                className="btn btn-ghost"
                title="Download verified resume"
              >
                <i className="bi bi-file-earmark-pdf text-sm text-cyan-500"></i>
                <span>Download CV</span>
              </button>
            </motion.div>

            {/* Key Metrics / Stats */}
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 sm:gap-8 pt-6 border-t border-slate-200 dark:border-white/10 w-full max-w-lg"
            >
              {personalData.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <dd className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1">
                    {stat.value}
                  </dd>
                  <dt className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Hero Right Visual: Authentic Framed Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[370px]"
            >
              {/* Decorative Subtle Frame Backdrop */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-transparent blur-sm" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-2xl group">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src="/images/Ashu.jpg"
                    alt="Ashenafi Sileshi - Full Stack Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Location & Timezone Pill */}
                <div className="absolute bottom-3 left-3 right-3 py-2 px-3.5 rounded-xl bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <i className="bi bi-geo-alt-fill text-cyan-400"></i>
                    <span>Addis Ababa, Ethiopia</span>
                  </div>
                  <span className="font-mono text-[11px] text-cyan-400 font-semibold">{personalData.timezone}</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;