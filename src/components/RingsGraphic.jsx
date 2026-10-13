export default function RingsGraphic({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 640 640" aria-hidden="true">
      <g fill="none" strokeWidth="3">
        <circle cx="320" cy="320" r="300" stroke="#1B4A38" />
        <circle cx="320" cy="320" r="236" stroke="#1D9E75" />
        <circle cx="320" cy="320" r="172" stroke="#C6F135" strokeWidth="5" />
        <circle cx="320" cy="320" r="108" stroke="#1D9E75" />
      </g>
      <circle cx="320" cy="320" r="46" fill="#C6F135" />
    </svg>
  )
}
