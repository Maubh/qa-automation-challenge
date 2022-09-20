Cypress.Commands.add('currentEmissonsTransportation', () => {
    cy.get('#numVehiclesInput').select('1')
    cy.get('#maintCurrentSelect').select('Already Done')
    cy.get('#vehicle1Miles').type('240')
    cy.get('#vehicle1GasMileage').type('20')


})

Cypress.Commands.add('reduceYourEmissionsTransportation', () => {
    cy.get('#reduceMilesInput1').type('100')
    cy.get('#replaceVehicleInput1').type('14')
    cy.get('#to-waste').click()
})
