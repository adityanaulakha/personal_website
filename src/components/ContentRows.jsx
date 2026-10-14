import { Link } from 'react-router-dom';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

export function OutlineLink({ href, to, children, external = false }) {
  const className =
    'btn-inset inline-flex items-center justify-center rounded-[0.45rem] border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted';
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={className}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

export function TechPill({ name, Icon }) {
  return (
    <span className="tag-inset inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1 text-sm font-medium text-foreground">
      {Icon ? <Icon className="size-3.5 shrink-0" aria-hidden="true" /> : null}
      {name}
    </span>
  );
}

function DateBlock({ short, long, location }) {
  return (
    <div className="flex min-w-[88px] shrink-0 flex-col text-right text-sm text-soft md:min-w-[140px]">
      {short && long && short !== long ? (
        <>
          <span className="md:hidden">{short}</span>
          <span className="hidden md:block">{long}</span>
        </>
      ) : (
        <span>{long || short}</span>
      )}
      {location ? <span>{location}</span> : null}
    </div>
  );
}

function Status({ exp }) {
  if (exp.current) {
    return (
      <span className="inline-flex items-center gap-1 rounded-md border border-green-300 bg-green-500/10 px-2 py-1 text-xs text-green-700 dark:text-green-400">
        <span className="live-dot size-2 rounded-full bg-green-500" aria-hidden="true" />
        Working
      </span>
    );
  }
  if (exp.upcoming) {
    return (
      <span className="inline-flex items-center rounded-md border border-border bg-muted px-2 py-1 text-xs text-muted-foreground">
        Upcoming
      </span>
    );
  }
  return null;
}

export function ExperienceItem({ exp, detailed = false }) {
  const long = exp.end ? `${exp.start} – ${exp.end}` : exp.start;
  const body = (
    <article className="group/card flex flex-row flex-nowrap items-start justify-between gap-3">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-bold leading-7 text-foreground">{exp.company}</h3>
          <Status exp={exp} />
        </div>
        <p className="text-sm text-soft">{exp.role}</p>
        {detailed && exp.type ? <p className="mt-1 text-sm text-soft">{exp.type}</p> : null}
      </div>
      <DateBlock short={exp.short} long={long} location={exp.location} />
    </article>
  );

  return (
    <div id={exp.id} className="scroll-mt-20">
      {detailed ? (
        body
      ) : (
        <Link to={`/work#${exp.id}`} className="block rounded-md transition-colors hover:text-primary" aria-label={`${exp.role} at ${exp.company}`}>
          {body}
        </Link>
      )}
      {detailed && (exp.tech?.length > 0 || exp.bullets?.length > 0 || exp.links?.length > 0) && (
        <div className="mt-6 space-y-6">
          {exp.tech?.length > 0 && (
            <div>
              <h4 className="mb-2 text-sm font-semibold text-foreground">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <TechPill key={t.name} name={t.name} Icon={t.Icon} />
                ))}
              </div>
            </div>
          )}
          {exp.bullets?.length > 0 && (
            <div>
              <h4 className="mb-2 text-sm font-semibold text-foreground">What I did</h4>
              <ul className="space-y-2 text-sm leading-5 text-muted-foreground">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-[0.55em] size-1 shrink-0 rounded-full bg-soft" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {exp.links?.length > 0 && (
            <div className="flex flex-wrap gap-5">
              {exp.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  {l.label}
                  <HiOutlineArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function ProjectItem({ project, detailed = false }) {
  const thumb = project.image ? (
    <img
      src={project.image}
      alt=""
      width={640}
      height={400}
      className={
        detailed
          ? 'aspect-[16/10] w-full rounded-md border border-border object-cover'
          : 'size-14 shrink-0 rounded-md border border-border object-cover sm:size-16'
      }
    />
  ) : null;

  if (!detailed) {
    const inner = (
      <article className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-1 gap-3">
          {thumb}
          <div className="min-w-0">
            <h3 className="text-lg font-bold leading-7 text-foreground">{project.title}</h3>
            <p className="text-sm text-soft">{project.summary}</p>
          </div>
        </div>
        <div className="shrink-0 text-right text-sm text-soft">
          <p className="text-foreground">{project.metric}</p>
          <p>{project.metricLabel}</p>
        </div>
      </article>
    );
    if (project.live) {
      return (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="blur-item block" aria-label={`Open ${project.title}`}>
          {inner}
        </a>
      );
    }
    return (
      <Link to="/projects" className="blur-item block" aria-label={project.title}>
        {inner}
      </Link>
    );
  }

  return (
    <article id={project.id} className="scroll-mt-20">
      {project.image && (
        project.live ? (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="mb-4 block" aria-label={`Open ${project.title}`}>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              width={1200}
              height={750}
              className="aspect-[16/10] w-full rounded-md border border-border object-cover transition-transform duration-300 hover:scale-[1.01]"
            />
          </a>
        ) : (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            width={1200}
            height={750}
            className="mb-4 aspect-[16/10] w-full rounded-md border border-border object-cover"
          />
        )
      )}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold leading-7 text-foreground">{project.title}</h3>
        <div className="shrink-0 text-right text-sm text-soft">
          <p className="text-foreground">{project.metric}</p>
          <p>{project.metricLabel}</p>
          <p>{project.year}</p>
        </div>
      </div>
      <p className="mt-2 text-sm leading-5 text-muted-foreground">{project.description}</p>
      {project.bullets?.length > 0 && (
        <ul className="mt-3 space-y-2 text-sm leading-5 text-muted-foreground">
          {project.bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-[0.55em] size-1 shrink-0 rounded-full bg-soft" aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechPill key={t} name={t} />
        ))}
      </div>
      {(project.github || project.live) && (
        <div className="mt-4 flex flex-wrap gap-5">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline">
              Source
              <HiOutlineArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline">
              Live
              <HiOutlineArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export function AchievementItem({ item, detailed = false }) {
  if (!detailed) {
    return (
      <Link to="/achievements" className="block" aria-label={item.title}>
        <article className="grid gap-1 sm:grid-cols-[56px_1fr] sm:gap-x-6">
          <p className="text-sm text-soft tabular-nums">{item.year}</p>
          <div className="min-w-0">
            <p className="text-sm text-soft">{item.category}</p>
            <h3 className="text-lg font-bold leading-7 text-foreground">{item.title}</h3>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <article id={item.id} className="scroll-mt-20 sm:grid sm:grid-cols-[56px_1fr] sm:gap-x-6">
      <p className="text-sm text-soft tabular-nums">{item.year}</p>
      <div className="min-w-0">
        <p className="text-sm text-soft">{item.category}</p>
        <h3 className="text-lg font-bold leading-7 text-foreground">{item.title}</h3>
        <p className="mt-2 text-sm leading-5 text-muted-foreground">{item.description}</p>
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            Proof
            <HiOutlineArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
