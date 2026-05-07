import { Utensils, TrendingDown, Percent, Trash2 } from "lucide-react";

const items = [
  { icon: Utensils, label: "Unsold food daily" },
  { icon: TrendingDown, label: "End-of-day revenue loss" },
  { icon: Percent, label: "Manual discount pressure" },
  { icon: Trash2, label: "Food waste accumulation" },
];

const MerchantProblem = () => (
  <section className="relative py-28 lg:py-36 border-t border-[var(--ms-border)]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="max-w-2xl mb-16">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--ms-accent)] mb-4">The cost of doing nothing</p>
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.05]">
          Every closing shift, revenue walks out the back door.
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it) => (
          <div
            key={it.label}
            className="ms-glass ms-card-hover rounded-2xl p-7 aspect-square flex flex-col justify-between"
          >
            <it.icon className="w-7 h-7 text-[var(--ms-accent)]" strokeWidth={1.4} />
            <p className="text-base font-medium tracking-tight text-[var(--ms-text)] leading-snug">
              {it.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MerchantProblem;
