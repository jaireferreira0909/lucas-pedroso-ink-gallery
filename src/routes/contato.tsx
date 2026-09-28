import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INSTAGRAM, QUOTE, SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/contato")({ head: () => ({ meta: [
  { title: "Contato e Orçamento | Lucas Pedroso Tattoo" },
  { name: "description", content: "Fale com Lucas Pedroso sobre sua tatuagem em Sorocaba. Envie sua ideia e peça um orçamento diretamente pelo WhatsApp." },
  { property: "og:title", content: "Contato e Orçamento | Lucas Pedroso Tattoo" },
  { property: "og:description", content: "Entre em contato com Lucas Pedroso pelo WhatsApp para conversar sobre sua tatuagem." },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
] }), component: Contato });

function Contato() { return <SiteLayout><main><section className="page-shell grid gap-12 pb-16 pt-16 md:grid-cols-[1fr_.75fr] md:gap-20 md:pb-28 md:pt-28"><div><span className="micro-label text-muted-foreground">Contato / Orçamento</span><h1 className="display-serif mt-7 text-[clamp(66px,9vw,132px)]">Vamos criar<br/><em>algo juntos?</em></h1><p className="mt-9 max-w-lg text-lg leading-9 text-muted-foreground">Conte sua ideia para Lucas. Envie referências, a região do corpo e o tamanho aproximado para começar uma conversa sobre seu orçamento.</p><Button asChild variant="default" size="lg" className="mt-9 h-14 rounded-none px-8 text-xs font-bold uppercase tracking-[.12em]"><a href={QUOTE} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp <ArrowUpRight size={17}/></a></Button><p className="mt-4 text-xs text-muted-foreground">Você será direcionado ao WhatsApp do artista.</p></div><div className="flex flex-col justify-center border-t border-border md:border-l md:border-t-0 md:pl-16"><div className="border-b border-border py-8"><MessageCircle size={24} strokeWidth={1.3}/><span className="micro-label mt-6 block text-muted-foreground">WhatsApp</span><a href={QUOTE} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-3 font-display text-3xl hover:underline">(15) 98139-2638 <ArrowUpRight size={17}/></a></div><div className="border-b border-border py-8"><Instagram size={24} strokeWidth={1.3}/><span className="micro-label mt-6 block text-muted-foreground">Instagram</span><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-3 font-display text-3xl hover:underline">@lucaspedrosoink <ArrowUpRight size={17}/></a></div><div className="py-8"><MapPin size={24} strokeWidth={1.3}/><span className="micro-label mt-6 block text-muted-foreground">Localização</span><p className="mt-3 font-display text-3xl">Sorocaba, SP</p><p className="mt-3 text-sm text-muted-foreground">Peça detalhes do atendimento diretamente ao artista.</p></div></div></section></main></SiteLayout>; }
