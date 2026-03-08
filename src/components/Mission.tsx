import { Leaf, TrendingDown, Heart } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative bg-primary rounded-3xl p-8 lg:p-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-foreground rounded-full blur-3xl" />
          </div>
          
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium">
                Our Mission
              </span>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground">
                Reduce Food Waste in Kerala
              </h2>
              
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                India wastes over <span className="font-bold">₹1 lakh crore</span> worth of food every year, and Kerala is no exception.
                Meal Saver connects local restaurants, bakeries, and grocery stores with conscious customers to rescue food that's still fresh and safe to eat.
              </p>
              
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                By choosing Meal Saver, you're not just saving money — you're actively contributing to a more sustainable Kerala. 
                Together, we can reduce waste, lower food costs, and support a healthier planet for future generations.
              </p>
            </div>
            
            {/* The Problem — real public data only */}
            <div className="grid gap-6">
              <div className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                    <TrendingDown className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-foreground">₹1 Lakh Cr</p>
                    <p className="text-primary-foreground/80">Food wasted annually in India</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                    <Leaf className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-foreground">68 million</p>
                    <p className="text-primary-foreground/80">Tonnes of food wasted per year</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                    <Heart className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-foreground">40%</p>
                    <p className="text-primary-foreground/80">Of food produced in India is wasted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
