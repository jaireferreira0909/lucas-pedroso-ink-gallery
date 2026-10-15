import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarPlus, MapPin, Menu, X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export const WHATSAPP = "https://wa.me/5515997753058";
export const WHATSAPP_DISPLAY = "(15) 99775-3058";
export const INSTAGRAM = "https://www.instagram.com/lucaspedrosoink/";
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61594548187193";
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
       <div className="hidden items-center gap-5 lg:flex"><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Lucas Pedroso" title="Instagram" className="transition-opacity hover:opacity-60"><FaInstagram size={18}/></a><a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook de Lucas Pedroso" title="Facebook" className="transition-opacity hover:opacity-60"><FaFacebookF size={18}/></a><Button variant="ochre" asChild className="h-11 rounded-none px-6 text-[11px] font-bold uppercase tracking-[.14em]"><a href={QUOTE} target="_blank" rel="noopener noreferrer">Pedir orçamento <ArrowUpRight size={16}/></a></Button></div>
      <details className="group lg:hidden">
        <summary className="flex size-9 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden" aria-label="Abrir menu"><Menu className="group-open:hidden" size={20}/><X className="hidden group-open:block" size={20}/></summary>
        <nav aria-label="Navegação móvel" className="absolute left-0 top-full z-30 flex w-full flex-col border-b border-border bg-background px-4 py-3 shadow-lg">{navigation.map(item => <Link key={item.to} to={item.to} className="border-b border-border/60 py-4 text-sm font-bold uppercase tracking-[.12em]">{item.label}</Link>)}<Button asChild variant="ochre" className="mt-4 h-11 rounded-none text-sm font-bold uppercase"><a href={QUOTE} target="_blank" rel="noopener noreferrer">Pedir orçamento <ArrowUpRight size={16}/></a></Button></nav>
      </details>
    </div>
  </header>;
}

export function SiteFooter() {
   return <footer className="bg-ink text-ink-foreground"><div className="page-shell py-14 md:py-20"><div className="grid gap-10 md:grid-cols-[1fr_auto] md:gap-20"><div><span className="micro-label text-ochre">Lucas Pedroso · Tattoo &amp; Barber</span><h2 className="display-serif mt-5 max-w-2xl text-[clamp(45px,6vw,90px)]">Sua próxima ideia<br/><em>começa aqui.</em></h2><div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="ochre" className="h-12 rounded-none px-5 text-xs font-bold uppercase"><a href={QUOTE} target="_blank" rel="noopener noreferrer">Fazer pedido <ArrowUpRight size={16}/></a></Button><Button asChild variant="whatsapp" className="h-12 rounded-none px-5 text-xs font-bold uppercase"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={16}/> {WHATSAPP_DISPLAY}</a></Button></div></div><div className="flex flex-col justify-end gap-4 text-sm"><span className="micro-label text-ochre">Encontre-me</span><span>R. Santa Maria, 63 · Vila Hortência<br/>Sorocaba - SP, 18020-216</span><a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline"><MapPin size={15}/> Abrir no Google Maps <ArrowUpRight size={15}/></a><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">@lucaspedrosoink <ArrowUpRight size={15}/></a></div></div><div className="mt-16 flex flex-col justify-between gap-4 border-t border-ink-foreground/20 pt-5 text-[11px] text-ink-foreground/60 md:flex-row"><span>© {new Date().getFullYear()} Lucas Pedroso · Tattoo &amp; Barber</span><span>Arte na pele e no visual, em Sorocaba.</span></div></div></footer>;
}

const SCHEDULE_OPTIONS = ["Tatuagem — Orçamento", "Barbearia — Agendar corte"] as const;

function ScheduleModal({ onClose }: { onClose: () => void }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipo, setTipo] = useState<string>(SCHEDULE_OPTIONS[0] ?? "Tatuagem — Orçamento");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const message = `Olá, Lucas! Sou ${nome.trim()} (${telefone.trim()}). Quero: ${tipo}.`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    onClose();
  }

  const inputClass = "h-12 w-full border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ochre";

  return <div role="dialog" aria-modal="true" aria-label="Agendar atendimento" onClick={onClose} className="fixed inset-0 z-[60] grid place-items-center bg-ink/70 p-4 backdrop-blur-sm">
    <div onClick={(event) => event.stopPropagation()} className="w-full max-w-md border border-border bg-card p-8 text-card-foreground">
      <div className="flex items-start justify-between gap-4">
        <div><span className="micro-label text-ochre">Agendamento</span><h3 className="mt-2 font-display text-3xl leading-tight">Agende seu horário</h3></div>
        <button type="button" onClick={onClose} aria-label="Fechar agendamento" className="flex size-9 shrink-0 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-ochre hover:text-foreground"><X size={18} /></button>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div><label htmlFor="agendar-nome" className="micro-label mb-2 block text-muted-foreground">Nome</label><input id="agendar-nome" type="text" required value={nome} onChange={(event) => setNome(event.target.value)} placeholder="Seu nome" autoComplete="name" className={inputClass} /></div>
        <div><label htmlFor="agendar-telefone" className="micro-label mb-2 block text-muted-foreground">Seu WhatsApp</label><input id="agendar-telefone" type="tel" required value={telefone} onChange={(event) => setTelefone(event.target.value)} placeholder="(00) 90000-0000" autoComplete="tel" className={inputClass} /></div>
        <div><label htmlFor="agendar-tipo" className="micro-label mb-2 block text-muted-foreground">Tipo de atendimento</label><select id="agendar-tipo" value={tipo} onChange={(event) => setTipo(event.target.value)} className={inputClass}>{SCHEDULE_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}</select></div>
        <Button type="submit" variant="ochre" className="h-12 w-full rounded-none text-xs font-bold uppercase tracking-[.12em]">Enviar agendamento</Button>
        <p className="text-center text-xs text-muted-foreground">Seus dados abrem uma conversa no WhatsApp {WHATSAPP_DISPLAY}.</p>
      </form>
    </div>
  </div>;
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  return <><SiteHeader/>{children}<SiteFooter/><div className="fixed z-50 flex flex-col items-end gap-3 bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:right-[max(1.5rem,env(safe-area-inset-right))]"><button type="button" onClick={() => setScheduleOpen(true)} aria-label="Agendar atendimento" title="Agendar atendimento" className="flex h-16 w-16 items-center justify-center rounded-full bg-ochre text-ochre-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-background"><CalendarPlus className="size-7" aria-hidden="true"/></button><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp: +55 15 99775-3058" title="Conversar pelo WhatsApp" className="flex h-16 w-16 items-center justify-center rounded-full border border-ink-foreground/30 bg-ink text-ink-foreground shadow-lg transition-all hover:scale-105 hover:border-ochre hover:text-ochre active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-background"><FaWhatsapp className="!size-8" aria-hidden="true"/></a></div>{scheduleOpen ? <ScheduleModal onClose={() => setScheduleOpen(false)} /> : null}</>; }
