# Part 3 — Missoula Housing Land Explorer (embeddable web map)

An AI-enhanced, interactive web version of the Part 1 poster (`Missoula_GISMap.pdf`). 

## Files
- `index.html` — the app (MapLibre GL map, filters, popups, "Ask the map" panel)
- `parcels.json` — 18,864 scored parcels (action + suitability + land value + preserve reason)
- `context.json` — 8,121 in-city grey context parcels

The two data files hold GeoJSON but carry a `.json` extension deliberately.
Served as `.geojson` they get `application/octet-stream`, which most static
hosts refuse to compress; as `.json` they are gzipped, taking the map's
payload from about 6.3 MB to roughly 0.7 MB over the wire.

## Run / preview locally
GeoJSON is fetched at runtime, so it needs a web server (opening the file directly with `file://` fails on CORS).
```
cd part3_web_map
python -m http.server 8777
# open http://localhost:8777/index.html
```

## Embed in a website
Host the three files together (any static host: S3, Netlify, GitHub Pages, your CMS) and iframe it:
```html
<iframe src="https://your-host/part3_web_map/index.html"
        style="width:100%;height:640px;border:0" loading="lazy"></iframe>
```

## What it does
- **Filter** by any combination of Action (Preserve / Build + Protect / Build First) and Suitability (Low / Med / High). Map shows the intersection with a live parcel count.
- **Click** any parcel for action, suitability tier and percentile, land value per potential home, and preserve reason.
- **Ask the map**: a natural-language box (with example chips). It reads the question, sets the filters, and writes a short answer computed from the actual filtered parcels (real counts and medians).

## Design notes
- **Cartography** matches the poster: desaturated grayscale Esri World Imagery basemap, orange/teal/navy bivariate palette, Oswald + Nunito type.
- **The "Ask the map" AI runs client-side** (rule/intent-based, grounded in the live numbers). This is deliberate: it needs no API key and is safe to embed on any public site. To use a true LLM for free-form reasoning, replace `parseQuery()` with a call to your own server endpoint (keep the key server-side).
- **External dependencies** (all need internet, all free, no API key): MapLibre GL JS (unpkg CDN), Esri World Imagery tiles, Google Fonts. If your embed context blocks external hosts, these can be self-hosted.

