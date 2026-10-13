# NutriFit AI — Web (Starter)

مشروع React (Vite) فيه الصفحة الافتتاحية + أول 3 صفحات: الدخول، الحساب الجديد، بياناتك. الباقي مستني حد يكمله.

## التشغيل
```
npm install
npm run dev
```

## الهيكل
```
src/
  App.jsx                  تبديل الصفحات + حفظ بيانات المستخدم (profile)
  pages/
    LandingPage.jsx        الصفحة الافتتاحية          (تم)
    LoginPage.jsx          تسجيل الدخول               (تم)
    SignupPage.jsx         حساب جديد                  (تم)
    DetailsPage.jsx        بيانات المستخدم            (تم)
    _TemplatePage.jsx      قالب لأي صفحة جديدة
  components/              Logo, RingsGraphic, ChipGroup, AuthLayout, AppLayout
  lib/calc.js              BMI والسعرات والماكروز (نفس معادلات الـ SRS)
  styles/                  theme.css (الألوان والأزرار) + ملف CSS لكل صفحة
```

## المطلوب من باقي الفريق
| الصفحة | الملف المقترح | المرجع |
|---|---|---|
| الخطة (لوحة التحكم) | pages/PlanPage.jsx | GET /api/plans/today |
| الأكل | pages/MealsPage.jsx | POST /api/plans/meals/{id}/swap |
| الإصابات والأشعة | pages/InjuriesPage.jsx | POST /api/xray/analyze |
| التقدم | pages/ProgressPage.jsx | POST /api/progress/weight |
| المكملات | pages/SupplementsPage.jsx | GET /api/supplements |

## قواعد الشغل
1. انسخ `_TemplatePage.jsx` وسمّيه باسم صفحتك، واستخدم `AppLayout` (القايمة الجانبية جاهزة).
2. سجّل الصفحة في `App.jsx` (case جديدة)، والمفتاح لازم يطابق مفتاح القايمة في `AppLayout.jsx`.
3. الألوان من `theme.css` بس (`var(--brand)` و`var(--lime)`...) ومتكتبش ألوان ثابتة، عشان الوضع الغامق يشتغل.
4. كل صفحة ليها ملف CSS خاص بيها في `styles/`.
5. الصفحات RTL والموبايل متدعوم (breakpoint عند 820px).
6. أماكن ربط الباك إند متعلّم عليها بـ `TODO (backend)`.
7. لما الصفحات تزيد، استبدلوا التبديل البسيط في `App.jsx` بـ `react-router-dom`.

الشكل المرجعي (نموذج تفاعلي): https://claude.ai/artifact/29MP69VtJdHL9HMHQfVXcs
