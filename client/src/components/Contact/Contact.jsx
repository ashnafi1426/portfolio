const Contact = () => {
  const contactInfo = [
    {
      icon: 'bi bi-envelope-at',
      title: 'Email',
      value: 'ashenafisileshi7@gmail.com',
      link: 'mailto:ashenafisileshi7@gmail.com'
    },
    {
      icon: 'bi bi-telephone',
      title: 'Phone',
      value: '+251968277909',
      link: 'tel:+251968277909'
    },
    {
      icon: 'bi bi-geo-alt',
      title: 'Location',
      value: 'Kombolcha, Ethiopia',
      link: 'https://www.google.com/maps/search/Kombolcha+Ethiopia'
    }
  ];

  const socialLinks = [
    { href: 'https://github.com/ashnafi1426', icon: 'bi bi-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/ashenafi-sileshi-3736aa362/', icon: 'bi bi-linkedin', label: 'LinkedIn' },
    { href: 'https://t.me/ashe1426', icon: 'bi bi-telegram', label: 'Telegram' },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Email CTA */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-xl text-center mb-12 sm:mb-16">
            <div className="mb-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className="bi bi-envelope-heart text-3xl sm:text-4xl"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 px-4">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to drop me an email!
              </p>
            </div>

            <a
              href="mailto:ashenafisileshi7@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-8 sm:px-10 rounded-xl hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-base sm:text-lg"
            >
              <i className="bi bi-envelope-fill text-xl"></i>
              <span>Send Me an Email</span>
              <i className="bi bi-arrow-right text-xl"></i>
            </a>

            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-6">
              ashenafisileshi7@gmail.com
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className={`${info.icon} text-2xl sm:text-3xl`}></i>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">{info.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center break-all px-2">{info.value}</p>
              </a>
            ))}
          </div>

          {/* Social Links Section */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-10 shadow-lg">
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6 sm:mb-8">Connect With Me</h4>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex flex-col items-center"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg mb-2">
                    <i className={`${social.icon} text-2xl sm:text-3xl`}></i>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 font-medium">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <h5 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">Ashenafi Sileshi</h5>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Full Stack Developer</p>
              </div>
              
              <div className="text-center sm:text-right">
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-1">
                  © {new Date().getFullYear()} All rights reserved
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                  Built with React & Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;