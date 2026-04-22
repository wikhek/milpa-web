import { Phone, Star, CheckCircle2, MapPin, Clock, ArrowRight, Quote, Paintbrush, Hammer, Zap, Package, Ruler } from "lucide-react";
import { PortfolioSection } from "@/components/PortfolioSection";
import logo from "@/assets/milpa-logo.png";
import pavlo from "@/assets/pavlo.jpg";

const PHONE = "574 518 153";
const PHONE_TEL = "tel:+48574518153";
const FACEBOOK_URL = "https://www.facebook.com/share/1AuVD36C6h/";

const FbIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const services = [
  { icon: Ruler,     title: "Projektowanie i doradztwo",  desc: "Twoja wizja przełożona na profesjonalne plany." },
  { icon: Hammer,    title: "Zmiany konstrukcyjne",        desc: "Bezpieczne przesuwanie i wyburzanie ścian." },
  { icon: Zap,       title: "Pełna instalacja",            desc: "Profesjonalna elektryka i zaawansowana hydraulika." },
  { icon: Paintbrush,title: "Mistrzowskie rzemiosło",      desc: "Precyzyjne kafelkowanie i najwyższej klasy wykończenie powierzchni." },
  { icon: Package,   title: "Logistyka 360°",              desc: "Doradztwo, zakup i dostawa wszystkich materiałów pod Twoje drzwi." },
];

const checklistItems = [
  { title: "Pełne Zarządzanie Projektem",        desc: "Nie szukasz ekip, masz tylko jednego partnera do rozmów." },
  { title: "Gwarancja Czystości i Terminowości", desc: "Pracujemy w standardzie, który szanuje Twój czas i przestrzeń." },
  { title: "Dostawy Materiałów",                 desc: "Korzystamy z naszych zniżek i logistyki, by oszczędzić Twój czas." },
];

const reviews = [
  { name: "Nena Jakaś",       text: "Super robota, świetny kontakt i solidne wykonanie! Polecam!" },
  { name: "Marcin",           text: "Fachowe doradztwo, świetny kontakt i wysoka jakość pracy. Z czystym sumieniem mogę polecić." },
  { name: "Anna Masalska",    text: "Bardzo polecam tę firmę — profesjonalna robota." },
  { name: "Krzysztof P.",     text: "Solidna firma. Dbałość o klienta i dobry kontakt. Polecam usługi firmy MILPA." },
  { name: "Małgorzata Jeniec",text: "Solidna firma. Bardzo dobre wykonanie, szybko i solidnie. Polecam." },
  { name: "Magdalena Wita",   text: "Wszystko sprawnie, bez problemu ugadane i wykonane porządnie. Polecam!" },
];

