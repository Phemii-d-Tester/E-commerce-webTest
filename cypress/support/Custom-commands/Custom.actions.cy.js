
import { faker } from "@faker-js/faker"
let sel
let ele
let actualCost
let InitialCartValue
let FinalCartValue
let ExpectedCartValue

before(()=>{
    cy.fixture('PurchaseLocators').then((Locators)=>{
        ele=Locators
    })
    cy.fixture('Locators').then((locators)=>{
        sel=locators
    })
})

Cypress.Commands.add('VerifyInitialCartPrice', () => {
    cy.get(sel.MenuButton).click();
    // Verify the initial value on the cart
    cy.get(sel.CartAmount)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const actualText = text.trim().replace("₹", "").replace(/,/g, "");
        InitialCartValue = parseFloat(actualText);
    
 })
})

Cypress.Commands.add('AddAnItemToCart', () => {

    cy.get(sel.ShopButton)
    .should("be.visible")
    .click();
  //  Verify the amount of Matering javascript book
  cy.get(sel.PriceTag) 
    .invoke("text")
    .then((text) => {
      const actualtext = text.trim().replace("₹", "").replace(/,/g, "");
      actualCost = parseFloat(actualtext);
    
      // Add Matering javascript book to cart
      cy.get(sel.MJBook).click();
      cy.wait(3000);
})
})

Cypress.Commands.add('VerifyUpdatedCartValue', () => {
    cy.get(sel.MenuButton).click();
            // Verify the initial value on the cart
            cy.get(sel.CartAmount)
              .should("be.visible")
              .invoke("text")
              .then((text) => {
                const actualText = text
                  .trim()
                  .replace("₹", "")
                  .replace(/,/g, "");
                FinalCartValue = parseFloat(actualText);
              
            // verify that the expected value of the item matches the  final cart Value
                ExpectedCartValue = InitialCartValue + actualCost;
                expect(ExpectedCartValue).to.eq(FinalCartValue);
              });
          });

Cypress.Commands.add('RemoveItemFromCart', () => { 
    cy.get(sel.CartButton).click();
    cy.get(sel.RemoveItemButton).click();
    cy.get(sel.VerificationText).should('be.visible').and('have.text','Mastering JavaScript removed. Undo?');
    cy.wait(3000);
})

Cypress.Commands.add('VerifyFinalCartValue', () => { 
    cy.get(sel.MenuButton).click();
        // Verify the value after an item is removed from cart
        cy.get(sel.CartAmount)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          const actualText = text
            .trim()
            .replace("₹", "")
            .replace(/,/g, "");
            FinalCartValue = parseFloat(actualText);
//       Validate that the price on the cart now reflect the default price before an item was added.
            expect(InitialCartValue).to.eq(FinalCartValue);
        })
    })

Cypress.Commands.add('PurchasePrep',()=>{
    cy.get(sel.MenuButton).click();
    cy.get(sel.ShopButton).click();
})

Cypress.Commands.add('AddItemAndInitiatePayment',()=>{
    cy.get(ele.AddToCartBtn).click();
cy.get(ele.NavigateCartBtn).should('be.visible').click();

// Make payment
cy.get(ele.checkoutButton).click();
})

Cypress.Commands.add('FillPaymentInfo',()=>{
cy.get(ele.FirstName).type(faker.person.firstName());
cy.get(ele.LastName).type(faker.person.lastName());
cy.get(ele.Company).type(faker.company.name());
cy.get(ele.Email).type(faker.internet.email());
cy.get(ele.phoneNum).type('+2348155637829')
cy.get(ele.CountryDropdown).click();
cy.get(ele.SearchField).type('Nigeria')
cy.get(ele.Nigeria).should('be.visible').click();
cy.get(ele.StreetAddress).type(faker.location.streetAddress());
cy.get(ele.City).type(faker.location.city());
cy.get(ele.State).type(faker.location.state());
cy.get(ele.PostCode).type(faker.location.zipCode());
cy.get(ele.AdditionalInfo).type('This book is dear to me and it should be delivered on time.');
cy.get(ele.PlaceOrderBtn).click({force:true});
cy.get(ele.VerifyTxtBtn).should('be.visible').and('have.text', 'Our Bank Details');

})
