describe('Fixtures Handling', function(){

    before(function(){
        cy.fixture('Amazon Login Details').then(function(data){
            this.data = data
        })
    }) 

    it('DemoTest', function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-link-accountList').click()
        cy.get('#ap_email').type(this.data.mob)
        cy.get('#continue').click()
        cy.get('#ap_password').type(this.data.password)
        cy.get('#signInSubmit').click()
        cy.get('#glow-ingress-line1').contains('Deliver to parimal')
    })
})