describe('formas de encontrar un elemento', function () {
    it('buscar en el buscador', function () {
        cy.visit('http://localhost:3000/');
        cy.get('.userinput__forminput').type('Alanis'); //Buscamos por clase (debe comenzar por un .)
        // cy.get('#search_query_top').type(' Como te va'); //Buscamos por ID (debe comenzar por #)
        // cy.get('[name="search_query"]').type(' Me va muy bien') // Buscamos por otra propiedad
        // cy.get('[placeholder="Search"]').clear(); //Clear borra lo que esta en el elemento
    })
})