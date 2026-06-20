import { TrendingDown, Zap, Leaf, LineChart } from "lucide-react";

const features = [
  {
    icon: TrendingDown,
    title: "Економія",
    text: "Зменшення витрат до 70% на електроенергію щомісяця.",
  },
  {
    icon: Zap,
    title: "Енергонезалежність",
    text: "Не залежите від тарифів і відключень мережі.",
  },
  {
    icon: Leaf,
    title: "Екологія",
    text: "Чиста енергія без шкоди природі та викидів CO₂.",
  },
  {
    icon: LineChart,
    title: "Інвестиція",
    text: "Окупність системи за 3–5 років, а потім - прибуток.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-[var(--color-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="reveal mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-[var(--color-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              Переваги
            </div>
            <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              Чому обирають сонячну енергію
            </h2>
          </div>
          <p className="max-w-sm text-base text-[var(--color-muted-foreground)]">
            Чотири причини, чому власні сонячні панелі - це найкраще рішення для вашого об'єкта.
          </p>
        </div>

        <div className="reveal stagger grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-lift animate-fade-up group flex h-full flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-white p-7"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent)]">
                  <f.icon className="h-5 w-5 text-[var(--color-ink)]" strokeWidth={2} />
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-foreground)]">{f.text}</p>
              </div>
              <div className="mt-10 h-px w-full bg-[var(--color-border)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
