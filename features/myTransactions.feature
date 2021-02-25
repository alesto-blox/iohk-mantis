#
# Mantis Wallet My transactions feature
# Steps in: ../steps/myTransactions.js
#

 Feature: My Transactions on Mantis Wallet

     As a regular user
     I want to see my transactions
     Because I want to see my transactions

     Background: I am on my transactions page on Mantis wallet
         Given I am logged in Mantis wallet and I am on main page
         When I click on transactions button on main page

     Scenario: I see my transactions page on Mantis wallet
         Then I expect to see my transactions page

