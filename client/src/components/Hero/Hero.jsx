import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { downloadCV } from '../../utils/downloadCV';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Fullstack Developer',
    'React Developer',
    'Node.js Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        
        if (displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = async () => {
    await downloadCV('Ashenafi_Sileshi_Resume.pdf');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-[#1a1f35] dark:to-gray-900 overflow-hidden pt-20 transition-colors duration-300">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Hero Text - Left Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="text-gray-900 dark:text-white text-lg sm:text-xl font-medium">
                Welcome <span className="inline-block animate-wave">👋</span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
            >
              <span className="text-gray-900 dark:text-white block">Hi, I'm</span>
              <span className="text-gray-900 dark:text-white block">Ashenafi</span>
            </motion.h1>

            {/* Animated Role */}
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-8 flex items-center justify-center lg:justify-start gap-2"
            >
              <span>{displayText}</span>
              <motion.span 
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-purple-600 dark:text-purple-400"
              >
                |
              </motion.span>
            </motion.h2>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('portfolio')} 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2"
              >
                View My Work
                <i className="bi bi-arrow-right"></i>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="px-8 py-4 bg-gray-200 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white font-semibold rounded-full border-2 border-gray-300 dark:border-white/20 hover:bg-gray-300 dark:hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Download CV
                <i className="bi bi-download"></i>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <motion.a 
                whileHover={{ scale: 1.2, y: -3 }}
                href="https://github.com/ashnafi1426" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-gray-200 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <i className="bi bi-github text-xl"></i>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, y: -3 }}
                href="https://www.linkedin.com/in/ashenafi-sileshi-3736aa362/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-gray-200 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <i className="bi bi-linkedin text-xl"></i>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, y: -3 }}
                href="https://t.me/ashe1426" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-gray-200 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <i className="bi bi-telegram text-xl"></i>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, y: -3 }}
                href="mailto:ashenafisileshi7@gmail.com" 
                className="w-12 h-12 bg-gray-200 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                <i className="bi bi-envelope text-xl"></i>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image - Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 relative"
          >
            <div className="relative w-full max-w-2xl">
              {/* Main Image Container - Workspace Setup */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="relative aspect-[4/3] w-full">
                  <img 
                    src="/images/ashuu.avif" 
                    alt="Ashenafi Sileshi - Developer Workspace"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                </div>
              </motion.div>

              {/* Floating Code Badge - Top Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -left-4 top-8 sm:top-12 bg-gradient-to-br from-purple-600 to-purple-700 text-white px-5 py-3 rounded-2xl shadow-xl"
                style={{ animation: 'float 3s ease-in-out infinite' }}
              >
                <i className="bi bi-code-slash text-2xl"></i>
              </motion.div>

              {/* Floating Code Badge - Top Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -right-4 top-4 sm:top-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white px-5 py-3 rounded-2xl shadow-xl"
                style={{ animation: 'float 3s ease-in-out infinite 1s' }}
              >
                <span className="text-xl font-mono">&lt;/&gt;</span>
              </motion.div>

              {/* Floating Laptop Badge - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -right-3 bottom-8 sm:bottom-12 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white px-5 py-3 rounded-2xl shadow-xl"
                style={{ animation: 'float 3s ease-in-out infinite 2s' }}
              >
                <i className="bi bi-laptop text-2xl"></i>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group"
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-white/30 rounded-full flex items-start justify-center p-2 group-hover:border-gray-600 dark:group-hover:border-white/60 transition-colors">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-gray-600 dark:bg-white/60 rounded-full"
              />
            </div>
          </button>
        </motion.div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }

        .animate-wave {
          display: inline-block;
          animation: wave 2s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

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

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;