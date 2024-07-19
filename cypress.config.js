const { defineConfig } = require("cypress");

// const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

// async function setupNodeEvents(on, config) {
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);

//   on("file:preprocessor", browserify.default(config));

//   return config;
// }


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://practice.automationtesting.in",
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    // specPattern: "**/*.feature",
    watchForFileChanges: false,
    defaultCommandTimeout: 20000,
    env: {
      "MAILSLURP_API_KEY":"238dbc0bcd01f3c8b7d4cd42b91b7a80b8af2cf4e5fd7487c311f089562dc43a"
   },
    //  setupNodeEvents,
  },
  });

