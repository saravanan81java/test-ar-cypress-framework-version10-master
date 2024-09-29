export class HomePage{

    loginButton(){
        return cy.get('#header_login_link')
     }

    acceptCookies(){
       return cy.get('.accept-btn-container')
    }

}