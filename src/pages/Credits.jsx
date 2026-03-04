import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CREDITS } from "@/lib/constants";

export default function Credits() {
  return (
    <div className="page-wrapper page-wrapper--light">
      <Navbar />
      <main className="main-content main-content--medium">
        <h2 className="credits-title">Credits</h2>
        <div className="credits-list">
          {CREDITS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="credit-item"
            >
              <div className="credit-info">
                {item.medium && (
                  <p className="credit-medium">{item.medium}</p>
                )}
                <h3 className="credit-title">{item.title}</h3>
                <p className="credit-role">{item.role}</p>
                <p className="credit-production">{item.production}</p>
                <p className="credit-year">{item.year}</p>
              </div>
              
              <div className="credit-actions">
                {item.links && item.links.map((link, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: "#4f46e5", borderColor: "#4f46e5" }}
                    whileTap={{ scale: 0.95 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="credit-button"
                  >
                    {link.label} {link.label.toLowerCase().includes("video") ? <Play /> : <ExternalLink />}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
