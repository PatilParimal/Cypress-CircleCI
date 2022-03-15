describe('Hooks', function(){

    before(function(){
        cy.log('********** This is SETUP **********')
    })

    beforeEach(function(){
        cy.log('********** This is LOGIN**********')
    })

    after(function(){
        cy.log('********** This is TEARDOWN **********')
    })

    afterEach(function(){
        cy.log('********** This is LOGOUT **********')
    })

    it('Searching', function(){
        cy.log('********** This is Searching Test **********')
    })

    it('Advance Searching', function(){
        cy.log('********** This is Advance Searching Test **********')
    })

    it('Product Listing', function(){
        cy.log('********** This is Product Listing Test **********')
    })
})