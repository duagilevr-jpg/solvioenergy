import { ArrowRight } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";

export function CTA() {
  const { open } = useLeadModal();
  return (
    <section id="cta" className="bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-[var(--color-ink)] px-6 py-20 text-white md:px-16 md:py-32">
        {/* Background pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-[var(--color-accent)] opacity-20 blur-3xl" />

        <div className="reveal relative max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            Безкоштовний розрахунок
          </div>
          <h2 className="text-balance text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
            Готові перейти на <span className="text-[var(--color-accent)]">сонячну</span> енергію?
          </h2>
          <p className="mt-8 max-w-xl text-lg text-white/70">
            Отримайте безкоштовний розрахунок під ваш об'єкт. Ми зв'яжемося протягом 24 годин з готовою пропозицією.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={open}
              className="group relative inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-4 text-sm font-semibold text-[var(--color-ink)] transition-transform duration-300 hover:translate-y-[-2px]"
            >
              <span>Отримати розрахунок</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <a
              href="#footer"
              className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              <span>Зв'язатися</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
