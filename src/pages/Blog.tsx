import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import PageSEO from "@/components/PageSEO";
import { blogPosts } from "@/data/blog-posts";

const categoryColors: Record<string, string> = {
  Impact: "bg-primary/10 text-primary",
  Education: "bg-secondary/10 text-secondary",
  Stories: "bg-accent text-accent-foreground",
  Tips: "bg-green-light text-primary",
};

const Blog = () => {
  return (
    <div>
      <PageSEO
        title="Blog | Meal Saver Stories, Tips & Updates"
        description="Read about food waste reduction in Kerala, partner success stories, and tips for saving food and money with Meal Saver."
        path="/blog"
      />
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
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category] || "bg-primary/10 text-primary"}`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" aria-hidden="true" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                  Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
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
