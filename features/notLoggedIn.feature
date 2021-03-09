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
        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose Sagano Network in Mantis Wallet
        # Accept Terms and Conditions
        Then I should be able to accept Terms and conditions

    Scenario:I should not have Address Book
        # Check the Address Page
        When I click on address book button on main page
        Then AddressBook should be Unavailable
        # Close the App
        Then I should close the Mantis Wallet application

    Scenario:I should not have Transactions
        # Check the Transactions Page
        When I click on transactions button on main page
        Then I should see Create and Restore options
        # Close the App
        Then I should close the Mantis Wallet application

    Scenario:Logout button should be disabled
        Then Logout button should be disabled
        # Close the App
        Then I should close the Mantis Wallet application