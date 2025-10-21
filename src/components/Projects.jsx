import './Projects.css';
import { SiGithub } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Features include real-time inventory updates and order tracking.",
    coverImage: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/ecommerce",
    liveLink: "https://ecommerce-demo.vercel.app",
    color: "#4F58FF"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features. Includes kanban boards and calendar views.",
    coverImage: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "React DnD"],
    githubLink: "https://github.com/yourusername/task-manager",
    liveLink: "https://taskmanager-demo.vercel.app",
    color: "#00C9A7"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics with beautiful data visualizations, custom date ranges, and export functionality. Integrates with multiple social platforms.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    techStack: ["Vue.js", "Chart.js", "Firebase", "REST API", "Bootstrap"],
    githubLink: "https://github.com/yourusername/social-dashboard",
    liveLink: "https://social-dashboard-demo.netlify.app",
    color: "#FF6B6B"
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "Real-time weather application with location-based forecasts, interactive maps, and severe weather alerts. Features 7-day forecasts and hourly updates.",
    coverImage: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
    techStack: ["React", "OpenWeather API", "Mapbox", "Axios", "CSS3"],
    githubLink: "https://github.com/yourusername/weather-app",
    liveLink: "https://weather-app-demo.netlify.app",
    color: "#FFA500"
  },
  {
    id: 5,
    title: "Portfolio Builder",
    description: "A drag-and-drop portfolio website builder with customizable templates, dark mode support, and SEO optimization. Export as static HTML or deploy directly.",
    coverImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
    techStack: ["React", "Redux", "Styled Components", "Netlify", "Markdown"],
    githubLink: "https://github.com/yourusername/portfolio-builder",
    liveLink: "https://portfolio-builder.vercel.app",
    color: "#9D4EDD"
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with private messaging, group chats, file sharing, and emoji support. Built with WebSocket for instant communication.",
    coverImage: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop",
    techStack: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/yourusername/chat-app",
    liveLink: "https://chat-app-demo.herokuapp.com",
    color: "#06B6D4"
  }
];

function Projects() {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-indigo-400 text-3xl md:text-5xl font-semibold mb-16 text-center underline underline-offset-8">
          Projects
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Cover Image */}
              <div className="project-image-container">
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="project-image"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;