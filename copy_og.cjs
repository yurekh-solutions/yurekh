const fs = require('fs');
const path = require('path');
const src = 'C:/Users/yurek/.qoder/vibe_images/yurekh-og-image_1784291618.png';
const dest = path.join(__dirname, 'public', 'og-image.png');
fs.copyFileSync(src, dest);
console.log('Copied to', dest);
console.log('Size:', fs.statSync(dest).size, 'bytes');
