#
# Mantis Create Wallet  feature
# Steps in: ../steps/createWallet.js & ../steps/login.js
#

@CreateWallet
@Regression
Feature: Create Mantis Wallet

    As a regular user
    I want to create new wallet
    with selected Network

    Scenario Outline: Create Mantis wallet

        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        # Accept Terms and conditions
        Then I should be able to accept Terms and conditions
        # Create a Wallet
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I re input recovery phrase
        Then I expect to see my transactions page
        # Logout a Wallet
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |