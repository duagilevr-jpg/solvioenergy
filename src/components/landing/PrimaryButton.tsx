import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Variant = "accent" | "dark" | "ghost" | "light";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  arrow?: boolean;
}

const base =
  "btn-underline relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300";

const variants: Record<Variant, string> = {
  accent: "bg-[var(--color-accent)] text-[var(--color-accent-foreground)] hover:bg-[var(--color-accent)]/90",
  dark: "bg-[var(--color-ink)] text-[var(--color-ink-foreground)] hover:bg-[var(--color-ink)]/90",
  light: "bg-white text-[var(--color-ink)] hover:bg-white/90",
  ghost: "text-[var(--color-ink)] hover:text-[var(--color-ink)]",
};

export function PrimaryButton({ variant = "accent", arrow = true, children, className, ...rest }: Props) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      <span>{children}</span>
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
      <span className="btn-line" />
    </button>
  );
}
