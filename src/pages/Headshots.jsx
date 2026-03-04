import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HEADSHOTS } from "@/lib/constants";

export default function Headshots() {
  return (
    <div className="page-wrapper page-wrapper--light">
      <Navbar />
      <main className="main-content">
        <div className="main-content--wide" style={{ margin: '0 auto' }}>
          <h2 className="gallery-title">Headshots</h2>
          
          <div className="gallery-grid">
            {HEADSHOTS.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="gallery-item"
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="gallery-image"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
