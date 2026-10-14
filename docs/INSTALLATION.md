# التركيب والتخصيص

## المتطلبات والنطاق

React 18 أو أحدث مع إصدار مطابق من `react-dom`، وTailwind CSS، و`lucide-react`. الاختبار الموثق استخدم React/ReactDOM 18.3.1 وTailwind 3.4.17 وLucide 0.468.0. لم يُختبر Tailwind 4 أو جميع أطر SSR في هذه المراجعة.

هذه حزمة مصدر ومهارة، وليست حزمة منشورة في npm. أوامر `npm ci` في جذر المستودع تجهّز الاختبارات المرفقة؛ دمجها في الموقع يتم بنسخ الملفات إلى مشروع React قائم.

## الملفات المطلوبة

1. انسخ `accessibility-toolbar/assets/AccessibilityToolbar.tsx` إلى مجلد مكوّنات مشروعك.
2. انسخ `accessibility-toolbar/assets/accessibility.css` إلى مجلد تنسيقاته.
3. ثبّت `lucide-react`، واستورد CSS من نقطة الدخول أو التنسيق العام.
4. اعرض `<AccessibilityToolbar />` مرة واحدة في التخطيط الجذري.
5. اضبط `lang="ar"` و`dir="rtl"` على وثيقة موقعك.

عند الترقية من V3/V4 **استبدل كتلة CSS السابقة**؛ لا تجمع قواعد فلاتر `body/html` القديمة مع قواعد V5. اعتمد المكوّن وCSS معًا من الإصدار نفسه.

## Tailwind 3 وتوكنات HSL

يحتاج المكوّن الأسماء: `background`, `foreground`, `card`, `popover`, `muted`, `muted-foreground`, `border`, `primary`, `primary-foreground`, و`ring`.

راجع [تهيئة المثال](../examples/tailwind.config.cjs) و[توكناته](../examples/theme.css). مثال ألوان:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  --card: 0 0% 100%;
  --popover: 0 0% 100%;
  --muted: 210 40% 96%;
  --muted-foreground: 215 25% 35%;
  --border: 215 20% 55%;
  --primary: 221 83% 40%;
  --primary-foreground: 0 0% 100%;
  --ring: 221 83% 40%;
}
```

```js
// tailwind.config.cjs — ادمجه مع إعداد مشروعك الحالي
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: 'hsl(var(--card) / <alpha-value>)',
        popover: 'hsl(var(--popover) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        'muted-foreground': 'hsl(var(--muted-foreground) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
      },
    },
  },
};
```

يجب أن يشمل `content` المسار الذي وضعت فيه المكوّن، حتى يولّد Tailwind فئاته. انقل أو أضف المسار إذا أبقيته خارج `src`.

إذا كانت توكنات مشروعك ألوانًا كاملة مثل `--primary: #1d4ed8`، فلا تغلّفها مرة ثانية في `hsl(...)`؛ استخدم mapping مناسبًا لمشروعك. يدعم CSS المساعد النوعين، لكن mapping الخاص بالموقع مسؤولية إعداد Tailwind. إعادة بناء mapping كامل لتوكنات موقعك ضرورية أيضًا لفئات الشفافية مثل `bg-foreground/30`.

## React وNext.js

```tsx
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import './styles/accessibility.css';

export function Layout() {
  return <><main>{/* المحتوى */}</main><AccessibilityToolbar /></>;
}
```

في Next.js احتفظ بتوجيه `"use client"`. المكوّن ينشئ portal مباشرة تحت `body` بعد التركيب، فلا تضع portal داخل حاوية محوّلة أو تعيد نقل عنصر `data-a11y-layer`. أضف CSS وفق قواعد الاستيراد العام في إطار مشروعك. تطبيقات CSP المقيدة تحتاج فحص التنسيقات المضمنة وSVG/data URLs في الموقع الفعلي، ولا توجد سياسة CSP عامة مرفقة.

## الحفظ والضبط

- `a11y-settings-v2`: إعدادات الزائر؛ حقل `profileId` يحدد preset المختار.
- `a11y-launcher-pos`: موضع زر الفتح، ويُحصر ضمن حجم الشاشة المتاح.
- إعادة الضبط تمحو إعدادات الأداة وتلغي النطق وتزيل علامة القراءة؛ تبقي الموضع مستقلًا.
- تغيير حجم النص أو الفلاتر لا يغيّر كتم الوسائط الذي اختاره الزائر.

لا تضف خادمًا أو حسابًا لهذه التفضيلات. Web Speech يستخدم خدمة الصوت المتاحة في المتصفح والنظام؛ راجع سلوكها إذا كان موقعك له متطلبات خصوصية خاصة بالنطق.

## فحص سريع بعد الدمج

اختبر Enter/Space والمؤشر، Tab بالاتجاهين وEscape وعودة التركيز، عزل الخلفية، السحب، عرض 320px، تكبير المتصفح 200%/400%، الفلاتر والنطق والحفظ. اختر ADHD وأغلق اللوحة لرؤية الدليل. افحص الموقع نفسه بقارئ شاشة حقيقي وقياسات تباين فعلية. [خطة الاختبار وحدود النتائج](TESTING.md).
