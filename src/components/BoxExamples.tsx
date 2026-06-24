import catBakery from "@/assets/cat-bakery.jpg";
import catCake from "@/assets/cat-cake.jpg";
import catSupermarket from "@/assets/cat-supermarket.jpg";
import catDairy from "@/assets/cat-dairy.jpg";

const boxes = [
  {
    title: "Bakery Surprise Bag",
    description: "A selection of pastries, breads and baked goods from a local bakery.",
    price: "₹120",
    originalPrice: "₹250",
    image: catBakery,
    tag: "Popular",
  },
  {
    title: "Cake Shop Treats",
    description: "Cakes, brownies and desserts from neighbourhood cake shops.",
    price: "₹149",
    originalPrice: "₹350",
    image: catCake,
    tag: "Sweet Pick",
  },
  {
    title: "Supermarket Essentials",
    description: "Everyday grocery products and pantry favourites at great value.",
    price: "₹199",
    originalPrice: "₹400",
    image: catSupermarket,
    tag: null,
  },
  {
    title: "Dairy & Refrigerated",
    description: "Fresh dairy products nearing the end of their selling window.",
    price: "₹89",
    originalPrice: "₹180",
    image: catDairy,
    tag: "Fresh",
  },
];

const BoxExamples = () => {
  return (
    <section id="boxes" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-green-light text-primary text-sm font-medium mb-4">
            What We're Building
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Example offers
          </h2>
          <p className="text-lg text-muted-foreground">
            From bakery surprise bags to everyday supermarket essentials — discover quality products from local businesses across Kerala.
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
                  alt={`${box.title} — ${box.description}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-3">
                  {box.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {box.description}
                </p>
                
                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary">{box.price}</span>
                  <span className="text-muted-foreground line-through">{box.originalPrice}</span>
                  <span className="px-2 py-1 rounded-md bg-green-light text-primary text-xs font-semibold">
                    Great value
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
