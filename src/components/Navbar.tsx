import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoMark from "@/assets/logo-mark.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoMark} alt="UrbanFit Solutions" className="h-10 w-10" loading="eager" width={1024} height={1024} />
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-lg font-semibold tracking-wide text-foreground">
              URBAN<span className="text-primary">FIT</span>
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body">
              Solutions
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-body font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-gradient-brass text-primary-foreground px-6 py-2.5 text-sm font-body font-semibold uppercase tracking-wider rounded shadow-brass hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden shadow-lg"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-body font-medium tracking-wide uppercase ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="bg-gradient-brass text-primary-foreground px-6 py-2.5 text-sm font-body font-semibold uppercase tracking-wider rounded text-center shadow-brass"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
