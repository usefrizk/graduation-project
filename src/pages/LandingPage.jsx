import Logo from "../components/Logo"
import RingsGraphic from "../components/RingsGraphic"
import "../styles/landing.css"

const FEATURES = [
  ["خطة أكل على مقاسك", "السعرات والماكروز بتتحسب من سنك ووزنك وطولك وهدفك، وبأكل مصري تعرفه."],
  ["تمارين بتراعي إصاباتك", "قولنا فين بيوجعك، وهنشيل التمارين الخطرة ونحط بدائل آمنة مكانها."],
  ["متابعة تقدمك", "سجّل وزنك وعلّم تمارينك، وشوف الرسم البياني وهو بيتغير."],
]
const STEPS = [
  ["اعمل حساب", "بالإيميل وكلمة المرور، في دقيقة."],
  ["اكتب بياناتك", "السن والوزن والطول والهدف وأيام التمرين وأي إصابة."],
  ["خد خطتك", "أكل وتمارين اليوم جاهزين، وتقدر تبدّل وتعدّل."],
]

export default function LandingPage({ go }) {
  return (
    <div className="landing">
      <header className="lh">
        <Logo light />
        <div className="bt">
          <button className="btn ghost" onClick={() => go("login")}>تسجيل دخول</button>
          <button className="btn lime" onClick={() => go("signup")}>ابدأ مجانًا</button>
        </div>
      </header>

      <section className="hero">
        <h2>أكلك وتمرينك <span>على مقاسك إنت</span></h2>
        <p>اكتب بياناتك وهدفك وإصاباتك، وNutriFit AI يجهزلك خطة أكل وتمارين ومكملات مناسبة ليك.</p>
        <button className="btn lime big" onClick={() => go("signup")}>ابدأ خطتك دلوقتي</button>
        <RingsGraphic className="rings" />
        <span className="pill" style={{ left: 260, top: 160, background: "#C6F135", color: "#0B2E22" }}>2,550 سعر</span>
        <span className="pill" style={{ left: 110, top: 300, background: "#EF9F27", color: "#0B2E22" }}>4 أيام في الأسبوع</span>
        <span className="pill" style={{ left: 330, top: 380, background: "#1D9E75", color: "#fff" }}>الكتف: تمارين بديلة ✓</span>
      </section>

      <section className="sec">
        <h1>ليه NutriFit AI؟</h1>
        <div className="f3">
          {FEATURES.map(([t, d]) => (
            <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>

      <section className="sec">
        <h1>إزاي بيشتغل؟</h1>
        <div className="f3">
          {STEPS.map(([t, d], i) => (
            <div className="card" key={t}><div className="nb">{i + 1}</div><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
        <div className="warn center">الخطة إرشادية ومش بديل للدكتور أو أخصائي التغذية. تحليل الأشعة تقدير أولي مش تشخيص.</div>
        <div className="center"><button className="btn dark big" onClick={() => go("signup")}>ابدأ مجانًا</button></div>
      </section>

      <footer className="ft">NutriFit AI · مشروع تخرج</footer>
    </div>
  )
}
