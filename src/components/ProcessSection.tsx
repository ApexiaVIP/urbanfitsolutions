import { motion } from "framer-motion";
import designProcess from "@/assets/design-process.jpg";

const steps = [
  { num: "01", title: "Consultation", desc: "We listen to your vision, assess your space, and understand your brand requirements." },
  { num: "02", title: "Design & Planning", desc: "Our designers create detailed plans, 3D renders, and material specifications." },
  { num: "03", title: "Build & Install", desc: "Our skilled craftsmen bring the design to life with precision and care." },
  { num: "04", title: "Handover", desc: "Final inspection, snagging, and a seamless handover ready for trading." },
];

const ProcessSection = () => (
  <section className="py-24 bg-secondary/45">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-brass" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.25em] text-primary">
              How We Work
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
            From Concept
            <br />
            to <span className="text-gradient-brass">Completion</span>
          </h2>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-5"
              >
                <span className="font-heading text-3xl font-bold text-primary/30">{step.num}</span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={designProcess}
            alt="Design to reality process"
            loading="lazy"
            width={1280}
            height={864}
            className="rounded shadow-elevated"
          />
          <div className="absolute -bottom-6 -left-6 rounded bg-primary p-6 text-primary-foreground shadow-brass">
            <div className="font-heading text-3xl font-bold">15+</div>
            <div className="text-xs font-body uppercase tracking-wider">Years of Excellence</div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
