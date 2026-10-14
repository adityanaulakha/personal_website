import Magnetic from './Magnetic';

export default function TechChip({ name, Icon }) {
  if (Icon) {
    return (
      <Magnetic strength={0.45}>
        <span
          className="hairline group/chip relative inline-flex h-10 w-10 items-center justify-center rounded-lg border bg-bg-elevated text-fg-muted transition-[color,border-color,box-shadow,background-color] duration-200 hover:border-line-strong hover:bg-fg/[0.04] hover:text-fg hover:shadow-[0_8px_18px_-10px_rgba(0,0,0,0.35)]"
          tabIndex={0}
          aria-label={name}
        >
          <Icon className="h-[18px] w-[18px] transition-transform duration-300 ease-out group-hover/chip:scale-110" aria-hidden="true" />
          <span
            role="tooltip"
            className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-fg px-2 py-1 text-xs font-medium leading-4 text-bg opacity-0 shadow-sm transition-[opacity,transform] duration-200 ease-out group-hover/chip:translate-y-0 group-hover/chip:opacity-100 group-focus-visible/chip:translate-y-0 group-focus-visible/chip:opacity-100"
          >
            {name}
          </span>
        </span>
      </Magnetic>
    );
  }
  return (
    <Magnetic strength={0.35}>
      <span className="hairline inline-flex cursor-default items-center rounded-md border bg-bg-elevated px-2.5 py-1 text-sm font-normal leading-5 text-fg-muted transition-[color,border-color,transform] duration-200 hover:border-line-strong hover:text-fg">
        {name}
      </span>
    </Magnetic>
  );
}
