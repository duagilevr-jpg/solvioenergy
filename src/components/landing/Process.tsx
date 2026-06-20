const steps = [
  { n: "01", title: "Консультація", text: "Обговорюємо задачі, бюджет і тип об'єкта." },
  { n: "02", title: "Розрахунок", text: "Проєктуємо систему та надаємо прозорий кошторис." },
  { n: "03", title: "Монтаж", text: "Встановлюємо обладнання за 1–3 дні під ключ." },
  { n: "04", title: "Підключення", text: "Налаштовуємо моніторинг і виводимо на повну потужність." },
];

export function Process() {
  return (
    <section id="process" className="bg-[var(--color-ink)] py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="reveal mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              Процес
            </div>
            <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              Як ми працюємо
            </h2>
          </div>
          <p className="max-w-sm text-base text-white/60">
            Чотири прості етапи від першої зустрічі до повного запуску вашої сонячної системи.
          </p>
        </div>

        <div className="reveal stagger grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="animate-fade-up group relative flex min-h-[260px] flex-col justify-between bg-[var(--color-ink)] p-8 transition-colors duration-500 hover:bg-white/[0.03]"
            >
              <div className="text-sm font-medium tracking-widest text-[var(--color-accent)]">{s.n}</div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
