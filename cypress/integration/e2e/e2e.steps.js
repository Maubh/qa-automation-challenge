/// <reference types="cypress" />

import '../GetStarted/GetStarted.steps'



When(/^fills in the household's gas emission information of home energy, transportation and waste$/, () => {
	cy.currentEmissonsHomeEnergy()
    cy.reduceYourEmissionsHomeEnergy()
	cy.currentEmissonsTransportation()
    cy.reduceYourEmissionsTransportation()
	cy.currentEmissonsWaste()
    cy.reduceYourEmissionsWaste()
});

When(/^the user clicks to view his report$/, () => {
	cy.get('#view-full-report').click()
});

Then(/^the report page is displayed$/, () => {
	cy.get('.sectionName').should('have.text', 'Your Household Carbon Footprint Report')
});

Then(/^a feedback message is displayed$/, () => {
	cy.get('#good-work').should('contain.text', 'Keep up the good work!')
});
