import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="page-wrapper page-wrapper--light">
      <Navbar />
      <main className="main-content main-content--narrow">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="about-heading">About</h2>
            <p className="about-text">
              Edwin Aguila is a multidisciplinary artist and actor based in New York. With a passion for storytelling that transcends mediums, he explores the human condition through performance, music, and visual arts.
            </p>
            <p className="about-text">
              Whether on stage or in the studio, Edwin brings a raw authenticity and minimalistic elegance to every project, seeking the profound in the simple.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="about-image-wrapper"
          >
            <img 
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=800" 
              alt="Edwin Aguila Portrait"
              className="about-image"
            />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
