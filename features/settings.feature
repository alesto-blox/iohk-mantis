#
# Mantis Wallet settings feature
# Steps in: ../steps/settings.js
#

 Feature: Settings on Mantis wallet

     As a regular user
     I want to see my settings
     Because I want to customize my settings

     Background: I am on my settings page on Mantis wallet
         Given I am logged in Mantis wallet and I am on main page
         When I click on settings button on main page

     Scenario: I see my settings page on Mantis wallet
         Then I expect to see my settings page

