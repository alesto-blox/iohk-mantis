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

    Scenario Outline: Login into Mantis wallet

        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        # Accept Terms and conditions
        Then I should be able to accept Terms and conditions
        # Check Sync
        Then I should see that I am syncing or connecting to the selected Network "<network>"
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

        Examples:
            | network |
            |Sagano Testnet |
            #|Mainnet  |
            #|Mordor   |