import React from 'react';
import { FaAward } from 'react-icons/fa';
import { motion } from 'motion/react';

const achievements = [
	'Led Droid Club as President, conducting 6+ IoT & Robotics workshops for 200+ students.',
	'5th Runner-up among 150+ teams at Build with Delhi Space Station Hackathon, Microsoft Gurgaon.',
	'Coordinated & Judged Line-Follower, RC Racing, and Robowar events with 100+ participants.',
	'Delivered 3+ IoT workshops at schools, mentoring 150+ students on microcontroller basics.',
	'Thrilled to be in the Top 10 at Techstars Startup Weekend – GLA University, securing ₹1.5L funding and a dedicated incubator space to bring our vision to life!'
];

const Achievements = () => {
	// Simple staggered list reveal
	const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
	const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } };

	return (
		<section id="achievements" className="w-full py-16 px-4 md:px-8">
			<div className="max-w-7xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					viewport={{ once: true, margin: '-100px' }}
					className="text-indigo-400 text-3xl md:text-5xl font-semibold mb-12 text-center underline underline-offset-8"
				>
					Achievements
				</motion.h2>

				<motion.ul
					className="max-w-4xl mx-auto space-y-6"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: '-100px' }}
				>
					{achievements.map((text, idx) => (
						<motion.li
							key={idx}
							variants={item}
							whileHover={{ y: -4, scale: 1.01 }}
							transition={{ type: 'spring', stiffness: 260, damping: 20 }}
							className="flex items-start gap-4 p-4 md:p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-200 hover:border-indigo-400/40 hover:bg-white/10"
						>
							<span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300 shrink-0">
								<FaAward className="h-5 w-5" />
							</span>
							<p className="text-slate-200 leading-relaxed">{text}</p>
						</motion.li>
					))}
				</motion.ul>
			</div>
		</section>
	);
};

export default Achievements;
