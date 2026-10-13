import Logo from "./Logo"
import "../styles/app-layout.css"

// Sidebar shell shared by all logged-in pages (plan, meals, injuries, progress, supplements).
const NAV = [["plan", "الخطة"], ["meals", "الأكل"], ["injuries", "الإصابات"], ["progress", "التقدم"], ["supplements", "المكملات"]]

export default function AppLayout({ active, go, children }) {
  return (
    <div className="app">
      <nav className="side">
        <Logo light />
        {NAV.map(([k, label]) => (
          <button key={k} className={`nv ${active === k ? "on" : ""}`} onClick={() => go(k)}>{label}</button>
        ))}
        <button className="nv exit" onClick={() => go("landing")}>تسجيل خروج</button>
      </nav>
      <main className="main">{children}</main>
    </div>
  )
}
