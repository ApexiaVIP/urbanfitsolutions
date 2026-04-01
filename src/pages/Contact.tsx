import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const Contact = () => (
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
              <span className="text-xs font-body font-semibold uppercase tracking-[0.25em] text-primary">
                Contact Us
              </span>
              <div className="h-px w-8 bg-gradient-brass" />
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
              Let's Start Your <span className="text-gradient-brass">Project</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-xl mx-auto">
              Get in touch for a free, no-obligation consultation. We'd love to hear about your vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <LeadCaptureForm />
            </div>

            <div className="lg:col-span-2 space-y-6">
              {[
                { icon: MapPin, title: "Coverage", detail: "Nationwide UK Service", sub: "Based in the heart of England" },
                { icon: Clock, title: "Working Hours", detail: "Monday - Friday", sub: "8:00 AM - 6:00 PM" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded p-6 flex items-start gap-4"
                >
                  <item.icon className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-heading text-sm font-semibold text-foreground">{item.title}</div>
                    <div className="text-sm text-foreground font-body mt-1">{item.detail}</div>
                    <div className="text-xs text-muted-foreground font-body">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Contact;
