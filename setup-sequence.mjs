import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'images');
const destDir = path.join(process.cwd(), 'public', 'sequence');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir)
  .filter(f => f.startsWith('ezgif-frame-') && f.endsWith('.jpg'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0], 10);
    const numB = parseInt(b.match(/\d+/)[0], 10);
    return numA - numB;
  });

console.log(`Found ${files.length} images. Copying to ${destDir}...`);

files.forEach((file, index) => {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, `frame_${index}.jpg`);
  fs.copyFileSync(srcPath, destPath);
});

console.log('Copy complete!');
