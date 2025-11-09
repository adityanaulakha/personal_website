import { useState, useEffect, useRef } from 'react';
import { HiHome, HiUser, HiLightningBolt, HiBriefcase, HiFolder, HiMail, HiBadgeCheck } from 'react-icons/hi';

const MobileNavbar = ({ items = [], className = '' }) => {
  const [activeHref, setActiveHref] = useState('#home');
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const lastManualClickRef = useRef(null);

  // Icon mapping for each section
  const iconMap = {
    'Home': HiHome,
    'About': HiUser,
    'Skills': HiLightningBolt,
    'Experience': HiBriefcase,
    'Achievements': HiBadgeCheck,
    'Projects': HiFolder,
    'Contact': HiMail
  };

  // Track active section based on scroll - with debouncing
  useEffect(() => {
    let rafId = null;
    
    const handleScroll = () => {
      // Skip scroll tracking during manual navigation
      if (isScrollingRef.current) return;
      
      if (rafId) return; // Already scheduled
      
      rafId = requestAnimationFrame(() => {
        rafId = null;
        
        const sections = items
          .map(item => {
            const href = item.href;
            if (!href.startsWith('#')) return null;
            const id = href.slice(1);
            const element = id ? document.getElementById(id) : document.documentElement;
            return { href, element };
          })
          .filter(s => s && s.element);

        const scrollPosition = window.scrollY + 150; // Fixed offset from top
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const offsetTop = section.element.offsetTop;
          
          if (scrollPosition >= offsetTop) {
            setActiveHref(section.href);
            return;
          }
        }
        
        // Default to first item if at top
        if (window.scrollY < 100) {
          setActiveHref(items[0]?.href || '#home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [items]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Immediate visual feedback
    setActiveHref(href);
    lastManualClickRef.current = href;
    
    // Block scroll listener from interfering
    isScrollingRef.current = true;
    
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Scroll to target
    const id = href.startsWith('#') ? href.slice(1) : null;
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    
    // Re-enable scroll listener after animation completes
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      lastManualClickRef.current = null;
    }, 800); // Match typical smooth scroll duration
  };

  return (
    <div className={`md:hidden ${className}`}>
      {/* Enhanced Bottom Navigation */}
      <nav
        role="navigation"
        aria-label="Mobile navigation"
        className="fixed inset-x-4 z-[1000]"
        style={{ top: 'calc(env(safe-area-inset-top, 0px) + 12px)' }}
      >
        <ul className="flex items-center justify-between gap-1 rounded-[28px] border border-white/20 bg-black/50 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-2">
          {items.map((item) => {
            const Icon = iconMap[item.label] || HiHome;
            const isActive = activeHref === item.href;
            
            return (
              <li key={item.label} className="flex-1 min-w-0">
                <button
                  type="button"
                  onClick={(e) => handleNav(e, item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full h-14 min-h-[56px] flex flex-col items-center justify-center gap-0.5 rounded-[20px] transition-all duration-200 ease-out active:scale-95 ${
                    isActive 
                      ? 'bg-gradient-to-br from-[#4F58FF] to-[#00C9A7] text-white shadow-lg scale-[1.02]' 
                      : 'text-white/70 active:text-white/90 active:bg-white/10'
                  }`}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation',
                    transform: 'translateZ(0)', // Force GPU acceleration
                  }}
                  aria-label={item.ariaLabel || item.label}
                >
                  <Icon 
                    className="text-[20px] transition-transform duration-200 ease-out" 
                    style={{ 
                      transform: isActive ? 'scale(1.1)' : 'scale(1)',
                      willChange: 'transform'
                    }} 
                  />
                  <span className="h-[13px] flex items-center overflow-hidden">
                    <span 
                      className="leading-none text-[10.5px] font-medium whitespace-nowrap transition-all duration-200 ease-out"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0)' : 'translateY(-4px)',
                        willChange: 'opacity, transform'
                      }}
                    >
                      {item.label}
                    </span>
                  </span>
                </button>
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
