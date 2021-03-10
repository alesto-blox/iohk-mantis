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
          Given I reset Mantis Wallet config.json
            And I open the Mantis wallet app
           Then I choose Sagano Network in Mantis Wallet
           Then I should be able to accept Terms and conditions
           Then I choose Restore wallet button
           Then I enter wallet name, private key and passwords
           When I click on address book button on main page

  @Address01
  @Smoke
    Scenario:I see address book page on Mantis wallet
        Then I expect to see address book page on Mantis wallet
        When I click Log out button on main page
         And I enter my password and check checkbox on remove wallet page
         And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

  @Address02
  @Smoke
    Scenario:I can add new contact address
        Then I choose add new button
        Then I enter new contact address and label
        Then I expect to see new contact in my address book
        When I click Log out button on main page
         And I enter my password and check checkbox on remove wallet page
         And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

  @Address03
    Scenario:I can not add new contact address with empty address
        Then I choose add new button
        Then I enter new contact with empty address and label
        Then Save button should be non-clickable
        When I click Log out button on main page
         And I enter my password and check checkbox on remove wallet page
         And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

  @Address04
    Scenario:I can not add new contact address with empty label
        Then I choose add new button
        Then I enter new contact with address and empty label
        Then Save button should be non-clickable
        When I click Log out button on main page
         And I enter my password and check checkbox on remove wallet page
         And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

  @Address05
    Scenario:I can not add new contact address with invalid address
        Then I choose add new button
        Then I enter new contact with invalid address and label
        Then I should see error message
        When I click Log out button on main page
         And I enter my password and check checkbox on remove wallet page
         And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

  @Address06
    Scenario:I can edit existing contact address
        Then I choose add new button
        Then I enter new contact address and label
        Then I expect to see new contact in my address book
        Then I edit existing contact
        When I expect to see edited contact
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json

  @Address07
    Scenario:I can delete existing contact address
        Then I choose add new button
        Then I enter new contact address and label
        Then I expect to see new contact in my address book
        Then I delete existing contact
        When I should have empty address book
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
        And I reset Mantis Wallet config.json
