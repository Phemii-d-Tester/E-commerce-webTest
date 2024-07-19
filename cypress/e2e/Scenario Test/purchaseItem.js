import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('I am on the e-commerce website', () => {
cy.visit('/')

});

When('I click on the shop button', () => {
    cy.PurchasePrep();
});

When('I add item and initiated payments', () => {
    cy.AddItemAndInitiatePayment();

});

Then('I shouldbe able to fill in my details on checkout page.', () => {
    cy.FillPaymentInfo();
});
