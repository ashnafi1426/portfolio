import { motion } from 'framer-motion';
import { downloadCV } from '../../utils/downloadCV';

const About = () => {
  const personalInfo = [
    { label: 'Name', value: 'Ashenafi Sileshi', icon: 'bi-person-fill' },
    { label: 'Phone', value: '+251 968 277 909', icon: 'bi-telephone-fill' },
    { label: 'Email', value: 'ashenafisileshi7@gmail.com', icon: 'bi-envelope-fill' },
    { label: 'Location', value: 'Addis Ababa, Ethiopia', icon: 'bi-geo-alt-fill' },
    { label: 'Age', value: '21 Years', icon: 'bi-calendar-check-fill' },
    { label: 'Occupation', value: 'Fullstack Developer', icon: 'bi-code-square' }
  ];

  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const handleDownloadCV = async () => {
    await downloadCV('Ashenafi_Sileshi_Resume.pdf');
  };

  return (
    <section id="about" className="relative py-20 md:py-28 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Who I Am
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate Fullstack Developer crafting elegant digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-20 items-center max-w-7xl mx-auto">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group flex justify-center lg:justify-start px-4 sm:px-0"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              {/* Main Image */}
              <div className="relative w-full aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/Ashu.jpg"
                  alt="Ashenafi Sileshi"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl sm:rounded-3xl -z-10 opacity-20"></div>
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl sm:rounded-3xl -z-10 opacity-20"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Fullstack Developer & Problem Solver
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-4 leading-relaxed">
                I am a third-year Software Engineering student at KIOT (Kombolcha Institute of Technology). 
                When I began my studies, I was deeply curious about how websites work. What started as a simple 
                curiosity turned into a burning passion for building elegant, efficient, and scalable web applications.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                I specialize in creating modern web applications using React, Node.js, Express, and PostgreSQL. 
                My focus is on writing clean, maintainable code that solves real-world problems.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200 dark:border-gray-700"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Personal Info Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-2 sm:gap-3 bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white shrink-0">
                    <i className={`bi ${info.icon} text-sm sm:text-lg`}></i>
                  </div>
                  <div className="overflow-hidden min-w-0">
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium mb-0.5">{info.label}</p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-900 dark:text-white font-semibold truncate" title={info.value}>
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg sm:rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <i className="bi bi-download mr-2"></i>
                Download CV
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-600 rounded-lg sm:rounded-xl hover:bg-gray-900 dark:hover:bg-gray-700 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <i className="bi bi-envelope mr-2"></i>
                Contact Me
              </a>
            </motion.div>
          </motion.div>

        </div>
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

export default About;