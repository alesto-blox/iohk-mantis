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

        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        When I choose the available Network "<network>" in Mantis Wallet
        # Accept Terms and conditions
        Then I should be able to accept Terms and conditions
        # Restore a Wallet
        Then I choose Restore wallet button
        Then I enter wallet name, private key and passwords
        # Logout a Wallet
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

        Examples:
            | network |
            |Sagano Testnet |
            #|Mainnet  |
            #|Mordor   |