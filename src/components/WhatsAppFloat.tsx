import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { whatsapp } from "@/config/appConfig";

const WHATSAPP_LINK = whatsapp.channelUrl;

const WhatsAppFloat = () => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show after a short scroll to feel contextual, not intrusive
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-collapse after 6s if expanded
  useEffect(() => {
    if (!expanded) return;
    const timer = setTimeout(() => setExpanded(false), 6000);
    return () => clearTimeout(timer);
  }, [expanded]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded card */}
      {expanded && (
        <div className="animate-fade-in bg-card rounded-2xl shadow-card border border-border p-5 w-72 relative">
          <button
            onClick={() => setExpanded(false)}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[hsl(142,70%,49%)]/10 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-[hsl(142,70%,49%)]" />
              </div>
              <p className="font-bold text-foreground text-sm">WhatsApp Deal Alerts</p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Join the WhatsApp channel to receive surplus food deals from local restaurants.
            </p>

            <p className="text-xs text-muted-foreground/70 italic">
              Deals usually sell out fast.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-[hsl(142,70%,49%)] hover:bg-[hsl(142,70%,44%)] text-white font-semibold text-sm py-2.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Join WhatsApp Channel
            </a>
          </div>
        </div>
      )}

      {/* Compact pill */}
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="group flex items-center gap-2 rounded-full bg-card border border-border shadow-card px-4 py-2.5 hover:shadow-glow transition-all duration-300"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(142,70%,49%)] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[hsl(142,70%,49%)]" />
        </span>
        <span className="text-foreground font-semibold text-sm hidden sm:inline">
          Deals on WhatsApp
        </span>
        <span className="text-foreground font-semibold text-sm sm:hidden">
          Join Deals
        </span>
        <MessageCircle className="w-4 h-4 text-[hsl(142,70%,49%)] group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
