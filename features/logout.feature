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
    Then I log out
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |

  @Logout02
  Scenario Outline: Logout Mantis wallet
    Given I restore Mantis Wallet on "<network>"
    When I try to log out without password
    Then I should see invalid key error
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |

  @Logout03
  Scenario Outline: Logout Mantis wallet
    Given I restore Mantis Wallet on "<network>"
    When I try to log out without confirmation
    Then I should see Additional Action Error
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |

  @Logout04
  Scenario Outline: Logout Mantis wallet
    Given I restore Mantis Wallet on "<network>"
    When I try to log out with wrong password
    Then I should see invalid key error
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |

  @Logout05
  Scenario Outline: Logout Mantis wallet
    Given I restore Mantis Wallet on "<network>"
    When I try to logout and I cancel
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |