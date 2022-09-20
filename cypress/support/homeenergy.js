Cypress.Commands.add('currentEmissonsHomeEnergy', () => {
    cy.get('#primaryHeatingSource').select('Natural Gas')
    cy.get('#naturalGasTextInput').type('22')
    cy.get('#electricityTextInput').type('44')
    cy.get('#fuelTextInput').type('72')
    cy.get('#propaneTextInput').type('37')


})

Cypress.Commands.add('reduceYourEmissionsHomeEnergy', () => {
    cy.get('#energyAC').type('22')
    cy.get('#energyHeat').type('22')
    cy.get('#lightsToReplace').type('22')
    cy.get('#pwrMgmtSelect').select('Will Do')
    cy.get('#increaseGreenInput').type('22')
    cy.get('#coldWaterSelect').select('Will Do')
    cy.get('#loadsPerWeek').type('22')
    cy.get('#AirDrySelect').select('Will Do')
    cy.get('#percentageAirDrySelect').select('50% of my Laundry')
    cy.get('#fridgeSelect').select('Will Do')
    cy.get('#furnaceSelect').select('Will Do')
    cy.get('#windowSelect').select('Will Do')
    cy.get('#to-transportation').click()
    
})
