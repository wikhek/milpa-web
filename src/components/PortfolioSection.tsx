import { useState, useCallback } from "react";
import { ChevronDown, Images } from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Photo data ── */
const gen = (prefix: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/portfolio/${prefix}_${i + 1}.jpg`);

const PROJECTS = [
  { id: "lazienka1",   title: "Łazienka 1",   category: "Łazienka",  before: gen("lazienka1_przed", 3),  after: gen("lazienka1_po", 4) },
  { id: "lazienka2",   title: "Łazienka 2",   category: "Łazienka",  before: gen("lazienka2_przed", 4),  after: gen("lazienka2_po", 9) },
  { id: "lazienka3",   title: "Łazienka 3",   category: "Łazienka",  before: gen("lazienka3_przed", 2),  after: gen("lazienka3_po", 5) },
  { id: "lazienka4",   title: "Łazienka 4",   category: "Łazienka",  before: gen("lazienka4_przed", 2),  after: gen("lazienka4_po", 2) },
  { id: "lazienka5",   title: "Łazienka 5",   category: "Łazienka",  before: gen("lazienka5_przed", 3),  after: gen("lazienka5_po", 4) },
  { id: "mieszkanie1", title: "Mieszkanie 1",  category: "Mieszkanie",before: gen("mieszkanie1_przed", 14), after: gen("mieszkanie1_po", 10) },
  { id: "mieszkanie2", title: "Mieszkanie 2",  category: "Mieszkanie",before: gen("mieszkanie2_przed", 17), after: gen("mieszkanie2_po", 15) },
  { id: "poddasze",    title: "Poddasze",      category: "Poddasze",  before: gen("poddasze_przed", 5),   after: gen("poddasze_po", 7) },
  { id: "podloga",     title: "Podłoga",       category: "Podłogi",   before: gen("podloga_przed", 16),   after: gen("podloga_po", 8) },
  { id: "elektryk",    title: "Elektryka",     category: "Elektryka", before: gen("elektryk_przed", 2),   after: gen("elektryk_po", 1) },
] as const;

/* ── Lightbox ── */
const Lightbox = ({ src, onClose }: { src: string; onClose: () => void }) => (
  <div
    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
    onClick={onClose}
  >
    <img
      src={src}
      alt="Powiększone zdjęcie"
      className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    />
    <button
      onClick={onClose}
      className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl font-bold transition"
    >
      ✕
    </button>
  </div>
);

/* ── Photo grid (lazy — only renders when open) ── */
const PhotoGrid = ({ photos, onOpen }: { photos: readonly string[]; onOpen: (src: string) => void }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
    {photos.map((src, i) => (
      <button
        key={i}
        onClick={() => onOpen(src)}
        className="group relative overflow-hidden rounded-xl aspect-square bg-card border border-border hover:border-[hsl(43_30%_35%)] transition"
      >
        <img
          src={src}
          alt={`Zdjęcie ${i + 1}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
      </button>
    ))}
  </div>
);

/* ── Single project accordion card ── */
const ProjectCard = ({ project }: { project: typeof PROJECTS[number] }) => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"after" | "before">("after");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const openLightbox = useCallback((src: string) => setLightbox(src), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const photos = tab === "after" ? project.after : project.before;

  return (
    <>
      {lightbox && <Lightbox src={lightbox} onClose={closeLightbox} />}

      <div className={cn(
        "rounded-2xl border bg-card shadow-card-elev transition-all duration-300",
        open ? "border-[hsl(43_40%_30%)]" : "border-border hover:border-[hsl(43_25%_22%)]"
      )}>
        {/* Header — always visible */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 text-left"
        >
          <div className="flex items-center gap-4">
            <div className={cn(
              "h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300",
              open ? "bg-gold-gradient shadow-gold-glow" : "bg-secondary/60"
            )}>
              <Images className={cn("h-5 w-5 transition", open ? "text-[hsl(20,18%,6%)]" : "text-muted-foreground")} />
            </div>
            <div>
              <div className="font-display font-extrabold text-base sm:text-lg text-foreground">
                {project.title}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {project.before.length} zdjęć przed · {project.after.length} zdjęć po
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {open ? "Zwiń" : "Zobacz projekt"}
            </span>
            <ChevronDown className={cn(
              "h-5 w-5 text-gold shrink-0 transition-transform duration-300",
              open && "rotate-180"
            )} />
          </div>
        </button>

        {/* Content — lazy renders only when open */}
        <div className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out",
          open ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}>
          <div className="px-5 pb-6 sm:px-6">
            {/* Before / After tabs */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setTab("after")}
                className={cn(
                  "flex-1 py-2.5 rounded-xl text-sm font-bold transition",
                  tab === "after"
                    ? "bg-gold-gradient text-[hsl(20,18%,6%)] shadow-gold-glow"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                )}
              >
                PO remoncie ({project.after.length})
              </button>
              <button
                onClick={() => setTab("before")}
                className={cn(
                  "flex-1 py-2.5 rounded-xl text-sm font-bold transition",
                  tab === "before"
                    ? "bg-secondary text-foreground border border-[hsl(43_30%_25%)]"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                )}
              >
                PRZED remontem ({project.before.length})
              </button>
            </div>

            {/* Photos — lazy loaded (only in DOM when open) */}
            {open && <PhotoGrid photos={photos} onOpen={openLightbox} />}
          </div>
        </div>
      </div>
    </>
  );
};

/* ── Category filter ── */
const CATS = ["Wszystkie", "Łazienka", "Mieszkanie", "Poddasze", "Podłogi", "Elektryka"] as const;

export const PortfolioSection = () => {
  const [cat, setCat] = useState<string>("Wszystkie");

  const filtered = cat === "Wszystkie"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === cat);

  return (
    <div>
      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-bold border transition",
              cat === c
                ? "bg-gold-gradient text-[hsl(20,18%,6%)] border-transparent shadow-gold-glow"
                : "bg-card border-border text-foreground hover:border-[hsl(43_30%_30%)]"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Project list */}
      <div className="flex flex-col gap-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
