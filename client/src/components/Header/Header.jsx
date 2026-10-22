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
      setIsScrolled(window.scrollY > 30);

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
          ? 'bg-[#0a0e27]/90 dark:bg-[#0a0e27]/90 bg-white/90 backdrop-blur-md border-b border-slate-800/80 dark:border-slate-800/80 shadow-md'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav aria-label="Main Navigation" className="container-site flex items-center justify-between h-16 sm:h-20">
        
        {/* Brand Wordmark with chip logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2.5 font-mono text-sm sm:text-[0.9375rem] font-semibold text-slate-900 dark:text-white tracking-tight group focus:outline-none"
          aria-label="Ashenafi Sileshi, home"
        >
          <div className="w-7 h-7 rounded-md bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono text-[11px] font-bold shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M7 7h.01"></path>
              <path d="M17 7h.01"></path>
              <path d="M7 17h.01"></path>
              <path d="M17 17h.01"></path>
            </svg>
          </div>
          <span>
            ashenafi<span className="text-[#ff5a36]">.</span>sileshi
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-[0.9375rem] font-medium transition-colors focus:outline-none ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Palette Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors focus:outline-none"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
            </svg>
          </button>

          {/* Solid Coral "Get in touch" Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:inline-flex btn btn-primary text-xs sm:text-sm font-semibold py-2 px-4 rounded-lg"
          >
            Get in touch
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800/60 transition-colors focus:outline-none"
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
            ? 'max-h-96 opacity-100 bg-[#0a0e27]/98 border-slate-800 shadow-2xl'
            : 'max-h-0 opacity-0 border-transparent pointer-events-none'
        }`}
      >
        <div className="container-site py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <i className="bi bi-chevron-right text-xs text-slate-500"></i>
            </button>
          ))}
          <div className="pt-3 border-t border-slate-800">
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