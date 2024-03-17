import putdata from '../config/putPayload.json'
import postpayload from '../config/payload.json'

describe('PUT API call', () => {

    it('PUT API testing', () => {
        cy.request({
            method: 'PUT',
            url: 'https://gorest.co.in/public/v2/users/6770293',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19'
            },
            body: {
                "name": "Allasani Peddana",
                "email": "allasani.peddana@15ce.com",
                "status": "active"
            }
        }).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).to.be.equal(200)
            expect(response.body).has.property("name", "Allasani Peddana")

        })
    })


    it('Payload from fixture', () => {
        cy.fixture('updateUser').then((payload) => {
            cy.request({
                method: 'PUT',
                url: 'https://gorest.co.in/public/v2/users/6770293',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19'
                },
                body: payload
            }).then((response) => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.be.equal(200)
                expect(response.body).has.property("name", "Allasani")

            })
        })
    })


    it('payload from config folder',()=>{
        cy.request({
            method: 'PUT',
            url: 'https://gorest.co.in/public/v2/users/6770293',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19'
            },
            body: putdata
        }).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).to.be.equal(200)
            expect(response.body).has.property("name", "Allasani Pedd")

        })
    })

    it('End to End Flow',()=>{
        postpayload.email='test112@gmail.com'
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19'
            },
            body:postpayload
        }).then((response)=>{
            let id=response.body.id
            cy.request({
                method:'PUT',
                url:'https://gorest.co.in/public/v2/users/'+ id,
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19'
                },
                body:putdata
            }).then((response)=>{
                expect(response.status).to.be.equal(200)
            })
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/'+ id,
                headers: {
                    Authorization: "Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19"
                }
            }).then((response)=>{
                expect(response.status).to.be.equal(200)
                expect(response.body).has.property('name', putdata.name)
            })
        })
    })

})