const orbitLabels = [
  { label: "List", angle: 0 },
  { label: "Sell", angle: 90 },
  { label: "Recover", angle: 180 },
  { label: "Repeat", angle: 270 },
];

const sideNotes = [
  "30-second listing",
  "Daily routine",
  "Revenue recovery",
  "Zero friction system",
];

const MerchantRetention = () => (
  <section className="py-28 lg:py-36 border-t border-[var(--ms-border)] relative overflow-hidden">
    <div className="absolute inset-0 ms-grid-bg opacity-50 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
      <div className="max-w-2xl mb-16">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--ms-accent)] mb-4">Retention engine</p>
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.05]">
          A daily operational habit — <br />not a one-time tool.
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Loop diagram */}
        <div className="relative aspect-square max-w-[460px] mx-auto w-full">
          <div className="absolute inset-8 rounded-full border border-[var(--ms-border-strong)]" />
          <div className="absolute inset-8 rounded-full border border-[var(--ms-accent)]/30 ms-orbit"
               style={{ borderStyle: "dashed" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[10px] tracking-[0.3em] text-[var(--ms-text-mute)] mb-2">THE LOOP</p>
              <p className="text-2xl font-semibold tracking-tight">List → Sell <br/> Recover → Repeat</p>
            </div>
          </div>
          {orbitLabels.map((o) => {
            const rad = (o.angle * Math.PI) / 180;
            const r = 46; // percent
            const x = 50 + r * Math.cos(rad);
            const y = 50 + r * Math.sin(rad);
            return (
              <div
                key={o.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="px-3 py-1.5 rounded-full bg-[var(--ms-bg-2)] border border-[var(--ms-accent)]/40 text-xs font-medium text-[var(--ms-accent)] shadow-[0_0_20px_rgba(45,212,168,0.25)]">
                  {o.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Side notes */}
        <div className="space-y-3">
          {sideNotes.map((n, i) => (
            <div key={n} className="ms-glass rounded-xl px-5 py-4 flex items-center gap-4">
              <span className="text-[10px] font-mono text-[var(--ms-text-mute)]">0{i + 1}</span>
              <span className="text-sm font-medium tracking-tight text-[var(--ms-text)]">{n}</span>
            </div>
          ))}
          <p className="text-lg font-medium tracking-tight text-[var(--ms-text)] pt-6 leading-snug">
            Built to be triggered <span className="text-[var(--ms-accent)]">every closing shift</span> — without reminders, dashboards, or training.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default MerchantRetention;
