const logos = ["NOVA", "ECOGRID", "VOLTAN", "SUNCORE", "HELIOS", "ENERX"];

export function Trust() {
  return (
    <section className="border-y border-[var(--color-border)] bg-white py-14">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="reveal mb-8 flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-muted-foreground)]">
            Нам довіряють
          </h2>
          <span className="text-sm text-[var(--color-muted-foreground)]">1000+ клієнтів · 12 регіонів</span>
        </div>
        <div className="reveal stagger grid grid-cols-2 items-center gap-y-8 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <div
              key={l}
              className="animate-fade-up text-center text-xl font-semibold tracking-[0.18em] text-[var(--color-ink)]/40 transition-colors duration-300 hover:text-[var(--color-ink)]"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
