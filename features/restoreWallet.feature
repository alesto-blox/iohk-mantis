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

    Background:I am on my settings page on Mantis wallet
        Given I reset Mantis Wallet config.json
        And I open the Mantis wallet app

    @RestoreWallet01
    @Smoke
    Scenario Outline: Restore Mantis wallet with private key
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Restore wallet button
        Then I enter wallet name, private key and passwords
        Then I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        When I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json

        Examples:
            | network |
            |Sagano Testnet |
            #|Mainnet  |
            #|Mordor   |

    @RestoreWallet02
    Scenario Outline: Restore Mantis wallet with word phrases
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Restore wallet button
        Then I enter wallet name, recovery phrase and passwords
        Then I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        When I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json

        Examples:
            | network |
            |Sagano Testnet |
            #|Mainnet  |
            #|Mordor   |

    @RestoreWallet03
    Scenario Outline: Restore Mantis wallet without wallet name
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Restore wallet button
        Then I enter private key and passwords without the wallet name
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json

        Examples:
            | network |
            |Sagano Testnet |
           #|Mainnet  |
           #|Mordor   |