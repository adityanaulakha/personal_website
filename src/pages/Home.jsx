import CopyEmail from '../components/CopyEmail';
import { AchievementItem, ExperienceItem, OutlineLink, ProjectItem, TechPill } from '../components/ContentRows';
import Reveal from '../components/Reveal';
import { achievements } from '../data/achievements';
import { experience } from '../data/experience';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { stack } from '../data/stack';
import avatar from '../assets/profile-avatar.jpg';

export default function Home() {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={`${profile.name} portrait`}
            width={96}
            height={96}
            className="size-20 shrink-0 rounded-full bg-blue-300 object-cover object-center sm:size-24 dark:bg-yellow-300"
          />
          <div className="min-w-0">
            <h1 className="text-lg font-bold leading-7 text-foreground sm:text-2xl sm:leading-8">{profile.name}</h1>
            <p className="flex flex-wrap items-center gap-x-1 gap-y-1 text-base text-soft">
              <span>{profile.role}</span>
              <span aria-hidden="true">·</span>
              <span>{profile.tagline}</span>
              <span aria-hidden="true">·</span>
              <CopyEmail email={profile.email} />
            </p>
          </div>
        </div>
        <p className="max-w-xl text-sm text-muted-foreground">{profile.bio}</p>
        <div className="flex flex-wrap gap-0.5">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex size-9 items-center justify-center text-soft transition-colors hover:text-primary"
            >
              <s.Icon className="size-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </header>

      <Reveal>
        <section aria-labelledby="currently-heading" className="inset-card rounded-xl border border-border px-4 py-5">
          <h2 id="currently-heading" className="text-sm font-semibold text-foreground">
            Currently
          </h2>
          <ul className="mt-3 space-y-3">
            {profile.currently.map((c) => (
              <li key={c.label} className="grid gap-0.5 sm:grid-cols-[11.5rem_1fr] sm:items-baseline sm:gap-x-6">
                <p className="text-sm font-semibold text-foreground">{c.label}</p>
                <p className="text-sm text-muted-foreground">{c.detail}</p>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <section aria-labelledby="education-heading" className="space-y-2">
        <Reveal>
          <h2 id="education-heading" className="text-xl font-bold text-foreground">
            Education
          </h2>
        </Reveal>
        <Reveal>
          <article className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-lg font-bold leading-7 text-foreground">{profile.education.school}</h3>
              <p className="text-sm text-soft">{profile.education.degree}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Coursework </span>
                {profile.education.coursework}
              </p>
            </div>
            <p className="shrink-0 text-right text-sm text-soft">{profile.education.years}</p>
          </article>
        </Reveal>
      </section>

      <section aria-labelledby="experience-heading" className="space-y-2">
        <Reveal>
          <h2 id="experience-heading" className="text-xl font-bold text-foreground">
            Experience
          </h2>
        </Reveal>
        <div className="flex flex-col gap-4">
          {experience.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 40}>
              <ExperienceItem exp={exp} />
            </Reveal>
          ))}
        </div>
        <Reveal className="flex justify-center pt-2">
          <OutlineLink to="/work">All experience</OutlineLink>
        </Reveal>
      </section>

      <section aria-labelledby="projects-heading" className="space-y-2">
        <Reveal>
          <h2 id="projects-heading" className="text-2xl font-bold text-foreground">
            Projects
          </h2>
        </Reveal>
        <div className="blur-list flex flex-col gap-4">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 40}>
              <ProjectItem project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal className="flex justify-center pt-2">
          <OutlineLink to="/projects">All projects</OutlineLink>
        </Reveal>
      </section>

      <section aria-labelledby="achievements-heading" className="space-y-2">
        <Reveal>
          <h2 id="achievements-heading" className="text-2xl font-bold text-foreground">
            Achievements
          </h2>
        </Reveal>
        <div className="flex flex-col gap-4">
          {achievements.slice(0, 3).map((item) => (
            <Reveal key={item.id}>
              <AchievementItem item={item} />
            </Reveal>
          ))}
        </div>
        <Reveal className="flex justify-center pt-2">
          <OutlineLink to="/achievements">All achievements</OutlineLink>
        </Reveal>
      </section>

      <section aria-labelledby="stack-heading" className="space-y-2">
        <Reveal>
          <h2 id="stack-heading" className="text-2xl font-bold text-foreground">
            Stack
          </h2>
        </Reveal>
        <Reveal>
          <ul className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <li key={item}>
                <TechPill name={item} />
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section aria-label="Contact" className="grid gap-3 sm:grid-cols-2">
        <Reveal>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inset-card group flex h-full items-start justify-between gap-4 rounded-xl border border-border px-4 py-4 transition-colors hover:bg-muted"
          >
            <span>
              <span className="block text-sm font-semibold text-foreground">Resume</span>
              <span className="mt-1 block text-sm text-muted-foreground">One page, kept current.</span>
            </span>
          </a>
        </Reveal>
        <Reveal>
          <a
            href={`mailto:${profile.email}`}
            className="inset-card group flex h-full items-start justify-between gap-4 rounded-xl border border-border px-4 py-4 transition-colors hover:bg-muted"
          >
            <span>
              <span className="block text-sm font-semibold text-foreground">Say hello</span>
              <span className="mt-1 block text-sm text-muted-foreground">{profile.email}</span>
            </span>
          </a>
        </Reveal>
      </section>
    </div>
  );
}
