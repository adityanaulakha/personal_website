import { Page, Block, Reveal } from '../components/PageTransition';
import { PageHeader } from '../components/Section';
import AchievementRow from '../components/AchievementRow';
import { achievements, certifications } from '../data/achievements';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Achievements() {
  useDocumentTitle('Achievements');
  return (
    <Page>
      <PageHeader
        eyebrow="03 / Achievements"
        title="Achievements"
        description="Leadership, competitions, and the certifications behind the work."
      />
      <div className="mt-12 space-y-8">
        {achievements.map((a) => (
          <Reveal key={a.id} amount={0.2}>
            <Block>
              <AchievementRow item={a} detailed />
            </Block>
          </Reveal>
        ))}
      </div>
      <div className="mt-16">
        <Block>
          <h2 className="text-xl font-bold leading-7 text-fg">Certifications</h2>
        </Block>
        <div className="mt-6 space-y-8">
          {certifications.map((group) => (
            <Reveal key={group.id} amount={0.2}>
              <Block>
                <p className="text-sm font-semibold leading-5 text-fg">{group.group}</p>
                <ul className="mt-2 space-y-1.5 text-sm font-normal leading-5 text-fg-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Block>
            </Reveal>
          ))}
        </div>
      </div>
    </Page>
  );
}
