import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Send, Sparkles, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const MerchantHero = () => {
  return (
    <section className="relative ms-grid-bg overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--ms-accent)]/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-24 lg:pt-32 lg:pb-36">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--ms-border-strong)] bg-[var(--ms-surface)] text-[11px] uppercase tracking-[0.18em] text-[var(--ms-text-dim)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--ms-accent)] shadow-[0_0_10px_var(--ms-accent)]" />
              Merchant Activation System
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.98] text-[var(--ms-text)]">
              Turn unsold food <br />
              into <span className="text-[var(--ms-accent)]">daily revenue</span>
            </h1>

            <p className="text-base lg:text-lg text-[var(--ms-text-dim)] max-w-md">
              List surplus meals in 30 seconds via WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[var(--ms-accent)] text-[#06251c] font-semibold text-sm tracking-tight ms-cta-glow"
              >
                <MessageCircle className="w-4 h-4" />
                Start WhatsApp Listing
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/partners#signup"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-[var(--ms-border-strong)] text-[var(--ms-text)] hover:bg-[var(--ms-surface-2)] font-medium text-sm tracking-tight transition"
              >
                Become Partner Restaurant
              </Link>
            </div>
          </div>

          {/* RIGHT — Animated system flow */}
          <div className="lg:col-span-6">
            <div className="relative ms-glass rounded-3xl p-6 lg:p-8 overflow-hidden">
              <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-[var(--ms-accent)]/60 to-transparent" />
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--ms-text-mute)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--ms-accent)] animate-pulse" />
                  Live system
                </div>
                <div className="flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
                </div>
              </div>

              {/* WhatsApp message stack */}
              <div className="relative h-[60px] mb-6">
                <FlowMsg className="ms-msg-1" text="🍛 12 plates Biriyani · ₹80 · pickup 9–10 PM" />
                <FlowMsg className="ms-msg-2" text="🥘 8 portions Curry Meals · ₹60 · pickup 9–10 PM" />
                <FlowMsg className="ms-msg-3" text="🥖 20 fresh buns · ₹15 · pickup until 10 PM" />
              </div>

              {/* Flow line */}
              <svg viewBox="0 0 400 60" className="w-full h-12">
                <line x1="20" y1="30" x2="380" y2="30" stroke="rgba(45,212,168,0.5)" strokeWidth="1.5" className="ms-flow-line" />
                <circle cx="20" cy="30" r="4" fill="#2dd4a8" />
                <circle cx="200" cy="30" r="5" fill="#2dd4a8" />
                <circle cx="380" cy="30" r="4" fill="#2dd4a8" />
              </svg>

              {/* Three node states */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <FlowNode icon={Send} label="Restaurant sends" />
                <FlowNode icon={Sparkles} label="MealSaver routes" highlight />
                <FlowNode icon={ShoppingBag} label="Customer pickup" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FlowMsg = ({ text, className }: { text: string; className?: string }) => (
  <div className={`absolute inset-x-0 top-0 ${className ?? ""}`}>
    <div className="inline-flex max-w-full px-3.5 py-2.5 rounded-2xl rounded-bl-sm bg-[var(--ms-accent-soft)] border border-[var(--ms-accent)]/25 text-sm text-[var(--ms-text)]">
      {text}
    </div>
  </div>
);

const FlowNode = ({ icon: Icon, label, highlight }: { icon: any; label: string; highlight?: boolean }) => (
  <div className={`flex flex-col items-center gap-2 p-3 rounded-xl border ${highlight ? "border-[var(--ms-accent)]/40 bg-[var(--ms-accent-soft)]" : "border-[var(--ms-border)] bg-[var(--ms-surface)]"}`}>
    <Icon className={`w-4 h-4 ${highlight ? "text-[var(--ms-accent)]" : "text-[var(--ms-text-dim)]"}`} />
    <span className="text-[11px] tracking-tight text-[var(--ms-text-dim)] text-center">{label}</span>
  </div>
);

export default MerchantHero;
