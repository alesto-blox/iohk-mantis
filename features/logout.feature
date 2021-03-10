#
# Mantis Wallet logout feature
# Steps in: ../steps/logout.js & ../steps/login.js
#

@Logout
@Regression
Feature: Logout Mantis wallet

  As a regular user
  I want to be able to logout
  Because I am done with using Mantis wallet

  @Logout01
  @Smoke
  Scenario Outline: Logout Mantis wallet
    Given I restore Mantis Wallet on "<network>"
    Then I click Log out button on main page
    And I enter my password and check checkbox on remove wallet page
    And I click on remove wallet button on remove wallet page
        #Then I log out
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |