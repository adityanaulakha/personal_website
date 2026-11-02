/** Letter mark for skills that are not a single brand (SQL, REST, coursework). */
export default function MonogramIcon({ className, color, text, ...props }) {
  const size = text.length >= 4 ? 6.5 : text.length === 3 ? 7.5 : 10;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <text
        x="12"
        y="12.5"
        textAnchor="middle"
        dominantBaseline="central"
        fill={color || 'currentColor'}
        fontSize={size}
        fontWeight="700"
        fontFamily="Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
      >
        {text}
      </text>
    </svg>
  );
}

export function SqlIcon(props) {
  return <MonogramIcon text="SQL" {...props} />;
}

export function RestIcon(props) {
  return <MonogramIcon text="API" {...props} />;
}

export function DsaIcon(props) {
  return <MonogramIcon text="DSA" {...props} />;
}

export function OopIcon(props) {
  return <MonogramIcon text="OOP" {...props} />;
}

export function DbmsIcon(props) {
  return <MonogramIcon text="DB" {...props} />;
}

export function NetworksIcon(props) {
  return <MonogramIcon text="CN" {...props} />;
}

export function SystemDesignIcon(props) {
  return <MonogramIcon text="SD" {...props} />;
}
