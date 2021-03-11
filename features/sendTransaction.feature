#
# Mantis Wallet send transaction feature
# Steps in: ../steps/sendTransaction.js & ../steps/login.js
#

@SendTransaction
@Regression
Feature: Send transaction on Mantis wallet

  As a regular user
  I want send ETC on Mantis Wallet
  Because I want to send ETC to my friends

  @Smoke
  @SendTransaction01
  Scenario Outline : I send ETC to another wallet
    Given I restore Mantis Wallet on "<network>"
    When I click send button on main page
    Then I enter receiving address "<address>"
    Then I enter amount to send "<amount>"
    Then I click send

   #Then I log out
   #And I close Mantis Wallet

    Examples:
      | network        | address                                    | amount |
      | Sagano Testnet | 0xec49c61786376007494af082b02fac4adb4e4292 | 0.1    |
      #|Mainnet  |
      #|Mordor   |