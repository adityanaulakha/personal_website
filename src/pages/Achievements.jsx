import { AchievementItem } from '../components/ContentRows';
import Reveal from '../components/Reveal';
import { achievements, certifications } from '../data/achievements';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Achievements() {
  useDocumentTitle('Achievements');
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">Achievements</h1>
        <p className="text-xs text-soft md:text-base">
          Leadership, competitions, and the certifications behind the work.
        </p>
      </header>
      <div className="flex flex-col gap-8">
        {achievements.map((item) => (
          <Reveal key={item.id}>
            <AchievementItem item={item} detailed />
          </Reveal>
        ))}
      </div>
      <section aria-labelledby="certifications-heading" className="space-y-6">
        <h2 id="certifications-heading" className="text-2xl font-bold text-foreground">
          Certifications
        </h2>
        {certifications.map((group) => (
          <Reveal key={group.id}>
            <div>
              <h3 className="text-sm font-semibold text-foreground">{group.group}</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
