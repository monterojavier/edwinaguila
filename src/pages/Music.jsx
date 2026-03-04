import { motion } from "framer-motion";
import { Music as MusicIcon, Youtube, Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MUSIC_TRACKS } from "@/lib/constants";

export default function MusicPage() {
  const [playingTrack, setPlayingTrack] = useState(null);
  const audioRef = useRef(null);
  const timeoutRef = useRef(null);

  const togglePlay = (idx) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    if (playingTrack === idx) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setPlayingTrack(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      const audio = new Audio(MUSIC_TRACKS[idx].audioUrl);
      audio.play();
      audioRef.current = audio;
      setPlayingTrack(idx);
      
      timeoutRef.current = setTimeout(() => {
        if (audioRef.current === audio) {
          audio.pause();
          setPlayingTrack(null);
          audioRef.current = null;
        }
      }, 15000);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  return (
    <div className="page-wrapper page-wrapper--dark">
      <Navbar />
      <main className="main-content main-content--wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="music-header"
        >
          <h2 className="music-title">Music</h2>
        </motion.div>

        <div className="music-grid">
          {MUSIC_TRACKS.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="music-card"
            >
              <div 
                className="music-cover-wrapper"
                onClick={() => togglePlay(idx)}
              >
                <img
                  src={track.cover}
                  alt={track.title}
                  className="music-cover-image"
                />
                <div className={`music-cover-overlay ${playingTrack === idx ? 'music-cover-overlay--playing' : ''}`}>
                  {playingTrack === idx ? (
                    <div className="music-pause-wrapper">
                      <span className="music-pause-icon"><Pause size={48} /></span>
                      <svg className="music-progress-ring">
                        <circle
                          cx="40"
                          cy="40"
                          r="38"
                          stroke="#4f46e5"
                          strokeWidth="2"
                          fill="transparent"
                          strokeDasharray="238.76"
                          className="music-progress-circle"
                        />
                      </svg>
                    </div>
                  ) : (
                    <span className="music-play-icon"><Play size={48} /></span>
                  )}
                </div>
              </div>
              <div className="music-info">
                <span className="music-type">{track.type}</span>
                <h3 className="music-track-title">{track.title}</h3>
                <p className="music-genre">{track.genre}</p>
                
                <div className="music-links">
                  {track.links.map((link, lIdx) => (
                    <motion.a
                      key={lIdx}
                      whileHover={{ scale: 1.05, backgroundColor: "#4f46e5", color: "white" }}
                      whileTap={{ scale: 0.95 }}
                      href={link.url}
                      className="music-link"
                    >
                      {link.label === "YouTube" ? <Youtube size={16} /> : <MusicIcon size={16} />}
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
