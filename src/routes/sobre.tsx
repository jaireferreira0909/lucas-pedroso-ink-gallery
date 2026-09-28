import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INSTAGRAM, QUOTE, SiteLayout } from "@/components/site-layout";
import studioImage from "@/assets/tattoo-studio.jpg";

export const Route = createFileRoute("/sobre")({ head: () => ({ meta: [
  { title: "Sobre Lucas Pedroso | Tatuador em Sorocaba" },
  { name: "description", content: "Conheça Lucas Pedroso Tattoo, artista de tatuagem em Sorocaba, SP. Acompanhe o trabalho no Instagram e entre em contato pelo WhatsApp." },
  { property: "og:title", content: "Sobre Lucas Pedroso | Tatuador em Sorocaba" },
  { property: "og:description", content: "Conheça Lucas Pedroso e sua arte em Sorocaba, SP." },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
] }), component: Sobre });

function Sobre() { return <SiteLayout><main><section className="page-shell grid gap-12 pb-16 pt-16 md:grid-cols-[.9fr_1.1fr] md:gap-20 md:pb-24 md:pt-28"><div><span className="micro-label text-muted-foreground">O artista / Sorocaba, SP</span><h1 className="display-serif mt-7 text-[clamp(66px,9vw,132px)]">Lucas<br/><em>Pedroso.</em></h1><div className="mt-12 h-px w-full bg-border"/><p className="mt-8 max-w-lg text-lg leading-9 text-muted-foreground">Tatuagem, arte e expressão. Lucas Pedroso compartilha seu trabalho em Sorocaba, São Paulo, pelo perfil @lucaspedrosoink.</p><p className="mt-5 max-w-lg text-base leading-8 text-muted-foreground">Se você tem uma ideia para sua próxima tatuagem, o primeiro passo é uma conversa. Envie sua referência e conte o que imagina pelo WhatsApp.</p><Button asChild variant="default" size="lg" className="mt-9 h-12 rounded-none px-7 text-xs font-bold uppercase tracking-[.12em]"><a href={QUOTE} target="_blank" rel="noopener noreferrer">Conversar com Lucas <ArrowUpRight size={16}/></a></Button></div><div className="relative min-h-[430px] overflow-hidden bg-ink md:min-h-[680px]"><img src={studioImage} loading="lazy" width={1536} height={1024} alt="Artista realizando tatuagem, imagem ilustrativa" className="absolute inset-0 size-full object-cover object-[60%_center]"/><span className="absolute bottom-5 left-5 bg-background px-3 py-2 text-[10px] uppercase tracking-[.14em]">Imagem ilustrativa</span></div></section><section className="bg-secondary"><div className="page-shell grid gap-8 py-14 md:grid-cols-[1fr_1fr] md:items-center md:py-20"><div><span className="micro-label text-muted-foreground">Conexão</span><h2 className="display-serif mt-5 text-[clamp(45px,6vw,80px)]">Acompanhe a<br/><em>jornada.</em></h2></div><div><p className="max-w-md text-base leading-8 text-muted-foreground">Novas publicações, trabalhos e atualizações de agenda são compartilhados no Instagram oficial.</p><div className="mt-7 flex items-center gap-2 text-sm"><MapPin size={17}/> Sorocaba, São Paulo</div><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="editorial-link mt-8">Visitar @lucaspedrosoink <ArrowUpRight size={16}/></a></div></div></section></main></SiteLayout>; }
