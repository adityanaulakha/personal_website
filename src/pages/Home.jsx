import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { Page, Block } from '../components/PageTransition';
import Section from '../components/Section';
import ExperienceRow from '../components/ExperienceRow';
import ProjectRow from '../components/ProjectRow';
import AchievementRow from '../components/AchievementRow';
import TechTile from '../components/TechTile';
import SpotlightCard from '../components/SpotlightCard';
import TextReveal from '../components/TextReveal';
import CopyEmail from '../components/CopyEmail';
import { profile } from '../data/profile';
import { experience } from '../data/experience';
import { projects } from '../data/projects';
import { achievements } from '../data/achievements';
import { skillGroups } from '../data/stack';
import { resolveTech } from '../data/tech';
import avatar from '../assets/profile-avatar.jpg';

const spring = { type: 'spring', stiffness: 300, damping: 18 };
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
      <Block className="mt-4 flex justify-center">
        <Link
          to="/work"
          className="inline-block rounded-lg border border-line-strong px-4 py-2 text-sm font-medium text-fg-muted transition-colors duration-200 hover:border-fg/30 hover:text-fg"
        >
          Show all work experiences
        </Link>
      </Block>
    </>
  );
}

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <Page>
      {/* Identity */}
      <Block as="header" className="flex items-center gap-5 sm:gap-6">
        <motion.img
          src={avatar}
          alt={`${profile.name} portrait`}
          width={96}
          height={96}
          whileHover={reduce ? undefined : { scale: 1.05, rotate: -3 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
          transition={spring}
          className="hairline h-20 w-20 shrink-0 cursor-pointer rounded-full border object-cover object-center transition-[border-color,box-shadow] duration-300 hover:border-line-strong hover:shadow-[0_12px_30px_-14px_rgba(0,0,0,0.45)] sm:h-24 sm:w-24"
        />
        <div className="min-w-0">
          <h1
            className="text-lg font-bold text-fg sm:text-2xl"
            aria-label={profile.name}
          >
            <TextReveal text={profile.name} delay={0.12} />
          </h1>
          <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-sm font-normal leading-5 text-fg-muted">
            <span>{profile.role}</span>
            <span aria-hidden="true">·</span>
            <span>{profile.tagline}</span>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${profile.taglineEmail}`}
              className="link-slide transition-colors duration-200 hover:text-fg"
            >
              {profile.taglineEmail}
            </a>
            <CopyEmail email={profile.taglineEmail} />
          </p>
        </div>
      </Block>

      <Block as="p" className="mt-4 max-w-prose text-xs font-normal leading-5 text-fg-muted sm:text-sm">
        {profile.bio}
      </Block>

      <Block className="mt-5">
        <ul className="flex items-center gap-4">
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
                  className="group relative inline-flex text-fg-subtle transition-colors duration-200 hover:text-fg focus-visible:text-fg"
                >
                  <s.Icon className="h-[18px] w-[18px]" aria-hidden="true" />
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
      <Section title="Experience">
        <ExperiencePreview />
      </Section>

      {/* Projects */}
      <Section title="Selected projects" to="/projects" toLabel="All projects">
        <div className="space-y-2">
          {projects.map((p) => (
            <Block key={p.id}>
              <ProjectRow project={p} />
            </Block>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section title="Achievements" to="/achievements" toLabel="All achievements">
        <div className="space-y-1">
          {achievements.slice(0, 3).map((a) => (
            <Block key={a.id}>
              <AchievementRow item={a} />
            </Block>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <h3 className="text-base font-semibold leading-tight text-fg">{group.label}</h3>
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
        <div className="grid gap-3 sm:grid-cols-2">
          <Block>
            <SpotlightCard
              as="a"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 p-5"
            >
              <div>
                <p className="text-base font-semibold leading-tight text-fg">Resume</p>
                <p className="mt-1 text-xs font-normal text-fg-muted sm:text-sm">One page, kept current.</p>
              </div>
              <HiOutlineArrowUpRight
                className="mt-1 h-4 w-4 shrink-0 text-fg-subtle transition-[transform,color] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                aria-hidden="true"
              />
            </SpotlightCard>
          </Block>
          <Block>
            <SpotlightCard
              as="a"
              href={`mailto:${profile.email}`}
              className="group flex items-start justify-between gap-4 p-5"
            >
              <div>
                <p className="text-base font-semibold leading-tight text-fg">Say hello</p>
                <p className="mt-1 text-xs font-normal text-fg-muted sm:text-sm">{profile.email}</p>
              </div>
              <HiOutlineArrowUpRight
                className="mt-1 h-4 w-4 shrink-0 text-fg-subtle transition-[transform,color] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                aria-hidden="true"
              />
            </SpotlightCard>
          </Block>
        </div>
      </Section>
    </Page>
  );
}
