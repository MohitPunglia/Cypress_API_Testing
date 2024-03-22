// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('generateRandomEmail',()=>{
    const randomString = Math.random().toString(36).substring(2, 10)
    const email = randomString + "@gmail.com"
    return email
})

Cypress.Commands.add('getAPI',(pathparam)=>{

    cy.request({
        method:'GET',
        url:'/'+ pathparam,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19'
        }
     
    })
})

Cypress.Commands.add('postAPI',(payload)=>{

    cy.request({
        method:'POST',
        url:'/',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19'
        },
        body:payload
    })
})

Cypress.Commands.add('putAPI',(pathparam)=>{

    cy.request({
        method:'PUT',
        url:'/'+ pathparam,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19'
        }
     
    })
})

Cypress.Commands.add('deleteAPI',(pathparam)=>{

    cy.request({
        method:'DELETE',
        url:'/'+ pathparam,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer a9d96e96cdf288cfb836eb60160cb0353e1caf99288e51a748b9e731f80dcf19'
        },
     
    })
})