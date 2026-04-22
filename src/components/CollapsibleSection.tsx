import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  badge?: string;
}

export const CollapsibleSection = ({ title, subtitle, defaultOpen = false, children, badge }: Props) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-border bg-card shadow-card-elev overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 hover:bg-secondary/30 transition text-left"
      >
        <div className="flex items-center gap-3">
          {badge && (
            <span className="px-3 py-1 rounded-full bg-gold-gradient text-[hsl(20,18%,6%)] text-xs font-black uppercase tracking-widest">
              {badge}
            </span>
          )}
          <div>
            <div className="font-display font-extrabold text-lg text-foreground">{title}</div>
            {subtitle && <div className="text-sm text-muted-foreground mt-0.5">{subtitle}</div>}
          </div>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gold shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <div className={cn(
        "overflow-hidden transition-all duration-500 ease-in-out",
        open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-6 pb-6 pt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSection;
