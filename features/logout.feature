#
# Mantis Wallet logout feature
# Steps in: ../steps/logout.js & ../steps/login.js
#
@Logout
@Regression
Feature: Logout Mantis wallet

    As a regular user
    I want to be able to logout
    Because I am done with using Mantis wallet

    Scenario Outline: Logout Mantis wallet
        Given I reset Mantis Wallet config.json
          And I open the Mantis wallet app
         When I choose the available Network "<network>" in Mantis Wallet
         Then I should be able to accept Terms and conditions
         When I choose Restore wallet button
          And I enter wallet name, private key and passwords
         Then I click Log out button on main page
          And I enter my password and check checkbox on remove wallet page
          And I click on remove wallet button on remove wallet page
         Then I should close the Mantis Wallet application
          And I reset Mantis Wallet config.json

        Examples:
            | network |
            |Sagano Testnet |
           #|Mainnet  |
           #|Mordor   |