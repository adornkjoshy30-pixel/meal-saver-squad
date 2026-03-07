import surpriseBox from "@/assets/surprise-box-branded.jpg";
import mealBox from "@/assets/meal-box-branded.jpg";
import groceryBox from "@/assets/grocery-box-branded.jpg";
import cloudKitchenBox from "@/assets/cloud-kitchen-box-branded.jpg";

const boxes = [
  {
    icon: "✨",
    title: "Surprise Box",
    description: "A mix of bakery or café items available at the end of the day.",
    price: "₹99",
    originalPrice: "₹299",
    image: surpriseBox,
    tag: "Popular",
  },
  {
    icon: "🍱",
    title: "Meal Saver Box",
    description: "A fresh, unsold meal from popular restaurants available at discount.",
    price: "₹149",
    originalPrice: "₹399",
    image: mealBox,
    tag: "Best Value",
  },
  {
    icon: "🥦",
    title: "Grocery Rescue Pack",
    description: "Veggies, fruits, and items nearing best-before date.",
    price: "₹79",
    originalPrice: "₹199",
    image: groceryBox,
    tag: null,
  },
  {
    icon: "🍕",
    title: "Cloud Kitchen Pack",
    description: "Leftover batches from cloud kitchens — safe and budget-friendly.",
    price: "₹129",
    originalPrice: "₹349",
    image: cloudKitchenBox,
    tag: "New",
  },
];

const BoxExamples = () => {
  return (
    <section id="boxes" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-green-light text-primary text-sm font-medium mb-4">
            Our Boxes
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Meal Saver
          </h2>
          <p className="text-lg text-muted-foreground">
            From surprise boxes to grocery rescue packs, Meal Saver offers a variety of surplus food options from local businesses across Kerala. 
            Every box you grab means less food wasted and more savings in your pocket. Explore our most popular categories below.
          </p>
        </div>

        {/* Box Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {boxes.map((box, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              {/* Tag */}
              {box.tag && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                  {box.tag}
                </div>
              )}
              
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={box.image} 
                  alt={box.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{box.icon}</span>
                  <h3 className="font-bold text-foreground text-lg">
                    {box.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {box.description}
                </p>
                
                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary">{box.price}</span>
                  <span className="text-muted-foreground line-through">{box.originalPrice}</span>
                  <span className="px-2 py-1 rounded-md bg-green-light text-primary text-xs font-semibold">
                    -60%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoxExamples;
