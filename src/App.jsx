import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {

  return (
    <>
  {/* Desktop/Tablet nav */}
  <Navbar
      items={[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Skills', href: '#skills' },
              { label: 'Experience', href: '#experience' },
              { label: 'Projects', href: '#projects' },
              { label: 'Contact', href: '#contact' }
            ]}
            activeHref="#home" className="custom-nav hidden md:block" ease="power2.easeOut"
            baseColor="#4F58FF" pillColor="#000000" hoverColor="#4F58FF"
            hoveredPillTextColor="#ffffff" pillTextColor="#ffffff"
            />
      {/* Mobile-only nav */}
      <MobileNavbar
        items={[
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'Skills', href: '#skills' },
          { label: 'Experience', href: '#experience' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' }
        ]}
        className="md:hidden"
      />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}

export default App
