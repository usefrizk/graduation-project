export default function Logo({ light = false }) {
  return (
    <div className="logo" dir="ltr" style={{ color: light ? "#fff" : "var(--ink)" }}>
      Nutri<em>Fit</em><u> AI</u>
    </div>
  )
}
