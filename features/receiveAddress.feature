#
# Mantis Wallet receive address feature
# Steps in: ../steps/receiveAddress.js & ../steps/login.js
#

@Receive
@Regression
Feature: Receive address on Mantis wallet

    As a regular user
    I want to see my address
    Because I want to send my address to another user

    Scenario Outline: My address on Mantis wallet
        Given I open the Mantis wallet app
        When I choose the available Network "<network>" in Mantis Wallet
        When I click on receive button on main page on Mantis wallet
        Then I expect to see my address on Mantis wallet
        Then I should close the Mantis Wallet application
        Examples:
            |network |
            |Sagano Testnet |
#            |Mainnet  |
#            |Mordor   |