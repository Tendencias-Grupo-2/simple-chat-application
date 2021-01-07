describe('UserNameInput compontent testing suite', function () {
    beforeEach(function() {
        cy.visit('http://localhost:3000/');
    })
    it('It types the name `Alanis` in the UserNameInput', function () {
        cy.get('.userinput__forminput').type('Alanis'); 
    })
    it('It clears the UserNameInput', function () {
        cy.get('.userinput__btn--clear').click();
    })
    it('It types the name `Jeremy` in the UserNameInput', function () {
        cy.get('.userinput__forminput').type('Jeremy'); 
        cy.get('.userinput__btn--join').click();
    })
})