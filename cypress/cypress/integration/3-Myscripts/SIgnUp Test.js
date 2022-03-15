describe('LoginTest', function(){
    it('Perform the Signup', function(){
        //Visit the Website
        cy.visit('https://app.testproject.io/')

        //cy.wait(10000)

        //Click on Signup button
        cy.get('#tp-signup-link').click() 
        

        //Input Email
        cy.get('#email').type('parimal0369@gmail.com')
        .should('have.value', 'parimal0369@gmail.com')

        //Click on Continue button
        cy.get('#tp-continue-btn').click()

        //Input First Name
        cy.get('#first-name').type('Parimal')
        .should('have.value', 'Parimal')

        //Input Last Name
        cy.get('#last-name').type('Patil')
        .should('have.value', 'Patil')

        //Input Password
        cy.get('#password').type('Parimal@0369')
        .should('have.value', 'Parimal@0369')

        //Click on Agree conditions box
        cy.get('#eula').click()

        //click on signup button
        cy.get('#tp-sign-up').click()
    })
})