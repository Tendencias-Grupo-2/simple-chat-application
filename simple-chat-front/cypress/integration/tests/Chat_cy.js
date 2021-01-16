const stagingHost = 'http://localhost:3000';

describe('Chat compontent testing suite', function () {
    it('It opens the chat room #3', function () {
        cy.visit(stagingHost);
        cy.get('.userinput__forminput').type('Alanis');
        cy.get('.userinput__btn--join').click();
        cy.get('.chat__right > :nth-child(3)').click();
    })
    it('It types on the message bar `This is a test message`', function () {
        cy.get('.chat__barinput').type('This is a test message');
    })
    it('It sends the message chat room #3', function () {
        cy.get('.chat__barbtn').click();
    })
    it('It exits the chat room', function () {
        cy.get('.chat__headertext--exit').click();
    })
})