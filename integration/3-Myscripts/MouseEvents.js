import '@4tw/cypress-drag-drop'
describe("Mouse Events", ()=>{
    it("Right Click", ()=>{
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.get('[class="context-menu-one btn btn-neutral"]').rightclick()
        
    })

    it("Double Click", ()=>{
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.get('[ondblclick="myFunction()"]').dblclick()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('You double clicked me.. Thank You..')
        })
    })

    it("Mouse Over", ()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-al-your-account > a:nth-child(2) > span').should('not.be.visible')
        cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover')
        cy.get('#nav-al-your-account > a:nth-child(2) > span').should('be.visible')
    })

    it("Drag and Drop", ()=>{
        cy.visit('https://demos.telerik.com/kendo-ui/dragdrop/index')
        cy.get('[id=draggable]').drag('[id=droptarget]')
        
    })

    it("Scroll to View", ()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('.navFooterBackToTopText').scrollIntoView({duration:3000})
        cy.get('#nav-logo-sprites').scrollIntoView({duration:5000})
        
    })


})