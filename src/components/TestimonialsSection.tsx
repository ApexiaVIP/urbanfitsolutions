import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "UrbanFit Solutions transformed our flagship store beyond expectations. Their attention to detail and professionalism was outstanding from start to finish.",
    name: "Sarah Mitchell",
    role: "Director, Mitchell & Co Fashion",
    rating: 5,
  },
  {
    text: "We've used UrbanFit for three store rollouts now. They deliver on time, on budget, and the quality of their joinery work is second to none in the industry.",
    name: "James Thornton",
    role: "Operations Manager, Thornton Retail Group",
    rating: 5,
  },
  {
    text: "The design team at UrbanFit really understood our brand vision. They created a space that our customers love and that's driven a 40% increase in footfall.",
    name: "Priya Sharma",
    role: "Founder, Luxe Interiors",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-24">
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
            Testimonials
          </span>
          <div className="h-px w-8 bg-gradient-brass" />
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
          What Our Clients Say
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border border-border rounded p-8 relative"
          >
            <Quote className="w-8 h-8 text-primary/20 mb-4" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <div className="font-heading text-sm font-semibold text-foreground">{t.name}</div>
              <div className="text-xs text-muted-foreground font-body">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
