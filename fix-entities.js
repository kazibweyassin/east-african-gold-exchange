const fs = require('fs');
const path = require('path');

// Function to fix unescaped entities in a file
function fixEntities(filePath) {
  console.log(`🔍 Processing: ${filePath}`);
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix apostrophes and quotes in JSX content
    content = content.replace(/(\s|>)"([^"<>]*)"(<|\s)/g, '$1&ldquo;$2&rdquo;$3'); // Replace normal quotes in JSX
    content = content.replace(/(\s|>)'([^'<>]*)'(<|\s)/g, '$1&lsquo;$2&rsquo;$3'); // Replace single quotes in JSX
    
    // Fix apostrophes in contractions
    content = content.replace(/(\w)\'(\w)/g, '$1&apos;$2'); // Replace apostrophes in contractions like don't, isn't, etc.
    
    // Special case for quotes inside quotes (like in testimonials)
    content = content.replace(/"{testimonial\.quote}"/g, '&ldquo;{testimonial.quote}&rdquo;');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed unescaped entities in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
    return false;
  }
}

// Files to process
const filesToProcess = [
  'src/components/TestimonialsSection.tsx',
  'src/app/education/page.tsx',
  'src/app/testimonials/page.tsx',
  'src/components/SecuritySection.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/pricing/page.tsx',
  'src/app/security/page.tsx',
  'src/app/suppliers/page.tsx'
];

// Fix unused imports in specific files
function fixUnusedImports() {
  // Fix page.tsx
  try {
    let content = fs.readFileSync('src/app/page.tsx', 'utf8');
    content = content.replace(/import Image from "next\/image";/, '');
    fs.writeFileSync('src/app/page.tsx', content, 'utf8');
    console.log('✅ Fixed unused imports in: src/app/page.tsx');
  } catch (error) {
    console.error('❌ Error fixing imports in src/app/page.tsx:', error);
  }

  // Fix pricing/page.tsx
  try {
    let content = fs.readFileSync('src/app/pricing/page.tsx', 'utf8');
    content = content.replace(/import React from 'react';\nimport Image from 'next\/image';\nimport Link from 'next\/link';\nimport { Card, CardContent } from '@\/components\/ui\/card';/, 
      "import React from 'react';");
    fs.writeFileSync('src/app/pricing/page.tsx', content, 'utf8');
    console.log('✅ Fixed unused imports in: src/app/pricing/page.tsx');
  } catch (error) {
    console.error('❌ Error fixing imports in src/app/pricing/page.tsx:', error);
  }

  // Fix security/page.tsx
  try {
    let content = fs.readFileSync('src/app/security/page.tsx', 'utf8');
    content = content.replace(/import React from 'react';\nimport Image from 'next\/image';/, 
      "import React from 'react';");
    fs.writeFileSync('src/app/security/page.tsx', content, 'utf8');
    console.log('✅ Fixed unused imports in: src/app/security/page.tsx');
  } catch (error) {
    console.error('❌ Error fixing imports in src/app/security/page.tsx:', error);
  }

  // Fix EducationSection.tsx
  try {
    let content = fs.readFileSync('src/components/EducationSection.tsx', 'utf8');
    content = content.replace(/import React from 'react';\nimport Link from 'next\/link';\nimport Image from 'next\/image';/, 
      "import React from 'react';\nimport Link from 'next/link';");
    fs.writeFileSync('src/components/EducationSection.tsx', content, 'utf8');
    console.log('✅ Fixed unused imports in: src/components/EducationSection.tsx');
  } catch (error) {
    console.error('❌ Error fixing imports in src/components/EducationSection.tsx:', error);
  }
}

// Process all files
let successCount = 0;
for (const file of filesToProcess) {
  if (fixEntities(file)) {
    successCount++;
  }
}

// Fix unused imports
fixUnusedImports();

console.log(`✅ All files processed successfully!`);