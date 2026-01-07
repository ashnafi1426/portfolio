import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://twitter.com', icon: 'bi bi-twitter-x', label: 'Twitter' },
    { href: 'https://facebook.com', icon: 'bi bi-facebook', label: 'Facebook' },
    { href: 'https://instagram.com', icon: 'bi bi-instagram', label: 'Instagram' },
    { href: 'https://linkedin.com', icon: 'bi bi-linkedin', label: 'LinkedIn' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Copyright */}
          <div>
            <p className="text-gray-300">
              © {currentYear}{' '}
              <span className="text-primary-500 font-semibold">Ashenafi Portfolio</span>
              . All Rights Reserved
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 bg-white/10 hover:bg-primary-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          {/* Credits */}
          <div className="text-sm text-gray-400">
            <p>
              Designed with{' '}
              <span className="text-red-400 animate-pulse">❤️</span>
              {' '}by{' '}
              <button
                onClick={scrollToTop}
                className="text-primary-500 hover:text-white transition-colors duration-300 underline"
              >
                Ashenafi Sileshi
              </button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;