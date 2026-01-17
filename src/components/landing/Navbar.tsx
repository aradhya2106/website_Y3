import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const navLinks = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Products", href: "#products" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Why Us", href: "#why-us" },
  { label: "Partners", href: "#partners" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "glass-strong py-3" : "py-5"
        }`}
      >
        <div className="container px-4 md:px-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">
                  Y
                </span>
              </div>
              <span className="font-bold text-xl hidden sm:block">
                Y3
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsContactFormOpen(true)}
              >
                Contact Us
              </Button>
              <Button
                size="sm"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground"
              >
                Get Started Today
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-20 lg:hidden"
          >
            <div className="container px-4 py-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-6 flex flex-col gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      setIsContactFormOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Contact Us
                  </Button>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground"
                  >
                    Get Started Today
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </>
  );
};

export default Navbar;
