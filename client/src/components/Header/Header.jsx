import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { personalData } from '../../data/portfolioData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'projects', 'skills', 'process', 'journey', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Work' },
    { id: 'skills', label: 'Stack' },
    { id: 'process', label: 'Process' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0e1a]/85 dark:bg-[#0a0e1a]/90 bg-white/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/[0.08] shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav aria-label="Main Navigation" className="container-site flex items-center justify-between h-16 sm:h-20">
        {/* Brand Wordmark */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2.5 font-mono text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight group focus:outline-none"
          aria-label="Ashenafi Sileshi, home"
        >
          <span className="w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold transition-transform group-hover:scale-105">
            AS
          </span>
          <span className="group-hover:text-cyan-500 transition-colors">
            ashenafi<span className="text-cyan-500">.</span>sileshi
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-all duration-200 relative py-1 focus:outline-none ${
                  isActive
                    ? 'text-cyan-600 dark:text-cyan-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500 rounded-full animate-fade-in" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors focus:outline-none"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? (
              <i className="bi bi-sun-fill text-base text-amber-400"></i>
            ) : (
              <i className="bi bi-moon-stars-fill text-base text-slate-700"></i>
            )}
          </button>

          {/* Contact Direct CTA Button (Desktop) */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:inline-flex btn btn-primary text-xs sm:text-sm font-medium py-2 px-4 rounded-lg"
          >
            <span>Get in touch</span>
            <i className="bi bi-arrow-up-right text-xs"></i>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <i className={`text-xl ${isMobileMenuOpen ? 'bi bi-x-lg' : 'bi bi-list'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden border-b ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100 bg-[#0a0e1a]/98 dark:bg-[#0a0e1a]/98 bg-white/98 border-slate-200 dark:border-white/[0.08] shadow-2xl'
            : 'max-h-0 opacity-0 border-transparent pointer-events-none'
        }`}
      >
        <div className="container-site py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <i className="bi bi-chevron-right text-xs text-slate-400"></i>
            </button>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-white/[0.08]">
            <a
              href={`mailto:${personalData.email}`}
              className="btn btn-primary w-full text-center py-2.5 text-sm"
            >
              <span>Send Email Directly</span>
              <i className="bi bi-envelope-fill ml-2 text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;