import { ExperienceItem } from '../components/ContentRows';
import Reveal from '../components/Reveal';
import { experience } from '../data/experience';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Work() {
  useDocumentTitle('Work');
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">Experience</h1>
        <p className="text-xs text-soft md:text-base">
          An upcoming internship at EPAM Systems, plus the roles I have already shipped.
        </p>
      </header>
      <div className="flex flex-col gap-10">
        {experience.map((exp) => (
          <Reveal key={exp.id}>
            <ExperienceItem exp={exp} detailed />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
