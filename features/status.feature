#
# Mantis Wallet status feature
# Steps in: ../steps/status.js
#

 Feature: Status on Mantis wallet

     As a regular user
     I want to see my status
     Because I want to see my status

     Scenario: Status page on Mantis wallet
         Given I am logged in Mantis wallet and I am on main page
         When I click on status button on main page on Mantis wallet
         Then I expect to see status page on Mantis wallet


