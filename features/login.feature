#
# Mantis Wallet Login feature
# Steps in: ../steps/login.js
#
@Login
@Sync
@Regression
Feature: Login Mantis Wallet

    As a regular user
    I want to login into Mantis Wallet application
    with selected Network

    Background:
        Given I reset Mantis Wallet config.json
          And I open the Mantis wallet app

    Scenario Outline: Login into Mantis wallet
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I should see that I am syncing or connecting to the selected Network "<network>"
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

        Examples:
            | network |
            |Sagano Testnet |
           #|Mainnet  |
           #|Mordor   |

    Scenario Outline: I can view details
        Then I can see details of system
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I should see that I am syncing or connecting to the selected Network "<network>"
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

        Examples:
            | network |
            |Sagano Testnet |
           #|Mainnet  |
           #|Mordor   |