import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { SECTIONS } from "@/lib/constants";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
        <Link to="/" className="navbar-brand">
          Edwin Aguila
        </Link>

        {/* Desktop Links */}
        <div className="navbar-links">
          {SECTIONS.map((section) => (
            <Link
              key={section.id}
              to={section.href}
              className={`navbar-link ${pathname === section.href ? "navbar-link--active" : ""}`}
            >
              {section.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Background Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-overlay"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="mobile-sidebar"
            >
              <div className="mobile-nav-list">
                {SECTIONS.map((section, idx) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <Link
                      to={section.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`mobile-nav-link ${pathname === section.href ? "mobile-nav-link--active" : ""}`}
                    >
                      {section.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Sidebar Footer */}
              <div className="mobile-sidebar-footer">
                <p className="mobile-sidebar-copyright">
                  © 2026 Edwin Aguila
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
