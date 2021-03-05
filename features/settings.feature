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

     Background: I am on my settings page on Mantis wallet
         # Open the App and Select a Network
         Then I should reset Mantis Wallet config.json
         Given I open the Mantis wallet app
         Then I choose Sagano Network in Mantis Wallet
        # Accept Terms and Conditions
         Then I should be able to accept Terms and conditions
        # Restore a Wallet with Private Key
         Then I choose Restore wallet button
         Then I enter wallet name, private key and passwords
         When I click on settings button on main page

     Scenario: I see my settings page on Mantis wallet
         Then I expect to see my settings page
         Then I should close the Mantis Wallet application

    Scenario: I change Mantis Wallet color theme
        Then I click enable dark mode
        Then I expect to see color theme changed
        Then I should close the Mantis Wallet application

    Scenario: I can change language, date format and time format
        Then I can change language, date format and time format
        Then I should close the Mantis Wallet application

    Scenario Outline: I can change Network
        Then I change "<network>" in Settings
        Then I should close the Mantis Wallet application
        Examples:
            | network |
            |Sagano Testnet |
            |Mainnet  |
            |Mordor   |
            |Custom   |

     Scenario: Check wallet directory
        Then I can check wallet directory
         # Logout a Wallet
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json