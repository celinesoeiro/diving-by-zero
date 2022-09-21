import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    baseUrl: 'http://localhost:3000',
    videoUploadOnPasses: false,
  },
  env: {
    codeCoverage: {
      url: 'http://localhost:3000/__coverage__',
    },
  },
});
