/* eslint-disable */
const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

const replaceColors = (content) => {
  return content
    .replace(/blue-/g, 'lime-')
    .replace(/cyan-/g, 'green-')
    .replace(/purple-/g, 'emerald-')
    // Keep some varied colors for ARExamples if needed, but simple replace works.
};

const updateFiles = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updateFiles(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Also update specific hex colors if any (none used for brand, mostly tailwind)
      content = replaceColors(content);

      // Specifically handle Navbar logo replacement
      if (file === 'Navbar.tsx') {
        content = content.replace(
          /<Brain className="w-8 h-8 text-white\/90" \/>\s*<span className="font-bold text-xl tracking-widest text-white\/90">IMERSÃO CÓRTEX<\/span>/g,
          '<img src="/logo.png" alt="Imersão Córtex" className="h-8 w-auto" />'
        );
      }
      
      // Specifically handle ContactFooter logo replacement
      if (file === 'ContactFooter.tsx') {
        content = content.replace(
          /<Brain className="w-8 h-8 text-white\/90" \/>\s*<span className="font-bold text-xl tracking-widest text-white\/90">IMERSÃO CÓRTEX<\/span>/g,
          '<img src="/logo.png" alt="Imersão Córtex" className="h-10 w-auto" />'
        );
      }

      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
};

updateFiles(componentsDir);
console.log('Colors and logos updated successfully.');
