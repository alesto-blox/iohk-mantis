#
# Mantis Wallet not Logged in feature
# Steps in: ../steps/login.js & ../steps/notLoggedIn.js
#

@NotLoggedIn
@Regression
Feature: Not Logged in Mantis Wallet

    As a not logged in user
    I open Mantis Wallet application
    I should see start page

    Background: I open Mantis wallet
        Given I reset Mantis Wallet config.json
        And I open the Mantis wallet app

    Scenario Outline:I should not have Address Book
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        When I click on address book button on main page
        Then AddressBook should be Unavailable
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

        Examples:
            | network |
            |Sagano Testnet |
            #|Mainnet  |
            #|Mordor   |

    Scenario Outline:I should not have Transactions
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        When I click on transactions button on main page
        Then I should see Create and Restore options
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json

        Examples:
            | network |
            |Sagano Testnet |
            #|Mainnet  |
            #|Mordor   |

    Scenario Outline:Logout button should be disabled
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then Logout button should be disabled
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json

        Examples:
            | network |
            |Sagano Testnet |
            #|Mainnet  |
            #|Mordor   |