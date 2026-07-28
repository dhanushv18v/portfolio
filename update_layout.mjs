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

  // 1. Container div
  content = content.replace(
    /<div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-12">/,
    '<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">'
  );

  // 2. Header comment
  content = content.replace(
    /\{\/\*\s*Header\s*\*\/\}/,
    '{/* Sticky Header */}'
  );

  // 3. Header wrapper
  content = content.replace(
    /<div className="w-full max-w-2xl text-center z-20">/,
    '<div className="lg:w-1/3 lg:sticky lg:top-32 z-20 w-full">'
  );

  // 4. Gradient bar
  content = content.replace(
    /className="h-\[2px\] w-16 bg-gradient-to-r from-brand-blue to-brand-cyan mx-auto mb-8"/,
    'className="h-[2px] w-16 bg-gradient-to-r from-brand-blue to-brand-cyan mb-8"'
  );

  // 5. Paragraph
  content = content.replace(
    /<p className="text-white\/60 text-lg leading-relaxed">/,
    '<p className="text-white/60 text-lg leading-relaxed hidden lg:block">'
  );

  // 6. Content wrapper (replace any max-w-Xxl)
  content = content.replace(
    /<div className="w-full max-w-[0-9]+xl">/,
    '<div className="lg:w-2/3 w-full">'
  );

  // 7. Fix contact links if they exist
  if (file === 'Contact.tsx') {
    content = content.replace(
      /<div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">/,
      '<div className="mt-12 flex flex-col gap-6">'
    );
    // Add text spans back for contact
    if (!content.includes('>dhanushv440@gmail.com</span>')) {
        content = content.replace(/<Mail className="w-6 h-6" \/>\s*<\/div>\s*<\/a>/, '<Mail className="w-6 h-6" />\n                </div>\n                <span className="font-medium">dhanushv440@gmail.com</span>\n              </a>');
    }
    if (!content.includes('>linkedin.com/in/dhanush-v</span>')) {
        content = content.replace(/<FaLinkedin className="w-6 h-6" \/>\s*<\/div>\s*<\/a>/, '<FaLinkedin className="w-6 h-6" />\n                </div>\n                <span className="font-medium">linkedin.com/in/dhanush-v</span>\n              </a>');
    }
    if (!content.includes('>github.com/dhanushv18v</span>')) {
        content = content.replace(/<FaGithub className="w-6 h-6" \/>\s*<\/div>\s*<\/a>/, '<FaGithub className="w-6 h-6" />\n                </div>\n                <span className="font-medium">github.com/dhanushv18v</span>\n              </a>');
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
