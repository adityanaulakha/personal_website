import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import HeroSection from './Pages/HeroSection.jsx';
import About from './Pages/About.jsx';
import Skills from './Pages/Skills.jsx';
import Experience from './Pages/Experience.jsx';
import Achievements from './Pages/Achievements.jsx';
import Projects from './Pages/Projects.jsx';
import Contact from './Pages/Contact.jsx';
import Loader from './components/Loader.jsx';



function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Always start at top on reload and disable browser scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // If URL has a hash, remove it so we don't jump to an anchor on reload
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);
  
  // Global reveal animation (runs after loader hides)
  const contentVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

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

  // After loader hides, ensure we are still at the top
  useEffect(() => {
    if (!showLoader) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
    }
  }, [showLoader]);

  return (
    <>
      {/* Full-screen loader overlay; site renders behind it */}
      <Loader visible={showLoader} message="Preparing experience…" />
      <Analytics />
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={showLoader ? 'hidden' : 'show'}
      >
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
          { label: 'Exp.', href: '#experience' },
          { label: 'Achieve.', href: '#achievements' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' }
        ]}
        className="md:hidden"
      />
      <div
        id="home"
        className="pt-[calc(env(safe-area-inset-top,0px)+88px)] md:pt-0 scroll-mt-[calc(env(safe-area-inset-top,0px)+88px)] md:scroll-mt-24"
      >
  <HeroSection ready={!showLoader} />
      </div>
      <div id="about" className="scroll-mt-[calc(env(safe-area-inset-top,0px)+88px)] md:scroll-mt-24">
        <About />
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
      </motion.div>
    </>
  )
}

export default App
