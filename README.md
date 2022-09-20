# QA Automation Challenge
### **Test Scenarios**

I decide to separate the scenarios between positive and negative scenarios and they are available [here](/cypress/integration). I started the creation by simulating the happy path so that helps me to understand how the system should work and discover the possible negative scenarios. 

### **Test Data**

For the scenarios created, the U.S. average values were used as a reference. All the values we used were fake values so that we could simulate the results. Test data types such as valid test, invalid test and absence data were used.

# **Test Automation instructions**

Regarding automation, I created some runnable tests thinking about the main goal of the system: to calculate the household emissions and help users to reduce their gas emissions. All automated tests have the tag "@automated" and to run them all please see the instructions below.

The scripts were written using Gherkin language and the framework used was Cypress, as it is the framework I feel most comfortable working with.

## Setup
### Pre-requirements:
- Install NodeJS
- Install an text editor, like VS Code

### Execution

All the automated tests has a tag "automated". To execute these tests in your machine, will be necessary to follow the instructions below:

1. Clone this repository
2. Navigate to the "cypress" folder and install the project dependencies, using the following command:`npm install`
3. Execute the command `npm run cy:run` to run the tests as a headless mode

> ℹ️ Note: if you open the cypress interface using the `npm run cy:open` command, be careful because all the tests will be shown - automated and non-automated.

Features automated: [Get Started](cypress/integration/getStarted.feature) and [E2E](cypress/integration/e2e.feature)

## **Bugs founded**
The bugs found can be viewed [here](https://github.com/Maubh/qa-automation-challenge/issues)

## References

[Cypress](https://docs.cypress.io/guides/overview/why-cypress)<br>
[Cucumber](https://cucumber.io/docs/cucumber/)<br>

## Author

Made with ❤️ by Maurício Filho 👋🏽 Contact me!

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mauriciofilho) 
[![Gmail Badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:msvasconcelos.filho@gmail.com)


