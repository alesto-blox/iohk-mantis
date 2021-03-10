#
# Mantis Wallet not Logged in feature
# Steps in: ../steps/login.js & ../steps/notLoggedIn.js
#

@NotLoggedIn
@Regression
Feature: Not Logged in Mantis Wallet

  As a not logged in user
  I open Mantis Wallet application
  I should see start page

  Scenario Outline:I should not have Address Book
    Given I start Mantis Wallet on "<network>" and accept terms and conditions
    When I click on address book button on main page
    Then AddressBook should be Unavailable
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |

  Scenario Outline:I should not have Transactions
    Given I start Mantis Wallet on "<network>" and accept terms and conditions
    When I click on transactions button on main page
    Then I should see Create and Restore options
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |

  Scenario Outline:Logout button should be disabled
    Given I start Mantis Wallet on "<network>" and accept terms and conditions
    Then Logout button should be disabled
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |