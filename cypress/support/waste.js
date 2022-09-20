Cypress.Commands.add('currentEmissonsWaste', () => {
    cy.get('#waste-emissions .waste-checkboxes .mobile_to-be-block input#aluminumCheckbox').check();
    cy.get('#waste-emissions .waste-checkboxes .mobile_to-be-block input#plasticCheckbox').check();

})

Cypress.Commands.add('reduceYourEmissionsWaste', () => {
    cy.get('#waste-reduction #wasteReductionRadios .mobile_to-be-block input#newspaperCheckboxR').check();
    cy.get('#waste-reduction #wasteReductionRadios .mobile_to-be-block input#magazinesCheckboxR').check();
     
})
