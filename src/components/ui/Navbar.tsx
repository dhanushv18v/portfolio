import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple intersection observer logic for active section
      const sections = navItems.map((item) => item.name.toLowerCase());
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-4" : "py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="hover-target text-2xl font-bold tracking-tighter text-white z-50 relative">
              DV<span className="text-brand-cyan">.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1 p-1.5 rounded-full glass border border-white/10 backdrop-blur-md bg-black/20">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "hover-target relative px-5 py-2 text-sm font-medium rounded-full transition-colors",
                    activeSection === item.name.toLowerCase()
                      ? "text-black"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {activeSection === item.name.toLowerCase() && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-white rounded-full z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Resume Button Desktop */}
            <a
              href="/Dhanush_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex hover-target px-5 py-2 text-sm font-medium rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all"
            >
              Resume
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover-target md:hidden relative z-50 p-2 text-white"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-white/80 hover:text-white hover:scale-110 transition-all"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/Dhanush_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
