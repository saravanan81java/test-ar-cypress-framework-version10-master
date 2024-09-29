const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 't9hicr',
  
  e2e: {
    watchForFileChanges: false,
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    setupNodeEvents(on, config) {
      
    },
  },
});
