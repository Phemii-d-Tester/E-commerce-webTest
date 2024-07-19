
describe("Verify that item are added to cart", () => {
  
  it("add item to cart successfully", () => {
    cy.VerifyInitialCartPrice();
    cy.AddAnItemToCart();
    cy.VerifyUpdatedCartValue();          
    cy.RemoveItemFromCart();
    cy.VerifyFinalCartValue();
    })

})