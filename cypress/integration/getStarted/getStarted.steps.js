/// <reference types="cypress" />

Given(/^user navigate to the website$/, () => {
	cy.visit('/');
});

When(/^insert the house information$/, () => {
    cy.get('#ppl-in-household-input').type('2');
    cy.get('#zip-code-input').type('55555')
});

When(/^user get started the flow$/, () => {
	cy.get('#get-started').click()
});

Then(/^the tabs to insert the gas emissions information should be displayed$/, () => {
	
    cy.get('#energy').should('be.visible')
});


When(/^insert the house information with number of people in the house as "([^"]*)" and zipcode as "([^"]*)"$/, (numpeople,zipcd) => {
	cy.get('#ppl-in-household-input').type(numpeople);
	cy.get('#zip-code-input').type(zipcd)
	
});


Then(/^the error message "([^"]*)" is displayed$/, (msg) => {
	cy.get('#invalidZipNum').should('have.text', msg)
});


Then(/^the error message is displayed$/, () => {
	cy.get('#invalidNum').should('be.visible')
	cy.get('#invalidZipNum').should('be.visible')

});
