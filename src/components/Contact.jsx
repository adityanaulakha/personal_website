import Hyperspeed from './HyperSpeed';
import './Contact.css';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaGlobe } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <section className="contact-section">
        {/* Hyperspeed Background */}
        <div className="hyperspeed-background">
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => { },
              onSlowDown: () => { },
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
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

        {/* Content Overlay */}
        <div className="contact-content">
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Have a project in mind? Let's create something amazing together.
          </p>
          <a 
            href="mailto:naulakhaaditya4@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            Let's Get in Touch
          </a>
        </div>

        {/* Footer Section */}
        <footer className="footer-section">
          <div className="footer-content">
            <p className="footer-text">
              Made with <span className="heart">❤️</span> by Aditya
            </p>
            <div className="footer-socials">
              <a 
                href="https://github.com/adityanaulakha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <SiGithub />
              </a>
              <a 
                href="https://yourportfolio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Portfolio"
              >
                <FaGlobe />
              </a>
              <a 
                href="https://linkedin.com/in/adityanaulakha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <SiLinkedin />
              </a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Contact;