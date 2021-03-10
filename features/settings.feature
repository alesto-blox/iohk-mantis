#
# Mantis Wallet settings feature
# Steps in: ../steps/settings.js & ../steps/login.js
#

@Settings
@Regression
 Feature: Settings on Mantis wallet

     As a regular user
     I want to see my settings
     Because I want to customize my settings


   Background:I am on my settings page on Mantis wallet
     Given I reset Mantis Wallet config.json
     And I open the Mantis wallet app
     And I choose Sagano Network in Mantis Wallet
     Then I should be able to accept Terms and conditions
     Then I choose Restore wallet button
     And I enter wallet name, private key and passwords
     And I click on settings button on main page

     Scenario: I see my settings page on Mantis wallet
         Then I expect to see my settings page
         When I click Log out button on main page
         And I enter my password and check checkbox on remove wallet page
         And I click on remove wallet button on remove wallet page
         Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

    Scenario: I change Mantis Wallet color theme
        When I click enable dark mode
        Then I expect to see color theme changed
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json

    Scenario: I can change language, date format and time format
        Then I can change language, date format and time format
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json

    Scenario Outline: I can change Network
        Then I change "<network>" in Settings
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json

        Examples:
            | network |
            |Sagano Testnet |
            |Mainnet  |
            |Mordor   |
            |Custom   |

     Scenario: Check wallet directory
        Then I can check wallet directory
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json