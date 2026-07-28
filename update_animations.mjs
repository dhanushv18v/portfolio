import fs from 'fs';
import path from 'path';

const sectionsDir = 'src/components/sections';
const files = [
  'Hero.tsx',
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

  // 1. Remove x animations, replace with y animations for consistency
  // initial={{ opacity: 0, x: -30 }} -> initial={{ opacity: 0, y: 30 }}
  content = content.replace(/x:\s*-?\d+/g, 'y: 30');
  
  // 2. Increase durations slightly
  content = content.replace(/duration:\s*([0-9.]+)/g, (match, p1) => {
    const dur = parseFloat(p1);
    // Increase duration by 0.3 to make it slightly slower
    const newDur = (dur + 0.3).toFixed(1);
    return `duration: ${newDur}`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated animations in ${file}`);
}
