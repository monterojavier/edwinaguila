import { motion } from "framer-motion";
import { User, Camera, Clapperboard, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { SECTIONS } from "@/lib/constants";

export default function Home() {
  const icons = {
    about: <User className="icon-sm" />,
    headshots: <Camera className="icon-sm" />,
    credits: <Clapperboard className="icon-sm" />,
    music: <Music className="icon-sm" />,
  };

  return (
    <div className="page-wrapper page-wrapper--hero">
      {/* Landing Page / Hero */}
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Edwin Aguila
          </h1>
          
          <nav className="hero-nav">
            {SECTIONS.map((section) => (
              <Link
                key={section.id}
                to={section.href}
                className="hero-nav-link"
              >
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="hero-nav-icon"
                >
                  {icons[section.id]}
                </motion.span>
                {section.label}
              </Link>
            ))}
          </nav>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hero-scroll-indicator"
        >
          <div className="hero-scroll-line" />
        </motion.div>
      </section>
    </div>
  );
}
