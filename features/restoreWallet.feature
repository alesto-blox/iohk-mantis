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

    Scenario Outline: Restore Mantis wallet with private key

        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        # Restore a Wallet with private key
        Then I choose Restore wallet button
        Then I enter wallet name, private key and passwords
        # Logout a Wallet
        Then I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        When I click on remove wallet button on remove wallet page
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

        Examples:
            | network |
            |Sagano Testnet |
#            |Mainnet  |
#            |Mordor   |

    Scenario Outline: Restore Mantis wallet with word phrases

        # Open the App and Select a Network
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        # Restore a Wallet with word phrases
        Then I choose Restore wallet button
        Then I enter wallet name, recovery phrase and passwords
        # Logout a Wallet
        Then I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        When I click on remove wallet button on remove wallet page
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

        Examples:
            | network |
            |Sagano Testnet |
#            |Mainnet  |
#            |Mordor   |