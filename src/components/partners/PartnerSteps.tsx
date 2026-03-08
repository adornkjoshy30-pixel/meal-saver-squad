const steps = [
  {
    number: "1",
    title: "Apply as a Partner",
    description: "Fill out the form below. Our team will review and get in touch.",
  },
  {
    number: "2",
    title: "Send Surplus Details via WhatsApp",
    description: "When you have unsold food, message us with the items, price, quantity, and pickup window.",
  },
  {
    number: "3",
    title: "We Verify & Publish the Deal",
    description: "Our team checks the details and posts the deal in your city's WhatsApp channel.",
  },
  {
    number: "4",
    title: "Customers Pick Up & Pay You Directly",
    description: "Customers visit your restaurant, pick up the food, and pay you directly. No middleman.",
  },
];

const PartnerSteps = () => (
  <section className="py-16 lg:py-24 bg-card">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          How It Works for Partners
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Get started in 4 simple steps — no apps, no dashboards
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center relative">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-button">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerSteps;
