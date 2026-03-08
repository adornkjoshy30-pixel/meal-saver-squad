import { MessageCircle, Bell, ShoppingBag, Send, CheckCircle, Users } from "lucide-react";

const customerSteps = [
  {
    icon: MessageCircle,
    title: "Join Your City's WhatsApp Channel",
    description: "Pick your city and join the free WhatsApp channel. That's all you need to get started.",
  },
  {
    icon: Bell,
    title: "See a Deal & Reserve via WhatsApp",
    description: "When a deal is posted, tap 'Reserve' to send a pre-filled WhatsApp message to MealSaver. We'll confirm your reservation.",
  },
  {
    icon: ShoppingBag,
    title: "Pick Up Your Reserved Meal",
    description: "Visit the restaurant during your confirmed pickup window. Your portion is held for you — no surprises.",
  },
];

const restaurantSteps = [
  {
    icon: Send,
    title: "Send Surplus Food Details",
    description: "At the end of the day, share what's left — food items, quantity, price, and pickup time.",
  },
  {
    icon: CheckCircle,
    title: "We Verify & Publish the Deal",
    description: "Our team checks the details and publishes the deal in the local city WhatsApp channel.",
  },
  {
    icon: Users,
    title: "Customers Arrive for Pickup",
    description: "Nearby customers see the deal, come to your restaurant, and pick up the food. You earn instead of wasting.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            How MealSaver Works
          </h2>
          <p className="text-lg text-muted-foreground">
            No app. No complex platform. Just WhatsApp channels connecting surplus food with people who want it.
          </p>
        </div>

        {/* For Customers */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary">For Customers</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {customerSteps.map((step, index) => (
              <div key={index} className="relative group">
                {index < customerSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-border" />
                )}
                <div className="relative bg-background rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300">
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-button">
                    {index + 1}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <step.icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For Restaurants */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary">For Restaurants</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {restaurantSteps.map((step, index) => (
              <div key={index} className="relative group">
                {index < restaurantSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-border" />
                )}
                <div className="relative bg-background rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300">
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-5">
                    <step.icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
