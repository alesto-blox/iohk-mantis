#
# Mantis Wallet logout feature
# Steps in: ../steps/logout.js
#

Feature: Logout Mantis wallet

    As a regular user
    I want to be able to logout
    Because I am done with using Mantis wallet

    Scenario: Logout Mantis wallet
        Given I am loged in Mantis wallet and I am on main page
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        Then I expect to be loged out of Mantis wallet