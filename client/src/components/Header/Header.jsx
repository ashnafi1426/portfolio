import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/ashnafi1426', icon: 'bi bi-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/ashenafi-sileshi-3736aa362/', icon: 'bi bi-linkedin', label: 'LinkedIn' },
    { href: 'https://t.me/ashe1426', icon: 'bi bi-telegram', label: 'Telegram' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-200 dark:bg-gray-900/95 dark:border-gray-700' 
          : 'bg-white/90 backdrop-blur-sm dark:bg-gray-900/90'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="logo">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-secondary-900 hover:text-primary-500 transition-colors duration-300 dark:text-white"
            >
              Ashenafi Portfolio
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 group dark:text-gray-300 dark:hover:text-primary-400"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Right Side: Theme Toggle + Social Links */}
          <div className="hidden xl:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 bg-gray-100 hover:bg-primary-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary-500"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <i className="bi bi-sun-fill text-lg"></i>
              ) : (
                <i className="bi bi-moon-fill text-lg"></i>
              )}
            </button>

            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 bg-gray-100 hover:bg-primary-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary-500"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 hover:text-primary-500 hover:bg-gray-100 rounded-lg transition-colors duration-300 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <i className="bi bi-sun-fill text-xl"></i>
              ) : (
                <i className="bi bi-moon-fill text-xl"></i>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700 hover:text-primary-500 hover:bg-gray-100 rounded-lg transition-colors duration-300 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle mobile menu"
            >
              <i className={`text-xl ${isMobileMenuOpen ? 'bi bi-x' : 'bi bi-list'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 pb-4' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-colors duration-300 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;