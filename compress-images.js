const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  require.resolve('sharp');
} catch (e) {
  console.log("Installing sharp...");
  execSync('npm install sharp --no-save', { stdio: 'inherit' });
}

const sharp = require('sharp');

const walkSync = function(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    const dirent = fs.statSync(dirFile);
    if (dirent.isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.match(/\.(jpg|jpeg|png)$/i)) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
};

const files = walkSync(path.join(process.cwd(), 'public', 'utility'));
console.log(`Found ${files.length} images to compress in public/utility.`);

(async () => {
    let savedTotal = 0;
    for(const file of files) {
        if(file.includes('logo') || file.includes('tejaskp')) {
          console.log(`Skipping logo: ${file}`);
          continue; 
        }

        try {
            const originalSize = fs.statSync(file).size;
            if (originalSize < 200 * 1024) {
              console.log(`Skipping ${path.basename(file)} (Already optimized: ${(originalSize/1024).toFixed(1)} KB)`);
              continue;
            }

            console.log(`Compressing ${path.basename(file)}...`);
            const buffer = fs.readFileSync(file);
            const ext = path.extname(file).toLowerCase();
            
            let pipeline = sharp(buffer).resize(1000, 1000, { fit: 'inside', withoutEnlargement: true });
            
            if (ext === '.png') {
                pipeline = pipeline.png({ quality: 65, compressionLevel: 8 });
            } else {
                pipeline = pipeline.jpeg({ quality: 65 });
            }

            await pipeline.toFile(file);
            
            const newSize = fs.statSync(file).size;
            const saved = originalSize - newSize;
            savedTotal += saved;
            console.log(` -> Saved ${(saved / 1024 / 1024).toFixed(2)} MB`);
        } catch (e) {
            console.error(`Error compressing ${file}:`, e.message);
        }
    }
    console.log(`COMPRESSION COMPLETE. Total Disk Space Saved: ${(savedTotal / 1024 / 1024).toFixed(2)} MB.`);
})();
