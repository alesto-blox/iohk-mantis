#
# Mantis Wallet support feature
# Steps in: ../steps/support.js & ../steps/login.js
#

@Support
@Regression
Feature: Support on Mantis wallet

    As a regular user
    I want to see support page
    Because I want to send support ticket

    Scenario: I see support page on Mantis wallet
       # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose Sagano Network in Mantis Wallet
        # Accept Terms and Conditions
        Then I should be able to accept Terms and conditions
        # Restore a Wallet with Private Key
        Then I choose Restore wallet button
        Then I enter wallet name, private key and passwords
        Then I click on support button on main page
        Then I expect to see support page
        # Logout a Wallet
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json
