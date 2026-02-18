import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Payment", href: "#payment" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="font-heading text-2xl font-bold text-primary-foreground tracking-wide">
          Joshi Holiday Home
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-primary-foreground/80 hover:text-gold tracking-widest uppercase transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919999999999"
            className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2 rounded text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-foreground/95 border-t border-primary-foreground/10"
          >
            <div className="flex flex-col items-center py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground/80 hover:text-gold tracking-widest uppercase text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+919999999999"
                className="mt-2 flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2 rounded text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
