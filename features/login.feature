#
# Mantis Wallet Login feature
# Steps in: ../steps/login.js
#

#Feature: Login Mantis Wallet
#
#    As a regular user
#    I want to login into Mantis Wallet application
#    with selected Network
#
#    Scenario Outline: Login into Mantis wallet
#        Given I open the Mantis wallet app
#        When I choose the available Network "<network>" in Mantis Wallet
#        Then I should see the Mantis Wallet Main page
#        Examples:
#            | network |
#            |Sagano   |
#            |Mainnet  |
#            |Mordor   |