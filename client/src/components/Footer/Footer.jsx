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
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-[#070b1e] py-12 transition-colors">
      <div className="container-site">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand Wordmark & Tagline */}
          <div className="text-center md:text-left">
            <span className="font-mono text-base font-bold text-white tracking-tight">
              ashenafi<span className="text-accent">.</span>sileshi
            </span>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm">
              Engineering full-stack web platforms, scalable APIs, and clean digital experiences.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs sm:text-sm font-medium text-slate-400">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-white transition-colors"
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
              className="w-9 h-9 rounded-xl bg-[#0e1538] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all text-sm"
              aria-label="GitHub profile"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-[#0e1538] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all text-sm"
              aria-label="LinkedIn profile"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href={personalData.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-[#0e1538] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all text-sm"
              aria-label="Telegram chat"
            >
              <i className="bi bi-telegram"></i>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {personalData.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors font-mono text-[11px] uppercase tracking-wider"
          >
            <span>Back to top</span>
            <i className="bi bi-arrow-up text-[#ff5a36]"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;