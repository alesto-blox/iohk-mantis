#
# Mantis Restore Wallet  feature
# Steps in: ../steps/restoreWallet.js
#

Feature: Create Mantis Wallet

    As a regular user
    I want to restore wallet
    with selected Network

    Background: User is on restore page
        Given I open the Mantis wallet app
        When I select directory folder

    Scenario Outline: Restore Mantis wallet with private key
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should see that I am syncing or connecting to the selected Network "<network>"
        Then I choose Restore wallet button
        Then I enter wallet name, private key and passwords
        Then I expect to see main page
        Examples:
            #| network |
            #|Sagano Testnet |
            #|Mainnet  |
            #|Mordor   |

    Scenario Outline: Restore Mantis wallet with recovery phrase
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should see that I am syncing or connecting to the selected Network "<network>"
        Then I choose Restore wallet button
        Then I enter wallet name, recovery phrase and passwords
        Then I expect to see main page
        Examples:
            #| network |
            #|Sagano Testnet |
            #|Mainnet  |
            #|Mordor   |