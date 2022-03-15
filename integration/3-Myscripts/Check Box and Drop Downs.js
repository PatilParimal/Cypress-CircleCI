describe('Check Box and Drop Downs', function(){
    it('CheckBoxes Handling', function(){
        cy.visit("http://demo.automationtesting.in/Register.html")

        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type=checkbox]').check(['Cricket','Hockey'])

    })

    it('Skills and Date Dropdown Handling', function(){
        cy.get('#Skills').select('Android').should('have.value','Android')
        
        cy.get('#yearbox').select('1996').should('have.value','1996')
        cy.get('[placeholder=Month]').select('October').should('have.value','October')
        cy.get('#daybox').select('28').should('have.value','28')

        cy.get('[value=Refresh]').click()
    })

    it('Languages MultiSelect', function(){
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Arabic').click()
        cy.get('.ui-corner-all').contains('Czech').click()
        cy.get('.ui-corner-all').contains('Dutch').click()

        //cy.get('[value=Refresh]').click()

    })

    it('Countries Searchable Dropdown Handling', function(){
        
        cy.get('[role=combobox]').click({force: true})
       cy.get('.select2-search__field').type('Ind')
       cy.get('.select2-search__field').type('{enter}')

       //cy.get('[value=Refresh]').click()

    })
})