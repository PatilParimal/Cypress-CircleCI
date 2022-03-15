describe('Navigation Handling', function(){
    it('Navigation Handling', function(){
        cy.visit('https://www.flipkart.com/')
        cy.get('[alt="Grocery"]').should('be.visible')
        //cy.title().should('eq', 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')

        cy.get('[alt="Top Offers"]').click()
        cy.get('[class="_2I9KP_"]').should('be.visible')
        
       
        cy.go(-1)
        cy.get('[alt="Grocery"]').should('be.visible')
        
        cy.go(1)
        cy.get('[class="_2I9KP_"]').should('be.visible')

        cy.go('back')
        cy.get('[alt="Grocery"]').should('be.visible')

        cy.go('forward')
        cy.get('[class="_2I9KP_"]').should('be.visible')
        
        cy.reload()
    })
})