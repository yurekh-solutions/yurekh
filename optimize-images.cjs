/**
 * Image pipeline for yurekh.com
 * -------------------------------------------------
 * PageSpeed flagged ~1.95 MB of image savings, with a 1.5 MB 1024x1024 logo
 * being downloaded for a 28x28 badge — that single file was driving the 11.9 s
 * LCP on slow 4G.
 *
 * This script writes modern-format WebP copies at the sizes the UI actually
 * renders into, next to the originals. Imports then point at the .webp files.
 * Originals are left untouched so git stays the source of truth.
 *
 * Run:  node optimize-images.cjs
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

/* src/assets is bundled by Vite, so only files listed here get emitted. */
const A = (p) => path.join(__dirname, "src", "assets", p);

/* Displayed size x 2 (retina) rounded up, quality tuned per content type. */
const TARGETS = [
  /* brand marks — badges render 12-20 px, header/footer 36-64 px */
  { src: A("yurekhlog.png"), out: A("yurekhlog.webp"), w: 128, q: 84 },
  { src: A("loo.png"), out: A("loo.webp"), w: 128, q: 84 },

  /* hero dashboard mock-up — container is 1100 px wide, ~160 px visible */
  { src: A("yurekh-dashboard (1).jpg"), out: A("dashboard-preview.webp"), w: 1200, q: 72 },
  /* same mock-up for the mobile hero, which renders it ~390 px wide */
  { src: A("yurekh-dashboard (1).jpg"), out: A("dashboard-preview-sm.webp"), w: 780, q: 70 },

  /* blog article hero — 4xl container, 400 px tall */
  { src: A("blog/blog-hero.jpg"), out: A("blog/blog-hero.webp"), w: 1200, q: 74 },
];

/* Flat-colour illustrations keep their PNG format and filename: an equal-size
   WebP measured larger, so only the oversized dimensions are wasteful. */
const IN_PLACE = [{ file: A("contact.png"), w: 700 }];

/* Blog cards: 3 lazy cards on the homepage + grid/list pages, ≤400 px wide. */
for (const f of fs.readdirSync(A("blog"))) {
  const m = f.match(/^instagram-(\d+)\.png$/i);
  if (m) TARGETS.push({ src: A(path.join("blog", f)), out: A(`blog/instagram-${m[1]}.webp`), w: 800, q: 76 });
  const b = f.match(/^blog(\d+)\.(png|jpe?g)$/i);
  if (b) TARGETS.push({ src: A(path.join("blog", f)), out: A(`blog/blog${b[1]}.webp`), w: 800, q: 76 });
}

/* Instagram grid: aspect-square tiles inside a 6-column grid. */
for (const f of fs.readdirSync(A("instagram"))) {
  const m = f.match(/^(post-\d+)\.png$/i);
  if (m) TARGETS.push({ src: A(path.join("instagram", f)), out: A(`instagram/${m[1]}.webp`), w: 640, q: 76 });
}

const kb = (n) => (n / 1024).toFixed(1) + " KB";

(async () => {
  let before = 0;
  let after = 0;
  let missing = 0;

  for (const t of TARGETS) {
    if (!fs.existsSync(t.src)) {
      console.log("MISSING  ", path.relative(__dirname, t.src));
      missing++;
      continue;
    }
    const input = fs.readFileSync(t.src);
    const meta = await sharp(input).metadata();
    const buf = await sharp(input)
      .resize({ width: Math.min(t.w, meta.width || t.w), withoutEnlargement: true })
      .webp({ quality: t.q, effort: 6, metadata: "none" })
      .toBuffer();

    fs.writeFileSync(t.out, buf);
    before += input.length;
    after += buf.length;
    console.log(
      `${path.basename(t.out).padEnd(26)} ${String(meta.width + "x" + meta.height).padEnd(12)}` +
        `${kb(input.length).padStart(11)} -> ${kb(buf.length).padStart(11)}`
    );
  }

  console.log(
    `\n${TARGETS.length} files written | ${kb(before)} -> ${kb(after)} ` +
      `(${(100 - (after / before) * 100).toFixed(1)}% smaller) | missing: ${missing}`
  );

  for (const t of IN_PLACE) {
    if (!fs.existsSync(t.file)) continue;
    const input = fs.readFileSync(t.file);
    const meta = await sharp(input).metadata();
    if ((meta.width || 0) <= t.w) continue;
    const buf = await sharp(input)
      .resize({ width: t.w })
      .png({ palette: true, quality: 92, effort: 9 })
      .toBuffer();
    if (buf.length >= input.length) {
      console.log(`${path.basename(t.file).padEnd(26)} already optimal, left untouched`);
      continue;
    }
    fs.writeFileSync(t.file, buf);
    console.log(
      `${path.basename(t.file).padEnd(26)} ${meta.width}x${meta.height} -> ${t.w}px  ` +
        `${kb(input.length)} -> ${kb(buf.length)} (in place)`
    );
  }
})();
