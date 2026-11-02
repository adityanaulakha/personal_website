import { Link } from 'react-router-dom';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { Page, Block } from '../components/PageTransition';
import Section from '../components/Section';
import ExperienceRow from '../components/ExperienceRow';
import ProjectRow from '../components/ProjectRow';
import AchievementRow from '../components/AchievementRow';
import TechTile from '../components/TechTile';
import TextReveal from '../components/TextReveal';
import CopyEmail from '../components/CopyEmail';
import { profile } from '../data/profile';
import { experience } from '../data/experience';
import { projects } from '../data/projects';
import { achievements } from '../data/achievements';
import { skillGroups } from '../data/stack';
import { resolveTech } from '../data/tech';
import avatar from '../assets/profile-avatar.jpg';

const VISIBLE_EXPERIENCES = 3;

function ExperiencePreview() {
  const visible = experience.slice(0, VISIBLE_EXPERIENCES);

  return (
    <>
      <div className="space-y-0.5">
        {visible.map((exp) => (
          <Block key={exp.id}>
            <ExperienceRow exp={exp} />
          </Block>
        ))}
      </div>
      <Block className="mt-6 flex justify-center">
        <Link
          to="/work"
          className="inline-flex rounded-md border border-line bg-bg-elevated px-3.5 py-1.5 text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-fg"
        >
          Show all work experiences
        </Link>
      </Block>
    </>
  );
}

export default function Home() {
  return (
    <Page>
      <Block as="header" className="flex items-center gap-4">
        <img
          src={avatar}
          alt={`${profile.name} portrait`}
          width={64}
          height={64}
          className="h-16 w-16 shrink-0 rounded-full object-cover object-center"
        />
        <div className="min-w-0">
          <h1 className="text-xl font-bold leading-tight text-fg" aria-label={profile.name}>
            <TextReveal text={profile.name} delay={0.12} />
          </h1>
          <p className="mt-0.5 flex flex-wrap items-center gap-x-1.5 text-sm font-normal leading-5 text-fg-muted">
            <span>{profile.role}</span>
            <span aria-hidden="true">·</span>
            <span>{profile.tagline}</span>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${profile.taglineEmail}`}
              className="transition-colors duration-200 hover:text-fg"
            >
              {profile.taglineEmail}
            </a>
            <CopyEmail email={profile.taglineEmail} />
          </p>
        </div>
      </Block>

      <Block as="p" className="mt-6 text-sm font-normal leading-5 text-fg-muted">
        {profile.bio}
      </Block>

      <Block className="mt-4">
        <ul className="flex items-center gap-3">
          {profile.socials.map((s) => {
            const external = s.href.startsWith('http');
            return (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  title={s.label}
                  className="group relative inline-flex text-fg-muted transition-colors duration-200 hover:text-fg focus-visible:text-fg"
                >
                  <s.Icon className="h-4 w-4" aria-hidden="true" />
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1.5 -translate-x-1/2 whitespace-nowrap text-xs text-fg opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    {s.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Block>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <ExperiencePreview />
      </Section>

      {/* Projects */}
      <Section id="projects" title="Selected projects" to="/projects" toLabel="All projects">
        <div className="space-y-2">
          {projects.map((p) => (
            <Block key={p.id}>
              <ProjectRow project={p} />
            </Block>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="Achievements" to="/achievements" toLabel="All achievements">
        <div className="space-y-1">
          {achievements.slice(0, 3).map((a) => (
            <Block key={a.id}>
              <AchievementRow item={a} />
            </Block>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <h3 className="text-sm font-semibold leading-tight text-fg">{group.label}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const tech = resolveTech(item);
                  return <TechTile key={item} name={tech.name} Icon={tech.Icon} color={tech.color} />;
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Links */}
      <Section>
        <div className="space-y-5">
          <Block>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <p className="inline-flex items-center gap-1 text-base font-semibold leading-tight text-fg">
                Resume
                <HiOutlineArrowUpRight className="h-3.5 w-3.5 text-fg-muted" aria-hidden="true" />
              </p>
              <p className="mt-0.5 text-sm font-normal text-fg-muted">One page, kept current.</p>
            </a>
          </Block>
          <Block>
            <a href={`mailto:${profile.email}`} className="group block">
              <p className="text-base font-semibold leading-tight text-fg">Say hello</p>
              <p className="mt-0.5 text-sm font-normal text-fg-muted">{profile.email}</p>
            </a>
          </Block>
        </div>
      </Section>
    </Page>
  );
}
