import { personalData } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Stack', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.08] bg-slate-100/60 dark:bg-slate-950/80 py-12 transition-colors">
      <div className="container-site">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/[0.06]">
          
          {/* Brand Wordmark & Tagline */}
          <div className="text-center md:text-left">
            <span className="font-mono text-base font-bold text-slate-900 dark:text-white tracking-tight">
              ashenafi<span className="text-cyan-500">.</span>sileshi
            </span>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-sm">
              Engineering full-stack web platforms, scalable APIs, and clean digital experiences.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:border-cyan-500 transition-all text-sm"
              aria-label="GitHub profile"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:border-cyan-500 transition-all text-sm"
              aria-label="LinkedIn profile"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href={personalData.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:border-cyan-500 transition-all text-sm"
              aria-label="Telegram chat"
            >
              <i className="bi bi-telegram"></i>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            &copy; {currentYear} {personalData.name}. All rights reserved. Built with React &amp; Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors font-mono text-[11px] uppercase tracking-wider"
          >
            <span>Back to top</span>
            <i className="bi bi-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;