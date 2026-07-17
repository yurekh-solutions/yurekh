const fs = require('fs');
const path = require('path');

// Read the additional blogs file
const additionalBlogs = fs.readFileSync(path.join(__dirname, 'additional_blogs.txt'), 'utf8');

// Read the current BlogSection.tsx
const blogSectionPath = path.join(__dirname, 'src', 'components', 'BlogSection.tsx');
let blogSection = fs.readFileSync(blogSectionPath, 'utf8');

// Find the end of the blogPosts array (the line with "];" after the last post)
// We need to insert before the closing "];" of the blogPosts array

// The blogPosts array ends with "];" followed by an empty line and then "const BlogSection"
const insertMarker = '];\r\n\r\nconst BlogSection = () => {';
const insertIndex = blogSection.indexOf(insertMarker);

if (insertIndex === -1) {
  console.error('Could not find insertion point!');
  process.exit(1);
}

// Extract the additional blog posts content (without the export statement)
const additionalContent = additionalBlogs
  .replace('// Auto-generated 500 blog posts\n', '')
  .replace('export const additionalBlogPosts = [\n', '')
  .replace(/\n\];\n/, '')
  .trim();

// Insert the additional posts before the closing "];"
const newBlogSection = blogSection.substring(0, insertIndex) + ',\n' + additionalContent + '\n' + blogSection.substring(insertIndex);

// Write the updated file
fs.writeFileSync(blogSectionPath, newBlogSection, 'utf8');

console.log('Successfully added 500 blog posts to BlogSection.tsx!');
