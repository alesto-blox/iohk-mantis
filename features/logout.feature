#
# Mantis Wallet logout feature
# Steps in: ../steps/logout.js & ../steps/login.js
#

Feature: Logout Mantis wallet

    As a regular user
    I want to be able to logout
    Because I am done with using Mantis wallet

    Scenario Outline: Logout Mantis wallet
        Given I open the Mantis wallet app
        When I choose the available Network "<network>" in Mantis Wallet
        # TODO add steps to create or restore a wallet
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        Then I expect to be logged out of Mantis wallet
        Then I should close the Mantis Wallet application
        Examples:
            #| network |
            #|Sagano Testnet |
            #|Mainnet  |
            #|Mordor   |