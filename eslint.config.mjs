// @ts-check
import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactHooks from 'eslint-plugin-react-hooks'
import boundaries from 'eslint-plugin-boundaries'

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * ANTI-GRAVITY GUARDRAIL — ESLint Configuration
 * Enforces:
 *  1. Architectural layer boundaries (app → components → lib → ui)
 *  2. No hardcoded CSS values in style={{ }} that bypass the token system
 *  3. TypeScript strict mode (no-any, consistent-type-imports)
 *  4. React hooks rules (no stale closures, proper effect discipline)
 * ─────────────────────────────────────────────────────────────────────────────
 */

export default [
  // ── Global ignores ─────────────────────────────────────────────────────────
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      '.vercel/**',
      'postcss.config.mjs',
      'pnpm-lock.yaml',
      'next.config.mjs',
      'knip.config.mjs',
    ],
  },

  // ── Base JS rules (browser + ES2021 globals) ────────────────────────────
  {
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        // Browser globals — needed for window, document, navigator, etc.
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        HTMLElement: 'readonly',
        HTMLAnchorElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLButtonElement: 'readonly',
        Event: 'readonly',
        MouseEvent: 'readonly',
        KeyboardEvent: 'readonly',
        IntersectionObserver: 'readonly',
        ResizeObserver: 'readonly',
        MutationObserver: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        // Node globals (for config files)
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
  },

  // ── TypeScript + JSX files ──────────────────────────────────────────────
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        // React 19 JSX transform — no import needed
        React: 'readonly',
        JSX: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks,
      boundaries,
    },
    settings: {
      // ── Architectural layers for eslint-plugin-boundaries v7 ─────────────
      'boundaries/elements': [
        { type: 'app',        pattern: 'app/**' },
        { type: 'components', pattern: 'components/**' },
        { type: 'ui',         pattern: 'components/ui/**' },
        { type: 'lib',        pattern: 'lib/**' },
      ],
    },
    rules: {
      // ── TypeScript ──────────────────────────────────────────────────────
      ...tsPlugin.configs['recommended'].rules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',

      // ── React Hooks (catches stale closures, missing deps) ───────────────
      ...reactHooks.configs.recommended.rules,
      // Allow setState inside effects if it's in a callback (common pattern for
      // reading initial DOM state like dark mode detection)
      'react-hooks/set-state-in-effect': 'warn',

      // ── GUARDRAIL 1: Block hardcoded CSS literal values in style={{ }} ───
      // CSS custom property var() references are permitted:
      //   ✅ style={{ color: 'var(--color-amazon)' }}
      //   ❌ style={{ color: '#ff0000' }}
      //   ❌ style={{ padding: '12px' }}
      'no-restricted-syntax': [
        'error',
        {
          selector:
            'JSXAttribute[name.name="style"] > JSXExpressionContainer > ObjectExpression > Property > Literal[value=/^(#[0-9a-fA-F]{3,8}|rgb|hsl|\\d+px|\\d+rem|\\d+em|transparent|white|black|red|blue|green|yellow|orange|purple).*/i]',
          message:
            '[GUARDRAIL] Hardcoded CSS value in style={{ }}. Use CSS custom properties (var(--token)) from globals.css or Tailwind token classes instead.',
        },
      ],

      // ── GUARDRAIL 2: Architectural layer boundaries (v7 syntax) ──────────
      'boundaries/dependencies': [
        'error',
        {
          default: 'disallow',
          policies: [
            // Pages can import components and lib
            {
              from: [{ type: 'app' }],
              allow: [{ type: 'components' }, { type: 'ui' }, { type: 'lib' }],
            },
            // Components can import ui primitives and lib utilities
            {
              from: [{ type: 'components' }],
              allow: [{ type: 'components' }, { type: 'ui' }, { type: 'lib' }],
            },
            // UI primitives are self-contained — no upward imports
            {
              from: [{ type: 'ui' }],
              allow: [{ type: 'ui' }, { type: 'lib' }],
            },
            // Lib is pure utilities — no component imports
            {
              from: [{ type: 'lib' }],
              allow: [{ type: 'lib' }],
            },
          ],
        },
      ],
    },
  },
]
