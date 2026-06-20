export function Footer() {
  return (
    <footer id="footer" className="border-t border-[var(--color-border)] bg-white">
      <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-ink)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
            </span>
            <span className="text-base font-semibold tracking-tight">Solvio</span>
          </div>
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[var(--color-muted-foreground)]">
            <a href="#footer" className="link-underline hover:text-[var(--color-ink)]">Контакти</a>
            <a href="mailto:hello@solvio.energy" className="link-underline hover:text-[var(--color-ink)]">
              hello@solvio.energy
            </a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-muted-foreground)] md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Solvio Energy. Усі права захищені.</span>
          <span>Проєктуємо майбутнє на сонячній енергії ☀</span>
        </div>
      </div>
    </footer>
  );
}
