import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

import retailTrendsImg from "@/assets/blog/retail-design-trends.jpg";
import shopFittingCostsImg from "@/assets/blog/shop-fitting-costs.jpg";
import officeProductivityImg from "@/assets/blog/office-productivity.jpg";
import sustainableMaterialsImg from "@/assets/blog/sustainable-materials.jpg";
import storeRebrandingImg from "@/assets/blog/store-rebranding.jpg";
import lightingDesignImg from "@/assets/blog/lighting-design.jpg";

const blogPosts = [
  {
    slug: "top-10-retail-design-trends-2026",
    title: "Top 10 Retail Design Trends for 2026",
    excerpt: "From biophilic design to AI-driven layouts, discover the trends shaping the future of retail spaces across the UK high street.",
    date: "28 Mar 2026",
    category: "Retail Design",
    readTime: "5 min read",
    image: retailTrendsImg,
  },
  {
    slug: "shop-fitting-costs-uk-guide",
    title: "Shop Fitting Costs in the UK: Complete Guide",
    excerpt: "Everything you need to know about budgeting for your retail fitout. We break down costs per square foot across different retail sectors.",
    date: "21 Mar 2026",
    category: "Shop Fitting",
    readTime: "8 min read",
    image: shopFittingCostsImg,
  },
  {
    slug: "office-design-productivity-impact",
    title: "How Office Design Impacts Productivity by 40%",
    excerpt: "Research shows that well-designed workspaces dramatically boost employee output. Here's how to optimise your office layout.",
    date: "14 Mar 2026",
    category: "Office Fitting",
    readTime: "6 min read",
    image: officeProductivityImg,
  },
  {
    slug: "sustainable-shopfitting-materials",
    title: "Sustainable Materials in Modern Shop Fitting",
    excerpt: "Eco-friendly doesn't mean compromising on quality. Explore the latest sustainable materials transforming retail interiors.",
    date: "7 Mar 2026",
    category: "Sustainability",
    readTime: "4 min read",
    image: sustainableMaterialsImg,
  },
  {
    slug: "rebranding-your-store-checklist",
    title: "The Complete Store Rebranding Checklist",
    excerpt: "Planning a rebrand? Our step-by-step checklist ensures nothing gets missed during your retail transformation.",
    date: "28 Feb 2026",
    category: "Rebranding",
    readTime: "7 min read",
    image: storeRebrandingImg,
  },
  {
    slug: "lighting-design-retail-sales",
    title: "How Lighting Design Drives Retail Sales",
    excerpt: "Strategic lighting can increase dwell time by 25% and boost sales. Learn the techniques top retailers use.",
    date: "21 Feb 2026",
    category: "Retail Design",
    readTime: "5 min read",
    image: lightingDesignImg,
  },
];

const Blog = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-brass" />
              <span className="text-xs font-body font-semibold uppercase tracking-[0.25em] text-primary">Blog</span>
              <div className="h-px w-8 bg-gradient-brass" />
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
              Insights & <span className="text-gradient-brass">Expertise</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-xl mx-auto">
              Industry insights, design trends, and expert advice from the UrbanFit Solutions team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group overflow-hidden rounded border border-border bg-card/95 shadow-sm transition-colors hover:border-primary/30"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-body font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground font-body">{post.readTime}</span>
                  </div>
                  <h2 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                    <span className="text-primary text-sm font-body font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Blog;
