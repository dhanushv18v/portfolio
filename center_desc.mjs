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

  // Remove text-left from the wrapper
  content = content.replace(
    /className="w-full max-w-([0-9]xl) text-left z-20"/g,
    'className="w-full max-w-$1 z-20"'
  );

  // Add text-left to the h2
  content = content.replace(
    /className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white"/g,
    'className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white text-left"'
  );

  // Center the paragraph
  content = content.replace(
    /className="text-white\/60 text-lg leading-relaxed max-w-2xl"/g,
    'className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto text-center"'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
