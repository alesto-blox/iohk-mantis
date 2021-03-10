#
# Mantis Wallet status feature
# Steps in: ../steps/status.js & ../steps/login.js
#

@Status
@Regression
Feature: Status on Mantis wallet

    As a regular user
    I want to see my status
    Because I want to see my status

    Background:
        Given I reset Mantis Wallet config.json
        And I open the Mantis wallet app
        And I choose Sagano Network in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Restore wallet button
        And I enter wallet name, private key and passwords

    @Status01
    @Smoke
    Scenario: Status page on Mantis wallet
        When I click on status button on main page on Mantis wallet
        Then I expect to see status page on Mantis wallet
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json