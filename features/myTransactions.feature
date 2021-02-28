#
# Mantis Wallet My transactions feature
# Steps in: ../steps/myTransactions.js & ../steps/login.js
#

#TODO Makes no sense, send or receive a transaction and expect a change here instead of this
@Transactions
@Regression
Feature: My Transactions on Mantis Wallet

     As a regular user
     I want to see my transactions
     Because I want to see my transactions

     Background: I am on my transactions page on Mantis wallet
         Given I open the Mantis wallet app
         Then I choose the available Network "<network>" in Mantis Wallet
         # TODO add steps to create or restore a wallet
         When I click on transactions button on main page
         |Sagano Testnet|
         |Mainnet  |
         |Mordor   |

     Scenario: I see my transactions page on Mantis wallet
         Then I expect to see my transactions page
         Then I should close the Mantis Wallet application