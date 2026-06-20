import heroImg from "@/assets/hero-solar.jpg";
import { ArrowRight } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";

const stats = [
  { value: "-70%", label: "витрат на електроенергію" },
  { value: "25+", label: "років роботи системи" },
  { value: "1000+", label: "встановлених систем" },
];

export function Hero() {
  const { open } = useLeadModal();
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[var(--color-ink)]">
      <img
        src={heroImg}
        alt="Сонячна електростанція на заході сонця"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col justify-between px-4 pb-10 pt-32 md:px-8 md:pb-14 md:pt-40">
        {/* Heading */}
        <div className="max-w-5xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            Еко-енергія нового покоління
          </div>
          <h1 className="text-balance text-[44px] font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[104px]">
            Сонячна енергія
            <br />
            <span className="text-white/70">нового покоління</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">
            Зменшуйте витрати на електроенергію та переходьте на автономне живлення з сертифікованими
            системами під ключ.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={open}
              className="group relative inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold tracking-tight text-[var(--color-ink)] transition-transform duration-300 hover:translate-y-[-2px]"
            >
              <span>Розрахувати вартість</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <a
              href="#features"
              className="btn-underline group relative inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md hover:bg-white/10"
            >
              <span>Дізнатися більше</span>
              <span className="btn-line" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid animate-fade-up grid-cols-1 gap-3 sm:grid-cols-3" style={{ animationDelay: "0.2s" }}>
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15"
            >
              <div className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{s.value}</div>
              <div className="mt-1 text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
