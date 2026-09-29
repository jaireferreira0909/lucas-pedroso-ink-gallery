import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, MapPin, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export const WHATSAPP = "https://wa.me/5515981392638";
export const INSTAGRAM = "https://www.instagram.com/lucaspedrosoink/";
export const QUOTE = `${WHATSAPP}?text=${encodeURIComponent("Olá, Lucas! Gostaria de fazer um orçamento para uma tatuagem.")}`;
export const BARBER_CHAT = `${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre um corte na Franqueza Barbearia.")}`;
export const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Franqueza Barbearia, R. Santa Maria, 63 - Vila Hortência, Sorocaba - SP, 18020-216");

const navigation = [
  { label: "Início", to: "/" as const },
  { label: "Trabalhos", to: "/trabalhos" as const },
  { label: "Sobre", to: "/sobre" as const },
  { label: "Contato", to: "/contato" as const },
];

export function SiteHeader() {
  return <header className="relative z-30 bg-background">
    <div className="page-shell flex h-[74px] items-center justify-between gap-4 border-b border-border md:h-[88px]">
      <Link to="/" className="group flex shrink-0 items-center gap-3" aria-label="Lucas Pedroso Tattoo — início">
        <span className="flex size-10 items-center justify-center border border-foreground font-display text-[26px] leading-none transition-colors group-hover:bg-foreground group-hover:text-background">LP</span>
        <span className="flex flex-col leading-none"><strong className="font-display text-[24px] font-medium">Lucas Pedroso</strong><span className="micro-label mt-1 text-muted-foreground">Tattoo &amp; Barber / Sorocaba</span></span>
      </Link>
      <nav aria-label="Navegação principal" className="hidden items-center gap-9 lg:flex">
        {navigation.map(item => <Link key={item.to} to={item.to} activeProps={{ className: "text-foreground border-foreground" }} inactiveProps={{ className: "text-muted-foreground border-transparent" }} className="border-b pb-1 text-[11px] font-bold uppercase tracking-[.16em] transition-colors hover:text-foreground">{item.label}</Link>)}
      </nav>
       <div className="hidden items-center gap-5 lg:flex"><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Lucas Pedroso" className="transition-opacity hover:opacity-60"><Instagram size={18}/></a><Button variant="whatsapp" asChild className="h-11 rounded-none px-6 text-[11px] font-bold uppercase tracking-[.14em]"><a href={QUOTE} target="_blank" rel="noopener noreferrer">Pedir orçamento <FaWhatsapp size={16}/></a></Button></div>
      <details className="group lg:hidden">
        <summary className="flex size-9 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden" aria-label="Abrir menu"><Menu className="group-open:hidden" size={20}/><X className="hidden group-open:block" size={20}/></summary>
        <nav aria-label="Navegação móvel" className="absolute left-0 top-full z-30 flex w-full flex-col border-b border-border bg-background px-4 py-3 shadow-lg">{navigation.map(item => <Link key={item.to} to={item.to} className="border-b border-border/60 py-4 text-sm font-bold uppercase tracking-[.12em]">{item.label}</Link>)}<Button asChild variant="whatsapp" className="mt-4 h-11 rounded-none text-sm font-bold uppercase"><a href={QUOTE} target="_blank" rel="noopener noreferrer">Pedir orçamento <FaWhatsapp/></a></Button></nav>
      </details>
    </div>
  </header>;
}

export function SiteFooter() {
   return <footer className="bg-ink text-ink-foreground"><div className="page-shell py-14 md:py-20"><div className="grid gap-10 md:grid-cols-[1fr_auto] md:gap-20"><div><span className="micro-label text-ochre">Lucas Pedroso · Tattoo &amp; Barber</span><h2 className="display-serif mt-5 max-w-2xl text-[clamp(45px,6vw,90px)]">Sua próxima ideia<br/><em>começa aqui.</em></h2><Button asChild variant="whatsapp" className="mt-9 h-12 rounded-none px-5 text-xs font-bold uppercase"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp <FaWhatsapp/></a></Button></div><div className="flex flex-col justify-end gap-4 text-sm"><span className="micro-label text-ochre">Encontre-me</span><span>R. Santa Maria, 63 · Vila Hortência<br/>Sorocaba - SP, 18020-216</span><a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline"><MapPin size={15}/> Abrir no Google Maps <ArrowUpRight size={15}/></a><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">@lucaspedrosoink <ArrowUpRight size={15}/></a></div></div><div className="mt-16 flex flex-col justify-between gap-4 border-t border-ink-foreground/20 pt-5 text-[11px] text-ink-foreground/60 md:flex-row"><span>© {new Date().getFullYear()} Lucas Pedroso · Tattoo &amp; Barber</span><span>Arte na pele e no visual, em Sorocaba.</span></div></div></footer>;
}

export function SiteLayout({ children }: { children: React.ReactNode }) { return <><SiteHeader/>{children}<SiteFooter/><Button asChild variant="whatsapp" className="fixed bottom-4 right-4 z-50 h-14 max-w-[calc(100vw-32px)] rounded-full border border-whatsapp-foreground/40 px-4 text-xs font-bold shadow-lg sm:bottom-6 sm:right-6 sm:h-14 sm:px-5"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp: +55 15 98139-2638" title="Conversar pelo WhatsApp"><FaWhatsapp className="!size-6" aria-hidden="true"/> <span>+55 15 98139-2638</span></a></Button></>; }
