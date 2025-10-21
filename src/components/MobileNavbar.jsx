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
      <nav
        role="navigation"
        aria-label="Mobile navigation"
        className="fixed inset-x-4 z-[1000]"
        style={{ top: 'calc(env(safe-area-inset-top, 0px) + 64px)' }}
      >
        <ul className="flex items-center justify-between gap-1 rounded-[28px] border border-white/20 bg-black/50 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-2">
          {items.map((item) => {
            const Icon = iconMap[item.label] || HiHome;
            const isActive = activeHref === item.href;
            
            return (
              <li key={item.label} className="flex-1 min-w-0">
                <a
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className={`w-full h-12 min-h-[44px] flex flex-col items-center justify-center gap-0.5 rounded-[20px] transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-br from-[#4F58FF] to-[#00C9A7] text-white shadow-lg' 
                      : 'text-white/70 hover:text-white/90 hover:bg-white/10'
                  }`}
                  aria-label={item.ariaLabel || item.label}
                >
                  <Icon className={`transition-all duration-300 ${
                    isActive ? 'text-[22px]' : 'text-[18px]'
                  }`} />
                  <span className={`leading-none text-[10px] font-medium transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Removed floating contact FAB per request to avoid duplicate mail icon in mobile view */}
    </div>
  );
};

export default MobileNavbar;
