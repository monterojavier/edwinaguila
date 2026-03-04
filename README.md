# Edwin Aguila's Website

## Getting Started

```bash
# first install dependencies
npm install

# then run the development server
npm run dev

# any new changes
git add .
git commit -m "message"
git push

# changes made by others
git pull
```

Open http://localhost:5173 in your browser to see the site.

---

## How the Site is Organized

```
src/
├── pages/          ← Each page on the site (About, Music, etc.)
├── components/     ← Reusable pieces (Navbar, Footer)
├── lib/
│   └── constants.js  ← YOUR DATA: headshots, music, credits
├── assets/         ← YOUR PHOTOS: put image files here
└── index.css       ← ALL STYLING for the entire site
```

### Pages (what you see on the site)
| Page         | File                        | What it shows                    |
|--------------|-----------------------------|----------------------------------|
| Home         | `src/pages/Home.jsx`        | "Edwin Aguila" hero landing page |
| About        | `src/pages/About.jsx`       | Your bio text + portrait photo   |
| Headshots    | `src/pages/Headshots.jsx`   | Gallery of headshot photos       |
| Credits      | `src/pages/Credits.jsx`     | Acting credits list              |
| Actor        | `src/pages/Actor.jsx`       | Acting credits (alternate page)  |
| Music        | `src/pages/Music.jsx`       | Music tracks with streaming links|
| Portfolio    | `src/pages/Portfolio.jsx`   | Portfolio image gallery          |

### Shared Components (appear on every page)
| Component | File                            | What to edit                                |
|-----------|---------------------------------|---------------------------------------------|
| Navbar    | `src/components/Navbar.jsx`     | Navigation links, site name                 |
| Footer    | `src/components/Footer.jsx`     | Email, social media links, copyright year   |

---

## How to Add Photos

### Step 1: Put your photo files in the assets folder

Create a subfolder inside `src/assets/` for the type of photo:
```
src/assets/
├── about-photos/          ← About page portrait
├── headshots-photos/      ← Headshot gallery photos
└── music-covers/          ← Album/single cover art
```

Just drag and drop your image files (JPG, PNG, etc.) into the right folder.

### Step 2: Tell the site about the new photo

Open `src/lib/constants.js` and add a new line to the right list.

**To add a headshot**, find the `HEADSHOTS` list and add a new line:
```js
export const HEADSHOTS = [
  // existing photos...
  { src: "src/assets/headshots-photos/my-new-photo.JPG", alt: "Edwin Aguila Headshot 4" },
];
```

**To change your About page photo**, open `src/pages/About.jsx` and change the `src` on line 36:
```jsx
<img
  src="src/assets/about-photos/your-new-photo.jpg"
  alt="Edwin Aguila Portrait"
```

**To change a music cover**, update the `cover` field in `src/lib/constants.js`:
```js
cover: "src/assets/music-covers/my-album-cover.jpg",
```

### How to Add a Music Audio Preview

The site plays a **15-second clip** when someone clicks on an album cover. To add your own audio preview:

#### Step 1: Create a 15-second audio clip
- Use any audio editor (GarageBand, Audacity, etc.) to trim your song to a 15-second highlight
- Export as an `.mp3` file

#### Step 2: Put the file in your assets folder
```
src/assets/
└── music-audio/
    └── my-song-preview.mp3
```

#### Step 3: Update the track in constants.js
Open `src/lib/constants.js` and set the `audioUrl` to your local file:
```js
{
  title: "My Song",
  type: "Single",
  genre: "Hip-Hop / R&B",
  cover: "src/assets/music-covers/my-cover.jpg",
  audioUrl: "src/assets/music-audio/my-song-preview.mp3",   ← your 15-sec clip
  links: [ ... ]
},
```

> **Tip:** The player automatically stops after 15 seconds, so keep your clip around that length for the best experience.

---

## How to Update Your Pages

### Update your About bio

Open `src/pages/About.jsx`. Your bio text is on lines 18-26. Just edit the text between the `<p>` tags:
```jsx
<p className="about-text">
  Write whatever you want here. This is your bio.
</p>
```
You can add more paragraphs by copying a `<p>` block:
```jsx
<p className="about-text">
  Another paragraph of text.
</p>
```

