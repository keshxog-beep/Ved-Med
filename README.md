## VEDMED (College Project Demo)

Static medical web app (India-focused) with:

- Login/register (demo, stored locally in the browser)
- “AI” medicine assistant (public web sources + simple summarization)
- Nearby hospital finder (GPS + OpenStreetMap Overpass)
- Medicine tracker with calendar
- SOS first-aid guidance + India emergency numbers
- Order-medicine quick links
- Odia / Hindi / English language switch
- Dark / light mode
- Purple / orange theme

### Run

Because this project is **pure HTML/CSS/JS**, you only need a static server.

Option A (VS Code): install **Live Server** → right click `index.html` → **Open with Live Server**

Option B (Python): if you have Python installed:

```bash
python -m http.server 5173
```

Then open `http://localhost:5173`.

### Notes / Limitations

- **Login is demo-only** (localStorage). For production you’d use a real backend + OTP/2FA.
- The assistant avoids storing medical data on a server (no backend in this repo).
- The assistant uses **public web APIs** and a lightweight summarizer (not an LLM).
- Google Search pages typically block browser CORS; instead we use open sources (Wikipedia + OpenFDA) and clearly cite sources in the UI.

