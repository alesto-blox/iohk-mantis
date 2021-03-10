#
# Mantis Restore Wallet  feature
# Steps in: ../steps/restoreWallet.js & ../steps/login.js
#

@RestoreWallet
@Regression
Feature: Create Mantis Wallet

  As a regular user
  I want to restore wallet
  with selected Network

  Scenario Outline: Restore Mantis wallet with private key
    Given I restore Mantis Wallet on "<network>"
    And I log out
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |

  Scenario Outline: Restore Mantis wallet with word phrases
    Given I start restoring a wallet on "<network>"
    Then I enter wallet name, recovery phrase and passwords
    Then I click Log out button on main page
    And I enter my password and check checkbox on remove wallet page
    And I log out
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |

  Scenario Outline: Restore Mantis wallet without wallet name
    Given I start restoring a wallet on "<network>"
    Then I enter private key and passwords without the wallet name
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |

  Scenario Outline: Restore Mantis wallet with empty pvk
    Given I start restoring a wallet on "<network>"
    Then I dont enter private key and I enter passwords and wallet name
    And I close Mantis Wallet

    Examples:
      | network        |
      | Sagano Testnet |
      | Mainnet        |
      | Mordor         |