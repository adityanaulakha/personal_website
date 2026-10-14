import { Page, Block, Reveal } from '../components/PageTransition';
import { PageHeader } from '../components/Section';
import ExperienceRow from '../components/ExperienceRow';
import { experience } from '../data/experience';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Work() {
  useDocumentTitle('Work');
  return (
    <Page>
      <PageHeader
        eyebrow="01 / Work"
        title="Experience"
        description="An upcoming internship at EPAM Systems, plus the roles I have already shipped."
      />
      <div className="mt-12 space-y-10">
        {experience.map((exp) => (
          <Reveal key={exp.id} amount={0.1}>
            <Block>
              <ExperienceRow exp={exp} detailed />
            </Block>
          </Reveal>
        ))}
      </div>
    </Page>
  );
}
