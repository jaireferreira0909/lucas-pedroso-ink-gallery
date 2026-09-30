import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INSTAGRAM, QUOTE, SiteLayout } from "@/components/site-layout";
import { IMAGES, WorkGallery } from "@/components/work-gallery";
import { FaWhatsapp } from "react-icons/fa6";

export const Route = createFileRoute("/trabalhos")({
  head: () => ({ meta: [
    { title: "Trabalhos de Tatuagem | Lucas Pedroso Tattoo & Barber" },
    { name: "description", content: "Veja onde acompanhar o portfólio atualizado de Lucas Pedroso Tattoo no Instagram e peça um orçamento para sua tatuagem em Sorocaba." },
    { property: "og:title", content: "Trabalhos de Tatuagem | Lucas Pedroso Tattoo & Barber" },
    { property: "og:description", content: "Acompanhe os trabalhos e novas publicações de Lucas Pedroso no Instagram." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Trabalhos,
});

function Trabalhos() { return <SiteLayout><main>
  <section className="page-shell grid gap-10 pb-12 pt-16 md:grid-cols-[1fr_.6fr] md:items-end md:pb-20 md:pt-28"><div><span className="micro-label text-muted-foreground">Portfólio / Lucas Pedroso</span><h1 className="display-serif mt-7 text-[clamp(68px,10vw,150px)]">Trabalhos<span className="text-ochre">.</span></h1></div><p className="max-w-sm pb-2 text-base leading-8 text-muted-foreground">A arte ganha vida na pele. Acompanhe o trabalho de Lucas diretamente no perfil oficial, onde as publicações são atualizadas.</p></section>
  <section className="relative h-[420px] overflow-hidden bg-ink md:h-[660px]"><img src={IMAGES.tattooSamurai} loading="lazy" decoding="async" width={1200} height={1600} alt="Tatuagem japonesa em preto e cinza no braço e na mão" className="absolute inset-0 size-full object-cover object-[50%_center]"/><div className="dark-shade absolute inset-0"/></section>
  <WorkGallery/>
  <section className="page-shell grid gap-10 py-16 md:grid-cols-[.7fr_1.3fr] md:gap-20 md:py-28"><div className="flex items-start gap-3"><span className="h-px w-7 bg-foreground mt-2"/><span className="micro-label">Portfólio atualizado</span></div><div><Instagram size={27} strokeWidth={1.3}/><h2 className="display-serif mt-7 max-w-2xl text-[clamp(48px,6vw,90px)]">Veja mais no <em>Instagram.</em></h2><p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">Acompanhe @lucaspedrosoink para ver mais tatuagens e novidades diretamente no perfil de Lucas.</p><div className="mt-9 flex flex-wrap gap-4"><Button asChild variant="default" size="lg" className="h-12 rounded-none px-7 text-xs font-bold uppercase tracking-[.12em]"><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Abrir Instagram <ArrowUpRight size={16}/></a></Button><Button asChild variant="whatsapp" size="lg" className="h-12 rounded-none px-7 text-xs font-bold uppercase tracking-[.12em]"><a href={QUOTE} target="_blank" rel="noopener noreferrer">Pedir orçamento <FaWhatsapp/></a></Button></div></div></section>
</main></SiteLayout>; }
