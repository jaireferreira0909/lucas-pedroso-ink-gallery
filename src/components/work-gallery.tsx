import tattooSamurai from "@/assets/tattoo-samurai.jpeg.asset.json";
import tattooKoi from "@/assets/tattoo-koi.jpeg.asset.json";
import barberClassic from "@/assets/barber-classic.jpeg.asset.json";
import barberShort from "@/assets/barber-short.jpeg.asset.json";
import barberTexturedTop from "@/assets/barber-textured-top.jpeg";
import barberBuzzDetail from "@/assets/barber-buzz-detail.jpeg";
import barberLinesKid from "@/assets/barber-lines-kid.jpeg";

export const IMAGES = {
  tattooSamurai: tattooSamurai.url,
  tattooKoi: tattooKoi.url,
  barberClassic: barberClassic.url,
  barberShort: barberShort.url,
  barberTexturedTop,
  barberBuzzDetail,
  barberLinesKid,
};

// texturedTop fica de fora da galeria de proposito: e o hero da home e o
// banner de /trabalhos. Sem essa exclusao a mesma foto apareceria tres
// vezes na mesma tela.
const work = [
  { image: IMAGES.tattooSamurai, alt: "Tatuagem japonesa em preto e cinza no braço e na mão", label: "Tatuagem / Preto e cinza" },
  { image: IMAGES.barberShort, alt: "Corte masculino curto com degradê e barba grisalha alinhada", label: "Barbearia / Corte e barba" },
  { image: IMAGES.tattooKoi, alt: "Tatuagem de carpa japonesa com detalhes vermelhos no antebraço e na mão", label: "Tatuagem / Oriental" },
  { image: IMAGES.barberBuzzDetail, alt: "Corte buzz com detalhe desenhado a navalha na lateral", label: "Barbearia / Detalhe" },
  { image: IMAGES.barberLinesKid, alt: "Corte em degradê com linha desenhada na parte superior", label: "Barbearia / Degradê" },
  { image: IMAGES.barberClassic, alt: "Corte masculino com laterais baixas, cabelo penteado e barba desenhada", label: "Barbearia / Corte e barba" },
];

export function WorkGallery({ compact = false, limit }: { compact?: boolean; limit?: number }) {
  const items = typeof limit === "number" ? work.slice(0, limit) : work;

  return <section className="bg-secondary py-16 md:py-24" aria-labelledby="galeria-titulo">
    <div className="page-shell">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-4 md:mb-12">
        <div><span className="micro-label text-muted-foreground">Trabalhos reais / Lucas Pedroso</span><h2 id="galeria-titulo" className="display-serif mt-5 text-[clamp(48px,6vw,88px)]">Feito com <em>precisão.</em></h2></div>
        {!compact && <p className="max-w-xs text-sm leading-7 text-muted-foreground">Tatuagem e barbearia em Sorocaba, através de trabalhos reais.</p>}
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
        {items.map((item) => <figure key={item.label + item.image} className="min-w-0">
          <div className="aspect-[4/5] overflow-hidden bg-muted"><img src={item.image} alt={item.alt} loading="lazy" decoding="async" width={800} height={1000} className="size-full object-cover transition-transform duration-500 hover:scale-[1.03]" /></div>
          <figcaption className="micro-label mt-3 leading-relaxed text-muted-foreground">{item.label}</figcaption>
        </figure>)}
      </div>
    </div>
  </section>;
}