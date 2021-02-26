#
# Mantis Create Wallet  feature
# Steps in: ../steps/createWallet.js & ../steps/login.js
#

Feature: Create Mantis Wallet

    As a regular user
    I want to create new wallet
    with selected Network

    Scenario Outline: Create Mantis wallet
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I re input recovery phrase
        Then I expect to see main page
        Then I should close the Mantis Wallet application
        Examples:
            |network        |
            |Sagano Testnet |
            |Mainnet  |
            |Mordor   |