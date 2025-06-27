const { defineConfig } = require("cypress");
const { configureVisualRegression } = require('cypress-visual-regression')

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ten.ddev.site",
    env: {
      visualRegressionType: 'regression'
    },
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on, config) {
      configureVisualRegression(on)
      // implement node event listeners here
    },
  },
});



