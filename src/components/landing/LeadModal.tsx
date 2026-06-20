import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowRight, ArrowLeft, Check, Home, Building2, Factory, Zap } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

type FormState = {
  objectType: string;
  power: string;
  name: string;
  phone: string;
};

const initial: FormState = { objectType: "", power: "", name: "", phone: "" };

const objectOptions = [
  { id: "house", label: "Приватний будинок", icon: Home },
  { id: "commerce", label: "Комерційний об'єкт", icon: Building2 },
  { id: "industry", label: "Виробництво", icon: Factory },
  { id: "other", label: "Інше", icon: Zap },
];

const powerOptions = ["до 5 кВт", "5–15 кВт", "15–30 кВт", "30+ кВт", "Не знаю"];

export function LeadModal({ open, onOpenChange }: Props) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const total = 3;
  const progress = ((step + 1) / total) * 100;

  const reset = () => {
    setStep(0);
    setData(initial);
    setSubmitted(false);
  };

  const handleClose = (v: boolean) => {
    onOpenChange(v);
    if (!v) setTimeout(reset, 300);
  };

  const next = () => setStep((s) => Math.min(s + 1, total - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const canNext =
    (step === 0 && !!data.objectType) ||
    (step === 1 && !!data.power) ||
    step === 2;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-xl gap-0 overflow-hidden rounded-3xl border-0 bg-white p-0 text-[var(--color-ink)]">
        {!submitted ? (
          <>
            {/* Header */}
            <div className="border-b border-[var(--color-border)] px-6 pb-5 pt-6 md:px-8">
              <div className="mb-3 flex items-center justify-between text-xs font-medium tracking-widest text-[var(--color-muted-foreground)]">
                <span>КРОК {step + 1} / {total}</span>
                <span>Безкоштовний розрахунок</span>
              </div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-[var(--color-secondary)]">
                <div
                  className="h-full rounded-full bg-[var(--color-accent)] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Body */}
            <div className="px-6 py-7 md:px-8 md:py-9">
              {step === 0 && (
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    Який у вас об'єкт?
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                    Це допоможе підібрати оптимальну систему.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {objectOptions.map((o) => {
                      const active = data.objectType === o.id;
                      return (
                        <button
                          key={o.id}
                          type="button"
                          onClick={() => setData({ ...data, objectType: o.id })}
                          className={`group flex flex-col items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-300 ${
                            active
                              ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                              : "border-[var(--color-border)] bg-white hover:border-[var(--color-ink)]"
                          }`}
                        >
                          <span
                            className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                              active ? "bg-[var(--color-accent)]" : "bg-[var(--color-secondary)]"
                            }`}
                          >
                            <o.icon
                              className={`h-4 w-4 ${active ? "text-[var(--color-ink)]" : "text-[var(--color-ink)]"}`}
                              strokeWidth={2}
                            />
                          </span>
                          <span className="text-sm font-medium">{o.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    Бажана потужність?
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                    Якщо не впевнені - оберіть «Не знаю», ми порадимо.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {powerOptions.map((p) => {
                      const active = data.power === p;
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setData({ ...data, power: p })}
                          className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                            active
                              ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                              : "border-[var(--color-border)] bg-white hover:border-[var(--color-ink)]"
                          }`}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={submit}>
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    Куди надіслати розрахунок?
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                    Зв'яжемося протягом 24 годин з готовою пропозицією.
                  </p>
                  <div className="mt-6 space-y-3">
                    <input
                      required
                      placeholder="Ваше ім'я"
                      value={data.name}
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                      className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm outline-none transition-colors focus:border-[var(--color-ink)]"
                    />
                    <input
                      required
                      type="tel"
                      placeholder="+380 __ ___ __ __"
                      value={data.phone}
                      onChange={(e) => setData({ ...data, phone: e.target.value })}
                      className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm outline-none transition-colors focus:border-[var(--color-ink)]"
                    />
                  </div>
                  <button type="submit" className="hidden" />
                </form>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-3 border-t border-[var(--color-border)] bg-[var(--color-secondary)]/40 px-6 py-4 md:px-8">
              <button
                type="button"
                onClick={prev}
                disabled={step === 0}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-opacity disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" />
                Назад
              </button>
              {step < total - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={!canNext}
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-all duration-300 hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  Далі
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  disabled={!data.name || !data.phone}
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-all duration-300 hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  Надіслати
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center px-8 py-14 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]">
              <Check className="h-6 w-6 text-[var(--color-ink)]" strokeWidth={3} />
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
              Дякуємо, {data.name || "друже"}!
            </h3>
            <p className="mt-3 max-w-sm text-sm text-[var(--color-muted-foreground)]">
              Ваша заявка прийнята. Менеджер зв'яжеться з вами протягом 24 годин з готовим розрахунком.
            </p>
            <button
              type="button"
              onClick={() => handleClose(false)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-white"
            >
              Закрити
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
