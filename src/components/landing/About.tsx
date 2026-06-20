import aboutImg from "@/assets/about-house.jpg";
import { ArrowRight, Check } from "lucide-react";

const bullets = [
  "індивідуальний розрахунок",
  "сертифіковане обладнання",
  "гарантія до 25 років",
];

export function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Image */}
        <div className="group reveal relative overflow-hidden rounded-[28px] bg-[var(--color-secondary)]">
          <img
            src={aboutImg}
            alt="Сонячна електростанція біля гір"
            loading="lazy"
            width={1200}
            height={1400}
            className="img-zoom aspect-[4/5] h-full w-full object-cover md:aspect-auto"
          />
          <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-black/30 px-4 py-3 text-white backdrop-blur-xl">
            <div className="text-xs uppercase tracking-widest text-white/70">Встановлено</div>
            <div className="text-2xl font-semibold">1000+ систем</div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <div className="reveal mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-secondary)] px-3 py-1 text-xs font-medium text-[var(--color-ink)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            Про нас
          </div>
          <h2 className="reveal text-balance text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
            Енергія, яка працює <span className="text-[var(--color-muted-foreground)]">на вас</span>
          </h2>
          <p className="reveal mt-6 max-w-lg text-lg text-[var(--color-muted-foreground)]">
            Ми проєктуємо та встановлюємо сонячні системи для дому та бізнесу з урахуванням ваших потреб,
            типу об'єкта та бюджету.
          </p>

          <ul className="reveal stagger mt-8 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="animate-fade-up flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent)]">
                  <Check className="h-3.5 w-3.5 text-[var(--color-ink)]" strokeWidth={3} />
                </span>
                <span className="text-base text-[var(--color-ink)]">{b}</span>
              </li>
            ))}
          </ul>

          <div className="reveal mt-10">
            <a
              href="#features"
              className="btn-underline group relative inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3.5 text-sm font-medium text-white"
            >
              <span>Детальніше</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              <span className="btn-line" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
