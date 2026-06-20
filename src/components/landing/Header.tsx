import { ArrowRight } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";

const nav = [
  { label: "Головна", href: "#home" },
  { label: "Рішення", href: "#features" },
  { label: "Як це працює", href: "#process" },
  { label: "Про нас", href: "#about" },
  { label: "Контакти", href: "#footer" },
];

export function Header() {
  const { open } = useLeadModal();
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 max-w-[1400px] px-4 md:px-8">
        <div className="glass flex items-center justify-between rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-xl md:px-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
            </span>
            <span className="text-base font-semibold tracking-tight text-white">Solvio</span>
          </a>

          {/* Nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-sm font-medium text-white/80 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA - desktop only, accent color */}
          <button
            type="button"
            onClick={open}
            className="group hidden items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-semibold text-[var(--color-ink)] transition-transform duration-300 hover:translate-y-[-1px] md:inline-flex"
          >
            <span>Отримати консультацію</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
