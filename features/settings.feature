#
# Mantis Wallet settings feature
# Steps in: ../steps/settings.js & ../steps/login.js
#

 Feature: Settings on Mantis wallet

     As a regular user
     I want to see my settings
     Because I want to customize my settings

     Background: I am on my settings page on Mantis wallet
         Given I open the Mantis wallet app
         When I choose the available Network "<network>" in Mantis Wallet
         When I click on settings button on main page
         |Sagano Testnet|
         |Mainnet  |
         |Mordor   |

     Scenario: I see my settings page on Mantis wallet
         Then I expect to see my settings page
         Then I should close the Mantis Wallet application
         # TODO maybe add some actual settings change scenarios

