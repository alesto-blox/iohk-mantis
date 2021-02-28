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

    Scenario Outline: Status page on Mantis wallet
        Given I open the Mantis wallet app
        When I choose the available Network "<network>" in Mantis Wallet
        When I click on status button on main page on Mantis wallet
        Then I expect to see status page on Mantis wallet
        Then I should close the Mantis Wallet application
        Examples:
           | network |
           |Sagano Testnet |
           #|Mainnet  |
           #|Mordor   |