import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    coverage: {
      // you can include other reporters, but 'json-summary' is required, json is recommended
      reporter: ['text', 'json-summary', 'json'],
      lines: 90,
      branches: 90,
      functions: 90,
      statements: 90
    }
  }
});