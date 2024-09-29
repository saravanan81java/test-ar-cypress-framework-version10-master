/// <reference types="cypress"/>

import { Login } from "../PageObjects/loginPageObjects"
import { HomePage } from "../PageObjects/homePageObjects"

const lp = new Login()
const hp = new HomePage()

  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720)

  })

describe('empty spec', () => {
  
  it('passes', () => {
    //cy.visit('https://automation:zPdgwH`dCXPzpAd6K.g$@dev.distrelec.ch')
    cy.visit('https://pretest.distrelec.ch/')
    hp.acceptCookies().click()
    cy.get(':nth-child(1) > app-home-banner > .container > #home_banner_container > .home-container__rnl > app-quick-order > #quick_order_container > .quickorder-list > :nth-child(1) > #quick_order_art_nr').then(function(el){
      const url = el.prop('href')
      cy.log("************URL*********************")
      cy.log(url)
    })
    cy.get('#sitesettings_menu').click({ force: true })
    cy.get('#sitesettings_language_radio_de').click({ force: true })
    cy.get('#sitesettings_button_save').click()
    hp.loginButton().click({ force: true })
    lp.username().type('auto@gmail.com')
    lp.password().type('password')
   
  })
})