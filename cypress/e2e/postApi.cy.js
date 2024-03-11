import payload from '../config/payload.json'
import test from '../config/test.json'

describe('POST API Testing', () => {

    function generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 10)
        const email = randomString + "@gmail.com"
        return email
    }

    it('Create users', () => {

        let emailid = generateRandomEmail()

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19'
            },
            body: {
                "name": "Tenali",
                "gender": "male",
                "email": emailid,
                "status": "active"
            }

        }).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).to.eq(201)
            expect(response.body).has.property("name", "Tenali")
            expect(response.body).has.property("gender", "male")
            expect(response.body).has.property("email", emailid)
            expect(response.body).has.property("status", "active")
            expect(response.body.id).to.not.be.null
        })
    })


    it('Fetch from Fixture folder', () => {
    
        cy.fixture('createUser').then((responseObject) => {
            responseObject.email=generateRandomEmail()
            responseObject.name=test.name

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
                expect(response.body).has.property("name", "John")
                expect(response.body).has.property("gender", "male")
               // expect(response.body).has.property("email", emailid)
                expect(response.body).has.property("status", "active")
                expect(response.body.id).to.not.be.null
            })
        })

    })

    it('Fetch from Config folder',()=>{
        payload.email=generateRandomEmail()

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19'
            },
            body: payload

        }).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).to.eq(201)
            expect(response.body).has.property("name", "Tenali")
            expect(response.body).has.property("gender", "male")
           // expect(response.body).has.property("email", emailid)
            expect(response.body).has.property("status", "active")
            expect(response.body.id).to.not.be.null
        })
    })

})