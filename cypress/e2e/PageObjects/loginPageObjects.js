export class Login{

   username(){
    return cy.get(':nth-child(1) > :nth-child(2) > #j_username')
   }
   
   password(){
    return cy.get('#j_password')
   }

}