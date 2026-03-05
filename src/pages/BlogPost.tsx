import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageSEO from "@/components/PageSEO";

const BlogPost = () => {
  const { slug } = useParams();
  const readableTitle = slug?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "Blog Post";

  return (
    <div>
      <PageSEO
        title={`${readableTitle} | Meal Saver Blog`}
        description={`Read "${readableTitle}" on the Meal Saver blog — insights on food waste reduction and surplus food in Kerala.`}
        path={`/blog/${slug}`}
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <Link to="/blog">
            <Button variant="ghost" size="sm" className="mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>

          <article className="prose prose-lg max-w-none">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {slug?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This is a placeholder blog post template. Content for "{slug}" will be added soon.
              Check back later for the full article!
            </p>
            <div className="mt-12 p-8 bg-card rounded-2xl text-center">
              <p className="text-muted-foreground mb-4">Want to stay updated?</p>
              <a href="https://whatsapp.com/channel/0029Vb7i7Pu4NVio2gT3Xd2g" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp">Follow us on WhatsApp</Button>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
