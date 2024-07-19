
describe('Purchase an Item',()=> {
    
it('purchases a book successfully',()=>{
    cy.PurchasePrep();
    cy.AddItemAndInitiatePayment();
    cy.FillPaymentInfo();
    })

})