import { compile, optimize } from './node_modules/@tailwindcss/node/dist/index.mjs';
import { Scanner } from './node_modules/@tailwindcss/oxide/index.js';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputFile = resolve(__dirname, 'src/app/tailwind.css');
const srcDir = resolve(__dirname, 'src');

console.log('Scanning source files for Tailwind classes...');

// Use oxide scanner to find all used class candidates
const scanner = new Scanner({
  sources: [
    { base: srcDir, pattern: '**/*.tsx', negated: false },
    { base: srcDir, pattern: '**/*.ts',  negated: false },
  ],
});
const candidates = scanner.scan();
console.log(`Found ${candidates.length} class candidates`);

console.log('Compiling Tailwind CSS...');

// Compile Tailwind CSS using the low-level node API
const inputCSS = '@import "tailwindcss";';

const compiler = await compile(inputCSS, {
  base: __dirname,
  onDependency: () => {},
});

// Build CSS for all found candidates + common base classes
const allCandidates = [...new Set([...candidates])];
const result = compiler.build(allCandidates);

// Optimize the output
const optimized = optimize(result, { minify: false });

writeFileSync(outputFile, optimized.code);
const sizeKb = (optimized.code.length / 1024).toFixed(1);
console.log(`Done! CSS written to ${outputFile}`);
console.log(`Output size: ${sizeKb} KB`);
console.log(`Responsive utilities: ${optimized.code.includes('@media (min-width') ? 'YES ✓' : 'NO ✗'}`);
