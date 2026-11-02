import { Page, Block } from '../components/PageTransition';
import { PageHeader } from '../components/Section';
import ExperienceRow from '../components/ExperienceRow';
import { experience } from '../data/experience';

export default function Work() {
  return (
    <Page>
      <PageHeader
        title="Experience"
        description="An upcoming internship at EPAM Systems, plus the roles I have already shipped."
      />
      <div className="mt-8">
        {experience.map((exp) => (
          <Block key={exp.id}>
            <ExperienceRow exp={exp} />
          </Block>
        ))}
      </div>
    </Page>
  );
}
