/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  /**
   * ─────────────────────────────────────────────────────────────────────────
   * ANTI-GRAVITY GUARDRAIL — Dependency Cruiser Configuration
   *
   * Enforces the following architectural layer graph:
   *
   *   app/ ──────────────┐
   *                       ▼
   *   components/  ──► components/ui/
   *                       ▼
   *                      lib/
   *
   * Rules:
   *  1. No circular dependencies (anywhere)
   *  2. lib/ cannot import from components/ or app/
   *  3. components/ui/ cannot import from components/ non-ui folders
   *  4. No app/page imports from other app/pages
   *  5. No reaching into node_modules internals
   * ─────────────────────────────────────────────────────────────────────────
   */
  forbidden: [
    // ── RULE 1: No circular dependencies ─────────────────────────────────
    {
      name: 'no-circular',
      severity: 'error',
      comment: 'Circular dependencies cause initialization order bugs and are a sign of bad architecture.',
      from: {},
      to: { circular: true },
    },

    // ── RULE 2: lib/ must be pure — no UI or app imports ─────────────────
    {
      name: 'lib-no-ui-imports',
      severity: 'error',
      comment: 'lib/ is pure utility code and must not import from components/ or app/.',
      from: { path: '^lib/' },
      to: { path: '^(components|app)/' },
    },

    // ── RULE 3: components/ui/ must not import from higher-level components
    {
      name: 'ui-primitives-self-contained',
      severity: 'error',
      comment: 'components/ui/ primitives must not import from other component subdirectories.',
      from: { path: '^components/ui/' },
      to: {
        path: '^components/',
        pathNot: '^components/ui/',
      },
    },

    // ── RULE 4: app/pages must not import from sibling pages ──────────────
    {
      name: 'no-page-to-page-imports',
      severity: 'error',
      comment: 'Next.js pages must not directly import from sibling pages. Use components/ instead.',
      from: { path: '^app/.+/page\\.tsx' },
      to: { path: '^app/.+/page\\.tsx' },
    },

    // ── RULE 5: No deprecated node modules ────────────────────────────────
    {
      name: 'no-deprecated-core',
      severity: 'warn',
      comment: 'Avoid deprecated Node.js core modules.',
      from: {},
      to: {
        dependencyTypes: ['core'],
        path: '^(punycode|domexception)$',
      },
    },

    // ── RULE 6: Orphan detection — flag completely disconnected files ──────
    {
      name: 'no-orphans',
      severity: 'warn',
      comment: 'Files with no incoming or outgoing dependencies are likely dead code left by AI sessions.',
      from: {
        orphan: true,
        pathNot: [
          '\\.d\\.ts$',
          '(^|/)\\.[^/]+\\.(js|cjs|mjs|ts|json)$', // config files
          '\\.test\\.(ts|tsx)$',
          'next-env\\.d\\.ts$',
        ],
      },
      to: {},
    },
  ],

  // ── Module resolution ────────────────────────────────────────────────────
  options: {
    doNotFollow: {
      path: 'node_modules',
    },
    tsPreCompilationDeps: true,
    enhancedResolveOptions: {
      exportsFields: ['exports'],
      conditionNames: ['import', 'require', 'node', 'default'],
      mainFields: ['module', 'main', 'types'],
    },
    tsConfig: {
      fileName: 'tsconfig.json',
    },
    // Output as a visual dependency graph (run: npx depcruise --output-type dot app components lib | dot -T svg > arch.svg)
    reporterOptions: {
      dot: {
        collapsePattern: 'node_modules/[^/]+',
      },
    },
    progress: { type: 'performance-log' },
  },
}
