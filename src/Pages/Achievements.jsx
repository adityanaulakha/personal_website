import React from 'react';
import { FaAward, FaTrophy, FaRocket, FaUsers } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { motion } from 'motion/react';

const achievements = [
	{
		id: 1,
		title: 'President - Droid Club, GLA University',
		description: 'Led Droid Club as President, conducting 6+ IoT & Robotics workshops for 200+ students.',
		category: 'Leadership',
		icon: FaUsers,
		color: '#4F58FF',
		link: '' // Add LinkedIn post or club page link
	},
	{
		id: 2,
		title: '5th Runner-up : Build with Delhi Space Station Hackathon, Microsoft Gurgaon',
		description: 'Achieved 5th place among 150+ teams at Microsoft Gurgaon, building innovative space technology solutions.',
		category: 'Competition',
		icon: FaTrophy,
		color: '#00C9A7',
		link: 'https://drive.google.com/file/d/11gj3XyP_c2QJW4tubJ6vQpBelbvgswxn/view?usp=sharing' // Add certificate or project link
	},
	{
		id: 3,
		title: 'Top 10 - Techstars Startup Weekend',
		description: 'Secured 7th position in the Top 10 at Techstars Startup Weekend – GLA University, earning ₹1.5L funding and dedicated incubator space for our startup vision.',
		category: 'Entrepreneurship',
		icon: FaRocket,
		color: '#9D4EDD',
		link: 'https://drive.google.com/file/d/15-EPNMhfS_-JVVa6R6Yi9V_bHMMcQw5S/view?usp=sharing' // Add LinkedIn post or news link
	},
	{
		id: 4,
		title: 'Top 40 Finalists - Zero To One 24 Hour Startup Challenge',
		description: 'Selected under Top 40 finalists in the 2025 startup challenge organized by Chandigarh University.',
		category: 'Competition',
		icon: FaTrophy,
		color: '#FF6B6B',
		link: 'https://drive.google.com/file/d/1rr4Cd8i44BPNOYoOVOOUUOeQGWvBmIbE/view?usp=sharing' // Add certificate or LinkedIn post
	},
	{
		id: 5,
		title: 'Emerging Technologies Workshops, GLA University (Under Prayas Program)',
		description: 'Delivered 5+ IoT and AI/ML workshops at schools, mentoring 150+ students on microcontroller basics and hands-on projects.',
		category: 'Teaching',
		icon: FaUsers,
		color: '#FFD93D',
		link: '' // Add workshop photos or LinkedIn post
	},
	{
		id: 6,
		title: 'Event Coordinator & Judge : Robotics Competitions, Technavya 2025, GLA University',
		description: 'Coordinated and judged Line-Follower, RC Racing, and Robowar events with 100+ participants.',
		category: 'Event Management',
		icon: FaAward,
		color: '#6BCB77',
		link: '' // Add event photos or post
	}
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

				<motion.div
					className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: '-100px' }}
				>
					{achievements.map((achievement) => {
						const IconComponent = achievement.icon;
						return (
							<motion.div
								key={achievement.id}
								variants={item}
								whileHover={{ y: -6, scale: 1.02 }}
								transition={{ type: 'spring', stiffness: 260, damping: 20 }}
								className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg"
							>
								{/* Icon & Category Badge */}
								<div className="flex items-start justify-between mb-4">
									<div 
										className="flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110"
										style={{ backgroundColor: `${achievement.color}20` }}
									>
										<IconComponent className="h-6 w-6" style={{ color: achievement.color }} />
									</div>
									<span 
										className="rounded-full px-3 py-1 text-xs font-medium"
										style={{ 
											backgroundColor: `${achievement.color}15`,
											color: achievement.color,
											border: `1px solid ${achievement.color}40`
										}}
									>
										{achievement.category}
									</span>
								</div>

								{/* Title */}
								<h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
									{achievement.title}
								</h3>

								{/* Description */}
								<p className="text-slate-300 text-sm leading-relaxed mb-4">
									{achievement.description}
								</p>

								{/* Link Button (if available) */}
								{achievement.link && (
									<a
										href={achievement.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
										style={{ color: achievement.color }}
										aria-label={`Link to ${achievement.title}`}
									>
										Link
										<HiExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
									</a>
								)}
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default Achievements;
