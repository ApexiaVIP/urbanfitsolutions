import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio/portfolio-1.jpeg";
import portfolio2 from "@/assets/portfolio/portfolio-2.jpeg";
import portfolio3 from "@/assets/portfolio/portfolio-3.jpeg";
import portfolio4 from "@/assets/portfolio/portfolio-4.jpeg";
import portfolio5 from "@/assets/portfolio/portfolio-5.jpeg";
import portfolio6 from "@/assets/portfolio/portfolio-6.jpeg";

const projects = [
  { img: portfolio1, title: "Boutique Retail Fitout", category: "Shop Fitting", location: "London" },
  { img: portfolio2, title: "High Street Renovation", category: "Rebranding", location: "Manchester" },
  { img: portfolio3, title: "Luxury Store Design", category: "Retail Design", location: "Birmingham" },
  { img: portfolio4, title: "Multi-Site Rollout", category: "Project Management", location: "Nationwide" },
  { img: portfolio5, title: "Flagship Store Build", category: "Shop Fitting", location: "Leeds" },
  { img: portfolio6, title: "Commercial Interior", category: "Office Fitting", location: "Bristol" },
];

const Portfolio = () => (
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
              <span className="text-xs font-body font-semibold uppercase tracking-[0.25em] text-primary">Portfolio</span>
              <div className="h-px w-8 bg-gradient-brass" />
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
              Our <span className="text-gradient-brass">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-xl mx-auto">
              A selection of our completed projects across the UK.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs text-primary font-body uppercase tracking-wider mb-1">
                    {project.category} · {project.location}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Portfolio;
