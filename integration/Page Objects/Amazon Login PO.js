/// <reference types = "cypress" />
class LoginPage
{
    visit(){
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-link-accountList').click()
    }

    InputMob(mob){
        const feild = cy.get('#ap_email').type(mob)
        cy.get('#continue').click()
    }

    InputPassword(pass){
        cy.get('#ap_password').type(pass)
    }

    ClickOnSignIn(){
        cy.get('#signInSubmit').click()
    }

    SignInAssert(){
        cy.get('#glow-ingress-line1').contains('Deliver to parimal')
    }

}

export default LoginPage