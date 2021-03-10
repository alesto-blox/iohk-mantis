#
# Mantis Wallet My transactions feature
# Steps in: ../steps/myTransactions.js & ../steps/login.js
#
@Transactions
@Regression
Feature: My Transactions on Mantis Wallet

     As a regular user
     I want to see my transactions
     Because I want to see my transactions

     Background: I am on my transactions page on Mantis wallet
           Given I reset Mantis Wallet config.json
             And I open the Mantis wallet app

  @Transactions01
     Scenario Outline: I see my transactions page on Mantis wallet
                  Then I choose the available Network "<network>" in Mantis Wallet
                  Then I should be able to accept Terms and conditions
                  Then I choose Restore wallet button
                   And I enter wallet name, private key and passwords
                  When I click on transactions button on main page
                  Then I expect to see my transactions page
                  Then I should close the Mantis Wallet application

       Examples:
         |network        |
         |Sagano Testnet |
         #|Mainnet  |
         #|Mordor   |