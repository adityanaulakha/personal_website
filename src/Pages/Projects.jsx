import './Projects.css';
import { SiGithub } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';
import { motion } from 'motion/react';
import Project1 from '../assets/Project-1.png';
import Project2 from '../assets/Project-2.png';
import Project3 from '../assets/Project-3.png';


const projects = [
  {
    id: 1,
    title: "OrbitalVision",
    description: "Real-time space object detection and tracking system using YOLOv8 + DeepSORT, achieving 0.90 mAP and 93% precision on synthetic space station data. Includes Streamlit dashboard with Eco-Mode and Falcon-based data robustness.",
    coverImage: Project1,
    techStack: ["YOLOv8", "DeepSORT", "Streamlit", "Python", "Falcon"],
    githubLink: "https://github.com/adityanaulakha/Build-with-India-Space-Station-Hackathon",
    liveLink: "https://orbitalvision.streamlit.app/",
    color: "#4F58FF"
  },
  {
    id: 2,
    title: "CleanSight",
    description: "AI-powered garbage detection SPA built with React, Firebase, and Python YOLO microservice. Features 4 user roles, Google/Email auth, reusable UI components, and real-time AI detection dashboards.",
    coverImage: Project2,
    techStack: ["React", "Firebase", "Python", "YOLO", "Vercel"],
    githubLink: "https://github.com/adityanaulakha/CleanSight-Zero-to-Onet",
    liveLink: "https://cleansight-zero-to-one.vercel.app/",
    color: "#00C9A7"
  },
  {
    id: 3,
    title: "CodePunk v1.0",
    description: "Responsive hackathon website built with React.js and Tailwind CSS featuring event details, schedules, and CTAs. Deployed on Vercel with optimized load times and seamless user experience.",
    coverImage: Project3,
    techStack: ["React", "Tailwind CSS", "Vercel"],
    githubLink: "https://github.com/adityanaulakha/-CodePunk-v1.0-",
    liveLink: "https://code-punk-v1-0.vercel.app/",
    color: "#9D4EDD"
  }
];


function Projects() {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-indigo-400 text-3xl md:text-5xl font-semibold mb-16 text-center underline underline-offset-8"
        >
          Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              {/* Cover Image */}
              <div className="project-image-container">
                <img 
                  src={project.coverImage}
                  alt={`${project.title} cover`}
                  className="project-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="project-overlay" style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)` }}>
                  <div className="project-links">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View GitHub Repository"
                    >
                      <SiGithub className="w-6 h-6" />
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View Live Demo"
                    >
                      <HiExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                <h3 className="project-title" style={{ color: project.color }}>
                  {project.title}
                </h3>
                
                <p className="project-description">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="tech-badge"
                      style={{ 
                        borderColor: project.color,
                        color: project.color 
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Links */}
                <div className="project-bottom-links">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bottom-link"
                    style={{ color: project.color }}
                  >
                    <SiGithub className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bottom-link"
                    style={{ color: project.color }}
                  >
                    <HiExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;