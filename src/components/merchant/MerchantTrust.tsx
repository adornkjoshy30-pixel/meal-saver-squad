const badges = ["Pilot Phase", "Selected Restaurants Only", "WhatsApp-Based System"];

const MerchantTrust = () => (
  <section className="py-20 border-t border-[var(--ms-border)]">
    <div className="max-w-5xl mx-auto px-6 lg:px-12">
      <div className="ms-glass rounded-full py-4 px-6 flex flex-wrap items-center justify-center gap-3">
        {badges.map((b, i) => (
          <span key={b} className="flex items-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium tracking-tight text-[var(--ms-text-dim)] border border-[var(--ms-border-strong)] bg-[var(--ms-surface)]">
              {b}
            </span>
            {i < badges.length - 1 && <span className="w-1 h-1 rounded-full bg-[var(--ms-text-mute)]" />}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default MerchantTrust;
