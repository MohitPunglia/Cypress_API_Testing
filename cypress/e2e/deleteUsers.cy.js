//import data from '../fixtures/createUser.json'


describe('DELETE API testing', () => {

    let randomEmail
    before(() => {
        cy.generateRandomEmail().then((data) => {
            randomEmail = data
        })

    })
    it.skip('del users', () => {
        let emailid = generateRandomEmail()
        cy.log(emailid)
        data.email = emailid
        cy.log(data)
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19'
            },
            body: data
        }).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).to.eq(201)

        })
    })
    it('test', () => {
        cy.log('EMAIL used for this test is =====>' + randomEmail)
        cy.fixture('createUser').then((responseObject) => {
            responseObject.email = randomEmail

            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19'
                },
                body: responseObject

            }).then((response) => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.eq(201)
                expect(response.body.id).to.not.be.null
            })
        })
    })


})

