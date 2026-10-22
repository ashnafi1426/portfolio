import Hero from '../../components/Hero/Hero';
import TechStrip from '../../components/TechStrip/TechStrip';
import About from '../../components/About/About';
import Portfolio from '../../components/Portfolio/Portfolio';
import Skills from '../../components/Skills/Skills';
import Process from '../../components/Process/Process';
import Resume from '../../components/Resume/Resume';
import Services from '../../components/Services/Services';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <TechStrip />
      <About />
      <Portfolio />
      <Skills />
      <Process />
      <Resume />
      <Services />
      <Contact />
    </>
  );
};

export default Home;