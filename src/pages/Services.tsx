import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Store, Building2, PenTool, RefreshCw, Wrench, ClipboardCheck, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import shopFittingImg from "@/assets/services/shop-fitting.jpg";
import officeFittingImg from "@/assets/services/office-fitting.jpg";
import retailDesignImg from "@/assets/services/retail-design.jpg";
import rebrandingImg from "@/assets/services/rebranding.jpg";
import bespokeJoineryImg from "@/assets/services/bespoke-joinery.jpg";
import projectMgmtImg from "@/assets/services/project-management.jpg";

const services = [
  {
    icon: Store,
    title: "Shop Fitting",
    description: "Complete retail fitouts for high street shops, boutiques, flagship stores, and pop-up retail spaces. We handle everything from initial strip-out through to final snagging.",
    features: ["Bespoke joinery & fixtures", "Display systems & shelving", "Lighting design & installation", "Flooring & wall finishes", "Signage & branding elements"],
    image: shopFittingImg,
  },
  {
    icon: Building2,
    title: "Office Fitting",
    description: "Transform your workspace into an environment that inspires productivity and reflects your company culture. From single offices to multi-floor corporate headquarters.",
    features: ["Glass partitioning systems", "Reception & breakout areas", "Meeting room fit-outs", "IT infrastructure integration", "Acoustic treatment"],
    image: officeFittingImg,
  },
  {
    icon: PenTool,
    title: "Retail Design",
    description: "Our in-house design team creates compelling retail environments that drive footfall and maximise sales per square foot.",
    features: ["Concept development", "3D visualisation & renders", "Technical drawings", "Material specification", "Brand-aligned interiors"],
    image: retailDesignImg,
  },
  {
    icon: RefreshCw,
    title: "Rebranding & Refits",
    description: "Breathe new life into your existing space. Whether you're refreshing your brand or modernising outdated interiors, we minimise disruption while maximising impact.",
    features: ["Brand refresh installations", "Phased refurbishment", "Weekend & overnight works", "Minimal trading disruption", "Multi-site coordination"],
    image: rebrandingImg,
  },
  {
    icon: Wrench,
    title: "Bespoke Joinery",
    description: "Handcrafted furniture, counters, and display units built to your exact specifications by our experienced workshop team.",
    features: ["Custom counters & displays", "Feature walls & panelling", "Cash desk solutions", "Shelving systems", "Premium material finishes"],
    image: bespokeJoineryImg,
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "End-to-end project management ensuring your fitout is delivered on time, within budget, and to the highest standards.",
    features: ["Programme scheduling", "Cost management", "Subcontractor coordination", "Health & safety compliance", "Quality assurance"],
    image: projectMgmtImg,
  },
];

const Services = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-brass" />
              <span className="text-xs font-body font-semibold uppercase tracking-[0.25em] text-primary">Our Services</span>
              <div className="h-px w-8 bg-gradient-brass" />
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
              What We <span className="text-gradient-brass">Deliver</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Comprehensive shop and office fitting services, from initial concept through to final handover.
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <service.icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground font-body leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                        <CheckCircle size={14} className="text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="w-full rounded shadow-elevated aspect-[4/3] object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20 bg-card border border-border rounded p-12"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground font-body mb-8 max-w-lg mx-auto">
              Contact us today for a free consultation and let's discuss your project.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-brass text-primary-foreground px-10 py-4 font-body font-semibold uppercase tracking-wider text-sm rounded inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-brass"
            >
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Services;
