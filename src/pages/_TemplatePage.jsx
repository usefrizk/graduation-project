import AppLayout from "../components/AppLayout"

// Copy this file to build a new page: src/pages/MealsPage.jsx, ProgressPage.jsx, ...
// 1) rename the component  2) set `active` to its nav key  3) register it in App.jsx
export default function TemplatePage({ go, profile }) {
  return (
    <AppLayout active="plan" go={go}>
      <h1>صفحة الخطة (لسه محدش عملها)</h1>
      <p className="mu">البيانات اللي اتكتبت في صفحة بياناتك:</p>
      <pre className="card" dir="ltr">{JSON.stringify(profile, null, 2)}</pre>
    </AppLayout>
  )
}
