/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom',

    include: [
      '**/*.test.ts', 
   '**/*.test*.ts'
  ],
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
  },
  plugins: [vue()],
});
