describe('Alerts Handling', function(){
    it('Simple Alerts', function(){
        cy.visit('https://mypage.rediff.com/login/dologin')

        cy.get('input[value=Login]').click()

         cy.on('window.alert',(str)=>
         {expect(str).to.equal('Please enter valid email')})

    })

    it('Confirmation Alerts', function(){
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('[onclick="myFunction()"]').click()
         
         cy.on('window.confirm',(str)=>
         {expect(str).to.equal('Press a button!')})
        

    })
})