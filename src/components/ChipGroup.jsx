// options: [[value, label, optionalSubText], ...]
// variant: "chip" (small pill) | "goal" (big card)
export default function ChipGroup({ options, value, onChange, variant = "chip" }) {
  return (
    <div className={variant === "goal" ? "goal-grid" : "chips"}>
      {options.map(([v, label, sub]) => (
        <button
          type="button"
          key={v}
          className={`${variant} ${value === v ? "on" : ""}`}
          onClick={() => onChange(v)}
        >
          {label}
          {sub && <small>{sub}</small>}
        </button>
      ))}
    </div>
  )
}
