import { Coins, TrendingDown, Zap } from "lucide-react";

const cards = [
  { icon: Coins, label: "Recover wasted revenue" },
  { icon: TrendingDown, label: "Reduce end-of-day losses" },
  { icon: Zap, label: "No technical setup required" },
];

const MerchantValue = () => (
  <section className="py-28 lg:py-36 border-t border-[var(--ms-border)] bg-[var(--ms-bg-2)]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="max-w-2xl mb-16">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--ms-accent)] mb-4">Merchant value</p>
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.05]">
          What you get back, every night.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((c) => (
          <div key={c.label} className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[var(--ms-accent)]/40 via-white/10 to-transparent ms-card-hover">
            <div className="rounded-2xl bg-[var(--ms-bg)] p-8 h-full flex flex-col gap-10 justify-between min-h-[200px]">
              <c.icon className="w-7 h-7 text-[var(--ms-accent)]" strokeWidth={1.5} />
              <p className="text-lg font-medium tracking-tight">{c.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MerchantValue;
