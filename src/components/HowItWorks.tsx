import { MapPin, CreditCard, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Find Surplus Meals Nearby",
    description: "Browse unsold meals from restaurants, bakeries, and cloud kitchens near you.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: CreditCard,
    title: "Pay Securely on WhatsApp",
    description: "Reserve your Meal Saver Box and pay instantly through UPI.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: ShoppingBag,
    title: "Pick Up & Enjoy",
    description: "Collect your order during the pickup window. Fresh, safe, and delicious — at a fraction of the price.",
    color: "bg-accent text-accent-foreground",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting delicious surplus food in Kerala is easy. Simply browse available deals from local restaurants and bakeries near you, 
            reserve your order through WhatsApp, and pick it up fresh at a fraction of the original price. No app download needed — it all works seamlessly on WhatsApp.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-background rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-button">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
