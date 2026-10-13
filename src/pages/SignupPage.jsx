import { useState } from "react"
import AuthLayout from "../components/AuthLayout"

const strength = (p) => [p.length >= 8, /[A-Za-z]/.test(p) && /\d/.test(p), p.length >= 12].filter(Boolean).length

export default function SignupPage({ go }) {
  const [f, setF] = useState({ name: "", email: "", password: "", confirm: "", terms: false })
  const [error, setError] = useState("")
  const set = (k, v) => setF((p) => ({ ...p, [k]: v }))
  const s = strength(f.password)

  const submit = (e) => {
    e.preventDefault()
    if (!f.name || !f.email) return setError("الاسم والإيميل مطلوبين")
    if (f.password.length < 8) return setError("كلمة المرور لازم 8 حروف على الأقل")
    if (f.password !== f.confirm) return setError("كلمتين المرور مش متطابقين")
    if (!f.terms) return setError("لازم توافق على الشروط")
    // TODO (backend): POST /api/auth/register { fullName, email, password, confirmPassword }
    go("details")
  }

  return (
    <AuthLayout mode="signup" go={go} title="ابدأ رحلتك" subtitle="اعمل حساب في دقيقة، وبعدها هنسألك عن جسمك وهدفك">
      <form onSubmit={submit}>
        <input className="input" placeholder="الاسم" value={f.name} onChange={(e) => set("name", e.target.value)} />
        <input className="input" type="email" placeholder="البريد الإلكتروني" value={f.email} onChange={(e) => set("email", e.target.value)} />
        <input className="input" type="password" placeholder="كلمة المرور" value={f.password} onChange={(e) => set("password", e.target.value)} />
        <div className="strength">{[1, 2, 3].map((i) => <i key={i} className={i <= s ? "on" : ""} />)}</div>
        <input className="input" type="password" placeholder="تأكيد كلمة المرور" value={f.confirm} onChange={(e) => set("confirm", e.target.value)} />
        <label className="check"><input type="checkbox" checked={f.terms} onChange={(e) => set("terms", e.target.checked)} /> موافق على الشروط وسياسة الخصوصية</label>
        {error && <p className="err">{error}</p>}
        <button className="btn dark full">كمّل لخطوة بياناتك</button>
      </form>
    </AuthLayout>
  )
}
