
describe('Testing APIs', () => {
  it('GET', () => {
    cy.request({
      method: 'GET',
      url: 'https://restful-booker.herokuapp.com/booking'

    }).then((Response) => {
      cy.log(JSON.stringify(Response))
      expect(Response.status).to.equal(200)
    })
  })

})