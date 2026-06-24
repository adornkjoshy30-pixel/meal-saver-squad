import { Search, MessageCircle, ShoppingBag, Smile } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Browse quality products from local bakeries, cake shops and supermarkets posted to our WhatsApp channel.",
  },
  {
    icon: MessageCircle,
    title: "Reserve",
    description: "Tap the link to reserve your order on WhatsApp. We confirm and hold it for you.",
  },
  {
    icon: ShoppingBag,
    title: "Collect",
    description: "Pick up your order at the store during the collection window.",
  },
  {
    icon: Smile,
    title: "Enjoy",
    description: "Save money while helping local businesses reduce unnecessary waste.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Good food, in four simple steps
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover quality food at great value — no app to install, just WhatsApp.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="relative bg-background rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 h-full">
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-button">
                  {index + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <step.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
