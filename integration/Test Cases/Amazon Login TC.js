/// <reference types = "cypress" />

import LoginPage from '../Page Objects/Amazon Login PO'

describe('Fixtures Handling', function(){


    it('Amazon Login Test', function(){
        const lp = new LoginPage()

        lp.visit()

        lp.InputMob('9657198444')

        lp.InputPassword('Minal@0369')

        lp.ClickOnSignIn()

        lp.SignInAssert()
    })
})