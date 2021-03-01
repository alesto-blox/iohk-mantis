# I am logged in Mantis wallet and I am on main page
# Mantis Wallet address book feature
# Steps in: ../steps/addressBook.js & ../steps/login.js
#

@Address
@Regression
 Feature: Address book on Mantis wallet

     As a regular user
     I want to see my address book
     Because I want to see my contacts

#     TODO Write step to choose multiple networks
     Background: I am on address book page on Mantis wallet
         Given I open the Mantis wallet app
         Then I choose Sagano Network in Mantis Wallet
#             |Sagano Testnet|
#             |Mainnet  |
#             |Mordor   |
         # TODO add steps to create or restore a wallet
         When I click on address book button on main page

     Scenario: I see address book page on Mantis wallet
         Then I expect to see address book page on Mantis wallet
         Then I should close the Mantis Wallet application

     Scenario: I can add new contact address
         Then I choose add new button
         Then I enter new contact address and label
         Then I expect to see new contact in my address book
         Then I should close the Mantis Wallet application