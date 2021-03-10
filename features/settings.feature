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

   @Settings01
   @Smoke
     Scenario: I see my settings page on Mantis wallet
         Then I expect to see my settings page
         When I click Log out button on main page
         And I enter my password and check checkbox on remove wallet page
         And I click on remove wallet button on remove wallet page
         Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

   @Settings02
    Scenario: I change Mantis Wallet color theme
        When I click enable dark mode
        Then I expect to see color theme changed
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json

   @Settings03
    Scenario: I can change language, date format and time format
        Then I can change language, date format and time format
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json

   @Settings04
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

   @Settings05
     Scenario: Check wallet directory
        Then I can check wallet directory
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json

   @Settings06
    Scenario: Export private key
       Then I click Export private key button
       Then I enter my password and click unlock
       Then I expect to see export private key and it is blurred
       When I click on switch
       Then I should see private key
       When I click Log out button on main page
       And I enter my password and check checkbox on remove wallet page
       And I click on remove wallet button on remove wallet page
       Then I should close the Mantis Wallet application
       And I reset Mantis Wallet config.json

   @Settings07
   Scenario Outline: Export private key password validation
        Then I click Export private key button
        Then I enter "<password>" and click unlock
        Then I should see error message for wrong pass
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json
     Examples:
            | password |
            |Qwerty123 |
            |empty    |