const fs = require('fs');
const path = require('path');

// Function to fix unescaped entities in a file while preserving JS expressions
function fixEntities(filePath) {
  console.log(`🔍 Processing: ${filePath}`);
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // First, extract and protect all JSX expressions
    const jsxExpressions = [];
    let expressionRegex = /{[^{}]*}/g;
    let match;
    let protectedContent = content.replace(expressionRegex, (match) => {
      const placeholder = `__JSX_EXPRESSION_${jsxExpressions.length}__`;
      jsxExpressions.push(match);
      return placeholder;
    });

    // Fix HTML entities in the protected content
    protectedContent = protectedContent.replace(/(\s|>)"([^"<>]*)"(<|\s)/g, '$1&ldquo;$2&rdquo;$3'); // Replace double quotes in JSX
    protectedContent = protectedContent.replace(/(\s|>)'([^'<>]*)'(<|\s)/g, '$1&lsquo;$2&rsquo;$3'); // Replace single quotes in JSX
    protectedContent = protectedContent.replace(/(\w)\'(\w)/g, '$1&apos;$2'); // Replace apostrophes in contractions

    // Special case for quotes inside quotes (like in testimonials)
    protectedContent = protectedContent.replace(/"(\s*\{[^{}]*\}\s*)"/g, '&ldquo;$1&rdquo;');

    // Restore the JSX expressions
    let restoredContent = protectedContent;
    for (let i = 0; i < jsxExpressions.length; i++) {
      restoredContent = restoredContent.replace(`__JSX_EXPRESSION_${i}__`, jsxExpressions[i]);
    }

    fs.writeFileSync(filePath, restoredContent, 'utf8');
    console.log(`✅ Fixed unescaped entities in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
    return false;
  }
}

// Function to fix incorrect HTML entities inside JS expressions
function fixEntitiesInJsExpressions(filePath) {
  console.log(`🔧 Fixing JS expressions in: ${filePath}`);
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix HTML entities inside JSX expressions
    content = content.replace(/{([^{}]*)&ldquo;([^{}]*)&rdquo;([^{}]*)}/g, '{$1"$2"$3}');
    content = content.replace(/{([^{}]*)&lsquo;([^{}]*)&rsquo;([^{}]*)}/g, "{$1'$2'$3}");
    content = content.replace(/{([^{}]*)&apos;([^{}]*)}/g, "{$1'$2}");

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed JS expressions in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error fixing JS expressions in ${filePath}:`, error);
    return false;
  }
}

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

  // Fix security/page.tsx
  try {
    let content = fs.readFileSync('src/app/security/page.tsx', 'utf8');
    if (!content.includes("<Image")) {
      content = content.replace(/import React from 'react';\nimport Image from 'next\/image';/, 
        "import React from 'react';");
      fs.writeFileSync('src/app/security/page.tsx', content, 'utf8');
      console.log('✅ Fixed unused imports in: src/app/security/page.tsx');
    }
  } catch (error) {
    console.error('❌ Error fixing imports in src/app/security/page.tsx:', error);
  }

  // Fix EducationSection.tsx
  try {
    let content = fs.readFileSync('src/components/EducationSection.tsx', 'utf8');
    if (!content.includes("<Image")) {
      content = content.replace(/import React from 'react';\nimport Link from 'next\/link';\nimport Image from 'next\/image';/, 
        "import React from 'react';\nimport Link from 'next/link';");
      fs.writeFileSync('src/components/EducationSection.tsx', content, 'utf8');
      console.log('✅ Fixed unused imports in: src/components/EducationSection.tsx');
    }
  } catch (error) {
    console.error('❌ Error fixing imports in src/components/EducationSection.tsx:', error);
  }
}

// Files to process
const filesToProcess = [
  'src/app/testimonials/page.tsx'
];

// Process all files
let successCount = 0;
for (const file of filesToProcess) {
  if (fixEntitiesInJsExpressions(file)) {
    successCount++;
  }
}

console.log(`✅ All files processed successfully!`);