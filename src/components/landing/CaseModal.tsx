import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowRight, Calendar, MapPin, Zap, TrendingDown } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";

export type CaseItem = {
  img: string;
  title: string;
  meta: string;
  category: string;
  description: string;
  location: string;
  power: string;
  year: string;
  savings: string;
  details: string[];
};

interface Props {
  item: CaseItem | null;
  onOpenChange: (v: boolean) => void;
}

export function CaseModal({ item, onOpenChange }: Props) {
  const { open: openLead } = useLeadModal();

  return (
    <Dialog open={!!item} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl gap-0 overflow-hidden rounded-3xl border-0 bg-white p-0 text-[var(--color-ink)]">
        {item && (
          <div className="flex max-h-[85vh] flex-col overflow-y-auto">
            {/* Image */}
            <div className="relative h-64 w-full shrink-0 overflow-hidden md:h-80">
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute left-6 top-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  {item.category}
                </span>
              </div>
              <div className="absolute inset-x-6 bottom-5 text-white">
                <div className="text-xs uppercase tracking-widest text-white/70">
                  {item.meta}
                </div>
                <h3 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 py-7 md:px-8 md:py-9">
              <p className="text-base text-[var(--color-muted-foreground)] md:text-lg">
                {item.description}
              </p>

              {/* Stats */}
              <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-4">
                {[
                  { icon: Zap, v: item.power, l: "потужність" },
                  { icon: MapPin, v: item.location, l: "локація" },
                  { icon: Calendar, v: item.year, l: "рік" },
                  { icon: TrendingDown, v: item.savings, l: "економія" },
                ].map((s) => (
                  <div key={s.l} className="flex flex-col gap-3 bg-white p-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-secondary)]">
                      <s.icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <div>
                      <div className="text-base font-semibold tracking-tight">{s.v}</div>
                      <div className="mt-0.5 text-xs text-[var(--color-muted-foreground)]">
                        {s.l}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Details list */}
              <div className="mt-7">
                <div className="mb-3 text-xs font-medium uppercase tracking-widest text-[var(--color-muted-foreground)]">
                  Що зроблено
                </div>
                <ul className="space-y-2.5">
                  {item.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-[var(--color-ink)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[var(--color-border)] pt-6">
                <button
                  type="button"
                  onClick={() => {
                    onOpenChange(false);
                    setTimeout(openLead, 200);
                  }}
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition-transform duration-300 hover:translate-y-[-1px]"
                >
                  Хочу так само
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className="rounded-full border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
                >
                  Закрити
                </button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
