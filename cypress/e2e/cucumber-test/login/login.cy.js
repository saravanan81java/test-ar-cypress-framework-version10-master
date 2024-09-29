import { Given, When } from "@badeball/cypress-cucumber-preprocessor"

Given("Open the application", () => {
    cy.visit("https://www.duckduckgo.com");
  });
  