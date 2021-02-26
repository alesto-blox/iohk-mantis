#
# Mantis Wallet Accept terms and conditions feature
# Steps in: ../steps/login.js
#

Feature: Accept terms and conditions

    As a regular user when I login into Mantis Wallet application
    for the first time I should read and accept Terms and Conditions

    Scenario Outline: Accept Terms and Conditions
        Given I open the Mantis wallet app
        When I choose the available Network "<network>" in Mantis Wallet
        Then I should see that I am syncing or connecting to the selected Network "<network>"
        Then I should be able to accept Terms and conditions
        Then I should see Create new Wallet and Restore Wallet options
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json
        Examples:
            | network |
            |Sagano Testnet  |
            |Mainnet  |
            |Mordor   |

    Scenario Outline: Accept Terms and Conditions
        Given I open the Mantis wallet app
        When I choose the available Network "<network>" in Mantis Wallet
        Then I should see that I am syncing or connecting to the selected Network "<network>"
        Then I do not accept Terms and conditions
        Then I should see an Error Message
        Then I should close the Mantis Wallet application
        Examples:
            | network |
            |Sagano Testnet  |
            |Mainnet  |
            |Mordor   |