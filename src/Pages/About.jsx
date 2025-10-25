import TiltedCard from '../components/TiltedCard';
import Profile from '../assets/Profile.jpg';
import { motion } from 'motion/react';

function AboutClean() {
        // Simple staggered fade-up animations
        const container = {
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
        };
        const item = {
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
        };

                return (
                        <section className="w-full flex justify-center py-16">
                        <div className="w-full max-w-[96rem] px-6">
                                <motion.h2
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                        viewport={{ once: true, margin: '-100px' }}
                                        className="text-indigo-400 text-3xl md:text-5xl font-semibold mb-10 text-center underline underline-offset-8"
                                >
                                        About Me
                                </motion.h2>

                                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mt-10 md:mt-20">
                                        {/* Profile Tilted Card */}
                                        <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                                viewport={{ once: true, margin: '-100px' }}
                                                className="flex justify-center md:justify-start"
                                        >
                                                <TiltedCard
                                                        imageSrc={Profile}
                                                        altText="Aditya Naulakha profile"
                                                        captionText="Hi, I'm Aditya 👋"
                                                        containerHeight="clamp(250px, 60vw, 600px)"
                                                        containerWidth="clamp(250px, 60vw, 600px)"
                                                        imageHeight="clamp(250px, 60vw, 600px)"
                                                        imageWidth="clamp(250px, 60vw, 600px)"
                                                        rotateAmplitude={12}
                                                        scaleOnHover={1.12}
                                                        showMobileWarning={false}
                                                        showTooltip={true}
                                                />
                                        </motion.div>

                                        {/* About content (updated from reference) */}
                                        <motion.div
                                                className="space-y-6"
                                                variants={container}
                                                initial="hidden"
                                                whileInView="show"
                                                viewport={{ once: true, margin: '-100px' }}
                                        >
                                                                                        <motion.div
                                                                                                variants={item}
                                                                                                whileHover={{ y: -6, scale: 1.02 }}
                                                                                                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                                                                                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                                                                                        >
                                                        <h3 className="text-white font-semibold mb-2">👋 About Me</h3>
                                                        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                                                                I’m Aditya Naulakha, a Computer Science undergraduate passionate about building intelligent systems that blend IoT,
                                                                Automation, and Artificial Intelligence.
                                                        </p>
                                                </motion.div>

                                                                                        <motion.div
                                                                                                variants={item}
                                                                                                whileHover={{ y: -6, scale: 1.02 }}
                                                                                                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                                                                                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                                                                                        >
                                                        <h3 className="text-white font-semibold mb-2">💻 What I Do</h3>
                                                        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                                                                I specialize in developing full‑stack web applications and IoT‑based automation projects that bridge the gap between
                                                                hardware and software. I enjoy exploring Generative AI and workflow automation (n8n) to create smarter, connected
                                                                systems. I currently lead my college’s Droid Club as President—guiding teams and organizing large‑scale events like
                                                                CodePunk.
                                                        </p>
                                                </motion.div>

                                                <div className="grid sm:grid-cols-2 gap-4">
                                                                                                <motion.div
                                                                                                        variants={item}
                                                                                                        whileHover={{ y: -6, scale: 1.02 }}
                                                                                                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                                                                                        className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                                                                                                >
                                                                <h3 className="text-white font-semibold mb-2">📍 Where I’m Based</h3>
                                                                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                                                                        Mathura, Uttar Pradesh, India — actively contributing to my college’s technical community while collaborating
                                                                        remotely on open‑source and independent projects.
                                                                </p>
                                                        </motion.div>
                                                                                                <motion.div
                                                                                                        variants={item}
                                                                                                        whileHover={{ y: -6, scale: 1.02 }}
                                                                                                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                                                                                        className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                                                                                                >
                                                                <h3 className="text-white font-semibold mb-2">🎓 Education</h3>
                                                                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                                                                        Bachelor of Technology (B.Tech) in Computer Science and Engineering — GLA University, Mathura.
                                                                </p>
                                                        </motion.div>
                                                </div>

                                                                                        <motion.div
                                                                                                variants={item}
                                                                                                whileHover={{ y: -6, scale: 1.02 }}
                                                                                                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                                                                                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                                                                                        >
                                                        <h3 className="text-white font-semibold mb-2">🚀 Current Focus</h3>
                                                        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                                                                Integrating AI and IoT to build autonomous systems, exploring Generative AI applications, and deepening skills in
                                                                system design and workflow automation.
                                                        </p>
                                                </motion.div>
                                        </motion.div>
                                </div>
                        </div>
                </section>
        );
}

export default AboutClean;


