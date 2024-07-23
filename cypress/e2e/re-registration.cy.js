
describe('Registration functionality', () => {
  it('Register new user', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > p:nth-child(3) > a').click()
    cy.get("input[id='customer.firstName']").type('Testfirstname')
    cy.get("input[id='customer.lastName']").type('Testlastname')
    cy.get("input[id='customer.address.street']").type('Collins')
    cy.get("input[id='customer.address.city']").type('Melbourne')
    cy.get("input[id='customer.address.state']").type('VIC')
    cy.get("input[id='customer.address.zipCode']").type('1000')
    cy.get("input[id='customer.phoneNumber']").type('00000000')
    cy.get("input[id='customer.ssn']").type('1111111')
    cy.get("input[id='customer.username']").type('Test')
    cy.get("input[id='customer.password").type('test1234')
    cy.get("#repeatedPassword").type('test1234')
    cy.get("[colspan='2'] > .button").click()
    //cy.get("span[id='customer.username.errors']").contains('This username already exists.')
    cy.get("span[id='customer.username.errors']").should('have.text','This username already exists.')

  })
})