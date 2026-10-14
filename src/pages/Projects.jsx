import { ProjectItem } from '../components/ContentRows';
import Reveal from '../components/Reveal';
import { projects } from '../data/projects';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Projects() {
  useDocumentTitle('Projects');
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">Projects</h1>
        <p className="text-xs text-soft md:text-base">
          Academic systems, document version control, and a live hackathon leaderboard.
        </p>
      </header>
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <Reveal key={project.id}>
            <ProjectItem project={project} detailed />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
