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
            {/* About Section */}
            <p className="about-text">
              My name is Edwin Aguila, but in the hip-hop world, I go by EA. I’m a proud Puerto Rican from East New York, Brooklyn, and everything I create is deeply rooted in my love for my culture and community.
            </p>
            <p className="about-text">
              In the acting realm, I’m known for my Afro and portraying the "anime tech nerd musician" type. I continue to train on-camera and am always eager to improve and make a meaningful impact.
            </p>
            <p className="about-text">
              On the music side, I’m currently working on a special project called "ANIMELien," which blends my passions for storytelling, music, and anime. Through this project, I explore what it means to feel like an outsider while celebrating my love for my favorite anime.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="about-image-wrapper"
          >
            {/* Image Section */}
            <img 
              src="src/assets/about-photos/edwin-aguila-about-photo.jpg" 
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
