import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com/ashnafi1426', icon: 'bi bi-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/ashenafi-sileshi-3736aa362/', icon: 'bi bi-linkedin', label: 'LinkedIn' },
    { href: 'https://t.me/ashe1426', icon: 'bi bi-telegram', label: 'Telegram' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">

          {/* Brand Section */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Ashenafi Sileshi
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Full Stack Developer crafting digital experiences with passion and precision. Let's build something amazing together.
            </p>
            <div className="flex gap-3 sm:gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <i className={`${social.icon} text-base sm:text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <i className="bi bi-geo-alt text-blue-500 mt-1 flex-shrink-0"></i>
                <span>Kombolcha, Ethiopia</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="bi bi-envelope text-blue-500 mt-1 flex-shrink-0"></i>
                <a href="mailto:ashenafisileshi7@gmail.com" className="hover:text-white transition-colors break-all">
                  ashenafisileshi7@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="bi bi-telephone text-blue-500 flex-shrink-0"></i>
                <a href="tel:+251968277909" className="hover:text-white transition-colors">
                  +251968277909
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 mb-6 sm:mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            <p>
              © {currentYear} <span className="text-white font-medium">Ashenafi Sileshi</span>. All Rights Reserved.
            </p>
            <p className="text-gray-500 mt-1">Built with React & Tailwind CSS</p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Back to Top <i className="bi bi-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;