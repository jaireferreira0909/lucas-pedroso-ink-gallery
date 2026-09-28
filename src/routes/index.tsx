import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INSTAGRAM, QUOTE, SiteLayout } from "@/components/site-layout";
import studioImage from "@/assets/tattoo-studio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Lucas Pedroso Tattoo | Tatuagem em Sorocaba" },
    { name: "description", content: "Conheça Lucas Pedroso Tattoo em Sorocaba, SP. Veja o perfil, acompanhe os trabalhos no Instagram e peça seu orçamento pelo WhatsApp." },
    { property: "og:title", content: "Lucas Pedroso Tattoo | Tatuagem em Sorocaba" },
    { property: "og:description", content: "Arte na pele em Sorocaba. Conheça Lucas Pedroso e peça um orçamento pelo WhatsApp." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <SiteLayout><main>
    <section className="relative flex min-h-[580px] items-end overflow-hidden bg-ink text-ink-foreground md:min-h-[680px] lg:h-[min(790px,80vh)]">
      <img src={studioImage} width={1536} height={1024} alt="Processo de tatuagem em estúdio, imagem ilustrativa" className="hero-image absolute inset-0 size-full" fetchPriority="high" />
      <div className="hero-shade absolute inset-0" />
      <div className="page-shell relative z-10 pb-12 pt-32 md:pb-20">
        <div className="mb-7 flex items-center gap-3"><span className="h-px w-8 bg-ochre"/><span className="micro-label text-ochre">Tattoo artist · Sorocaba, SP</span></div>
        <h1 className="display-serif max-w-[1000px] text-[clamp(68px,10vw,160px)]">Lucas<br/><em>Pedroso.</em></h1>
        <div className="mt-8 flex flex-col items-start gap-7 md:flex-row md:items-end md:justify-between"><div><p className="max-w-md text-base leading-relaxed text-ink-foreground/85 md:text-lg">Tatuagem como forma de expressão. Sua ideia, sua história, sua pele.</p><Button asChild size="lg" variant="ochre" className="mt-7 h-12 rounded-none px-7 text-xs font-bold uppercase tracking-[.13em]"><a href={QUOTE} target="_blank" rel="noopener noreferrer">Pedir um orçamento <ArrowUpRight size={16}/></a></Button></div><a href="#conheca" className="hidden items-center gap-3 text-[11px] font-bold uppercase tracking-[.16em] md:flex">Descubra mais <ArrowDown size={18}/></a></div>
      </div>
    </section>
    <section id="conheca" className="page-shell grid gap-10 py-16 md:grid-cols-[.7fr_1.3fr] md:gap-20 md:py-28"><div className="flex items-start gap-3"><span className="h-px w-7 bg-foreground mt-2"/><span className="micro-label">01 / O artista</span></div><div><h2 className="display-serif max-w-3xl text-[clamp(46px,6vw,88px)]">Arte que você <em>leva com você.</em></h2><p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground">Lucas Pedroso compartilha sua arte e seu trabalho com tatuagem em Sorocaba. Conheça o universo do artista, acompanhe as publicações e comece uma conversa sobre a sua próxima tatuagem.</p><Link to="/sobre" className="editorial-link mt-8">Conheça Lucas <ArrowUpRight size={16}/></Link></div></section>
    <section className="bg-secondary"><div className="page-shell grid md:grid-cols-2"><div className="relative min-h-[410px] overflow-hidden md:min-h-[620px]"><img src={studioImage} loading="lazy" width={1536} height={1024} alt="Detalhe ilustrativo de uma tatuagem botânica em processo" className="absolute inset-0 size-full object-cover object-[70%_center]"/><span className="absolute bottom-5 left-5 bg-background px-3 py-2 text-[10px] uppercase tracking-[.14em]">Imagem ilustrativa</span></div><div className="flex flex-col justify-center px-6 py-16 md:px-[clamp(40px,7vw,115px)]"><span className="micro-label text-muted-foreground">02 / Trabalhos</span><h2 className="display-serif mt-7 text-[clamp(50px,6vw,92px)]">Veja a arte<br/><em>de perto.</em></h2><p className="mt-7 max-w-sm leading-7 text-muted-foreground">O portfólio atualizado está no Instagram do artista. Explore as publicações e encontre referências para a sua ideia.</p><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="editorial-link mt-9 self-start">Ver trabalhos no Instagram <ArrowUpRight size={16}/></a><Link to="/trabalhos" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.13em] hover:underline">Mais sobre os trabalhos <ArrowRight size={16}/></Link></div></div></section>
    <section className="page-shell grid gap-10 py-16 md:grid-cols-[.7fr_1.3fr] md:gap-20 md:py-24"><div className="flex items-start gap-3"><span className="h-px w-7 bg-foreground mt-2"/><span className="micro-label">03 / Onde encontrar</span></div><div className="grid gap-8 sm:grid-cols-2"><div><MapPin className="mb-5" size={25} strokeWidth={1.3}/><h3 className="font-display text-4xl">Em Sorocaba.</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Atendimento em Sorocaba, São Paulo. Consulte detalhes e disponibilidade diretamente com Lucas.</p></div><div><Instagram className="mb-5" size={25} strokeWidth={1.3}/><h3 className="font-display text-4xl">No Instagram.</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Acompanhe @lucaspedrosoink para ver novas publicações e novidades da agenda.</p></div></div></section>
  </main></SiteLayout>;
}
