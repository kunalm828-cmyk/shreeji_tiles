const fs = require('fs');
const path = require('path');

const code = fs.readFileSync('components/Products.jsx', 'utf-8');
const fileRegex = /['"](\/utility\/[^'"]+\.(?:png|jpg|jpeg))['"]/g;

let match;
const missing = [];
let total = 0;

while ((match = fileRegex.exec(code)) !== null) {
    total++;
    const url = match[1];
    // Decoded URL not strictly needed if file system doesn't encode spaces, but Next.JS uses %20 for spaces
    // we use absolute path concatenation
    const filePath = path.join(__dirname, 'public', decodeURI(url));
    if (!fs.existsSync(filePath)) {
        missing.push(url);
    }
}

console.log(`Total checked: ${total}`);
if (missing.length === 0) {
    console.log("All image files are perfectly visible and present in the file system!");
} else {
    console.log("Found missing images:");
    missing.forEach(m => console.log(m));
}
