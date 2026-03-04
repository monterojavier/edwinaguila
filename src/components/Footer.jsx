import { motion } from "framer-motion";
import { Instagram, Twitter, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <h2 className="footer-title">Get In Touch</h2>
        <p className="footer-description">
          For inquiries regarding acting roles, artistic collaborations, or bookings, please reach out via email or follow on social media.
        </p>
        
        <div className="footer-contact">
          <a 
            href="mailto:hello@edwinaguila.com" 
            className="footer-email"
          >
            hello@edwinaguila.com
          </a>
          
          <div className="footer-socials">
            <motion.a 
              whileHover={{ scale: 1.1, backgroundColor: "#4f46e5", color: "#fff", borderColor: "#4f46e5" }}
              whileTap={{ scale: 0.9 }}
              href="#" 
              className="footer-social-link"
            >
              <Instagram />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, backgroundColor: "#4f46e5", color: "#fff", borderColor: "#4f46e5" }}
              whileTap={{ scale: 0.9 }}
              href="#" 
              className="footer-social-link"
            >
              <Twitter />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, backgroundColor: "#4f46e5", color: "#fff", borderColor: "#4f46e5" }}
              whileTap={{ scale: 0.9 }}
              href="#" 
              className="footer-social-link"
            >
              <Music />
            </motion.a>
          </div>
        </div>
        
        <p className="footer-copyright">
          © 2026 Edwin Aguila
        </p>
      </div>
    </footer>
  );
}
