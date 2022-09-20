# QA Automation Challenge
### **Test Scenarios**

I decide to separate the scenarios between positive and negative scenarios and they are described in the this path. I started the creation simulating the happy path so that helps me to understand how the system should work and figure it out the possible negative scenarios. 

### **Test Data**

For the scenarios created, it was used the U.S. average values as a reference. All the values we used were false values so that we can simulate the results. It was used types of test data like valid test, invalid test and absend data.

# **Test Automation instructions**

Regarding automation, I created some executable tests thinking on the main purpose of the system: calculates household emissions and helps users reduce their gas emissions. All the tests automated could be identified by tag "automated" and to execute all of them, please see the instructions below.

The scripts were written using Gherkin language and the framework used was Cypress, as it is the framework I feel most comfortable working with.

## Setup
### Pre-requirements:
- Install NodeJS
- Install an text editor, like VS Code

### Execution

All the automated tests has a tag "automated". To execute these tests in your machine, will be necessary to follow the instructions below:

1. Clone this repository
2. Navigate to "cypress" folder and install the dependencies of the project, using the following command:`npm install`
3. Execute the command `npm run cy:run` to run the tests as a headless mode

ℹ️ Note: if you open the cypress interface using the `npm run cy:open` command, be careful because all the tests will be shown - automated and non-automated.

Features automated: getStarted.feature and e2e.feature

### **Bugs founded**
The bugs found can be viewed [here](https://github.com/Maubh/qa-automation-challenge/issues)

## References

[Cypress](https://docs.cypress.io/guides/overview/why-cypress)<br>
[Cucumber](https://cucumber.io/docs/cucumber/)<br>

## Author

Made with ❤️ by Maurício Filho 👋🏽 Contact me!

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mauriciofilho) 
[![Gmail Badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:msvasconcelos.filho@gmail.com)


