/** @type {import('knip').KnipConfig} */
export default {
  // Tell Knip about the Next.js project structure
  entry: [
    'app/**/{page,layout,not-found,error,loading}.{ts,tsx}',
    'app/globals.css',
    'next.config.mjs',
    'postcss.config.mjs',
  ],
  project: [
    'app/**/*.{ts,tsx,css}',
    'components/**/*.{ts,tsx}',
    'lib/**/*.{ts,tsx}',
  ],
  ignore: [
    '.next/**',
    'out/**',
    'node_modules/**',
    '**/*.d.ts',
  ],
  ignoreDependencies: [
    // Next.js peer deps that appear unused to static analysis
    'react',
    'react-dom',
    'tw-animate-css',
    'shadcn',
    '@tailwindcss/postcss',
  ],
}
