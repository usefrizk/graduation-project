import { useState } from "react"
import Logo from "../components/Logo"
import ChipGroup from "../components/ChipGroup"
import { bmi, targets } from "../lib/calc"
import "../styles/details.css"

const GOALS = [["cut", "تنشيف", "نزول دهون"], ["bulk", "تضخيم", "زيادة عضلات"], ["fitness", "لياقة", "صحة وحركة"]]
const LEVELS = [["beginner", "مبتدئ"], ["intermediate", "متوسط"], ["advanced", "متقدم"]]
const INJURIES = [["shoulder", "الكتف"], ["knee", "الركبة"], ["lowerBack", "أسفل الضهر"], ["none", "لا"]]
const DAYS = ["س", "ح", "ن", "ث", "ر", "خ", "ج"]
const LIMITS = { age: [12, 90], weight: [30, 300], height: [120, 230] } // same as SRS section 7

export default function DetailsPage({ go, onSubmit }) {
  const [f, setF] = useState({
    age: 20, sex: "male", weight: 100, height: 175,
    goal: "cut", level: "beginner", days: [1, 1, 0, 1, 0, 1, 0], injury: "shoulder", xray: false,
  })
  const [error, setError] = useState("")
  const set = (k, v) => setF((p) => ({ ...p, [k]: v }))
  const num = (k) => (e) => set(k, +e.target.value)
  const dayCount = f.days.filter(Boolean).length
  const t = targets({ ...f, days: dayCount })

  const submit = () => {
    for (const k of Object.keys(LIMITS)) {
      const [min, max] = LIMITS[k]
      if (!(f[k] >= min && f[k] <= max)) return setError(`القيمة خارج المدى المسموح (${min} إلى ${max})`)
    }
    if (dayCount < 1) return setError("اختار يوم تمرين واحد على الأقل")
    // TODO (backend): PUT /api/profile/me with these fields, then POST /api/plans/generate
    onSubmit(f)
    go("plan")
  }

  const rows = [
    ["السن", f.age], ["الوزن", `${f.weight} كجم`], ["الطول", `${f.height} سم`],
    ["مؤشر كتلة الجسم", bmi(f.weight, f.height)], ["السعرات المقترحة", t.kcal.toLocaleString()],
    ["أيام التمرين", dayCount],
  ]

  return (
    <div className="ob">
      <div className="tb">
        <div className="steps"><span className="ok">✓ حساب</span><hr /><span className="on">② بياناتك</span><hr /><span>③ خطتك</span></div>
        <Logo />
      </div>
      <div className="ol">
        <div>
          <h1>عرّفنا عليك</h1>
          <p className="mu">كل ما بياناتك أدق، الخطة هتبقى أنسب ليك</p>
          <div className="card">
            <div className="f4">
              <label>السن<input className="input" type="number" value={f.age} onChange={num("age")} /></label>
              <label>الجنس
                <select className="input" value={f.sex} onChange={(e) => set("sex", e.target.value)}>
                  <option value="male">ذكر</option><option value="female">أنثى</option>
                </select>
              </label>
              <label>الوزن (كجم)<input className="input" type="number" value={f.weight} onChange={num("weight")} /></label>
              <label>الطول (سم)<input className="input" type="number" value={f.height} onChange={num("height")} /></label>
            </div>
            <h3>هدفك</h3>
            <ChipGroup variant="goal" options={GOALS} value={f.goal} onChange={(v) => set("goal", v)} />
            <h3>مستواك</h3>
            <ChipGroup options={LEVELS} value={f.level} onChange={(v) => set("level", v)} />
            <h3>أيام التمرين</h3>
            <div className="days">
              {DAYS.map((d, i) => (
                <button type="button" key={d} className={`day ${f.days[i] ? "on" : ""}`}
                  onClick={() => set("days", f.days.map((x, j) => (j === i ? 1 - x : x)))}>{d}</button>
              ))}
            </div>
            <h3>عندك إصابة؟</h3>
            <ChipGroup options={INJURIES} value={f.injury} onChange={(v) => set("injury", v)} />
            <label className="check"><input type="checkbox" checked={f.xray} onChange={(e) => set("xray", e.target.checked)} /> أوافق على رفع أشعة لتحليلها (اختياري)</label>
          </div>
          {error && <p className="err">{error}</p>}
          <div className="actions">
            <button className="btn outline" onClick={() => go("signup")}>رجوع</button>
            <button className="btn dark" onClick={submit}>اعمل خطتي</button>
          </div>
        </div>
        <aside className="summary">
          <h3>ملخصك</h3>
          {rows.map(([k, v]) => <div className="sr" key={k}><span>{k}</span><b>{v}</b></div>)}
          <p>بنستخدم بياناتك لبناء خطتك بس. الخطة إرشادية ومش بديل للدكتور.</p>
        </aside>
      </div>
    </div>
  )
}
