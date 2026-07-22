/**
 * lint-staged configuration using JS API so we can run tsc
 * without passing individual filenames (which breaks --project).
 */
export default {
  '**/*.{ts,tsx}': ['eslint --fix'],
  // Use a function: lint-staged will call it with staged filenames,
  // but we return a command that ignores them so tsc uses tsconfig.json.
  '**/*.{ts,tsx,json}': () => 'pnpm run typecheck',
}
