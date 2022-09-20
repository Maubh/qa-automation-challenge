Feature: E2E Test

    As a User, I want to verify my household carbon footprint in home energy, transportation and waste
    To know about how I can contribute for an decrease of gas emissions

Background:
Given user navigate to the website

@automated
Scenario: Visualize the gas emissions report using values based on average of U.S.
And insert the house information
And user get started the flow
And fills in the household's gas emission information of home energy, transportation and waste
When the user clicks to view his report
Then the report page is displayed
And a feedback message is displayed




