import p1 from "@/assets/portfolio/p1.jpg";
import p2 from "@/assets/portfolio/p2.jpg";
import p5 from "@/assets/portfolio/p5.jpg";
import p6 from "@/assets/portfolio/p6.jpg";
import p7 from "@/assets/portfolio/p7.jpg";
import p9 from "@/assets/portfolio/p9.jpg";
import p10 from "@/assets/portfolio/p10.jpg";
import p12 from "@/assets/portfolio/p12.jpg";
import p13 from "@/assets/portfolio/p13.jpg";
import p15 from "@/assets/portfolio/p15.jpg";

export const beforePhotos = [
  { src: p7,  title: "Prace w toku — salon" },
  { src: p10, title: "Instalacja ogrzewania podłogowego" },
  { src: p15, title: "Układanie parkietu jodełka" },
  { src: p12, title: "Poziomowanie gresu" },
];

export const afterPhotos = [
  { src: p9,  title: "Łazienka pod klucz — drewno & beton" },
  { src: p13, title: "Marmur & lustro LED" },
  { src: p1,  title: "Wykończenie pod klucz" },
  { src: p5,  title: "Wnętrze kompleksowe" },
  { src: p2,  title: "Salon — finalizacja" },
  { src: p6,  title: "Strefa dzienna" },
];

export const GalleryGrid = ({ photos }: { photos: { src: string; title: string }[] }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
    {photos.map((photo, i) => (
      <figure
        key={i}
        className="relative overflow-hidden rounded-xl bg-card border border-border group aspect-square"
      >
        <img
          src={photo.src}
          alt={`MILPA — ${photo.title}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
        <figcaption className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 to-transparent text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition">
          {photo.title}
        </figcaption>
      </figure>
    ))}
  </div>
);
