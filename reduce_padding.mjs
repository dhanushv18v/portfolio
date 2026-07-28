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

for (const file of files) {
  const filePath = path.join(sectionsDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Reduce vertical padding on sections from py-32 to py-16 md:py-20
  content = content.replace(/className="relative py-32"/g, 'className="relative py-16 md:py-20"');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Reduced padding in ${file}`);
}
