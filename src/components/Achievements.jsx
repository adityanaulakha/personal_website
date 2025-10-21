import React from 'react';
import { FaAward } from 'react-icons/fa';

const achievements = [
	'Led Droid Club as President, conducting 6+ IoT & Robotics workshops for 200+ students.',
	'5th Runner-up among 150+ teams at Build with Delhi Space Station Hackathon, Microsoft Gurgaon.',
	'Coordinated & Judged Line-Follower, RC Racing, and Robowar events with 100+ participants.',
	'Delivered 3+ IoT workshops at schools, mentoring 150+ students on microcontroller basics.'
];

const Achievements = () => {
	return (
		<section id="achievements" className="w-full py-16 px-4 md:px-8">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-indigo-400 text-3xl md:text-5xl font-semibold mb-12 text-center underline underline-offset-8">
					Achievements
				</h2>

						<ul className="max-w-4xl mx-auto space-y-6">
					{achievements.map((text, idx) => (
						<li
							key={idx}
									className="flex items-start gap-4 p-4 md:p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-200 hover:translate-y-[-2px] hover:border-indigo-400/40 hover:bg-white/10"
						>
							<span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300 shrink-0">
								<FaAward className="h-5 w-5" />
							</span>
							<p className="text-slate-200 leading-relaxed">{text}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Achievements;
