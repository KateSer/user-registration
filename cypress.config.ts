import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200/',
    testIsolation: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: "d3o4m9"  // project ID to record cypress tests results
});
