import { AccessibilityToolbar } from '../accessibility-toolbar/assets/AccessibilityToolbar';

// Import theme.css and the toolbar CSS from your application's entry point.
export function ExamplePage() {
  return (
    <>
      <header className="bg-primary p-6 text-primary-foreground">
        <h1 className="text-3xl font-bold">مثال دمج شريط تفضيلات الإتاحة</h1>
        <nav aria-label="التنقل الرئيسي" className="mt-4 flex gap-4">
          <a className="underline" href="#content">المحتوى</a>
          <a className="underline" href="#sample-form">نموذج تجريبي</a>
        </nav>
      </header>
      <main id="content" className="mx-auto max-w-3xl space-y-6 p-6">
        <h2 className="text-2xl font-bold">قراءة عربية</h2>
        <p>محتوى عام لمعاينة حجم النص والتباعد ودليل القراءة. اختر دليل القراءة وتقليل الحركة (ADHD)، ثم أغلق اللوحة واستخدم المؤشر أو Tab. يمكنك تحديد نص لقراءته إذا فعّلت قراءة النص المحدد.</p>
        <p>الأداة تضيف تفضيلات مساعدة ولا تمنح شهادة مطابقة للموقع. <a className="text-primary underline" href="#sample-form">انتقل إلى النموذج</a>.</p>
        <section id="sample-form" className="rounded-lg border border-border bg-card p-4">
          <h2 className="text-xl font-bold">نموذج عام</h2>
          <label htmlFor="example-text" className="mt-3 block">نص تجريبي</label>
          <input id="example-text" type="text" className="min-h-11 w-full rounded border border-border p-3" defaultValue="نص عام" />
        </section>
      </main>
      <footer className="border-t border-border p-6">مثال دمج، دون حسابات أو إرسال بيانات.</footer>
      <AccessibilityToolbar />
    </>
  );
}
