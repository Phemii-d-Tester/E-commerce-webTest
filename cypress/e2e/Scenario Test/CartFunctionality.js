import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('I have verified initial cart value', () => {
    cy.VerifyInitialCartPrice();
});

When('I add an item to cart', () => {
    cy.AddAnItemToCart();
});

Then('I should see the cart value updated.', () => {
    cy.VerifyUpdatedCartValue();
});

// Second scenario

Given('I launched the e-commerce app again', () => {
    cy.visit('/')
    
    });
    
Given('I verified the initial price on the cart$', () => {
  cy.VerifyInitialCartPrice();
});

Then('I added and Item to the cart', () => {
	cy.AddAnItemToCart();
});

Then('I should see the updated cart value', () => {
	cy.VerifyUpdatedCartValue();
});

When('I remove the item again from the cart', () => {
	cy.RemoveItemFromCart();
});

Then('The cart should display the right value', () => {
	cy.VerifyFinalCartValue();
});
