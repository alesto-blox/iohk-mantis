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

    Background:
        Given I reset Mantis Wallet config.json
        And I open the Mantis wallet app
        And I choose Sagano Network in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Restore wallet button
        And I enter wallet name, private key and passwords

    Scenario: I see support page on Mantis wallet
        When I click on support button on main page
        Then I expect to see support page
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json