import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import officeImage from "@/assets/office-fitout.jpg";

const CTASection = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={officeImage}
        alt="Premium office fitout"
        loading="lazy"
        className="w-full h-full object-cover"
        width={1280}
        height={864}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/84 via-foreground/72 to-foreground/64" />
    </div>

    <div className="relative container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
          Ready to Transform
          <br />
          <span className="text-gradient-brass">Your Space?</span>
        </h2>
        <p className="text-lg text-primary-foreground font-body mb-10 max-w-xl mx-auto">
          Get in touch for a free, no-obligation consultation. Let's discuss how we can bring your vision to life.
        </p>
        <Link
          to="/contact"
          className="bg-gradient-brass text-primary-foreground px-10 py-4 font-body font-semibold uppercase tracking-wider text-sm rounded inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-brass"
        >
          Request a Free Quote
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
