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

  // 1. Container div
  content = content.replace(
    /<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">/,
    '<div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-12">'
  );

  // 2. Header comment
  content = content.replace(
    /\{\/\*\s*Sticky Header\s*\*\/\}/,
    '{/* Header */}'
  );

  // 3. Header wrapper
  content = content.replace(
    /<div className="lg:w-1\/3 lg:sticky lg:top-32 z-20 w-full">/,
    '<div className="w-full max-w-2xl text-center z-20">'
  );

  // 4. Gradient bar
  content = content.replace(
    /className="h-\[2px\] w-16 bg-gradient-to-r from-brand-blue to-brand-cyan mb-8"/,
    'className="h-[2px] w-16 bg-gradient-to-r from-brand-blue to-brand-cyan mx-auto mb-8"'
  );

  // 5. Paragraph
  content = content.replace(
    /<p className="text-white\/60 text-lg leading-relaxed hidden lg:block">/,
    '<p className="text-white/60 text-lg leading-relaxed">'
  );

  // 6. Content wrapper
  const width = widthMap[file];
  content = content.replace(
    /<div className="lg:w-2\/3 w-full">/,
    `<div className="w-full ${width}">`
  );

  // 7. Fix contact links if they exist
  if (file === 'Contact.tsx') {
    content = content.replace(
      /<div className="mt-12 flex flex-col gap-6">/,
      '<div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">'
    );
    // Remove text spans back for contact
    content = content.replace(/<Mail className="w-6 h-6" \/>\n\s*<\/div>\n\s*<span className="font-medium">dhanushv440@gmail\.com<\/span>\n\s*<\/a>/, '<Mail className="w-6 h-6" />\n                </div>\n              </a>');
    content = content.replace(/<FaLinkedin className="w-6 h-6" \/>\n\s*<\/div>\n\s*<span className="font-medium">linkedin\.com\/in\/dhanush-v<\/span>\n\s*<\/a>/, '<FaLinkedin className="w-6 h-6" />\n                </div>\n              </a>');
    content = content.replace(/<FaGithub className="w-6 h-6" \/>\n\s*<\/div>\n\s*<span className="font-medium">github\.com\/dhanushv18v<\/span>\n\s*<\/a>/, '<FaGithub className="w-6 h-6" />\n                </div>\n              </a>');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Restored ${file}`);
}
