import MagicBento from './Bento.jsx';

function About() {
        return (
                <section id="about" className="w-full flex justify-center py-16">
                        {/* Local override to enlarge the bento grid for this section only */}
                        <style>{`#about .bento-section{max-width:96rem !important}`}</style>
                        <div className="w-full max-w-[96rem] px-6">
                                <h2 className="text-indigo-400 text-3xl md:text-5xl font-semibold mb-8 text-center underline underline-offset-8">About Me</h2>
                                <MagicBento
                                        textAutoHide={true}
                                        enableStars={true}
                                        enableSpotlight={true}
                                        enableBorderGlow={true}
                                        enableTilt={true}
                                        enableMagnetism={true}
                                        clickEffect={true}
                                        spotlightRadius={250}
                                        particleCount={12}
                                        glowColor="132, 0, 255"
                                />
                        </div>
                </section>
        );
}

export default About;