export const SECTIONS = [
  { id: "about", label: "About", href: "/about" },
  { id: "headshots", label: "Headshots", href: "/headshots" },
  { id: "credits", label: "Credits", href: "/credits" },
  { id: "music", label: "Music", href: "/music" },
];

export const HEADSHOTS = [
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800", alt: "Edwin Aguila Headshot 1" },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800", alt: "Edwin Aguila Headshot 2" },
  { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800", alt: "Edwin Aguila Headshot 3" },
  { src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800", alt: "Edwin Aguila Headshot 4" },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800", alt: "Edwin Aguila Headshot 5" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800", alt: "Edwin Aguila Headshot 6" },
];

export const MUSIC_TRACKS = [
  {
    title: "Resonance",
    type: "EP",
    genre: "Experimental / Ambient / Soul",
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    links: [
      { label: "Spotify", url: "#" },
      { label: "Apple Music", url: "#" },
      { label: "YouTube", url: "#" },
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

export const CREDITS = [
  { 
    title: "Shadow Play", 
    role: "Protagonist", 
    production: "Independent Feature", 
    year: "2025", 
    articleUrl: "https://example.com/shadow-play-article",
    videoUrl: "https://example.com/shadow-play-video" 
  },
  { title: "Midnight in Soho", role: "The Stranger", production: "West End Production", year: "2024" },
  { title: "Fragments", role: "Ensemble", production: "Art House Short", year: "2023" },
];
