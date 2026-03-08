import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageSEO from "@/components/PageSEO";
import BlogInternalLinks from "@/components/BlogInternalLinks";
import { getPostBySlug } from "@/data/blog-posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div>
      <PageSEO
        title={`${post.title} | Meal Saver Blog`}
        description={post.description}
        path={`/blog/${post.slug}`}
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <Link to="/blog">
            <Button variant="ghost" size="sm" className="mb-8 min-h-[48px]">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Blog
            </Button>
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                {post.title}
              </h1>
            </header>

            <div className="space-y-5">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-foreground/90 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-card rounded-2xl text-center">
              <p className="text-muted-foreground mb-4">Want to stay updated?</p>
              <a href="https://whatsapp.com/channel/0029Vb7i7Pu4NVio2gT3Xd2g" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" className="min-h-[48px]">Follow us on WhatsApp</Button>
              </a>
            </div>

            {/* Internal Links */}
            <BlogInternalLinks />
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
