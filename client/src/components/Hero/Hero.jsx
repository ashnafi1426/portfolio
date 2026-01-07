import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Full-Stack Developer',
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

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-primary overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e87532' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Text */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              I am a{' '}
              <span className="text-gradient relative">
                {displayText}
                <span className="animate-pulse text-primary-500">|</span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Turning ideas into clean and functional web applications. 
              A Full-Stack Developer specializing in React, Node.js, and modern web technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="btn btn-primary group"
              >
                View My Work
                <i className="bi bi-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="btn btn-outline group"
              >
                Let's Connect
                <i className="bi bi-chat-dots ml-2 transition-transform group-hover:scale-110"></i>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right animation-delay-400">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-900 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <div className="w-80 h-96 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden shadow-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  {/* Updated image with ui-avatars fallback */}
                  <img 
                    src="/images/ashuu.avif" 
                    alt="Ashenafi Sileshi - Full Stack Developer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://ui-avatars.com/api/?name=Ashenafi+Sileshi&size=400&background=e87532&color=ffffff&bold=true';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up animation-delay-800">
          <button 
            onClick={() => scrollToSection('about')}
            className="w-12 h-12 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 animate-bounce-slow"
            aria-label="Scroll to about section"
          >
            <i className="bi bi-chevron-down text-lg"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;