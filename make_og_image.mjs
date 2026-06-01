import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SRC = path.join(__dirname, "public/images/logo_full.png");
const DST = path.join(__dirname, "public/images/logo_og.png");
const OG_W = 1200;
const OG_H = 630;
const PADDING = 80;

const meta = await sharp(SRC).metadata();
const srcW = meta.width;
const srcH = meta.height;

const maxW = OG_W - PADDING * 2;
const maxH = OG_H - PADDING * 2;
const scale = Math.min(maxW / srcW, maxH / srcH);
const newW = Math.round(srcW * scale);
const newH = Math.round(srcH * scale);
const x = Math.round((OG_W - newW) / 2);
const y = Math.round((OG_H - newH) / 2);

const logo = await sharp(SRC).resize(newW, newH).toBuffer();

await sharp({
  create: { width: OG_W, height: OG_H, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
})
  .composite([{ input: logo, left: x, top: y }])
  .png()
  .toFile(DST);

console.log(`Saved: logo_og.png  (${OG_W}x${OG_H}, logo ${newW}x${newH} at ${x},${y})`);
