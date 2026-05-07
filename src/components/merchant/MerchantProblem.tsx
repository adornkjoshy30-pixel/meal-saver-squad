import { TrendingDown, Trash2, Clock3 } from "lucide-react";

const points = [
  {
    icon: TrendingDown,
    title: "Every unsold plate is a direct loss",
    body: "Ingredients, labour, electricity, and rent are already spent. Food that doesn't sell by closing time is pure margin lost — every single day.",
  },
  {
    icon: Trash2,
    title: "Throwing it away is the default",
    body: "Most kitchens have no fast way to move surplus at 9 PM. It ends up in the bin or given away unstructured — without recovering any value.",
  },
  {
    icon: Clock3,
    title: "Manual last-minute discounts don't scale",
    body: "Calling regulars, posting on personal status, or slashing prices in-store takes staff time you don't have during closing rush.",
  },
];

const MerchantProblem = () => (
  <section className="py-16 lg:py-24 bg-card border-b border-border">
    <div className="max-w-6xl mx-auto px-6 lg:px-12">
      <div className="max-w-2xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">The daily reality</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
          You're already losing money on food that didn't sell today.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {points.map((p) => (
          <div key={p.title} className="bg-background border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <p.icon className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MerchantProblem;