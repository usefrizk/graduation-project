import { useState } from "react"
import AuthLayout from "../components/AuthLayout"

export default function LoginPage({ go }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const submit = (e) => {
    e.preventDefault()
    if (!email || !password) return setError("اكتب الإيميل وكلمة المرور")
    // TODO (backend): POST /api/auth/login { email, password } -> { token, role }
    // Save the token, then go to the plan page.
    go("plan")
  }

  return (
    <AuthLayout mode="login" go={go} title="أهلاً بيك تاني" subtitle="سجّل دخولك وكمّل خطتك">
      <form onSubmit={submit}>
        <input className="input" type="email" placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="input" type="password" placeholder="كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="err">{error}</p>}
        <p className="link">نسيت كلمة المرور؟</p>
        <button className="btn dark full">دخول</button>
      </form>
    </AuthLayout>
  )
}
