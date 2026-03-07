const partners = [
  { name: "Hotel Aryaas", city: "Trivandrum" },
  { name: "Bake House", city: "Kochi" },
  { name: "Sree Krishna Cafe", city: "Thrissur" },
  { name: "Fresh Basket", city: "Calicut" },
  { name: "Daily Bread", city: "Ernakulam" },
  { name: "Annapoorna", city: "Palakkad" },
];

const PartnerLogos = () => {
  return (
    <section className="py-16 lg:py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">
            Early Partners
          </p>
          <p className="text-xs text-muted-foreground/60">
            Pilot partners helping us reduce food waste across Kerala
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {partners.map((p, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-card rounded-xl px-6 py-4 shadow-soft border border-border min-w-[140px]"
            >
              <span className="text-lg font-semibold text-foreground">
                {p.name}
              </span>
              <span className="text-xs text-muted-foreground">{p.city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
