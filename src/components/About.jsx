import ProfileCard from './ProfileCard';
import Profile from '../assets/portfolio.jpg';

// Removed corrupted About implementation. Using AboutClean below.

function AboutClean() {
        return (
                <section id="about" className="w-full flex justify-center py-16">
                        {/* Local override to enlarge the bento grid for this section only */}
                        <style>{`#about .bento-section{max-width:96rem !important}`}</style>
                        <div className="w-full max-w-[96rem] px-6">
                                <h2 className="text-indigo-400 text-3xl md:text-5xl font-semibold mb-8 text-center underline underline-offset-8">About Me</h2>

                                <div className="mb-10 flex justify-end">
                                        <ProfileCard
                                                name="Aditya Naulakha"
                                                title="Full‑Stack Developer"
                                                handle="adityanaulakha"
                                                status="Online"
                                                contactText="Contact Me"
                                                avatarUrl={Profile}
                                                miniAvatarUrl={Profile}
                                                showUserInfo={true}
                                                enableTilt={true}
                                                enableMobileTilt={false}
                                                onContactClick={() => {
                                                        const el = document.getElementById('contact');
                                                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                        />
                                </div>

                        </div>
                </section>
        );
}

export default AboutClean;


