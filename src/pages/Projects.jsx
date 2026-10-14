import { Page, Block, Reveal } from '../components/PageTransition';
import { PageHeader } from '../components/Section';
import ProjectRow from '../components/ProjectRow';
import { projects } from '../data/projects';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Projects() {
  useDocumentTitle('Projects');
  return (
    <Page>
      <PageHeader
        eyebrow="02 / Projects"
        title="Projects"
        description="Academic systems, document version control, and a live hackathon leaderboard."
      />
      <div className="mt-12 space-y-10">
        {projects.map((p) => (
          <Reveal key={p.id} amount={0.1}>
            <Block>
              <ProjectRow project={p} detailed />
            </Block>
          </Reveal>
        ))}
      </div>
    </Page>
  );
}
