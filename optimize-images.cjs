/**
 * Image optimizer for src/assets (run once, commit the results)
 * -------------------------------------------------
 * Recursively finds heavy PNG/JPG files and recompresses them IN PLACE
 * (same filename → no import changes). Only overwrites when the result
 * is actually smaller. Originals stay recoverable via git.
 *
 * Run:  node optimize-images.cjs
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOTS = [path.join(__dirname, "src", "assets"), path.join(__dirname, "public")];
const THRESHOLD = 300 * 1024; // only touch files above 300 KB
const MAX_PNG_WIDTH = 1000;   // blog/instagram cards render ≤ ~800px wide
const MAX_JPG_WIDTH = 1600;   // hero imagery
const LOGO_WIDTH = 512;       // header/footer/chat logo renders ≤ 64px

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

(async () => {
  let saved = 0;
  for (const file of ROOTS.flatMap(walk)) {
    const ext = path.extname(file).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;
    const before = fs.statSync(file).size;
    if (before < THRESHOLD) continue;

    const isLogo = ["loo.png", "logoyurekh.png"].includes(path.basename(file));
    // read into memory so no open handle blocks the in-place overwrite (Windows)
    const src = fs.readFileSync(file);
    const meta = await sharp(src).metadata();

    let pipeline = sharp(src);
    if (ext === ".png") {
      const maxW = isLogo ? LOGO_WIDTH : MAX_PNG_WIDTH;
      if ((meta.width || 0) > maxW) pipeline = pipeline.resize({ width: maxW });
      pipeline = pipeline.png({ compressionLevel: 9, palette: true, quality: 82 });
    } else {
      if ((meta.width || 0) > MAX_JPG_WIDTH) pipeline = pipeline.resize({ width: MAX_JPG_WIDTH });
      pipeline = pipeline.jpeg({ quality: 72, mozjpeg: true });
    }

    const buf = await pipeline.toBuffer();
    if (buf.length < before) {
      fs.writeFileSync(file, buf);
      saved += before - buf.length;
      console.log(`${path.relative(__dirname, file)}: ${kb(before)} -> ${kb(buf.length)}`);
    } else {
      console.log(`${path.relative(__dirname, file)}: kept (already optimal)`);
    }
  }
  console.log(`\nTotal saved: ${(saved / 1024 / 1024).toFixed(1)} MB`);
})();
