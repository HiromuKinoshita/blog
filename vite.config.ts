import { defineConfig } from 'vitest/config'

export default defineConfig({
  define: {
    'import.meta.vitest': false,
  },
  test: {
    includeSource: [
      'components/**/*.{js,jsx,ts,tsx}',
      'pages/**/*.{js,jsx,ts,tsx}',
    ],
    include: [
      '**/*.{test,spec}.{js,jsx,ts,tsx}',
    ],
  },
})
