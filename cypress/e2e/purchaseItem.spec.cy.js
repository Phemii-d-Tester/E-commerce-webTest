import { faker } from "@faker-js/faker"
let sel
let ele
describe('Purchase an Item',()=> {
    before(()=>{
        cy.fixture('PurchaseLocators').then((Locators)=>{
            sel=Locators
        })
        cy.fixture('Locators').then((locators)=>{
            ele=locators
        })
    })

    it('purchases a book successfully',()=>{
// click the menu button and select shop
cy.get(ele.MenuButton).click();
cy.get(ele.ShopButton).click();

// Add mastering javascript to card
cy.get(sel.AddToCartBtn).click();
cy.get(sel.NavigateCartBtn).should('be.visible').click();

// Make payment
cy.get(sel.checkoutButton).click();

// Fill payment form
cy.get(sel.FirstName).type(faker.person.firstName());
cy.get(sel.LastName).type(faker.person.lastName());
cy.get(sel.Company).type(faker.company.name());
cy.get(sel.Email).type(faker.internet.email());
cy.get(sel.phoneNum).type('+2348155637829')
cy.get(sel.CountryDropdown).click();
cy.get(sel.SearchField).type('Nigeria')
cy.get(sel.Nigeria).should('be.visible').click();
cy.get(sel.StreetAddress).type(faker.location.streetAddress());
cy.get(sel.City).type(faker.location.city());
cy.get(sel.State).type(faker.location.state());
cy.get(sel.PostCode).type(faker.location.zipCode());
cy.get(sel.AdditionalInfo).type('This book is dear to me and it should be delivered on time.');
cy.get(sel.PlaceOrderBtn).click({force:true});
cy.get(sel.VerifyTxtBtn).should('be.visible').and('have.text', 'Our Bank Details');

    })

})