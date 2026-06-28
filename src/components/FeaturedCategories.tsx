import catBakery from "@/assets/cat-bakery.jpg";
import catCake from "@/assets/cat-cake.jpg";
import catSupermarket from "@/assets/cat-supermarket.jpg";
import catFrozen from "@/assets/cat-frozen.jpg";
import catPackaged from "@/assets/cat-packaged.jpg";
import catDairy from "@/assets/cat-dairy.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const categories = [
  {
    title: "Bakeries",
    description: "Fresh pastries, puffs, breads and baked goods from local bakers.",
    image: catBakery,
  },
  {
    title: "Cake Shops",
    description: "Cakes, desserts, brownies and sweet treats made each day.",
    image: catCake,
  },
  {
    title: "Supermarkets",
    description: "Everyday grocery products at great value from local stores.",
    image: catSupermarket,
  },
  {
    title: "Frozen Foods",
    description: "Ready-to-cook products and frozen essentials.",
    image: catFrozen,
  },
  {
    title: "Packaged Foods",
    description: "Snacks, beverages and pantry favourites.",
    image: catPackaged,
  },
  {
    title: "Dairy & Refrigerated",
    description: "Fresh products nearing the end of their selling window.",
    image: catDairy,
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal preset="blur" className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Featured Categories
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Discover quality food from local stores
          </h2>
          <p className="text-lg text-muted-foreground">
            From freshly baked bread to everyday grocery essentials — explore the kinds of products you'll find on Meal Saver.
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <StaggerItem
              key={category.title}
              as="article"
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={`${category.title} — ${category.description}`}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default FeaturedCategories;