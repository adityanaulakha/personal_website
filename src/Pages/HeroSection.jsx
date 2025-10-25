import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Background from '../components/Background';

const HeroSection = ({ ready = true }) => {
    const line1 = 'Designing Intelligent Systems,';
    const line2 = 'Building Scalable Solutions';
    const [typed1, setTyped1] = useState('');
    const [typed2, setTyped2] = useState('');
    const [phase, setPhase] = useState(0); // 0=idle,1=typing1,2=typing2,3=done
    const [showBadges, setShowBadges] = useState(false);
    const [showCTAs, setShowCTAs] = useState(false);

    useEffect(() => {
        if (!ready) return; // wait until loader finishes

        const prefersReduced = typeof window !== 'undefined' && window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Reduced motion users: render instantly
        if (prefersReduced) {
            setTyped1(line1);
            setTyped2(line2);
            setPhase(3);
            setShowBadges(true);
            setShowCTAs(true);
            return;
        }

        // requestAnimationFrame-driven typing for smoother visuals and fewer re-renders
        const charMs = 45; // milliseconds per character (tune for speed vs. CPU)
        const delayBetween = 200; // delay between line1 and line2

        let rafId;
        let i1 = 0;
        let i2 = 0;
        let mode = 1; // 1 = typing line1, 2 = typing line2
        let start1 = performance.now();
        let start2 = 0;

        setPhase(1);
        setTyped1('');
        setTyped2('');

        const tick = (now) => {
            if (mode === 1) {
                const elapsed = now - start1;
                const next = Math.min(line1.length, Math.floor(elapsed / charMs));
                if (next !== i1) {
                    i1 = next;
                    setTyped1(line1.slice(0, i1));
                }
                if (i1 >= line1.length) {
                    mode = 2;
                    setPhase(2);
                    start2 = now + delayBetween;
                }
            } else if (mode === 2) {
                if (now >= start2) {
                    const elapsed2 = now - start2;
                    const next2 = Math.min(line2.length, Math.floor(elapsed2 / charMs));
                    if (next2 !== i2) {
                        i2 = next2;
                        setTyped2(line2.slice(0, i2));
                    }
                    if (i2 >= line2.length) {
                        setPhase(3);
                        cancelAnimationFrame(rafId);
                        return;
                    }
                }
            }
            rafId = requestAnimationFrame(tick);
        };

        rafId = requestAnimationFrame(tick);
        return () => {
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [ready]);

    // After typing finishes (phase===3), cascade badges then CTAs
    useEffect(() => {
        if (phase !== 3) return;
        const t1 = setTimeout(() => setShowBadges(true), 500); // after subheading
        const t2 = setTimeout(() => setShowCTAs(true), 900);   // after badges
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [phase]);
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Particles background */}
      <div className="absolute inset-0">
                <Background
                    particleColors={["#4F58FF", "#4F58FF"]}
                    particleCount={220}
                    particleSpread={10}
                    speed={0.05}
                    particleBaseSize={80}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={false}
                />
      </div>

      {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-6 w-full pointer-events-auto">
            {/* Top badges (reveal after subheading) */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={showBadges ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6"
            >
            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase rounded-full border border-slate-400/40 bg-slate-500/10 text-slate-200 px-3 py-1">
                Full-Stack Developer
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase rounded-full border border-slate-400/40 bg-slate-500/10 text-slate-200 px-3 py-1">
                AI/ML Enthusiast
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase rounded-full border border-slate-400/40 bg-slate-500/10 text-slate-200 px-3 py-1">
                IOT/Automation Seeker
            </span>
            </motion.div>

                {/* Main headline with typing effect */}
                <h1 className="text-center font-bold leading-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal sm:whitespace-nowrap">
                    <span>{typed1}</span>
                    {phase === 1 && (
                        <span className="ml-1 inline-block align-baseline w-[1ch] border-l-2 border-blue-300 animate-pulse" aria-hidden="true" />
                    )}
                    <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-blue-300 via-indigo-400 to-blue-300 bg-clip-text text-transparent">
                        {typed2}
                    </span>
                    {phase === 2 && (
                        <span className="ml-1 inline-block align-baseline w-[1ch] border-l-2 border-blue-300 animate-pulse" aria-hidden="true" />
                    )}
                </h1>

                        {/* Subheading (reveals after typing finishes) */}
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={phase === 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                            transition={{ duration: 0.45, ease: 'easeOut' }}
                            className="mt-6 text-center text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
                        >
                            I'm <span className="font-semibold text-white">Aditya Naulakha</span> — a <span className="text-blue-300">Software Developer</span> with a passion for creating AI-driven and IoT-enabled systems. 
                            I focus on building efficient, data-driven, and human-centered digital experiences.
                        </motion.p>

            {/* CTA buttons (show last) */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={showCTAs ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.45, ease: 'easeOut' }}
                            className="mt-10 flex flex-wrap justify-center gap-4"
                        >
                            <a
                                href="https://drive.google.com/file/d/1ZmI9WiQxZzC-hF6Y7xMy_cJn2aoaAseD/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-white shadow-sm backdrop-blur-sm transition-all
                                    bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500 hover:brightness-110"
                            >
                                View Resume
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M5 12h14M13 5l7 7-7 7"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-blue-100 shadow-sm backdrop-blur-sm transition-all
                                    border border-blue-400/40 bg-blue-500/10 hover:bg-blue-500/20"
                            >
                                Let's Connect
                            </a>
                        </motion.div>
        </div>
        </div>
    </section>
    );
};

export default HeroSection;