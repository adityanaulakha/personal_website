/** Cloud Firestore mark. Brand fills stay fixed so the icon stays recognizable in both themes. */
export default function FirestoreIcon({ className, ...props }) {
  const svgProps = { ...props };
  delete svgProps.color;
  return (
    <svg viewBox="0 0 225 250" className={className} aria-hidden="true" {...svgProps}>
      <path fill="#ffc400" d="M112.47 50.014v-50L0 50v50z" />
      <path fill="#ff9100" d="m112.117 50.014.03-.014 112.5 50V50l-112.5-50-.03.014z" />
      <path fill="#ffc400" d="M112.47 137.514v-50L0 137.5v50z" />
      <path fill="#ff9100" d="m112.455 137.514.03-.014 112.5 50v-50l-112.5-50-.03.014z" />
      <path fill="#dd2c00" d="M154.688 181.25 112.5 200v50l98.438-43.75z" />
    </svg>
  );
}
