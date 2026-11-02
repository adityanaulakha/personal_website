import { Page, Block, Reveal } from '../components/PageTransition';
import { PageHeader } from '../components/Section';
import ProjectRow from '../components/ProjectRow';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Page>
      <PageHeader
        eyebrow="02 / Projects"
        title="Projects"
        description="An academic PWA, a live hackathon leaderboard, and a collaborative editor with Git-style history."
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
