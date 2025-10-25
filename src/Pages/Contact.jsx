import { useState, useEffect } from 'react';
import Hyperspeed from '../components/HyperSpeed';
import './Contact.css';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaGlobe, FaInstagram } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';
import { motion } from 'motion/react';

function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <section className="contact-section">
        {/* Hyperspeed Background - disabled on mobile/tablet */}
        {!isMobile && (
          <div className="hyperspeed-background">
            <Hyperspeed
              effectOptions={{
                onSpeedUp: () => { },
                onSlowDown: () => { },
                distortion: 'turbulentDistortion',
                length: 400,
                roadWidth: 10,
                islandWidth: 2,
                lanesPerRoad: 3,
                fov: 90,
                fovSpeedUp: 150,
                speedUp: 2,
                carLightsFade: 0.4,
                totalSideLightSticks: 15,
                lightPairsPerRoadWay: 30,
                shoulderLinesWidthPercentage: 0.05,
                brokenLinesWidthPercentage: 0.1,
                brokenLinesLengthPercentage: 0.5,
                lightStickWidth: [0.12, 0.5],
                lightStickHeight: [1.3, 1.7],
                movingAwaySpeed: [60, 80],
                movingCloserSpeed: [-120, -160],
                carLightsLength: [400 * 0.03, 400 * 0.2],
                carLightsRadius: [0.05, 0.14],
                carWidthPercentage: [0.3, 0.5],
                carShiftX: [-0.8, 0.8],
                carFloorSeparation: [0, 5],
                colors: {
                  roadColor: 0x080808,
                  islandColor: 0x0a0a0a,
                  background: 0x000000,
                  shoulderLines: 0xFFFFFF,
                  brokenLines: 0xFFFFFF,
                  leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                  rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                  sticks: 0x03B3C3,
                }
              }}
            />
          </div>
        )}

        {/* Mobile/Tablet fallback gradient background */}
        {isMobile && (
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black" />
        )}

        {/* Content Overlay */}
        <div className="contact-content">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="contact-title"
          >
            Let's Work Together
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-subtitle"
          >
            Have a project in mind? Let's create something amazing together.
          </motion.p>

          {/* Contact Methods - Mobile Friendly */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
            className="contact-methods"
          >
            <a 
              href="mailto:naulakhaaditya4@gmail.com"
              className="contact-method-card"
            >
              <HiMail className="contact-method-icon" />
              <div className="contact-method-text">
                <span className="contact-method-label">Email Me</span>
                <span className="contact-method-value">naulakhaaditya4@gmail.com</span>
              </div>
            </a>
          </motion.div>

          {/* Primary CTA Button */}
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            viewport={{ once: true }}
            href="mailto:naulakhaaditya4@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            Let's Get in Touch
          </motion.a>

          {/* "CONNECT WITH ME:" Label */}
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
            viewport={{ once: true }}
            className="connect-label"
          >
            CONNECT WITH ME:
          </motion.span>

          {/* Footer Section with Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            viewport={{ once: true }}
            className="footer-inline"
          >
            <div className="footer-inline-content">
              <div className="footer-socials-row">
                <a 
                  href="https://github.com/adityanaulakha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="GitHub"
                >
                  <SiGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/aditya-naulakha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin />
                </a>
                <a 
                  href="https://www.instagram.com/adityanaulakha.tech/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
              <p className="footer-inline-text">
                Made with <span className="heart">💗</span> by Aditya
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contact;