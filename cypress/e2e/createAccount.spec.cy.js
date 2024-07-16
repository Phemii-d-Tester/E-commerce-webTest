
let inboxId
let emailAdress
let emailBody

describe('Create an account', () => {

  it('Signs up successfully', () => {
    // Click the Account button and verify the header text in the account page.
    cy.get('#menu-icon').click();
    cy.get('[href="https\:\/\/practice\.automationtesting\.in\/my-account\/"]').should('be.visible').click();
    cy.get('[class="u-column2 col-2"] h2').should('be.visible').and('have.text','Register');
    cy.get('[class="u-column1 col-1"] h2').should('be.visible').and('have.text','Login');

  // Fill the email directly from mailslurp
    cy.mailslurp().then(mailslurp => mailslurp.createInbox())
    .then(inbox => {
        inboxId = inbox.id
        emailAdress = inbox.emailAddress
        cy.get('input#reg_email').type(emailAdress)
    });

    // Fill in the password and click the Register button
    cy.get('#reg_password').type('Tester@344947+%');
    cy.get('input[name="register"]').should('be.visible').click();

    // Successful SignUp verification text
    cy.get('.woocommerce-MyAccount-content p:nth-of-type(1)').should('be.visible');

  })
})