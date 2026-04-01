import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import portfolio1 from "@/assets/portfolio/portfolio-1.jpeg";
import portfolio2 from "@/assets/portfolio/portfolio-2.jpeg";
import portfolio3 from "@/assets/portfolio/portfolio-3.jpeg";
import portfolio4 from "@/assets/portfolio/portfolio-4.jpeg";
import portfolio5 from "@/assets/portfolio/portfolio-5.jpeg";
import portfolio6 from "@/assets/portfolio/portfolio-6.jpeg";

const projects = [
  { img: portfolio1, title: "Boutique Retail Fitout", category: "Shop Fitting" },
  { img: portfolio2, title: "High Street Renovation", category: "Rebranding" },
  { img: portfolio3, title: "Luxury Store Design", category: "Retail Design" },
  { img: portfolio4, title: "Multi-Site Rollout", category: "Project Management" },
  { img: portfolio5, title: "Flagship Store Build", category: "Shop Fitting" },
  { img: portfolio6, title: "Commercial Interior", category: "Office Fitting" },
];

const PortfolioPreview = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
      >
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-brass" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.25em] text-primary">
              Our Work
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
        </div>
        <Link
          to="/portfolio"
          className="text-primary font-body text-sm font-semibold uppercase tracking-wider hover:text-brass-light transition-colors"
        >
          View Full Portfolio →
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded aspect-[4/3]"
          >
            <img
              src={project.img}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-xs text-primary font-body uppercase tracking-wider mb-1">
                {project.category}
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioPreview;
