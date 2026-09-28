import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BARBER_CHAT, INSTAGRAM, MAPS, QUOTE, SiteLayout } from "@/components/site-layout";
import studioImage from "@/assets/tattoo-studio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Lucas Pedroso | Tattoo & Barber em Sorocaba" },
    { name: "description", content: "Tatuagem com Lucas Pedroso e barbearia Franqueza em Sorocaba, SP. Conheça os serviços, veja os trabalhos no Instagram e converse pelo WhatsApp." },
    { property: "og:title", content: "Lucas Pedroso | Tattoo & Barber em Sorocaba" },
    { property: "og:description", content: "Tatuagem e barbearia em Sorocaba. Veja os trabalhos e converse pelo WhatsApp." },
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
        <div className="mb-7 flex items-center gap-3"><span className="h-px w-8 bg-ochre"/><span className="micro-label text-ochre">Tattoo &amp; Barber · Sorocaba, SP</span></div>
        <h1 className="display-serif max-w-[1000px] text-[clamp(68px,10vw,160px)]">Lucas<br/><em>Pedroso.</em></h1>
        <div className="mt-8 flex flex-col items-start gap-7 md:flex-row md:items-end md:justify-between"><div><p className="max-w-md text-base leading-relaxed text-ink-foreground/85 md:text-lg">Tatuagem como expressão. Barbearia para um visual que é só seu.</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild size="lg" variant="ochre" className="h-12 rounded-none px-5 text-xs font-bold uppercase tracking-[.13em]"><a href={QUOTE} target="_blank" rel="noopener noreferrer">Orçamento tattoo <ArrowUpRight size={16}/></a></Button><Button asChild size="lg" variant="outline" className="h-12 rounded-none border-ink-foreground bg-transparent px-5 text-xs font-bold uppercase tracking-[.13em] text-ink-foreground hover:bg-ink-foreground hover:text-ink"><a href={BARBER_CHAT} target="_blank" rel="noopener noreferrer">Agendar corte <ArrowUpRight size={16}/></a></Button></div></div><a href="#conheca" className="hidden items-center gap-3 text-[11px] font-bold uppercase tracking-[.16em] md:flex">Descubra mais <ArrowDown size={18}/></a></div>
      </div>
    </section>
    <section id="conheca" className="page-shell grid gap-10 py-16 md:grid-cols-[.7fr_1.3fr] md:gap-20 md:py-28"><div className="flex items-start gap-3"><span className="h-px w-7 bg-foreground mt-2"/><span className="micro-label">01 / O artista</span></div><div><h2 className="display-serif max-w-3xl text-[clamp(46px,6vw,88px)]">Arte que você <em>leva com você.</em></h2><p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground">Lucas Pedroso compartilha sua arte e seu trabalho com tatuagem em Sorocaba. Conheça o universo do artista, acompanhe as publicações e comece uma conversa sobre a sua próxima tatuagem.</p><Link to="/sobre" className="editorial-link mt-8">Conheça Lucas <ArrowUpRight size={16}/></Link></div></section>
    <section className="bg-ink text-ink-foreground"><div className="page-shell grid gap-8 py-16 md:grid-cols-[.7fr_1.3fr] md:gap-20 md:py-24"><div className="flex items-start gap-3"><span className="mt-2 h-px w-7 bg-ochre"/><span className="micro-label text-ochre">02 / Barbearia</span></div><div><span className="micro-label text-ochre">Franqueza · Barbearia</span><h2 className="display-serif mt-5 max-w-3xl text-[clamp(46px,6vw,88px)]">Seu corte, <em>do seu jeito.</em></h2><p className="mt-7 max-w-xl text-base leading-8 text-ink-foreground/75">Na Franqueza, a conversa vem primeiro: um corte pensado para seu dia a dia, com praticidade e um bom crescimento após o corte.</p><Button asChild variant="ochre" className="mt-8 h-12 rounded-none px-6 text-xs font-bold uppercase tracking-[.12em]"><a href={BARBER_CHAT} target="_blank" rel="noopener noreferrer">Conversar sobre um corte <ArrowUpRight size={16}/></a></Button></div></div></section>
    <section className="bg-secondary"><div className="page-shell grid md:grid-cols-2"><div className="relative min-h-[410px] overflow-hidden md:min-h-[620px]"><img src={studioImage} loading="lazy" width={1536} height={1024} alt="Detalhe ilustrativo de uma tatuagem botânica em processo" className="absolute inset-0 size-full object-cover object-[70%_center]"/><span className="absolute bottom-5 left-5 bg-background px-3 py-2 text-[10px] uppercase tracking-[.14em]">Imagem ilustrativa</span></div><div className="flex flex-col justify-center px-6 py-16 md:px-[clamp(40px,7vw,115px)]"><span className="micro-label text-muted-foreground">03 / Trabalhos</span><h2 className="display-serif mt-7 text-[clamp(50px,6vw,92px)]">Veja a arte<br/><em>de perto.</em></h2><p className="mt-7 max-w-sm leading-7 text-muted-foreground">O portfólio atualizado de tatuagens está no Instagram do artista. Explore as publicações e encontre referências para a sua ideia.</p><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="editorial-link mt-9 self-start">Ver trabalhos no Instagram <ArrowUpRight size={16}/></a><Link to="/trabalhos" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.13em] hover:underline">Mais sobre os trabalhos <ArrowRight size={16}/></Link></div></div></section>
    <section className="page-shell grid gap-10 py-16 md:grid-cols-[.7fr_1.3fr] md:gap-20 md:py-24"><div className="flex items-start gap-3"><span className="mt-2 h-px w-7 bg-foreground"/><span className="micro-label">04 / Onde encontrar</span></div><div className="grid gap-8 sm:grid-cols-2"><div><MapPin className="mb-5" size={25} strokeWidth={1.3}/><h3 className="font-display text-4xl">Em Sorocaba.</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Franqueza Barbearia<br/>R. Santa Maria, 63 · Vila Hortência<br/>Sorocaba - SP, 18020-216</p><a href={MAPS} target="_blank" rel="noopener noreferrer" className="editorial-link mt-5">Abrir no Google Maps <ArrowUpRight size={16}/></a></div><div><Instagram className="mb-5" size={25} strokeWidth={1.3}/><h3 className="font-display text-4xl">No Instagram.</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Acompanhe @lucaspedrosoink para ver novas publicações e novidades da agenda.</p></div></div></section>
  </main></SiteLayout>;
}
