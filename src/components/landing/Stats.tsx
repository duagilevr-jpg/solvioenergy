import { Award, ShieldCheck, Clock, Users } from "lucide-react";

const items = [
  { icon: Users, value: "1000+", label: "встановлених систем" },
  { icon: Award, value: "12", label: "років на ринку" },
  { icon: ShieldCheck, value: "25", label: "років гарантії" },
  { icon: Clock, value: "24г", label: "середній час відповіді" },
];

export function Stats() {
  return (
    <section className="border-y border-[var(--color-border)] bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="reveal mb-10 flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <h2 className="max-w-xl text-balance text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Цифри, які говорять
            <span className="text-[var(--color-muted-foreground)]"> за нас</span>
          </h2>
          <p className="max-w-sm text-sm text-[var(--color-muted-foreground)]">
            12 років досвіду, тисячі успішних монтажів та повна підтримка на кожному етапі.
          </p>
        </div>

        <div className="reveal stagger grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.label}
              className="animate-fade-up group flex flex-col gap-6 bg-white p-6 transition-colors duration-500 hover:bg-[var(--color-secondary)]/60 md:p-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-secondary)] transition-colors duration-500 group-hover:bg-[var(--color-accent)]">
                <it.icon className="h-4 w-4 text-[var(--color-ink)]" strokeWidth={2} />
              </span>
              <div>
                <div className="text-4xl font-semibold tracking-tight md:text-5xl">{it.value}</div>
                <div className="mt-2 text-sm text-[var(--color-muted-foreground)]">{it.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
