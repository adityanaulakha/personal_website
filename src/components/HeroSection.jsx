import Background from './Background';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Particles background */}
      <div className="absolute inset-0">
        <Background
          particleColors={["#4F58FF", "#4F58FF"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-6 w-full pointer-events-auto">
            {/* Top badges */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase rounded-full border border-slate-400/40 bg-slate-500/10 text-slate-200 px-3 py-1">
                Full-Stack Developer
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase rounded-full border border-slate-400/40 bg-slate-500/10 text-slate-200 px-3 py-1">
                AI/ML Enthusiast
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase rounded-full border border-slate-400/40 bg-slate-500/10 text-slate-200 px-3 py-1">
                IOT/Automation Seeker
            </span>
            </div>

            {/* Main headline */}
            <h1 className="text-center font-bold leading-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal sm:whitespace-nowrap">
            Designing Intelligent Systems,{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-300 via-indigo-400 to-blue-300 bg-clip-text text-transparent">
                Building Scalable Solutions
            </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-center text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            I'm <span className="font-semibold text-white">Aditya Naulakha</span> — a <span className="text-blue-300">Software Developer</span> with a passion for creating AI-driven and IoT-enabled systems. 
            I focus on building efficient, data-driven, and human-centered digital experiences.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
                href="https://drive.google.com/file/d/1ZmI9WiQxZzC-hF6Y7xMy_cJn2aoaAseD/view?usp=sharing"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white shadow-sm backdrop-blur-sm transition-all hover:bg-white/20"
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
                className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-blue-200 shadow-sm backdrop-blur-sm transition-all hover:bg-blue-500/20"
            >
                Let's Connect
            </a>
            </div>
        </div>
        </div>
    </section>
    );
};

export default HeroSection;