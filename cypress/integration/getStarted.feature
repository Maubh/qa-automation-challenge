@automated

Feature: Get started the calculation

    As a user I want to get start the calculation of gas emissions
    To discover my houselhoud carbon footprint

    Background:
        Given user navigate to the website
   
    Scenario: Get started using valid values
        And insert the house information
        When user get started the flow
        Then the tabs to insert the gas emissions information should be displayed

    Scenario Outline: Get started using invalid zip code values
        And insert the house information with number of people in the house as "<number_people>" and zipcode as "<zip_code>"
        When user get started the flow
        Then the error message "<message>" is displayed

        Examples:
            | number_people | zip_code | message                                   |
            | 2             | 0        | Please enter a valid five-digit ZIP Code. |
            | 2             | 112221   | Please enter a valid five-digit ZIP Code. |

    Scenario: Get started without inform any value
        When user get started the flow
        Then the error message is displayed
