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

  Scenario Outline: I see my settings page on Mantis wallet
    Given I restore Mantis Wallet on "<network>"
    And I click on settings button on main page
    Then I expect to see my settings page
    Then I log out
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |

  Scenario Outline: I change Mantis Wallet color theme
    Given I restore Mantis Wallet on "<network>"
    And I click on settings button on main page
    When I click enable dark mode
    Then I expect to see color theme changed
    Then I log out
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |

  Scenario Outline: I can change language, date format and time format
    Given I restore Mantis Wallet on "<network>"
    And I click on settings button on main page
    Then I can change language, date format and time format
    Then I log out
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |

  Scenario Outline: I can change Network
    Given I restore Mantis Wallet on "<network>"
    And I click on settings button on main page
    Then I change "<networkChange>" in Settings
    Then I log out
    And I close Mantis Wallet

    Examples:
      | network        | networkChange  |
      | Sagano Testnet | Mainnet        |
      | Sagano Testnet | Mordor         |
      | Sagano Testnet | Custom         |
      | Mainnet        | Sagano Testnet |
      | Mainnet        | Mordor         |
      | Mainnet        | Custom         |
      | Mordor         | Sagano Testnet |
      | Mordor         | Mainnet        |
      | Mordor         | Custom         |
      | Custom         | Sagano Testnet |
      | Custom         | Mordor         |
      | Custom         | Mainnet        |

  Scenario Outline: Check wallet directory
    Given I restore Mantis Wallet on "<network>"
    And I click on settings button on main page
    Then I can check wallet directory
    Then I log out
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |