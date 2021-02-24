#
# Mantis Create Wallet  feature
# Steps in: ../steps/createWallet.js
#

Feature: Create Mantis Wallet

    As a regular user
    I want to create new wallet
    with selected Network

    Scenario Outline: Create Mantis wallet
        Given I open the Mantis wallet app
        When I select directory folder
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should see that I am syncing or connecting to the selected Network "<network>"
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I reinput recovery phrase
        Then I expect to see main page
        Examples:
            #| network |
            #|Sagano Testnet |
            #|Mainnet  |
            #|Mordor   |