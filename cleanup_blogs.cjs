const fs = require('fs');

// Read both files
const blogSectionPath = 'src/components/BlogSection.tsx';
const blogDetailPath = 'src/pages/BlogDetail.tsx';

const blogSection = fs.readFileSync(blogSectionPath, 'utf8');
const blogDetail = fs.readFileSync(blogDetailPath, 'utf8');

// Extract all valid slugs from BlogDetail.tsx
const validSlugs = new Set();
const slugPattern = /"([a-z0-9-]+)":\s*\{\s*sections:/g;
let match;
while ((match = slugPattern.exec(blogDetail)) !== null) {
  validSlugs.add(match[1]);
}
console.log('Valid detail slugs:', validSlugs.size);

// Find the blogPosts array boundaries
const arrayStart = blogSection.indexOf('export const blogPosts = [');
const arrayContent = blogSection.substring(arrayStart);

// Find the closing bracket of the array
// We need to find the matching ] for the [
let depth = 0;
let arrayEnd = -1;
for (let i = arrayStart + 'export const blogPosts = '.length; i < blogSection.length; i++) {
  if (blogSection[i] === '[') depth++;
  if (blogSection[i] === ']') {
    depth--;
    if (depth === 0) {
      arrayEnd = i + 1;
      break;
    }
  }
}

console.log('Array found from char', arrayStart, 'to', arrayEnd);

const arrayStr = blogSection.substring(arrayStart, arrayEnd);

// Parse individual entries - each entry starts with { and ends with }
// Split by entry boundaries
const entries = [];
let entryDepth = 0;
let entryStart = -1;
for (let i = 0; i < arrayStr.length; i++) {
  if (arrayStr[i] === '{') {
    if (entryDepth === 0) entryStart = i;
    entryDepth++;
  }
  if (arrayStr[i] === '}') {
    entryDepth--;
    if (entryDepth === 0 && entryStart >= 0) {
      const entry = arrayStr.substring(entryStart, i + 1);
      // Extract slug from this entry
      const slugMatch = entry.match(/slug:\s*"([^"]+)"/);
      if (slugMatch) {
        entries.push({ text: entry, slug: slugMatch[1], start: entryStart, end: i + 1 });
      }
      entryStart = -1;
    }
  }
}

console.log('Total entries parsed:', entries.length);

// Filter: keep only entries whose slugs exist in BlogDetail
const kept = entries.filter(e => validSlugs.has(e.slug));
const removed = entries.filter(e => !validSlugs.has(e.slug));

console.log('Keeping:', kept.length);
console.log('Removing:', removed.length);

// Build the new array string
const beforeArray = blogSection.substring(0, arrayStart);
const afterArray = blogSection.substring(arrayEnd);

// Reconstruct the array with only kept entries
let newArray = 'export const blogPosts = [\n';
for (let i = 0; i < kept.length; i++) {
  // Clean up the entry text (normalize whitespace)
  let entryText = kept[i].text.trim();
  newArray += '  ' + entryText;
  if (i < kept.length - 1) {
    newArray += ',\n';
  } else {
    newArray += '\n';
  }
}
newArray += ']';

const newContent = beforeArray + newArray + afterArray;

fs.writeFileSync(blogSectionPath, newContent);
console.log('\nFile written successfully!');
console.log('New file size:', newContent.length, 'chars');
console.log('Old file size:', blogSection.length, 'chars');
console.log('Reduction:', ((blogSection.length - newContent.length) / blogSection.length * 100).toFixed(1) + '%');
