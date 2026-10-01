# HyperPrompt — Project Website

Project page for **"From Patches to Pixels: Dual-Branch Prompt Learning for Hyperspectral Scene Generalization"** — accepted at **BMVC 2026**.

Giri, Chaudhuri, Banerjee · IIT Bombay & TCS Research.

## Files

```
index.html          the page
style.css           styling
script.js           copy-citation + scroll animations
figures/
  arch_anim.gif     animated architecture / data flow
  architecture.png  Figure 1 — HyperPrompt overview (from the paper)
  gap.gif           animated Patch vs Pixel vs Dual comparison
  maps.png          Classification maps (H18, MaPLe)
  tsne.png          t-SNE features (Pavia, PromptSRC)
  calibration.png   Reliability diagrams (Houston)
  pclra.png         PCLRA radar (Houston)
```

The two `.gif` files and the architecture/result PNGs were generated for this
page; the result PNGs are cropped straight from the paper PDF.

## Page sections

1. **Hero** — title, authors, and two buttons: **Paper (arXiv)** and **Code**.
2. **Abstract**.
3. **Method & Architecture** — animated data-flow GIF, three component cards
   (TCDM, PCLRA+HOR, GPoE), and the paper's Figure 1.
4. **The Patch–Pixel Gap** — animated GIF + write-up contrasting Patch-only,
   Pixel-only, and the dual branch.
5. **Results** — Table 2 (Patch / Pixel / Dual across six prompt-learning
   methods), Table 3 (vs cross-scene & foundation models), highlight stats,
   and result figures.
6. **Citation** — copy-able BibTeX.

## What to update before publishing

1. **Paper (arXiv) link** — in `index.html`, find the comment
   `<!-- TODO: replace # with your arXiv link ... -->` and set the
   **Paper (arXiv)** button's `href="#"` to your arXiv URL.
2. **Code link** — currently `https://github.com/vivekananda05/HyperPrompt`.
   Change it in `index.html` if your repo URL differs.
3. **Citation** — update the BibTeX block once the official BMVC entry is out.

No build step is needed — edit `index.html` in any text editor and save.

---

## Hosting on GitHub Pages (free)

### Option A — project site (simplest)

1. Create a new GitHub repository, e.g. `hyperprompt-page`.
2. Upload all files **keeping the folder structure** — `index.html`,
   `style.css`, `script.js`, and the whole `figures/` folder — to the repo
   root. Drag-and-drop on github.com via **Add file → Upload files**, or use
   git:
   ```bash
   git init
   git add .
   git commit -m "Add HyperPrompt project page"
   git branch -M main
   git remote add origin https://github.com/<your-username>/hyperprompt-page.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch** to `main`, folder `/ (root)`, then **Save**.
6. Wait ~1 minute. Your site is live at:
   ```
   https://<your-username>.github.io/hyperprompt-page/
   ```

### Option B — publish at your username root

Name the repository exactly `<your-username>.github.io` and push the same
files. The site is served at `https://<your-username>.github.io/`.

### Tips

- `index.html` must be in the folder you selected as the Pages source.
- If images or GIFs don't show, confirm the `figures/` folder was uploaded
  and filenames match (GitHub Pages is case-sensitive).
- After any change, push again — Pages redeploys automatically in under a
  minute.
- For a custom domain later: **Settings → Pages → Custom domain**.
