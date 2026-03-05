import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    slug: "reducing-food-waste-in-kerala",
    title: "How Kerala Can Lead India's Fight Against Food Waste",
    excerpt: "With over ₹1 lakh crore worth of food wasted annually in India, Kerala's vibrant food industry has a unique opportunity to lead the change.",
    date: "2026-02-20",
    category: "Impact",
  },
  {
    slug: "why-surplus-food-is-safe",
    title: "Is Surplus Food Safe to Eat? Here's What You Need to Know",
    excerpt: "Surplus food is not expired food. Learn about the difference and why Meal Saver boxes are perfectly safe and delicious.",
    date: "2026-02-10",
    category: "Education",
  },
  {
    slug: "merchant-success-story-kozhikode",
    title: "How a Kozhikode Bakery Earns ₹30K Extra Monthly With Meal Saver",
    excerpt: "A local bakery shares how listing surplus items on Meal Saver turned waste into a reliable income stream.",
    date: "2026-01-28",
    category: "Stories",
  },
];

const Blog = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Blog
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Stories, Tips & Updates
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights on food waste reduction, partner success stories, and updates from the Meal Saver community.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                  Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
