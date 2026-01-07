import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Resume from '../../components/Resume/Resume';
import Portfolio from '../../components/Portfolio/Portfolio';
import Services from '../../components/Services/Services';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
};

export default Home;