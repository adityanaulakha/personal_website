import './Experience.css';
import { HiExternalLink } from 'react-icons/hi';
import { motion } from 'motion/react';
import { HiDocumentText } from 'react-icons/hi';

const experiences = [
  {
    id: 1,
    role: "Front-end Developer Intern",
    company: "Baoiam Innovations Pvt. Ltd",
    type: "Internship",
    duration: "1 Jun, 2024 - 1 Aug, 2024",
    location: "Remote",
    description: "Developed a responsive cosmetics e-commerce platform using React.js and Tailwind CSS for mobile and desktop users across multiple browsers. Collaborated with cross-functional teams, delivering iterative releases and resolving 20+ UI/UX issues. Managed version control and collaborative debugging via Git.",
    skills: ["React.js", "Tailwind CSS", "GitHub", "Git", "UI/UX", "Vercel"],
    color: "#4F58FF",
    // Optional: add a project link relevant to this experience
    projectLink: "https://divueens-frontend.vercel.app/",
    // Optional: add a certificate link
    certificateLink: "https://drive.google.com/file/d/1aXhQPyYcucJ-gdLwP3qbSjn8MnOSFAmZ/view?usp=sharing"
  },
  {
    id: 2,
    role: "Full-Stack Developer Intern",
    company: "YRIT SOLUTIONS",
    type: "Internship",
    duration: "1 Sep, 2025 - 31 Oct, 2025",
    location: "Remote",
    description: "Actively contributed to full‑stack web development alongside front‑end delivery, collaborated on application security testing, and supported secure database practices and data protection measures—demonstrating strong programming skills, cybersecurity knowledge, and a professional approach to all assigned responsibilities.",
    skills: ["React.js", "Node.js", "Tailwind CSS", "GitHub", "Vercel", "Express", "MongoDB", "Application Security", "Data Protection"],
    color: "#22C55E",
    // Optional: add a certificate link
    certificateLink: "https://drive.google.com/file/d/1VT0lYHeoGdYTyI7WwYpGZYWRR3ibkJcT/view?usp=sharing"
  }
];


function Experience() {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-indigo-400 text-3xl md:text-5xl font-semibold mb-16 text-center underline underline-offset-8"
        >
          Experience
        </motion.h2>

        <motion.div
          className="timeline-container"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            >
              {/* Timeline dot */}
              <div className="timeline-dot" style={{ backgroundColor: exp.color }}>
                <div className="timeline-dot-inner"></div>
              </div>

              {/* Content card */}
              <div className="timeline-content">
                <motion.div className="experience-card" whileHover={{ y: -6, scale: 1.01 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                  {/* Header */}
                  <div className="card-header">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-semibold" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="job-type" style={{ backgroundColor: exp.color }}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta info */}
                  <div className="card-meta">
                    <span className="meta-item">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {exp.duration}
                    </span>
                    <span className="meta-item">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="skills-container">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag" style={{ borderColor: exp.color, color: exp.color }}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Project Link (optional) */}
                  {exp.projectLink && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={exp.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white shadow-sm backdrop-blur-sm transition-all hover:bg-white/20"
                        aria-label="View related project"
                      >
                        View Project
                        <HiExternalLink className="w-4 h-4" />
                      </a>
                      {exp.certificateLink && (
                        <a
                          href={exp.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white shadow-sm backdrop-blur-sm transition-all hover:bg-white/20"
                          aria-label="View certificate"
                        >
                          View Certificate
                          <HiDocumentText className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                  {!exp.projectLink && exp.certificateLink && (
                    <div className="mt-4">
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white shadow-sm backdrop-blur-sm transition-all hover:bg-white/20"
                        aria-label="View certificate"
                      >
                        View Certificate
                        <HiDocumentText className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;