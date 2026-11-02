/**
 * Dashed icon tile used by experience, projects, and the stack.
 * Hover or focus (including a tap, which focuses the control) reveals the label.
 */
export default function TechTile({ name, Icon, color }) {
  return (
    <button type="button" className="tech-tile" aria-label={name}>
      <Icon className="h-[18px] w-[18px] shrink-0" color={color} aria-hidden="true" />
      <span className="tech-tile-label">
        <span aria-hidden="true">{name}</span>
      </span>
    </button>
  );
}
