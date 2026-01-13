import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://twitter.com', icon: 'bi bi-twitter-x', label: 'Twitter' },
    { href: 'https://facebook.com', icon: 'bi bi-facebook', label: 'Facebook' },
    { href: 'https://instagram.com', icon: 'bi bi-instagram', label: 'Instagram' },
    { href: 'https://linkedin.com', icon: 'bi bi-linkedin', label: 'LinkedIn' },
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
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Ashenafi Portfolio
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Crafting digital experiences with passion and precision. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
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
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <i className="bi bi-geo-alt text-blue-500 mt-1"></i>
                <span>Kombolcha, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="bi bi-envelope text-blue-500"></i>
                <a href="mailto:ashenafisileshi7@gmail.com" className="hover:text-white transition-colors">
                  ashenafisileshi7@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="bi bi-telephone text-blue-500"></i>
                <a href="tel:+251968277909" className="hover:text-white transition-colors">
                  +251968277909
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get the latest updates and news.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-300 placeholder-gray-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <i className="bi bi-send-fill text-sm"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>
              © {currentYear} <span className="text-white font-medium">Ashenafi Sileshi</span>. All Rights Reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <i className={`${social.icon} text-lg`}></i>
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
          >
            Back to Top <i className="bi bi-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;