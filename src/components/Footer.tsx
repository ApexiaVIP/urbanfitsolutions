import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img src={logoMark} alt="UrbanFit Solutions" className="h-10 w-10" />
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-lg font-semibold text-foreground">
                URBAN<span className="text-primary">FIT</span>
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body">
                Solutions
              </span>
            </div>
          </Link>
          <p className="text-muted-foreground text-sm font-body leading-relaxed">
            The UK's premier shop and office fitting specialists. Transforming commercial spaces into extraordinary brand experiences.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground font-body">
            <li><Link to="/services" className="hover:text-primary transition-colors">Shop Fitting</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Office Fitting</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Retail Design</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Rebranding</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Project Management</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground font-body">
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">Coverage</h4>
          <div className="flex items-start gap-2 text-sm text-muted-foreground font-body">
            <MapPin size={14} className="text-primary mt-0.5" />
            <div>
              <div>Nationwide UK Service</div>
              <div className="text-xs mt-1">Based in the heart of England</div>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-gradient-brass text-primary-foreground px-6 py-2.5 text-sm font-body font-semibold uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} UrbanFit Solutions. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground font-body">
          Premier Shop & Office Fitting Across the UK
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
