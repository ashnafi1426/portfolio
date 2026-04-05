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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className={`${info.icon} text-2xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">{info.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm break-all">{info.value}</p>
              </a>
            ))}
          </div>

          {/* Email Me Button */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-12 shadow-lg text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-envelope-heart text-4xl"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to drop me an email!
              </p>
            </div>

            <a
              href="mailto:ashenafisileshi7@gmail.com"
              className="inline-flex items-center gap-3 bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg"
            >
              <i className="bi bi-envelope-fill text-xl"></i>
              <span>Email Me</span>
              <i className="bi bi-arrow-right text-xl"></i>
            </a>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
              ashenafisileshi7@gmail.com
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Connect With Me</h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-14 h-14 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
                >
                  <i className={`${social.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;