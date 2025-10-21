import { useState, useEffect } from 'react';
import { HiHome, HiUser, HiLightningBolt, HiBriefcase, HiFolder, HiMail } from 'react-icons/hi';

const MobileNavbar = ({ items = [], className = '' }) => {
  const [activeHref, setActiveHref] = useState('#home');

  // Icon mapping for each section
  const iconMap = {
    'Home': HiHome,
    'About': HiUser,
    'Skills': HiLightningBolt,
    'Experience': HiBriefcase,
    'Projects': HiFolder,
    'Contact': HiMail
  };

  // Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = items
        .map(item => {
          const href = item.href;
          if (!href.startsWith('#')) return null;
          const id = href.slice(1);
          const element = id ? document.getElementById(id) : document.documentElement;
          return { href, element };
        })
        .filter(s => s && s.element);

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const offsetTop = section.element.offsetTop;
        
        if (scrollPosition >= offsetTop) {
          setActiveHref(section.href);
          break;
        }
      }

      if (window.scrollY < 100) {
        setActiveHref(items[0]?.href || '#home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const handleClick = (href) => {
    setActiveHref(href);
  };

  return (
    <div className={`md:hidden ${className}`}>
      {/* Enhanced Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-[1000]">
        <ul className="flex items-center justify-around gap-1 rounded-[28px] border border-white/20 bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] px-2 py-3">
          {items.map((item) => {
            const Icon = iconMap[item.label] || HiHome;
            const isActive = activeHref === item.href;
            
            return (
              <li key={item.label} className="flex-1">
                <a
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className={`flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-[20px] transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-br from-[#4F58FF] to-[#00C9A7] text-white scale-105 shadow-lg' 
                      : 'text-white/60 hover:text-white/90 hover:bg-white/10'
                  }`}
                  aria-label={item.ariaLabel || item.label}
                >
                  <Icon className={`transition-all duration-300 ${
                    isActive ? 'text-xl' : 'text-lg'
                  }`} />
                  <span className={`text-[10px] font-medium transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 absolute'
                  }`}>
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Floating Action Button (Optional - for quick contact) */}
      <a
        href="#contact"
        className="fixed bottom-24 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#4F58FF] to-[#00C9A7] flex items-center justify-center shadow-[0_8px_24px_rgba(79,88,255,0.4)] z-[999] transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Quick Contact"
      >
        <HiMail className="text-white text-2xl" />
      </a>
    </div>
  );
};

export default MobileNavbar;
