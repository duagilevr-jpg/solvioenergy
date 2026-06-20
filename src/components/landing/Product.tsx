import productImg from "@/assets/product-panel.jpg";
import { ArrowRight } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";

export function Product() {
  const { open } = useLeadModal();
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Text */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <div className="reveal mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-secondary)] px-3 py-1 text-xs font-medium text-[var(--color-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              Системи
            </div>
            <h2 className="reveal text-balance text-4xl font-semibold leading-[1.02] tracking-tight md:text-5xl lg:text-6xl">
              Готові рішення під <span className="text-[var(--color-muted-foreground)]">ваші задачі</span>
            </h2>
            <p className="reveal mt-6 max-w-lg text-lg text-[var(--color-muted-foreground)]">
              Ми підбираємо систему залежно від споживання, типу об'єкта та ваших цілей - від
              компактних станцій 5 кВт до промислових 100+ кВт.
            </p>

            <div className="reveal mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={open}
                className="group relative inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition-transform duration-300 hover:translate-y-[-2px]"
              >
                <span>Обрати систему</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={open}
                className="group relative inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
              >
                <span>Отримати розрахунок</span>
              </button>
            </div>

            <div className="reveal mt-10 grid grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-8">
              {[
                { v: "5–100", l: "кВт потужність" },
                { v: "A+", l: "клас ефективності" },
                { v: "25", l: "років гарантії" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-semibold tracking-tight md:text-3xl">{s.v}</div>
                  <div className="mt-1 text-xs text-[var(--color-muted-foreground)]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image + UI card */}
          <div className="reveal relative lg:col-span-7">
            <div className="relative overflow-hidden rounded-[28px] bg-[var(--color-secondary)]">
              <img
                src={productImg}
                alt="Сонячна панель крупним планом"
                loading="lazy"
                width={1400}
                height={1200}
                className="h-[520px] w-full object-cover md:h-[620px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating UI card */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-white backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                <span className="text-xs font-medium">Панелі преміум-класу</span>
              </div>

              <div className="absolute bottom-5 right-5 w-[260px] rounded-2xl border border-white/20 bg-white/90 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted-foreground)]">Генерація</span>
                  <span className="rounded-full bg-[var(--color-accent)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-ink)]">LIVE</span>
                </div>
                <div className="mt-2 flex items-end justify-between">
                  <span className="text-4xl font-semibold tracking-tight">8.4</span>
                  <span className="pb-1 text-xs text-[var(--color-muted-foreground)]">кВт·год</span>
                </div>
                <div className="mt-3 flex h-1.5 overflow-hidden rounded-full bg-[var(--color-secondary)]">
                  <div className="h-full w-[72%] rounded-full bg-[var(--color-ink)]" />
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-[var(--color-muted-foreground)]">
                  <span>сьогодні</span>
                  <span>72% від пікового</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
