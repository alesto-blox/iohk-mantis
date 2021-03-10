#
# Mantis Wallet Accept terms and conditions feature
# Steps in: ../steps/login.js
#

@TermsAndConditions
@Regression
Feature: Accept terms and conditions

  As a regular user when I login into Mantis Wallet application
  for the first time I should read and accept Terms and Conditions

  Scenario Outline: Accept Terms and Conditions
    Given I start Mantis wallet on "<network>"
    And I should be able to accept Terms and conditions
    Then I should see Create new Wallet and Restore Wallet options
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |

  Scenario Outline: Accept Terms and Conditions
    Given I start Mantis wallet on "<network>"
    When I do not accept Terms and conditions
    Then I should see an Error Message
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |