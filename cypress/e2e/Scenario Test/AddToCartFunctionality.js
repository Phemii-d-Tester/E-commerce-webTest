import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('I have verified initial cart value', () => {
    cy.VerifyInitialCartPrice;
});

When('I add an item to cart', () => {
    cy.AddAnItemToCart();
});

Then('I should see the cart value updated.', () => {
    cy.VerifyUpdatedCartValue();
});
