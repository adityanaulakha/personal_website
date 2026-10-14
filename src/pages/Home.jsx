import { motion, useReducedMotion } from 'motion/react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { Page, Block } from '../components/PageTransition';
import Section from '../components/Section';
import ExperienceRow from '../components/ExperienceRow';
import ProjectRow from '../components/ProjectRow';
import AchievementRow from '../components/AchievementRow';
import TechChip from '../components/TechChip';
import CopyEmail from '../components/CopyEmail';
import SpotlightCard from '../components/SpotlightCard';
import Magnetic from '../components/Magnetic';
import TextReveal from '../components/TextReveal';
import { profile } from '../data/profile';
import { experience } from '../data/experience';
import { projects } from '../data/projects';
import { achievements } from '../data/achievements';
import { stack } from '../data/stack';
import avatar from '../assets/profile-avatar.jpg';

const spring = { type: 'spring', stiffness: 300, damping: 18 };

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
            className="text-lg font-bold leading-7 text-fg sm:text-2xl sm:leading-8"
            aria-label={profile.name}
          >
            <TextReveal text={profile.name} delay={0.12} />
          </h1>
          <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-base font-normal leading-6 text-fg-muted">
            <span>{profile.role}</span>
            <span aria-hidden="true">·</span>
            <span>{profile.tagline}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex">
              <CopyEmail email={profile.email} />
            </span>
          </p>
        </div>
      </Block>

      <Block as="p" className="mt-4 max-w-prose text-sm font-normal leading-5 text-fg-muted">
        {profile.bio}
      </Block>

      <Block className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
        {profile.socials
          .filter((s) => ['GitHub', 'TUF', 'LinkedIn'].includes(s.label))
          .map((s) => (
            <Magnetic key={s.label} strength={0.35}>
              <motion.a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 420, damping: 22 }}
                className="inline-flex items-center gap-1.5 text-sm font-medium leading-5 text-fg-muted transition-colors duration-200 hover:text-fg"
              >
                <s.Icon className="h-4 w-4" aria-hidden="true" />
                {s.label}
              </motion.a>
            </Magnetic>
          ))}
      </Block>

      {/* Currently */}
      <Block className="mt-10">
        <SpotlightCard className="p-5" lift={false}>
          <p className="text-sm font-semibold leading-5 text-fg">Currently</p>
          <ul className="mt-3 space-y-3">
            {profile.currently.map((c) => (
              <li key={c.label} className="grid gap-0.5 sm:grid-cols-[11.5rem_1fr] sm:items-baseline sm:gap-x-6">
                <p className="flex items-center gap-2 text-sm font-semibold leading-5 text-fg">
                  {c.live && (
                    <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  )}
                  {c.label}
                </p>
                <p className="text-sm leading-5 text-fg-muted">
                  {c.detail}
                </p>
              </li>
            ))}
          </ul>
        </SpotlightCard>
      </Block>

      {/* Experience */}
      <Section index="01" title="Experience" to="/work" toLabel="All experience">
        <div className="space-y-2">
          {experience.slice(0, 3).map((exp) => (
            <Block key={exp.id}>
              <ExperienceRow exp={exp} />
            </Block>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section index="02" title="Selected projects" to="/projects" toLabel="All projects">
        <div className="space-y-2">
          {projects.map((p) => (
            <Block key={p.id}>
              <ProjectRow project={p} />
            </Block>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section index="03" title="Achievements" to="/achievements" toLabel="All achievements">
        <div className="space-y-1">
          {achievements.slice(0, 3).map((a) => (
            <Block key={a.id}>
              <AchievementRow item={a} />
            </Block>
          ))}
        </div>
      </Section>

      {/* Stack */}
      <Section index="04" title="Stack">
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <TechChip key={item} name={item} />
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
                <p className="text-sm font-semibold leading-5 text-fg">Resume</p>
                <p className="mt-1 text-sm text-fg-muted">One page, kept current.</p>
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
                <p className="text-sm font-semibold leading-5 text-fg">Say hello</p>
                <p className="mt-1 text-sm text-fg-muted">{profile.email}</p>
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