### Add a new acting credit

Open `src/lib/constants.js` and find the `CREDITS` list. Add a new entry:
```js
export const CREDITS = [
  {
    title: "Name of the Show/Film",
    role: "Your Role",
    production: "Production Company or Type",
    year: "2026",
    articleUrl: "https://link-to-article.com",   ← optional, leave "" if none
    videoUrl: "https://link-to-video.com"        ← optional, leave "" if none
  },
  // add more credits above this line
];
```
If a credit has no article or video link, just leave them as empty strings `""`.

### Add a new music track

Open `src/lib/constants.js` and find the `MUSIC_TRACKS` list. Add a new entry:
```js
{
  title: "Song Title",
  type: "Single",                          ← or "EP", "Album"
  genre: "Hip-Hop / R&B",
  cover: "src/assets/music-covers/my-cover.jpg",
  audioUrl: "https://link-to-audio-preview.mp3",
  links: [
    { label: "Spotify", url: "https://open.spotify.com/...", color: "#1DB954" },
    { label: "Apple Music", url: "https://music.apple.com/...", color: "#E50010" },
    { label: "YouTube", url: "https://youtube.com/...", color: "#FF0000" },
  ]
},
```

**Available platform colors:**
| Platform     | Color   |
|--------------|---------|
| Spotify      | #1DB954 |
| Apple Music  | #E50010 |
| YouTube      | #FF0000 |
| SoundCloud   | #FF5500 |
| Bandcamp     | #555555 |
| Tidal        | #000000 |
| Amazon Music | #000000 |
| Deezer       | #000000 |

Only include the platforms where your song is available. The site will automatically show the right icon for each one.

### Update the Footer (email, social links)

Open `src/components/Footer.jsx`:
- **Email** (line 16): Change `edwinaguila00@gmail.com` to your email
- **Instagram link** (line 26): Change the `href` URL
- **YouTube link** (line 56): Change the `href` URL
- To **uncomment** Spotify or Apple Music links, remove the `{/*` and `*/}` around them and add your URL

### Update the Navbar links

Open `src/lib/constants.js` and edit the `SECTIONS` list at the top:
```js
export const SECTIONS = [
  { id: "about", label: "About", href: "/about" },
  { id: "headshots", label: "Headshots", href: "/headshots" },
  { id: "credits", label: "Credits", href: "/credits" },
  { id: "music", label: "Music", href: "/music" },
];
```
Change the `label` to rename a link. Remove a line to hide a page from the nav.

---

## How to Edit Styling

All styling is in one file: `src/index.css`

Each section of the site has its own clearly labeled block. Search for:
| Section          | Search for in CSS          |
|------------------|----------------------------|
| Navbar           | `.navbar`                  |
| Footer           | `.footer`                  |
| Hero (Home page) | `.hero-section`            |
| About page       | `.about-grid`              |
| Headshots gallery| `.gallery-grid`            |
| Credits list     | `.credits-list`            |
| Music page       | `.music-grid`              |
| About image crop | `.about-image`             |
| Colors (global)  | `:root` (at the very top)  |

**To change the About photo position** within its frame:
```css
.about-image {
  object-position: center 0%;   ← change 0% to move the image up/down
}
```

**To change global colors**, edit the CSS variables at the top of `index.css`:
```css
:root {
  --zinc-900: #18181b;     ← dark text color
  --indigo-600: #4f46e5;   ← accent/hover color
  /* etc. */
}
```

---

## Quick Reference: Which file to edit

| I want to...                        | Edit this file                  |
|-------------------------------------|----------------------------------|
| Change my bio text                  | `src/pages/About.jsx`           |
| Change my About photo              | `src/pages/About.jsx`           |
| Add/remove headshot photos          | `src/lib/constants.js`          |
| Add acting credits                  | `src/lib/constants.js`          |
| Add music tracks                    | `src/lib/constants.js`          |
| Change my email                     | `src/components/Footer.jsx`     |
| Change social media links           | `src/components/Footer.jsx`     |
| Change nav link names               | `src/lib/constants.js`          |
| Change colors, fonts, spacing       | `src/index.css`                 |
| Change the copyright year           | `src/components/Footer.jsx`     |