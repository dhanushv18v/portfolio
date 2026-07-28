import fs from 'fs';
import path from 'path';

const sectionsDir = 'src/components/sections';
const files = [
  'About.tsx',
  'Projects.tsx',
  'Skills.tsx',
  'Experience.tsx',
  'Certifications.tsx',
  'Achievements.tsx',
  'GithubSection.tsx',
  'Contact.tsx'
];

const widthMap = {
  'About.tsx': 'max-w-6xl',
  'Projects.tsx': 'max-w-7xl',
  'Skills.tsx': 'max-w-7xl',
  'Experience.tsx': 'max-w-6xl',
  'Certifications.tsx': 'max-w-6xl',
  'Achievements.tsx': 'max-w-6xl',
  'GithubSection.tsx': 'max-w-6xl',
  'Contact.tsx': 'max-w-5xl'
};

for (const file of files) {
  const filePath = path.join(sectionsDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');
  const width = widthMap[file];

  // 1. Change header wrapper to match width and align left
  content = content.replace(
    /<div className="w-full max-w-2xl text-center z-20">/g,
    `<div className="w-full ${width} text-left z-20">`
  );

  // 2. Remove mx-auto from the underline bar
  content = content.replace(
    /className="h-\[2px\] w-16 bg-gradient-to-r from-brand-blue to-brand-cyan mx-auto mb-8"/g,
    'className="h-[2px] w-16 bg-gradient-to-r from-brand-blue to-brand-cyan mb-8"'
  );

  // 3. Constrain paragraph width so it doesn't look too stretched on the left
  content = content.replace(
    /<p className="text-white\/60 text-lg leading-relaxed">/g,
    '<p className="text-white/60 text-lg leading-relaxed max-w-2xl">'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Left-aligned ${file}`);
}
