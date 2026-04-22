import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import p1 from "@/assets/portfolio/p1.jpg";
import p2 from "@/assets/portfolio/p2.jpg";
import p3 from "@/assets/portfolio/p3.jpg";
import p4 from "@/assets/portfolio/p4.jpg";
import p5 from "@/assets/portfolio/p5.jpg";
import p6 from "@/assets/portfolio/p6.jpg";
import p7 from "@/assets/portfolio/p7.jpg";
import p8 from "@/assets/portfolio/p8.jpg";
import p9 from "@/assets/portfolio/p9.jpg";
import p10 from "@/assets/portfolio/p10.jpg";
import p11 from "@/assets/portfolio/p11.jpg";
import p12 from "@/assets/portfolio/p12.jpg";
import p13 from "@/assets/portfolio/p13.jpg";
import p14 from "@/assets/portfolio/p14.jpg";
import p15 from "@/assets/portfolio/p15.jpg";

type Category = "Wszystkie" | "Łazienki" | "Podłogi" | "Wnętrza";

interface Item {
  src: string;
  category: Exclude<Category, "Wszystkie">;
  title: string;
}

const items: Item[] = [
  { src: p9, category: "Łazienki", title: "Łazienka pod klucz — drewno & beton" },
  { src: p13, category: "Łazienki", title: "Marmur & lustro LED" },
  { src: p14, category: "Łazienki", title: "Strefa umywalki — drewno" },
  { src: p11, category: "Łazienki", title: "WC na poddaszu — beton & cegła" },
  { src: p8, category: "Łazienki", title: "Glazura pionowa — montaż" },
  { src: p1, category: "Wnętrza", title: "Wykończenie pod klucz" },
  { src: p2, category: "Wnętrza", title: "Salon — finalizacja" },
  { src: p3, category: "Wnętrza", title: "Aranżacja przestrzeni" },
  { src: p4, category: "Wnętrza", title: "Detal wykończeniowy" },
  { src: p5, category: "Wnętrza", title: "Wnętrze kompleksowe" },
  { src: p6, category: "Wnętrza", title: "Strefa dzienna" },
  { src: p7, category: "Wnętrza", title: "Realizacja w toku" },
  { src: p15, category: "Podłogi", title: "Parkiet jodełka — układanie" },
  { src: p10, category: "Podłogi", title: "Ogrzewanie podłogowe" },
  { src: p12, category: "Podłogi", title: "Gres drewnopodobny — poziomowanie" },
];

const categories: Category[] = ["Wszystkie", "Łazienki", "Podłogi", "Wnętrza"];

export const PortfolioGallery = () => {
  const [active, setActive] = useState<Category>("Wszystkie");

  const filtered = useMemo(
    () => (active === "Wszystkie" ? items : items.filter((i) => i.category === active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => {
          const count = c === "Wszystkie" ? items.length : items.filter((i) => i.category === c).length;
          const isActive = active === c;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-bold border transition",
                isActive
                  ? "bg-gold-gradient text-[hsl(20,18%,6%)] border-transparent shadow-gold-glow"
                  : "bg-card border-border text-foreground hover:border-[hsl(43_30%_30%)]"
              )}
            >
              {c}
              <span className={cn("ml-2 text-xs", isActive ? "opacity-80" : "text-muted-foreground")}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Masonry — CSS columns */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
        {filtered.map((item, i) => (
          <figure
            key={`${item.src}-${i}`}
            className="mb-4 break-inside-avoid relative overflow-hidden rounded-2xl bg-card border border-border group"
          >
            <img
              src={item.src}
              alt={`MILPA — ${item.title}`}
              loading="lazy"
              className="w-full h-auto object-cover group-hover:scale-105 transition duration-700"
            />
            <figcaption className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition">
              <div>
                <div className="inline-block px-2 py-0.5 mb-2 rounded-sm text-[10px] font-bold uppercase tracking-widest bg-gold-gradient text-[hsl(20,18%,6%)]">
                  {item.category}
                </div>
                <div className="font-display font-extrabold text-foreground leading-tight">{item.title}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGallery;
