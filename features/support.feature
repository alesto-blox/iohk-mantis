#
# Mantis Wallet support feature
# Steps in: ../steps/support.js
#

 Feature: Support on Mantis wallet

     As a regular user
     I want to see support page
     Because I want to send support ticket

     Scenario: I see support page on Mantis wallet
         Given I am logged in Mantis wallet and I am on main page
         When I click on support button on main page
         Then I expect to see support page