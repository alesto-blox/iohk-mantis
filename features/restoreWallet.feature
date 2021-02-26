#
# Mantis Restore Wallet  feature
# Steps in: ../steps/restoreWallet.js & ../steps/login.js
#
@RestoreWallet
@Regression
Feature: Create Mantis Wallet

    As a regular user
    I want to restore wallet
    with selected Network

    Background: User is on restore page
        Given I open the Mantis wallet app

    Scenario Outline: Restore Mantis wallet with private key
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I choose Restore wallet button
        Then I enter wallet name, private key and passwords
        Then I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        Then I should close the Mantis Wallet application
        Examples:
            | network |
            |Sagano Testnet |
#            |Mainnet  |
#            |Mordor   |