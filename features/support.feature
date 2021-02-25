#
# Mantis Wallet support feature
# Steps in: ../steps/support.js & ../steps/login.js
#

 Feature: Support on Mantis wallet

     As a regular user
     I want to see support page
     Because I want to send support ticket

     Scenario Outline: I see support page on Mantis wallet
         Given I open the Mantis wallet app
         When I choose the available Network "<network>" in Mantis Wallet
         When I click on support button on main page
         Then I expect to see support page
         Then I should close the Mantis Wallet application
         Examples:
            #| network |
            #|Sagano Testnet |
            #|Mainnet  |
            #|Mordor   |