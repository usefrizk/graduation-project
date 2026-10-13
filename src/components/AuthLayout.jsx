import Logo from "./Logo"
import RingsGraphic from "./RingsGraphic"
import "../styles/auth.css"

// Shared shell for Login and Signup: brand pane + form panel with the diagonal edge.
export default function AuthLayout({ mode, go, title, subtitle, children }) {
  const isSignup = mode === "signup"
  return (
    <div className="au">
      <div className="bp">
        <Logo light />
        <h2>{isSignup ? <>خطتك بتبدأ<br />من هنا</> : <>كمّل من<br />حيث وقفت</>}</h2>
        <p>أكل وتمارين على مقاسك، وبتراعي إصاباتك</p>
        <RingsGraphic className="rings" />
      </div>
      <div className="fp">
        <div className="seg">
          <button className={!isSignup ? "on" : ""} onClick={() => go("login")}>تسجيل دخول</button>
          <button className={isSignup ? "on" : ""} onClick={() => go("signup")}>حساب جديد</button>
        </div>
        <h1>{title}</h1>
        <p className="mu sub">{subtitle}</p>
        {children}
        <p className="back"><a href="#" onClick={(e) => { e.preventDefault(); go("landing") }}>← الرجوع للصفحة الرئيسية</a></p>
      </div>
    </div>
  )
}
