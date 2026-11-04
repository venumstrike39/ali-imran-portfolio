# ALI IMRAN — AI VIDEO CREATOR & VIDEO EDITOR PORTFOLIO

A production-ready, international agency-grade personal portfolio built specifically for **Ali Imran**.

---

## 🌟 Visual Identity & Design Highlights
- **Obsidian & Deep Forest Green Palette**: `#071109`, `#101A11`, with `#A8F542` (neon lime) and `#78B82A` (accent green).
- **Cinematic Preloader**: Animated telemetry initialization, progress counter (0-100%), and oversized glowing `PORTFOLIO` typography.
- **Centerpiece Hero**: Features **Ali Imran's actual uploaded photograph** framed inside a camera HUD viewfinder (`REC [●] 4K`, `ISO 400`, `60FPS`, radial ambient backlight glow, and depth shadows).
- **Interactive Background**: HTML5 canvas rendering glowing neon particles and constellations reacting to mouse movement with subtle film grain and grid scanlines.
- **Dedicated Showreel Cinema**: Ultra-widescreen cinematic player with soundwave visualizer and instant modal playback.
- **Filterable Projects Archive**:
  - `White Duck Family` (AI Animated Stories)
  - `Auto Scale ASMR` (Automotive Visuals & Sound)
  - `AI Ads & Product Videos` (AI Commercials & UGC)
  - Plus cinematic sci-fi teasers, luxury perfume commercials, and viral retention shorts.
- **Creative Process**: 3-step interactive roadmap (`01 UNDERSTAND`, `02 CREATE`, `03 REFINE`) with connecting laser beam.
- **Instant Contact System**:
  - Direct WhatsApp 1-tap chat button (`03091275913` / `wa.me/923091275913`)
  - Direct Email (`mirzaaliimran13@gmail.com`)
  - LinkedIn (`linkedin.com/in/ali-imran-679148318`)
  - Threads (`threads.com/@ghost._.exe0`)
  - Interactive Project Inquiry Brief Form with celebratory confetti.

---

## 🚀 How to Run & Develop

1. **Install Dependencies** (already done):
   ```bash
   cd "C:\Users\Ali Imran\.gemini\antigravity\scratch\ali-imran-portfolio"
   npm install
   ```

2. **Start Dev Server**:
   ```bash
   npm run dev
   ```
   Open **http://localhost:5173** in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🎬 How to Add or Swap Your Real MP4 Videos

All project data, video URLs, and portfolio settings are centralized in:
`src/data/portfolioData.js`

To add your own MP4 video:
1. Place your `.mp4` file into the `public/` directory (e.g. `public/my-showreel.mp4`).
2. Open `src/data/portfolioData.js`.
3. Update `videoUrl`:
   ```javascript
   videoUrl: "/my-showreel.mp4"
   ```
   Or paste your Vimeo, Cloudflare Stream, or YouTube/direct MP4 URL.

---

## 📱 Mobile & Tablet Responsiveness
Fully optimized for mobile devices, tablets, and ultra-wide desktop monitors with dynamic drawer menus, responsive touch targets, and hardware-accelerated animations.
