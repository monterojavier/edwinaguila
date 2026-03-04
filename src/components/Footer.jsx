import { motion } from "framer-motion";
import { FaInstagram, FaSpotify,FaApple, FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <h2 className="footer-title">Contact</h2>
        <p className="footer-description">
          For any inquiries, please reach out and follow on social media.
        </p>
  
        <div className="footer-contact">
          <div className="footer-socials">
            <motion.a 
              whileHover={{ scale: 1.1, backgroundColor: "#833AB4", color: "#fff", borderColor: "#833AB4" }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/officialeamusic/" 
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </motion.a>
            {/* <motion.a 
              whileHover={{ scale: 1.1, backgroundColor: "#1DB954", color: "#fff", borderColor: "#1DB954" }}
              whileTap={{ scale: 0.9 }}
              href="#" 
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              < FaSpotify/>
            </motion.a> */}
            {/* <motion.a 
              whileHover={{ scale: 1.1, backgroundColor: "#E50010", color: "#fff", borderColor: "#E50010" }}
              whileTap={{ scale: 0.9 }}
              href="#" 
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              < FaApple/>
            </motion.a> */}
            <motion.a 
              whileHover={{ scale: 1.1, backgroundColor: "#FF0000", color: "#fff", borderColor: "#FF0000" }}
              whileTap={{ scale: 0.9 }}
              href="https://www.youtube.com/@OfficialEAMusic" 
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              >
              < FaYoutube/>
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
