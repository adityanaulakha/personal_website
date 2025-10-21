import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Front-end Developer Intern",
    company: "Baoiam Innovations Pvt. Ltd",
    type: "Internship",
    duration: "Jun 2024 - Aug 2024",
    location: "Remote",
    description: "Developed a responsive cosmetics e-commerce platform using React.js and Tailwind CSS for mobile and desktop users across multiple browsers. Collaborated with cross-functional teams, delivering iterative releases and resolving 20+ UI/UX issues. Managed version control and collaborative debugging via Git.",
    skills: ["React.js", "Tailwind CSS", "Git", "UI/UX"],
    color: "#4F58FF"
  }
];


function Experience() {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-indigo-400 text-3xl md:text-5xl font-semibold mb-16 text-center underline underline-offset-8">
          Experience
        </h2>

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              {/* Timeline dot */}
              <div className="timeline-dot" style={{ backgroundColor: exp.color }}>
                <div className="timeline-dot-inner"></div>
              </div>

              {/* Content card */}
              <div className="timeline-content">
                <div className="experience-card">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;