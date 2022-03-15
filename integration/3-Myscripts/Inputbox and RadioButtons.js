describe('inputbox_and_RadioButtons', function(){
    it('Verify Input Box and Radio Buttons', function(){
        cy.visit("https://demo.guru99.com/test/newtours/")
        cy.url().should('include', 'newtours')

        cy.get('[name=userName]').should('be.visible').should('be.enabled').type("mercuty")
        cy.get('[name=password]').should('be.visible').should('be.enabled').type("mercuty")
        cy.get('[name=submit]').should('be.visible').click()

        cy.get('[href="reservation.php"]').should('be.visible').click()

        cy.get('[value=roundtrip]').should('be.visible').should('be.checked')
        cy.get('[value=oneway]').should('be.visible').should('not.be.checked').click()

        cy.get('[name=findFlights]').should('be.visible').click()

    })

})