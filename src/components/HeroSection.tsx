import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fitout.jpg";

const HeroSection = () => (
  <section className="relative hero min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Premium retail fitout by UrbanFit Solutions"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/88 via-foreground/72 to-foreground/34" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/22 via-transparent to-primary/10" />
    </div>

    <div className="relative container mx-auto px-6 pt-20">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-gradient-brass" />
          <span className="text-xs font-body font-semibold uppercase tracking-[0.25em] text-primary-foreground/80">
            UK's Premier Shop Fitters
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl font-bold leading-[1.05] text-primary-foreground mb-6"
        >
          We Build
          <br />
          <span className="text-gradient-brass">Extraordinary</span>
          <br />
          Retail Spaces
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-primary-foreground font-body leading-relaxed max-w-lg mb-10"
        >
          From concept to completion, we deliver bespoke shop and office fitouts that
          elevate your brand and captivate your customers. Nationwide service, unrivalled craftsmanship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/contact"
            className="bg-gradient-brass text-primary-foreground px-8 py-4 font-body font-semibold uppercase tracking-wider text-sm rounded inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-brass"
          >
            Start Your Project
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/portfolio"
            className="border border-primary-foreground/24 bg-primary-foreground/10 text-primary-foreground px-8 py-4 font-body font-semibold uppercase tracking-wider text-sm rounded inline-flex items-center justify-center gap-2 hover:bg-primary-foreground/18 transition-colors backdrop-blur-sm"
          >
            View Our Work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex gap-12 mt-16 pt-8 border-t border-primary-foreground/18"
        >
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "15+", label: "Years Experience" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-2xl font-bold text-primary-foreground">{stat.value}</div>
              <div className="text-xs text-primary-foreground/80 font-body uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
