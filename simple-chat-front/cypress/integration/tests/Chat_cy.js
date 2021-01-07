describe('Chat compontent testing suite', function () {
    it('It opens the chat room #3', function () {
        cy.visit('http://localhost:3000/chat');
        cy.get('.chat__right > :nth-child(4)').click();
    })
    it('It types on the message bar `This is a test message`', function () {
        cy.get('.chat__barinput').type('This is a test message');
    })
    it('It exits the chat room', function () {
        cy.get('.chat__headertext--exit').click();
    })
})