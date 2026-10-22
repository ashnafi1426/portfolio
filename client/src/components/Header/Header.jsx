import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { personalData } from '../../data/portfolioData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { currentTheme, selectTheme, themes } = useTheme();
  const themeMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'projects', 'skills', 'process', 'services', 'contact'];
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

  // Close theme menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target)) {
        setIsThemeOpen(false);
      }
    };
    if (isThemeOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isThemeOpen]);

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
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#0a0e27] backdrop-blur-md border-b border-slate-800/80 shadow-md'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav aria-label="Main Navigation" className="container-site flex items-center justify-between h-16 sm:h-20">
        
        {/* Brand Wordmark with chip logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2.5 font-mono text-sm sm:text-[0.9375rem] font-semibold text-white tracking-tight group focus:outline-none"
          aria-label="Ashenafi Sileshi, home"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0e1635] border border-cyan-500/40 flex items-center justify-center text-accent font-mono text-xs font-bold shadow-[0_0_12px_var(--accent-alpha)] transition-shadow">
            <span className="tracking-tighter">AS</span>
          </div>
          <span>
            ashenafi<span className="text-accent">.</span>sileshi
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
        <div className="flex items-center gap-2.5 sm:gap-3 relative" ref={themeMenuRef}>
          
          {/* Theme Palette Button with Popover */}
          <div className="relative">
            <button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                isThemeOpen
                  ? 'text-white bg-slate-800/80 ring-1 ring-slate-700'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
              aria-label="Change color theme"
              aria-expanded={isThemeOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
              </svg>
            </button>

            {/* Reference Theme Picker Dropdown Popover */}
            {isThemeOpen && (
              <div className="absolute right-0 top-full mt-3 w-[290px] sm:w-[316px] rounded-[22px] p-4 sm:p-5 bg-[#0b1022]/95 backdrop-blur-2xl border border-slate-700/60 shadow-2xl shadow-black/80 z-50 animate-fade-in">
                {/* Header title */}
                <div className="font-mono text-[11px] font-semibold text-slate-400 tracking-[0.28em] uppercase mb-3.5 px-0.5">
                  T H E M E
                </div>

                {/* 2 Rows of 4 Themes */}
                <div className="grid grid-cols-4 gap-2">
                  {themes.map((t) => {
                    const isSelected = currentTheme === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => selectTheme(t.id)}
                        className={`group flex flex-col items-center p-1.5 rounded-xl transition-all duration-150 focus:outline-none ${
                          isSelected
                            ? 'border bg-white/[0.02]'
                            : 'border border-transparent hover:bg-white/[0.04]'
                        }`}
                        style={{
                          borderColor: isSelected ? t.accent : 'transparent',
                        }}
                        aria-label={`Select ${t.name} theme`}
                      >
                        {/* Theme Preview Square */}
                        <div
                          className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg relative flex items-center justify-center transition-transform group-hover:scale-[1.02]"
                          style={{ backgroundColor: t.canvas }}
                        >
                          {/* Checkmark in top left when selected */}
                          {isSelected && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke={t.accent}
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="absolute top-1.5 left-1.5"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          )}

                          {/* Accent dot in bottom right */}
                          <span
                            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full absolute bottom-1.5 right-1.5 shadow-sm"
                            style={{ backgroundColor: t.dot }}
                          />
                        </div>

                        {/* Theme Name label */}
                        <span className={`text-[11px] font-mono mt-1.5 leading-tight transition-colors ${
                          isSelected ? 'text-white font-medium' : 'text-slate-400 group-hover:text-slate-200'
                        }`}>
                          {t.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Dynamic Solid "Get in touch" Button */}
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
            ? 'max-h-[600px] opacity-100 bg-[#0a0e27] border-slate-800 shadow-2xl shadow-black/90'
            : 'max-h-0 opacity-0 border-transparent pointer-events-none'
        }`}
      >
        <div className="container-site py-4 space-y-2">
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

          {/* Mobile Theme selector strip */}
          <div className="pt-3 border-t border-slate-800">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-2 px-3">
              Theme Palette
            </span>
            <div className="grid grid-cols-4 gap-2 px-3 pb-3">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => selectTheme(t.id)}
                  className={`p-2 rounded-lg border text-center flex flex-col items-center gap-1 ${
                    currentTheme === t.id ? 'border-accent bg-white/[0.06]' : 'border-slate-800'
                  }`}
                  style={{ backgroundColor: t.canvas }}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.dot }} />
                  <span className="text-[10px] font-mono text-slate-300">{t.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Social Links */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-center gap-4 px-3 py-1">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0e1538] border border-slate-800 text-slate-400 hover:text-white text-sm"
              aria-label="GitHub profile"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0e1538] border border-slate-800 text-slate-400 hover:text-white text-sm"
              aria-label="LinkedIn profile"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href={personalData.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0e1538] border border-slate-800 text-slate-400 hover:text-white text-sm"
              aria-label="Telegram chat"
            >
              <i className="bi bi-telegram"></i>
            </a>
          </div>

          <div className="pt-2">
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