/* ─── Facebook button helper ─── */
const FbButton = ({ label = "Facebook MILPA", large = false }: { label?: string; large?: boolean }) => (
  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
    <button
      className={`inline-flex items-center gap-2 rounded-xl font-bold text-white bg-facebook hover:opacity-90 transition shadow-lg ${
        large ? "px-7 py-5 text-lg" : "px-4 py-2.5 text-sm"
      }`}
    >
      <FbIcon className={large ? "h-6 w-6" : "h-4 w-4"} />
      {label}
    </button>
  </a>
);

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">

    {/* ── NAV ── */}
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="container flex items-center justify-between h-20 sm:h-24">

        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 min-w-0">
          <img src={logo} alt="MILPA logo" className="h-[52px] w-[52px] sm:h-[70px] sm:w-[70px] rounded-md object-contain shrink-0" />
          <div className="leading-tight min-w-0">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-gradient-gold">MILPA</div>
            <div className="text-[10px] sm:text-[13px] uppercase tracking-widest text-muted-foreground truncate">Remonty Kompleksowe</div>
          </div>
        </a>

        {/* Right buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Facebook — blue icon, always visible */}
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook MILPA"
            className="flex items-center justify-center h-10 w-10 rounded-full bg-facebook hover:opacity-90 transition shadow-lg"
          >
            <FbIcon className="h-5 w-5 text-white" />
          </a>

          {/* Phone */}
          <a href={PHONE_TEL}>
            <button className="inline-flex items-center gap-2 px-3 sm:px-5 py-2.5 rounded-xl bg-orange-gradient text-white font-bold shadow-orange-glow hover:opacity-95 transition text-sm sm:text-base">
              <Phone className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">{PHONE}</span>
            </button>
          </a>
        </div>
      </div>
    </header>

    {/* ── HERO ── */}
    <section id="top" className="relative pt-28 sm:pt-36 pb-20 overflow-hidden bg-hero-gradient">
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(hsl(43 72% 55%) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      <div className="container grid lg:grid-cols-2 gap-12 items-center relative">

        {/* Left */}
        <div className="animate-float-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/60 border border-[hsl(43_30%_25%)] text-sm mb-6">
            <Star className="h-4 w-4 fill-[hsl(43,72%,55%)] text-[hsl(43,72%,55%)]" />
            <span className="font-semibold text-gold">5,0</span>
            <span className="text-muted-foreground">w Google · Gliwice</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-2">
            REMONTY KOMPLEKSOWE
          </h1>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
            <span className="text-gradient-gold">DLA WYMAGAJĄCYCH</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mb-1">
            W MILPA stawiamy na konkret: <strong className="text-foreground">jedna ekipa, jedna odpowiedzialność, najwyższa jakość.</strong> Postaw na zespół, który od dwóch dekad buduje swoją markę na jakości i rzetelności.
          </p>
          <div className="flex items-center gap-2 mb-8">
            <MapPin className="h-4 w-4 text-gold shrink-0" />
            <span className="text-sm text-muted-foreground">
              Realizujemy projekty w promieniu <strong className="text-foreground">50 km od Gliwic</strong>
            </span>
          </div>

          <ul className="space-y-4 mb-10">
            {checklistItems.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[hsl(43,72%,55%)] shrink-0 mt-0.5" />
                <span className="text-base">
                  <strong className="text-gold">{item.title}</strong>
                  {" — "}
                  <span className="text-muted-foreground">{item.desc}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PHONE_TEL} className="group flex-1">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-orange-gradient blur-xl opacity-50 group-hover:opacity-80 transition" />
                <div className="relative flex items-center gap-4 px-6 py-5 rounded-2xl bg-orange-gradient text-white shadow-orange-glow animate-pulse-ring">
                  <span className="flex items-center justify-center h-12 w-12 rounded-full bg-white/15 shrink-0">
                    <Phone className="h-6 w-6" />
                  </span>
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-widest font-bold opacity-80">Zadzwoń — darmowa wycena</div>
                    <div className="font-display font-black text-2xl sm:text-3xl leading-none">{PHONE}</div>
                  </div>
                  <ArrowRight className="hidden sm:block h-5 w-5 ml-auto group-hover:translate-x-1 transition" />
                </div>
              </div>
            </a>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-facebook text-white font-display font-black text-lg shadow-lg hover:opacity-90 transition"
            >
              <FbIcon className="h-7 w-7 shrink-0" />
              <span>Facebook</span>
            </a>
          </div>

          <p className="text-xs text-muted-foreground mt-4">Pn–Pt 8:00–18:00 · Sob 8:00–16:00</p>
        </div>

        {/* Pavlo card */}
        <div className="relative animate-float-up">
          <div className="absolute -inset-6 bg-gold-gradient blur-3xl opacity-20 rounded-full" />
          <div className="relative rounded-3xl overflow-hidden shadow-card-elev border border-[hsl(43_30%_20%)] bg-gradient-to-br from-[hsl(20_20%_10%)] to-[hsl(20_15%_6%)] aspect-[4/5]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -left-20 top-0 bottom-0 w-2/3 bg-gold-gradient opacity-75"
                style={{ clipPath: "polygon(0 0, 70% 0, 35% 100%, 0 100%)" }} />
            </div>
            <img src={pavlo} alt="Pavlo Chubarov — właściciel MILPA"
              className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 15%" }} />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent pointer-events-none" />
            <div className="absolute top-5 right-5 bg-background/90 backdrop-blur rounded-xl px-4 py-3 shadow-card-elev z-10 border border-[hsl(43_30%_20%)]">
              <div className="flex gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[hsl(43,72%,55%)] text-[hsl(43,72%,55%)]" />
                ))}
              </div>
              <div className="text-xs text-muted-foreground font-semibold">5,0 Google</div>
            </div>
            <div className="absolute bottom-6 left-6 z-10">
              <div className="inline-block bg-gold-gradient px-5 py-2 rounded-md shadow-gold-glow mb-2">
                <div className="font-display font-black text-2xl text-[hsl(20,18%,6%)] tracking-wide">PAVLO CHUBAROV</div>
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-foreground bg-background/80 backdrop-blur px-3 py-1 rounded-sm w-fit">
                Właściciel firmy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── SERVICES ── */}
    <section id="uslugi" className="py-24 bg-card/40">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <div className="text-sm font-bold uppercase tracking-widest text-gold mb-3">Specjalizacja</div>
          <h2 className="font-display font-black text-3xl sm:text-5xl mb-4">
            Przejmujemy na siebie <span className="text-gradient-gold">każdy etap inwestycji</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            MILPA — remonty mieszkań, domów i łazienek.{" "}
            <strong className="text-gold">20 lat w branży.</strong>{" "}
            Postaw na jakość i doświadczenie!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title}
              className="flex items-start gap-4 rounded-2xl bg-card border border-border p-6 hover:border-[hsl(43_30%_30%)] transition shadow-card-elev">
              <div className="h-12 w-12 rounded-xl bg-gold-gradient flex items-center justify-center shrink-0 shadow-gold-glow">
                <s.icon className="h-6 w-6 text-[hsl(20,18%,6%)]" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg mb-1 text-gradient-gold">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── PORTFOLIO ── */}
    <section id="galeria" className="py-24">
      <div className="container">
        <div className="mb-10">
          <div className="text-sm font-bold uppercase tracking-widest text-gold mb-3">Realizacje</div>
          <h2 className="font-display font-black text-3xl sm:text-5xl">
            Nasze <span className="text-gradient-gold">projekty</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Kliknij projekt, żeby zobaczyć zdjęcia przed i po remoncie.
          </p>
        </div>
        <PortfolioSection />
      </div>
    </section>

    {/* ── REVIEWS ── */}
    <section id="opinie" className="py-24 bg-card/40">
      <div className="container">
        <div className="max-w-3xl mb-14">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
            <div className="flex gap-1 shrink-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[hsl(43,72%,55%)] text-[hsl(43,72%,55%)]" />
              ))}
            </div>
            <span className="font-display font-extrabold text-xl whitespace-nowrap">5,0 / 5,0</span>
            <span className="text-muted-foreground whitespace-nowrap">w Google</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl">
            Klienci mówią <span className="text-gradient-gold">sami za siebie</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl bg-card border border-border p-7 shadow-card-elev relative hover:border-[hsl(43_30%_25%)] transition">
              <Quote className="absolute top-5 right-5 h-8 w-8 text-gold/30" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[hsl(43,72%,55%)] text-[hsl(43,72%,55%)]" />
                ))}
              </div>
              <p className="text-foreground/90 mb-5 leading-relaxed">"{r.text}"</p>
              <div className="font-display font-bold text-gold">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="py-20 bg-card/40 border-t border-border">
      <div className="container text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/60 border border-[hsl(43_30%_25%)] text-sm mb-6">
          <MapPin className="h-4 w-4 text-gold" />
          <span className="text-muted-foreground">Do <strong className="text-foreground">50 km od Gliwic</strong></span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl mb-4">
          Gotowy na <span className="text-gradient-gold">nowe wnętrze?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Zadzwoń lub napisz na Facebooku — bezpłatna wycena.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={PHONE_TEL}>
            <div className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-orange-gradient text-white shadow-orange-glow hover:scale-[1.02] transition animate-pulse-ring">
              <span className="flex items-center justify-center h-12 w-12 rounded-full bg-white/15 shrink-0">
                <Phone className="h-6 w-6" />
              </span>
              <div className="text-left">
                <div className="text-xs uppercase tracking-widest font-bold opacity-80">Zadzwoń teraz</div>
                <div className="font-display font-black text-3xl leading-none">{PHONE}</div>
              </div>
            </div>
          </a>
          <FbButton label="Napisz na Facebooku" large />
        </div>
      </div>
    </section>

    {/* ── FOOTER ── */}
    <footer className="py-14 border-t border-border">
      <div className="container grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img src={logo} alt="" className="h-24 w-24 rounded-md object-contain" />
            <div>
              <div className="font-display font-extrabold text-3xl text-gradient-gold">MILPA</div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground">Remonty Kompleksowe</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Pavlo Chubarov — właściciel</p>
          <FbButton />
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-gold shrink-0" />
            <span>Kozielska 106b, 44-121 Gliwice</span>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-gold shrink-0" />
            <a href={PHONE_TEL} className="font-bold hover:text-gold transition">{PHONE}</a>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
            <div>
              <div>Pon–Pt: 08:00–18:00</div>
              <div>Sob: 08:00–16:00</div>
              <div className="text-muted-foreground">Niedz: zamknięte</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <a href={PHONE_TEL} className="block">
            <button className="w-full flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-orange-gradient text-white font-bold shadow-orange-glow hover:opacity-95 transition text-base">
              <Phone className="h-5 w-5" /> Zadzwoń: {PHONE}
            </button>
          </a>
          <div className="block">
            <FbButton label="Znajdź nas na Facebooku" />
          </div>
        </div>
      </div>

      <div className="container mt-10 pt-6 border-t border-border text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} MILPA — Pavlo Chubarov. Wszelkie prawa zastrzeżone.
      </div>
    </footer>

    {/* ── MOBILE FLOATING CTA ── */}
    <div className="md:hidden fixed bottom-5 inset-x-4 z-50 flex gap-3">
      {/* Phone pill */}
      <a href={PHONE_TEL} className="flex-1">
        <div className="flex items-center justify-center gap-2 px-4 py-4 rounded-full bg-orange-gradient text-white font-display font-black text-base shadow-[0_8px_32px_rgba(200,30,30,0.55)] animate-pulse-ring">
          <Phone className="h-5 w-5 shrink-0" />
          <span className="truncate">{PHONE}</span>
        </div>
      </a>
      {/* Facebook circle */}
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center h-14 w-14 rounded-full bg-facebook text-white shrink-0 shadow-[0_8px_32px_rgba(24,119,242,0.5)]"
      >
        <FbIcon className="h-6 w-6" />
      </a>
    </div>

    {/* spacer for floating bar */}
    <div className="h-24 md:hidden" />
  </div>
);

export default Index;
