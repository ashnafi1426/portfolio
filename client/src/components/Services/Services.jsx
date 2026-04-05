import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "bi-code-slash",
      title: "Web Development",
      description: "Building responsive and modern web applications using the latest technologies like React, Node.js, and PostgreSQL.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Fast Performance",
        "SEO Optimized"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      icon: "bi-palette-fill",
      title: "Frontend Development",
      description: "Creating beautiful and intuitive user interfaces with React, Tailwind CSS, and modern JavaScript frameworks.",
      features: [
        "React & Vite",
        "Tailwind CSS",
        "Interactive UI",
        "Cross-browser Compatible"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      icon: "bi-server",
      title: "Backend Development",
      description: "Developing robust server-side applications with Node.js, Express, and database management systems.",
      features: [
        "RESTful APIs",
        "Database Design",
        "Authentication",
        "Server Management"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      icon: "bi-rocket-takeoff-fill",
      title: "Full-Stack Solutions",
      description: "End-to-end development services from concept to deployment, handling both frontend and backend.",
      features: [
        "Complete Solutions",
        "Cloud Deployment",
        "Maintenance",
        "Technical Support"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      icon: "bi-phone-fill",
      title: "Responsive Design",
      description: "Ensuring your website looks perfect on all devices - desktop, tablet, and mobile.",
      features: [
        "Mobile-First",
        "Adaptive Layouts",
        "Touch Optimized",
        "Performance Tuned"
      ],
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 6,
      icon: "bi-tools",
      title: "Website Maintenance",
      description: "Ongoing support and maintenance to keep your website running smoothly and up-to-date.",
      features: [
        "Bug Fixes",
        "Updates",
        "Security Patches",
        "Performance Monitoring"
      ],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Services I Offer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development services to bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-xl sm:text-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="relative space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br ${service.color} text-white mr-3 flex-shrink-0`}>
                        <i className="bi bi-check2 text-xs font-bold"></i>
                      </span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative Corner */}
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life with modern web technologies
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-white text-blue-600 font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-xl group"
            >
              Get In Touch
              <i className="bi bi-arrow-right ml-2 sm:ml-3 text-lg sm:text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
            </a>
          </div>
        </motion.div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        .animate-blob {
          animation: blob 20s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Services;
