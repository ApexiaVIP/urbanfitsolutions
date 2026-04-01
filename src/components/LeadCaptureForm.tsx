import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadCaptureForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Enquiry Received!",
        description: "We'll be in touch within 24 hours.",
      });
    }, 1000);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border rounded p-12 text-center shadow-elevated"
      >
        <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground font-body">
          We've received your enquiry and will be in touch within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded p-8 space-y-5 shadow-elevated">
      <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Get a Free Quote</h3>
      <p className="text-sm text-muted-foreground font-body mb-6">
        Tell us about your project and we'll get back to you within 24 hours.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-body font-medium uppercase tracking-wider text-muted-foreground mb-1.5 block">
            Full Name *
          </label>
          <input
            type="text"
            required
            maxLength={100}
            className="w-full bg-background/70 border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="text-xs font-body font-medium uppercase tracking-wider text-muted-foreground mb-1.5 block">
            Email *
          </label>
          <input
            type="email"
            required
            maxLength={255}
            className="w-full bg-background/70 border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="john@company.co.uk"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-body font-medium uppercase tracking-wider text-muted-foreground mb-1.5 block">
            Phone
          </label>
          <input
            type="tel"
            maxLength={20}
            className="w-full bg-background/70 border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="07xxx xxx xxx"
          />
        </div>
        <div>
          <label className="text-xs font-body font-medium uppercase tracking-wider text-muted-foreground mb-1.5 block">
            Project Type
          </label>
          <select className="w-full bg-background/70 border border-border rounded px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-primary transition-colors">
            <option value="">Select...</option>
            <option value="shop-fitting">Shop Fitting</option>
            <option value="office-fitting">Office Fitting</option>
            <option value="retail-design">Retail Design</option>
            <option value="rebranding">Rebranding / Refit</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs font-body font-medium uppercase tracking-wider text-muted-foreground mb-1.5 block">
          Tell Us About Your Project *
        </label>
        <textarea
          required
          maxLength={1000}
          rows={4}
          className="w-full bg-background/70 border border-border rounded px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Brief description of your project, location, and any key requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-brass text-primary-foreground px-8 py-4 font-body font-semibold uppercase tracking-wider text-sm rounded inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-brass disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Enquiry"}
        <Send size={16} />
      </button>
    </form>
  );
};

export default LeadCaptureForm;
