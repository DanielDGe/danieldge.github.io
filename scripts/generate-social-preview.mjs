import { readFile, writeFile } from 'node:fs/promises'
import sharp from 'sharp'

const source = new URL('../public/social-preview.svg', import.meta.url)
const destination = new URL('../public/social-preview.png', import.meta.url)

const svg = await readFile(source)
const png = await sharp(svg, { density: 96 })
  .resize(1200, 630, { fit: 'fill' })
  .png({ compressionLevel: 9, palette: true, effort: 10 })
  .toBuffer()

await writeFile(destination, png)
console.log(`Social preview generado: 1200×630 PNG (${(png.length / 1024).toFixed(1)} KB)`)
