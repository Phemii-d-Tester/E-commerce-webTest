let actualCost
let InitialCartValue
let FinalCartValue
let ExpectedCartValue
let sel
describe("Verify that item are added to cart", () => {
before(()=>{
  cy.fixture('Add&removeItemsLocators').then((Locators)=>{
    sel=Locators
  })
})
  it("add item to cart successfully", () => {
    // click the menu button
    cy.get(sel.MenuButton).click();
    // Verify the initial value on the cart
    cy.get(sel.CartAmount)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const actualText = text.trim().replace("₹", "").replace(/,/g, "");
        InitialCartValue = parseFloat(actualText);
      
        // click the shop buttomn
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
            // Check the updated valiue of the cart to verify that the goods is being added
            // click the menu button
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
        })
    })
})
  
