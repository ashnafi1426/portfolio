import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 w-12 h-12 bg-primary-500 hover:bg-secondary-900 text-white rounded-full shadow-large hover:shadow-xl flex items-center justify-center transition-all duration-300 z-50 ${
        isVisible 
          ? 'opacity-100 visible translate-y-0' 
          : 'opacity-0 invisible translate-y-4'
      } hover:-translate-y-1`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up-short text-xl"></i>
    </button>
  );
};

export default ScrollToTop;