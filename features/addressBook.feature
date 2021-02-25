#
# Mantis Wallet address book feature
# Steps in: ../steps/addressBook.js
#

 Feature: Address book on Mantis wallet

     As a regular user
     I want to see my address book
     Because I want to see my contacts

     Background: I am on address book page on Mantis wallet
         Given I am loged in Mantis wallet and I am on main page
         When I click on address book button on main page

     Scenario: I see address book page on Mantis wallet
         Then I expect to see address book page on Mantis wallet

     Scenario: I can add new contact address
         Then I choose add new button
         Then I enter new contact address and label
         Then I expect to see new contact in my address book


