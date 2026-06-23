# Client Board — Setup Guide
### iPhone + Mac, synced via Firebase + GitHub Pages

---

## Files you need
```
client_board.html        ← the app
manifest-board.json      ← makes it installable as an app
sw-board.js              ← offline support
icon-board-192.png       ← you create this (Step 3)
icon-board-512.png       ← you create this (Step 3)
```

---

## Step 1 — Firebase (10 min)

1. Go to **console.firebase.google.com** → click **"Add project"**
2. Name: `agency-apps` → Continue → turn Analytics OFF → **Create project**
3. Click the **</>** (Web) icon → nickname: `client-board` → **Register app**
4. Copy the `firebaseConfig` block that appears — paste it in Notes
5. Click **"Continue to console"**
6. Left sidebar → **Build → Firestore Database → Create database**
7. Choose **"Start in test mode"** → region: **nam5 (us-central)** → **Enable**

---

## Step 2 — Paste config into the HTML

Open `client_board.html` in TextEdit. Find this near the bottom:

```javascript
const FIREBASE_CONFIG = {
  apiKey:            "PASTE_YOUR_API_KEY_HERE",
  authDomain:        "PASTE_YOUR_PROJECT_ID.firebaseapp.com",
```

Replace every placeholder with your real values from Step 1. Save.

---

## Step 3 — Make app icons (5 min)

1. Go to **favicon.io/emoji-favicons**
2. Search **handshake** 🤝 → Download → unzip
3. Rename:
   - `favicon-192x192.png` → `icon-board-192.png`
   - `favicon-512x512.png` → `icon-board-512.png`

---

## Step 4 — GitHub Pages (10 min)

Put all 5 files in one folder on your Mac. Then:

1. Go to **github.com** → **+** → **New repository**
2. Name: `agency-apps` · Private · **Create repository**
3. Click **"uploading an existing file"** → drag all 5 files in
4. Commit message: `Client Board` → **Commit changes**

**Enable Pages:**
1. Repo → **Settings → Pages**
2. Source: **Deploy from a branch** → **main / (root)** → **Save**
3. Wait ~60 sec → banner appears with your URL:
   `https://YOUR-USERNAME.github.io/agency-apps/client_board.html`

---

## Step 5 — Install on iPhone

1. Open **Safari** → go to your URL
2. Tap the **Share** button (bottom center)
3. Tap **"Add to Home Screen"** → name it **Clients** → **Add**

---

## Step 6 — Install on Mac

**Safari (macOS Sonoma+):** File menu → **"Add to Dock"**

**Chrome:** Click the install icon in the address bar → **Install**

---

## Test sync

1. Add a client on iPhone
2. Open on Mac — it appears instantly ✓

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| "✗ Offline" in the bar | Firebase config has a typo — recheck values |
| Icon not showing | Make sure both PNGs are uploaded to GitHub |
| 404 on the URL | Filename in URL must exactly match repo (case sensitive) |
| Changes not syncing | Pull to refresh on iPhone · Cmd+R on Mac |
