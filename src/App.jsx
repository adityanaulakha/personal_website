import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import HeroSection from './components/HeroSection';
// import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader.jsx';



function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload critical images
    const imageUrls = [
      // Add your critical image URLs here
    ];

    if (imageUrls.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;
    imageUrls.forEach(url => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setImagesLoaded(true);
        }
      };
      img.src = url;
    });
  }, []);

  useEffect(() => {
    let minTimerDone = false;
    let windowLoadDone = false;

    const maybeHide = () => {
      if (minTimerDone && windowLoadDone && imagesLoaded) setShowLoader(false);
    };

    // Shorter loader time for mobile devices
    const isMobile = window.innerWidth < 768;
    const loaderDuration = isMobile ? 1500 : 2500;

    const minTimer = setTimeout(() => {
      minTimerDone = true;
      maybeHide();
    }, loaderDuration);

    const onLoad = () => {
      windowLoadDone = true;
      maybeHide();
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad, { once: true });
    }

    return () => {
      clearTimeout(minTimer);
      window.removeEventListener('load', onLoad);
    };
  }, [imagesLoaded]);

  return (
    <>
      {/* Full-screen loader overlay; site renders behind it */}
      <Loader visible={showLoader} message="Preparing experience…" />
  {/* Desktop/Tablet nav */}
  <Navbar
      items={[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Skills', href: '#skills' },
              { label: 'Experience', href: '#experience' },
              { label: 'Achievements', href: '#achievements' },
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
          { label: 'Achievements', href: '#achievements' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' }
        ]}
        className="md:hidden"
      />
      <div
        id="home"
        className="pt-[calc(env(safe-area-inset-top,0px)+88px)] md:pt-0 scroll-mt-[calc(env(safe-area-inset-top,0px)+88px)] md:scroll-mt-24"
      >
        <HeroSection />
      </div>
      
      <div id="skills" className="scroll-mt-[calc(env(safe-area-inset-top,0px)+88px)] md:scroll-mt-24">
        <Skills />
      </div>
      <div id="experience" className="scroll-mt-[calc(env(safe-area-inset-top,0px)+88px)] md:scroll-mt-24">
        <Experience />
      </div>
      <div id="achievements" className="scroll-mt-[calc(env(safe-area-inset-top,0px)+88px)] md:scroll-mt-24">
        <Achievements />
      </div>
      <div id="projects" className="scroll-mt-[calc(env(safe-area-inset-top,0px)+88px)] md:scroll-mt-24">
        <Projects />
      </div>
      <div id="contact" className="scroll-mt-[calc(env(safe-area-inset-top,0px)+88px)] md:scroll-mt-24">
        <Contact />
      </div>
    </>
  )
}

export default App
