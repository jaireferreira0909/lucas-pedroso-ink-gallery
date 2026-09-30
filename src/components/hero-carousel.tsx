import { useEffect, useState } from "react";
import { IMAGES } from "@/components/work-gallery";
import { cn } from "@/lib/utils";

// Alterna tattoo e barbearia usando só fotos que já existem no site.
// O primeiro slide é o hero atual, preservando o LCP da home.
const slides = [
  { image: IMAGES.barberTexturedTop, alt: "Corte social com topo volumizado e lateral baixa, barba alinhada" },
  { image: IMAGES.tattooSamurai, alt: "Tatuagem japonesa em preto e cinza no braço e na mão" },
  { image: IMAGES.barberClassic, alt: "Corte masculino com laterais baixas, cabelo penteado e barba desenhada" },
  { image: IMAGES.tattooKoi, alt: "Tatuagem de carpa japonesa com detalhes vermelhos no antebraço e na mão" },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), 6000);
    return () => window.clearInterval(id);
  }, [paused ]);

  return <div
    className="absolute inset-0"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
  >
    {slides.map((slide, i) => <img
      key={slide.image}
      src={slide.image}
      alt={slide.alt}
      aria-hidden={i !== active}
      width={1200}
      height={1600}
      fetchPriority={i === 0 ? "high" : undefined}
      loading="eager"
      decoding="async"
      className={cn("hero-image absolute inset-0 size-full transition-opacity duration-1000", i === active ? "opacity-100" : "opacity-0")}
    />)}
    <div className="absolute bottom-6 right-4 z-10 flex gap-2 md:bottom-8 md:right-8" role="tablist" aria-label="Fotos de destaque">
      {slides.map((slide, i) => <button
        key={slide.image}
        type="button"
        role="tab"
        aria-selected={i === active}
        aria-label={`Ver foto ${i + 1}: ${slide.alt}`}
        onClick={() => setActive(i)}
        className={cn("size-2 rounded-full transition-colors", i === active ? "bg-ochre" : "bg-ink-foreground/40 hover:bg-ink-foreground/70")}
      />)}
    </div>
  </div>;
}
