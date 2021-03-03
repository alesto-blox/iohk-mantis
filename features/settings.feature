#
# Mantis Wallet settings feature
# Steps in: ../steps/settings.js & ../steps/login.js
#

@Settings
@Regression
 Feature: Settings on Mantis wallet

     As a regular user
     I want to see my settings
     Because I want to customize my settings

     Background: I am on my settings page on Mantis wallet
         Given I open the Mantis wallet app
         When I choose Sagano Network in Mantis Wallet
#         When I choose the available Network "<network>" in Mantis Wallet
         When I click on settings button on main page
#         |Sagano Testnet|
#         |Mainnet  |
#         |Mordor   |

     Scenario: I see my settings page on Mantis wallet
         Then I expect to see my settings page
         Then I should close the Mantis Wallet application
         # TODO maybe add some actual settings change scenarios
    Scenario: I change Mantis Wallet color theme
        Then I click enable dark mode
        Then I expect to see color theme changed
        Then I should close the Mantis Wallet application
    @WIP
    Scenario: I can change language, date format and time format
        Then I can change language, date format and time format
#        Then I should close the Mantis Wallet application

