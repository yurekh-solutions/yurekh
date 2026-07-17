const fs = require('fs');
const content = fs.readFileSync('src/pages/BlogDetail.tsx', 'utf8');
const matches = content.match(/sections:\s*\[/g);
console.log('Total blog detail entries:', matches ? matches.length : 0);

// Also check BlogSection
const blogSection = fs.readFileSync('src/components/BlogSection.tsx', 'utf8');
const slugMatches = blogSection.match(/slug:\s*"/g);
console.log('Total blog listing entries:', slugMatches ? slugMatches.length : 0);

// Check which slugs from BlogSection have content in BlogDetail
const slugs = [...blogSection.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);
const missing = slugs.filter(s => !content.includes(`"${s}"`));
console.log('\nBlogSection slugs missing from BlogDetail:');
missing.forEach(s => console.log('  -', s));
console.log('Missing count:', missing.length);

// Check instagram posts too
const igMatches = blogSection.match(/instagram-post-/g);
console.log('\nInstagram post entries in BlogSection:', igMatches ? igMatches.length / 2 : 0);
