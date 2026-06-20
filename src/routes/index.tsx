import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { About } from "@/components/landing/About";
import { Features } from "@/components/landing/Features";
import { Product } from "@/components/landing/Product";
import { Process } from "@/components/landing/Process";
import { Gallery } from "@/components/landing/Gallery";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { LeadModalProvider } from "@/components/landing/LeadModalContext";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solvio - Сонячна енергія нового покоління" },
      {
        name: "description",
        content:
          "Проєктуємо та встановлюємо сонячні системи під ключ. Зменшуйте витрати на електроенергію до 70% та переходьте на автономне живлення.",
      },
      { property: "og:title", content: "Solvio - Сонячна енергія нового покоління" },
      {
        property: "og:description",
        content: "Сертифіковані сонячні системи для дому та бізнесу. Гарантія до 25 років.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <LeadModalProvider>
      <main className="bg-white text-[var(--color-ink)]">
        <Header />
        <Hero />
        <Stats />
        <About />
        <Features />
        <Product />
        <Process />
        <Gallery />
        <CTA />
        <Footer />
      </main>
    </LeadModalProvider>
  );
}
