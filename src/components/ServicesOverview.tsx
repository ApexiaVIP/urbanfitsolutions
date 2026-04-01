import { motion } from "framer-motion";
import { Store, Building2, PenTool, RefreshCw, Wrench, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Store,
    title: "Shop Fitting",
    description: "Complete retail fitouts from high street boutiques to flagship stores. Bespoke joinery, fixtures, and displays.",
  },
  {
    icon: Building2,
    title: "Office Fitting",
    description: "Modern workspace transformations. Partitioning, reception areas, meeting rooms, and breakout spaces.",
  },
  {
    icon: PenTool,
    title: "Retail Design",
    description: "Full design service from concept through to detailed technical drawings and 3D visualisation.",
  },
  {
    icon: RefreshCw,
    title: "Rebranding & Refits",
    description: "Refresh your existing space to match your evolving brand. Minimal disruption, maximum impact.",
  },
  {
    icon: Wrench,
    title: "Bespoke Joinery",
    description: "Handcrafted counters, shelving, and display units built to your exact specifications.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "End-to-end project management ensuring on-time, on-budget delivery across multiple sites.",
  },
];

const ServicesOverview = () => (
  <section className="py-24 bg-secondary/45">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-gradient-brass" />
          <span className="text-xs font-body font-semibold uppercase tracking-[0.25em] text-primary">
            What We Do
          </span>
          <div className="h-px w-8 bg-gradient-brass" />
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
          Comprehensive Fitout Services
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded border border-border bg-card/90 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
          >
            <service.icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{service.title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/services"
          className="text-primary font-body text-sm font-semibold uppercase tracking-wider hover:text-brass-light transition-colors inline-flex items-center gap-2"
        >
          View All Services
          <span className="text-primary">→</span>
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesOverview;
