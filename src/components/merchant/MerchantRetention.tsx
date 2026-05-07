import { Repeat, Timer, UserCheck, TrendingUp } from "lucide-react";

const habits = [
  {
    icon: Timer,
    title: "List in under 30 seconds",
    body: "A single WhatsApp message at closing time. Faster than counting leftovers.",
  },
  {
    icon: Repeat,
    title: "Built as a daily habit",
    body: "Same number, same format, every evening. No logins, no app updates, no friction.",
  },
  {
    icon: UserCheck,
    title: "No extra staff required",
    body: "Whoever closes the kitchen sends the message. That's it. No new role to hire.",
  },
  {
    icon: TrendingUp,
    title: "Recovered revenue compounds",
    body: "Even ₹500–₹2,000 recovered per night becomes ₹15K–₹60K of pure margin every month.",
  },
];

const MerchantRetention = () => (
  <section className="py-16 lg:py-24 bg-primary/5 border-b border-border">
    <div className="max-w-6xl mx-auto px-6 lg:px-12">
      <div className="max-w-3xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">Why partners keep using it</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
          Designed to be a daily habit — not a one-time signup.
        </h2>
        <p className="text-muted-foreground mt-3">
          MealSaver only works if you list consistently. So we built the lightest possible workflow on the tool you already use all day.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {habits.map((h) => (
          <div key={h.title} className="bg-card border border-border rounded-xl p-6 flex gap-4">
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <h.icon className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-card border border-border rounded-xl p-6 lg:p-8">
        <p className="text-sm font-semibold text-primary mb-2">The math of consistency</p>
        <p className="text-foreground text-lg leading-relaxed">
          Listing surplus <span className="font-semibold">once a week</span> recovers a few hundred rupees.
          Listing <span className="font-semibold">every closing shift</span> turns daily waste into a measurable line of recurring monthly revenue.
        </p>
      </div>
    </div>
  </section>
);

export default MerchantRetention;