const fs = require('fs');
const blogSection = fs.readFileSync('src/components/BlogSection.tsx', 'utf8');

// Count regular blog posts (non-instagram)
const regularSlugs = [...blogSection.matchAll(/slug:\s*"([^"]+)"/g)]
  .map(m => m[1])
  .filter(s => !s.startsWith('instagram-post-'));

// Count instagram posts
const igSlugs = [...blogSection.matchAll(/slug:\s*"([^"]+)"/g)]
  .map(m => m[1])
  .filter(s => s.startsWith('instagram-post-'));

console.log('Regular blog posts:', regularSlugs.length);
console.log('Instagram posts:', igSlugs.length);
console.log('Total:', regularSlugs.length + igSlugs.length);

// Check which regular blog posts have detail content
const blogDetail = fs.readFileSync('src/pages/BlogDetail.tsx', 'utf8');
const missingRegular = regularSlugs.filter(s => !blogDetail.includes('"' + s + '"'));
console.log('\nRegular blog posts MISSING detail content:', missingRegular.length);
if (missingRegular.length > 0) {
  console.log('Missing slugs:');
  missingRegular.forEach(s => console.log('  -', s));
}

// Check which instagram posts have detail content
const missingIg = igSlugs.filter(s => !blogDetail.includes('"' + s + '"'));
console.log('\nInstagram posts MISSING detail content:', missingIg.length);

// Total blog detail entries
const detailEntries = [...blogDetail.matchAll(/sections:\s*\[/g)];
console.log('\nTotal blog detail entries:', detailEntries.length);
