import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <Link to="/blog" className="text-primary font-body font-medium hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
            width={800}
            height={512}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/82 via-foreground/40 to-transparent" />
          <div className="relative container mx-auto px-6 pb-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary-foreground/80 font-body text-sm mb-4 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <span className="block text-[10px] font-body font-semibold uppercase tracking-wider text-primary bg-primary/20 px-3 py-1 rounded w-fit mb-3">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground max-w-3xl leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-5 mt-4 text-primary-foreground/72 text-sm font-body">
              <span className="inline-flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
              <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            {post.content.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="text-foreground/88 font-body text-lg leading-relaxed mb-6"
              >
                {para}
              </motion.p>
            ))}

            {post.headings.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                {section.body.map((para, j) => (
                  <p key={j} className="text-foreground/88 font-body text-lg leading-relaxed mb-5">
                    {para}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 bg-secondary/45">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Ready to Start <span className="text-gradient-brass">Your Project?</span>
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Get a free, no-obligation quote from UrbanFit Solutions. We deliver exceptional fitouts across the UK.
            </p>
            <LeadCaptureForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
