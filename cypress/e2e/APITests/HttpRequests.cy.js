describe("HTTP Requests", () => {


    it("Get Call", ()=> {

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200);
    })

    it("POST Call", () => {

        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                title: 'This post',
                body: 'This is post call',
                userId: 1
            }
        })
        .its('status')
        .should('equal', 201);
    })

    it("Put Call", () => {

        cy.request( {
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: 'Test post -Updated',
                body: 'This is a PUT call',
                userId: 1,
                id: 1
                }
                
        })
        .its('status')
        .should('equal', 200);
    })

    it("Delete Call", () => {

        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        })
    .its('status')
    .should('equal', 200);
    })

})