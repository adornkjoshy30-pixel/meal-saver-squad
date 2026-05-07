import { ArrowRight, MessageCircle } from "lucide-react";

const MerchantFinalCTA = () => (
  <section className="py-28 lg:py-36 border-t border-[var(--ms-border)] relative overflow-hidden">
    <div className="absolute inset-0 ms-grid-bg opacity-60" />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[var(--ms-accent)]/10 blur-[120px] pointer-events-none" />
    <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <h2 className="text-4xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.02] mb-8">
        Start recovering daily<br />
        <span className="text-[var(--ms-accent)]">lost revenue</span> today.
      </h2>
      <div className="flex justify-center">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="ms-pulse inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[var(--ms-accent)] text-[#06251c] font-semibold tracking-tight"
        >
          <MessageCircle className="w-5 h-5" />
          Activate WhatsApp Listing
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      <p className="text-xs text-[var(--ms-text-mute)] tracking-wide mt-6">
        Takes less than 30 seconds to start.
      </p>
    </div>
  </section>
);

export default MerchantFinalCTA;
