describe('LoginTest', function(){
    it('Visit TestProject LoginPage', function(){
        //Visit the Website
        cy.visit('https://app.testproject.io/')
        cy.title().should('eq', 'TestProject - Login')

        //Input the username
        cy.get('#username')
        .type('parimalpatil0369@gmail.com')
        .should('have.value', 'parimalpatil0369@gmail.com')

        //Input the Password
        cy.get('#password')
        .type('Parimal@0369')
        .should('have.value', 'Parimal@0369')

        //Click on Signin button
        cy.get('#tp-sign-in')
        .click()

        cy.wait(10000)

        //Assertion of Login
        cy.get('#top-bar-row-1 > div.logo-and-links > div.links > a.link.active')
        .should("be.visible")

        //cy.title().should('eq', 'TestProject')
    })
})