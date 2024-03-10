describe('GET API test', () => {

    it('GET all users', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: "Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19"
            }
        }).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
        })

    })

    it('GET single user',()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users/6752427',
            headers:{
                Authorization: "Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19"
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(6752427)

        })
    })

    it('Invalid user',()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/use',
            headers:{
                Authorization: "Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19"
            },
            failOnStatusCode: false
        }).then((response)=>{
            cy.log(JSON.stringify(response))
        })
    })

    it('User not found',()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users/1',
            headers:{
                Authorization: "Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19"
            },
            failOnStatusCode: false
        }).then((response) =>{
            cy.log(JSON.stringify(response))
            expect(response.body.message).to.equal('Resource not found')
        })
    })
})