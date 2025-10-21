import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress, SiPython,
  SiJavascript, SiHtml5, SiCss3, SiGit, SiGithub, SiDocker, SiPostgresql, SiMysql,
  SiRedis, SiGraphql, SiFirebase, SiVercel, SiNetlify, SiAmazon, SiVite, SiWebpack,
  SiJest, SiCypress, SiPostman, SiFigma, SiVuedotjs, SiAngular,
  SiSvelte, SiRedux, SiPrisma, SiSupabase, SiStrapi, SiNestjs,
  SiDjango, SiFlask, SiFastapi, SiSpring, SiRust, SiGo,
  SiKubernetes, SiJenkins, SiGitlab, SiBitbucket, SiLinux, SiUbuntu,
  SiApple, SiAndroid, SiFlutter, SiElectron, SiUnity, SiBootstrap, SiSass,
  SiNpm, SiYarn, SiPnpm, SiEslint, SiPrettier, SiBabel,
  SiTensorflow, SiPytorch, SiScikitlearn, SiKeras, SiOpencv, SiJupyter, SiAnaconda,
  SiRaspberrypi, SiArduino, SiEspressif, SiHomeassistant, SiMqtt
} from 'react-icons/si';
import './Skills.css';

const techStack = [
  // Frontend Frameworks & Libraries
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
//   { Icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
//   { Icon: SiAngular, name: "Angular", color: "#DD0031" },
//   { Icon: SiSvelte, name: "Svelte", color: "#FF3E00" },
//   { Icon: SiRedux, name: "Redux", color: "#764ABC" },
  { Icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
//   { Icon: SiSass, name: "Sass", color: "#CC6699" },
  
  // Languages
  { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiPython, name: "Python", color: "#3776AB" },
//   { Icon: SiRust, name: "Rust", color: "#000000" },
//   { Icon: SiGo, name: "Go", color: "#00ADD8" },
  
  // Styling & Markup
  { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { Icon: SiCss3, name: "CSS3", color: "#1572B6" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  
  // Backend & Runtime
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { Icon: SiExpress, name: "Express", color: "#FFFFFF" },
//   { Icon: SiNestjs, name: "NestJS", color: "#E0234E" },
//   { Icon: SiDjango, name: "Django", color: "#092E20" },
//   { Icon: SiFlask, name: "Flask", color: "#FFFFFF" },
  { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
//   { Icon: SiSpring, name: "Spring", color: "#6DB33F" },
  
  // Databases
//   { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
//   { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
//   { Icon: SiRedis, name: "Redis", color: "#DC382D" },
//   { Icon: SiPrisma, name: "Prisma", color: "#2D3748" },
  { Icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },
//   { Icon: SiStrapi, name: "Strapi", color: "#2F2E8B" },

// AI/ML
  { Icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
//   { Icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
  { Icon: SiScikitlearn, name: "Scikit-learn", color: "#F7931E" },
//   { Icon: SiKeras, name: "Keras", color: "#D00000" },
  { Icon: SiOpencv, name: "OpenCV", color: "#5C3EE8" },
  { Icon: SiJupyter, name: "Jupyter", color: "#F37626" },
  { Icon: SiAnaconda, name: "Anaconda", color: "#44A833" },
  
  // IoT
  { Icon: SiRaspberrypi, name: "Raspberry Pi", color: "#A22846" },
  { Icon: SiArduino, name: "Arduino", color: "#00979D" },
  { Icon: SiEspressif, name: "ESP32", color: "#E7352C" },
//   { Icon: SiHomeassistant, name: "Home Assistant", color: "#18BCF2" },
//   { Icon: SiMqtt, name: "MQTT", color: "#660066" },
];

const techStack2 = [
  // APIs & GraphQL
//   { Icon: SiGraphql, name: "GraphQL", color: "#E10098" },
  { Icon: SiPostman, name: "Postman", color: "#FF6C37" },
  
  // Cloud & Hosting
  { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { Icon: SiVercel, name: "Vercel", color: "#FFFFFF" },
  { Icon: SiNetlify, name: "Netlify", color: "#00C7B7" },
  { Icon: SiAmazon, name: "AWS", color: "#FF9900" },
  
  // Build Tools & Package Managers
  { Icon: SiVite, name: "Vite", color: "#646CFF" },
//   { Icon: SiWebpack, name: "Webpack", color: "#8DD6F9" },
  { Icon: SiNpm, name: "npm", color: "#CB3837" },
//   { Icon: SiYarn, name: "Yarn", color: "#2C8EBB" },
//   { Icon: SiPnpm, name: "pnpm", color: "#F69220" },
//   { Icon: SiBabel, name: "Babel", color: "#F9DC3E" },
  { Icon: SiEslint, name: "ESLint", color: "#4B32C3" },
  { Icon: SiPrettier, name: "Prettier", color: "#F7B93E" },
  
  // Testing
//   { Icon: SiJest, name: "Jest", color: "#C21325" },
//   { Icon: SiCypress, name: "Cypress", color: "#17202C" },
  
  // Version Control
  { Icon: SiGit, name: "Git", color: "#F05032" },
  { Icon: SiGithub, name: "GitHub", color: "#FFFFFF" },
//   { Icon: SiGitlab, name: "GitLab", color: "#FCA121" },
//   { Icon: SiBitbucket, name: "Bitbucket", color: "#0052CC" },
  
  // DevOps & Containers
  { Icon: SiDocker, name: "Docker", color: "#2496ED" },
//   { Icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
  { Icon: SiJenkins, name: "Jenkins", color: "#D24939" },
  
  // Operating Systems
  { Icon: SiLinux, name: "Linux", color: "#FCC624" },
  { Icon: SiUbuntu, name: "Ubuntu", color: "#E95420" },
//   { Icon: SiApple, name: "macOS", color: "#FFFFFF" },
  
  // Mobile & Desktop
//   { Icon: SiAndroid, name: "Android", color: "#3DDC84" },
//   { Icon: SiFlutter, name: "Flutter", color: "#02569B" },
//   { Icon: SiElectron, name: "Electron", color: "#47848F" },
  
  // Game Development
//   { Icon: SiUnity, name: "Unity", color: "#FFFFFF" },
  
  // Design & Tools
//   { Icon: SiFigma, name: "Figma", color: "#F24E1E" }
  
];

function Skills() {
  return (
    <section className="w-full py-12 overflow-hidden">
      <h2 className="text-indigo-400 text-3xl md:text-5xl font-semibold mb-15 text-center underline underline-offset-8">Tech Stack</h2>
      
      <div className="relative">
        {/* Fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        {/* Scrolling container 1*/}
        <div className="logo-carousel-track">
          {/* First set */}
          <div className="logo-carousel-content">
            {techStack.map((tech, index) => (
              <div key={index} className="logo-item group">
                <tech.Icon 
                  className="w-16 h-16 transition-all duration-300 group-hover:scale-125" 
                  style={{ color: tech.color }}
                />
                <span className="text-white text-sm mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="logo-carousel-content">
            {techStack.map((tech, index) => (
              <div key={`dup-${index}`} className="logo-item group">
                <tech.Icon 
                  className="w-16 h-16 transition-all duration-300 group-hover:scale-125" 
                  style={{ color: tech.color }}
                />
                <span className="text-white text-sm mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Scrolling container 2 - Reverse direction */}
        <div className="logo-carousel-track-reverse mt-15">
          {/* First set */}
          <div className="logo-carousel-content">
            {techStack2.map((tech, index) => (
              <div key={index} className="logo-item group">
                <tech.Icon 
                  className="w-16 h-16 transition-all duration-300 group-hover:scale-125" 
                  style={{ color: tech.color }}
                />
                <span className="text-white text-sm mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="logo-carousel-content">
            {techStack2.map((tech, index) => (
              <div key={`dup-${index}`} className="logo-item group">
                <tech.Icon 
                  className="w-16 h-16 transition-all duration-300 group-hover:scale-125" 
                  style={{ color: tech.color }}
                />
                <span className="text-white text-sm mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;