describe('End to End API testing', () => {

    let randomEmail

    before(() => {
        cy.generateRandomEmail().then((data) => {
            randomEmail = data
        })
    })

    it('using custom commands', () => {
        cy.fixture('createUser').then((requestpayload) => {
            requestpayload.email = randomEmail
            cy.postAPI(requestpayload).then((response) => {
               // cy.log(JSON.stringify(response))
                expect(response.status).to.be.equal(201)
                let userId = response.body.id
                cy.getAPI(userId).then((response) => {
                    expect(response.status).to.be.equal(200)
                })
                cy.deleteAPI(userId).then((response) => {
                    expect(response.status).to.be.equal(204)
                })
            })
        })

    })
})