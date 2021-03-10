#
# Mantis Wallet address book feature
# Steps in: ../steps/addressBook.js & ../steps/login.js
#

@Address
@Regression
Feature: Address book on Mantis wallet

    As a regular user
    I want to see my address book
    Because I want to see my contacts

#   TODO Write step to choose multiple networks
    Background: I am on address book page on Mantis wallet
        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose Sagano Network in Mantis Wallet
        # Accept Terms and Conditions
        Then I should be able to accept Terms and conditions
        # Restore a Wallet with Private Key
        Then I choose Restore wallet button
        Then I enter wallet name, private key and passwords
        # Navigate to Addresses
        When I click on address book button on main page

    Scenario:I see address book page on Mantis wallet
        # Check the Address Page
        Then I expect to see address book page on Mantis wallet
        # Logout a Wallet
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        # Close the App
        Then I should close the Mantis Wallet application

    Scenario:I can add new contact address
        # Add new Address
        Then I choose add new button
        Then I enter new contact address and label
        # Check the Address Page
        Then I expect to see new contact in my address book
        # Logout a Wallet
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        # Close the App
        Then I should close the Mantis Wallet application

    Scenario:I can not add new contact address with empty address
        # Add new Address
        Then I choose add new button
        Then I enter new contact with empty address and label
        # Check the Address Page
        Then Save button should be non-clickable
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

    Scenario:I can not add new contact address with empty label
        # Add new Address
        Then I choose add new button
        Then I enter new contact with address and empty label
        # Check the Address Page
        Then Save button should be non-clickable
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

    Scenario:I can not add new contact address with invalid address
        # Add new Address
        Then I choose add new button
        Then I enter new contact with invalid address and label
        # Check the Address Page
        Then I should see error message
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

    Scenario:I can edit existing contact address
        # Add new Address
        Then I choose add new button
        Then I enter new contact address and label
        Then I expect to see new contact in my address book
        #Edit Contact
        Then I edit existing contact
        When I expect to see edited contact
        # Logout a Wallet
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        # Close the App
        Then I should close the Mantis Wallet application

    Scenario:I can delete existing contact address
        # Add new Address
        Then I choose add new button
        Then I enter new contact address and label
        Then I expect to see new contact in my address book
        #Delete Contact
        Then I delete existing contact
        When I should have empty address book
        # Logout a Wallet
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        # Close the App
        Then I should close the Mantis Wallet application