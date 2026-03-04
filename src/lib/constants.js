export const SECTIONS = [
  { id: "about", label: "About", href: "/about" },
  { id: "headshots", label: "Headshots", href: "/headshots" },
  { id: "credits", label: "Credits", href: "/credits" },
  { id: "music", label: "Music", href: "/music" },
];

/* -------- HEADSHOTS -------- */
// Add more photos to Headshots here 
export const HEADSHOTS = [
  { src: "src/assets/headshots-photos/edwin-aguila-headshot-1.JPG", alt: "Edwin Aguila Headshot 1" },
  { src: "src/assets/headshots-photos/edwin-aguila-headshot-2.JPG", alt: "Edwin Aguila Headshot 2" },
  { src: "src/assets/headshots-photos/edwin-aguila-headshot-3.JPG", alt: "Edwin Aguila Headshot 3" },
];

/* -------- CREDITS -------- */
/* Add more credits here 

--- Template ---
{ 
    title: "", 
    role: "", 
    production: "", 
    year: "", 
    articleUrl: "",
    videoUrl: "" 
},
*/
export const CREDITS = [
  { 
    title: "", 
    role: "", 
    production: "", 
    year: "", 
    articleUrl: "",
    videoUrl: "" 
},
];

/* -------- MUSIC -------- */
/* Add more music tracks here 

--- Template ---
{
    title: "",
    type: "",
    genre: "",
    cover: "",
    audioUrl: "",
    links: [
      { label: "", url: "", color: "" },
      { label: "", url: "", color: "" },
      { label: "", url: "", color: "" },
    ]
  },

  --- Music App Color ---
  Spotify: #1DB954
  Apple Music: #E50010
  YouTube: #FF0000
  SoundCloud: #FF5500
  Bandcamp: #555555
  Tidal: #000000
  Amazon Music: #000000
  Deezer: #000000
  
*/
export const MUSIC_TRACKS = [
  {
    title: "Resonance",
    type: "EP",
    genre: "Experimental / Ambient / Soul",
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    links: [
      { label: "Spotify", url: "https://open.spotify.com/track/7AeM1BGYM7emrqmQn1PuWv", color: "#1db954ff" },
      { label: "Apple Music", url: "#", color: "#E50010" },
      { label: "YouTube", url: "#", color: "#FF0000" },
      { label: "SoundCloud", url: "#", color: "#FF5500" },
      { label: "Bandcamp", url: "#", color: "#555555" },
      { label: "Tidal", url: "#", color: "#000000" },
      { label: "Amazon Music", url: "#", color: "#000000" },
      { label: "Deezer", url: "#", color: "#000000" },
    ]
  },
  {
    title: "Echoes of Silence",
    type: "Single",
    genre: "Cinematic / Orchestral",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    links: [
      { label: "Spotify", url: "#" },
      { label: "Apple Music", url: "#" },
      { label: "YouTube", url: "#" },
    ]
  },
  {
    title: "Neon Dreams",
    type: "Single",
    genre: "Synthwave / Lo-fi",
    cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=800",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    links: [
      { label: "Spotify", url: "#" },
      { label: "Apple Music", url: "#" },
      { label: "YouTube", url: "#" },
    ]
  }
];