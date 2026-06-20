import { useState } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import { CaseModal, type CaseItem } from "./CaseModal";

const items: CaseItem[] = [
  {
    img: p1,
    title: "Приватний будинок",
    meta: "10 кВт · Київ",
    category: "Резиденція",
    location: "Київ",
    power: "10 кВт",
    year: "2024",
    savings: "-72%",
    description:
      "Сонячна станція повного циклу для двоповерхового будинку площею 220 м². Покриває до 90% споживання родини протягом року.",
    details: [
      "Проєктування та отримання дозвільної документації",
      "Монтаж 24 монокристалічних панелей на скатний дах",
      "Гібридний інвертор з резервним живленням",
      "Система моніторингу генерації онлайн",
    ],
  },
  {
    img: p2,
    title: "Сонячний парк",
    meta: "250 кВт · Львів",
    category: "Промисловість",
    location: "Львів",
    power: "250 кВт",
    year: "2023",
    savings: "-85%",
    description:
      "Наземна станція для логістичного комплексу. Знижує енергозалежність та забезпечує стабільність виробничих процесів.",
    details: [
      "Геодезичні та інженерні дослідження ділянки",
      "Монтаж 580 панелей на алюмінієвих конструкціях",
      "Промислові інвертори SMA з резервуванням",
      "Інтеграція в існуючу мережу підприємства",
    ],
  },
  {
    img: p3,
    title: "Вілла преміум",
    meta: "18 кВт · Одеса",
    category: "Резиденція",
    location: "Одеса",
    power: "18 кВт",
    year: "2024",
    savings: "-78%",
    description:
      "Архітектурно інтегрована система для сучасної вілли біля моря. Панелі підібрані з урахуванням естетики та продуктивності в умовах прибережного клімату.",
    details: [
      "Чорні панелі з повною інтеграцією у плоский дах",
      "Дві батареї накопичення енергії 15 кВт·год",
      "Резервне живлення критичних систем будинку",
      "Розумне керування через мобільний застосунок",
    ],
  },
  {
    img: p4,
    title: "Студія панелей",
    meta: "Інженерія",
    category: "Технологія",
    location: "Партнерська лабораторія",
    power: "Tier 1",
    year: "2025",
    savings: "30+ років",
    description:
      "Ми працюємо лише з панелями першого ешелону: монокристал PERC та TOPCon з гарантованою деградацією менше 0.4% на рік.",
    details: [
      "Заводське тестування кожної партії на стенді",
      "Сертифікація IEC 61215 та IEC 61730",
      "Антивідблискове скло з підвищеною прозорістю",
      "25-річна гарантія на потужність 87%",
    ],
  },
  {
    img: p5,
    title: "Команда монтажу",
    meta: "На висоті",
    category: "Сервіс",
    location: "Виїзд по всій Україні",
    power: "1-3 дні",
    year: "12 років",
    savings: "0 ризику",
    description:
      "Сертифіковані інженери з досвідом понад 1000 встановлених систем. Працюємо з повним пакетом страхування та безпеки на висоті.",
    details: [
      "Аудит об'єкта та індивідуальний розрахунок",
      "Бригади з допуском до висотних робіт",
      "Власне обладнання та страховий фонд",
      "Сервісне обслуговування протягом 5 років",
    ],
  },
  {
    img: p6,
    title: "Комерційний об'єкт",
    meta: "120 кВт · Дніпро",
    category: "Бізнес",
    location: "Дніпро",
    power: "120 кВт",
    year: "2023",
    savings: "-68%",
    description:
      "Дахова станція для торгово-офісного центру. Окупність - 4.2 роки за рахунок високого денного споживання та зеленого тарифу.",
    details: [
      "Посилення несучих конструкцій даху",
      "280 панелей у двох масивах з різною орієнтацією",
      "Триразові інвертори з функцією балансування",
      "Інтеграція з системою енергомоніторингу будівлі",
    ],
  },
];

export function Gallery() {
  const [active, setActive] = useState<CaseItem | null>(null);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="reveal mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary)] px-3 py-1 text-xs font-medium text-[var(--color-ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              Портфоліо
            </div>
            <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              Реалізовані проєкти
            </h2>
          </div>
        </div>

        <div className="reveal stagger grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <button
              key={it.title}
              type="button"
              onClick={() => setActive(it)}
              className={`animate-fade-up group relative block overflow-hidden rounded-3xl bg-[var(--color-secondary)] text-left ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                width={1024}
                height={1024}
                className={`img-zoom w-full object-cover ${i === 0 ? "h-[400px] lg:h-[620px]" : "h-[300px]"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-white">
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/70">{it.meta}</div>
                  <div className="mt-1 text-xl font-semibold tracking-tight md:text-2xl">{it.title}</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-ink)] transition-transform duration-500 group-hover:rotate-[-45deg]">
                  →
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <CaseModal item={active} onOpenChange={(v) => !v && setActive(null)} />
    </section>
  );
}
