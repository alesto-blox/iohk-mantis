#
# Mantis Wallet receive address feature
# Steps in: ../steps/receiveAddress.js
#

 Feature: Receive address on Mantis wallet

     As a regular user
     I want to see my address
     Because I want to send my address to another user

     Scenario: My address on Mantis wallet
         Given I am logged in Mantis wallet and I am on main page
         When I click on receive button on main page on Mantis wallet
         Then I expect to see my address on Mantis wallet


