import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200/',
    testIsolation: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: "2xqznk"  // project ID to record cypress tests results
});
