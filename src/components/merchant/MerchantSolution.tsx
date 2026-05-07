import { MessageCircle, Radio, ShoppingBag } from "lucide-react";

const steps = [
  { icon: MessageCircle, label: "WhatsApp Input", n: "01" },
  { icon: Radio, label: "MealSaver Distribution", n: "02" },
  { icon: ShoppingBag, label: "Customer Pickup", n: "03" },
];

const MerchantSolution = () => (
  <section className="py-28 lg:py-36 border-t border-[var(--ms-border)] bg-[var(--ms-bg-2)]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="max-w-2xl mb-20">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--ms-accent)] mb-4">The system</p>
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.05]">
          One message. Three steps. Zero infrastructure.
        </h2>
      </div>

      <div className="relative">
        {/* desktop horizontal flow */}
        <div className="hidden md:grid grid-cols-3 gap-6 relative">
          <svg className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-8 -z-0 pointer-events-none" viewBox="0 0 1000 30" preserveAspectRatio="none">
            <line x1="120" y1="15" x2="880" y2="15" stroke="rgba(45,212,168,0.5)" strokeWidth="1.5" className="ms-flow-line" />
          </svg>
          {steps.map((s) => (
            <StepCard key={s.n} {...s} />
          ))}
        </div>

        {/* mobile stack */}
        <div className="md:hidden space-y-4">
          {steps.map((s) => (
            <StepCard key={s.n} {...s} />
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-[var(--ms-text-mute)] tracking-wide mt-16">
        Zero app. Zero setup. Fully WhatsApp-based.
      </p>
    </div>
  </section>
);

const StepCard = ({ icon: Icon, label, n }: { icon: any; label: string; n: string }) => (
  <div className="relative ms-glass ms-card-hover rounded-2xl p-8 flex flex-col items-center text-center gap-4 z-10">
    <span className="text-[10px] tracking-[0.25em] text-[var(--ms-text-mute)]">{n}</span>
    <div className="w-14 h-14 rounded-full bg-[var(--ms-accent-soft)] border border-[var(--ms-accent)]/30 flex items-center justify-center">
      <Icon className="w-6 h-6 text-[var(--ms-accent)]" strokeWidth={1.5} />
    </div>
    <p className="text-base font-medium tracking-tight">{label}</p>
  </div>
);

export default MerchantSolution;
