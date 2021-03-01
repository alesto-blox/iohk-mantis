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

      Background: I am on send transaction page
            Given I open the Mantis wallet app
            When I choose the available Network "<network>" in Mantis Wallet
            # TODO add steps to create or restore a wallet
            When I click send button on main page
                 |Sagano Testnet|
                 |Mainnet  |
                 |Mordor   |

      Scenario: I see send transaction page on Mantis wallet
            Then I expect to see sent transaction page
            Then I should close the Mantis Wallet application

       Scenario: Send transaction on Mantis wallet
             When I enter recipient address on send transaction page
             And I enter amount to send and select fee on send transaction page
             And I click send button on send transaction page
             And I enter my password on send transaction page
             And I click confirm button on send transaction page
             Then I expect to see that transaction on My transaction page
             Then I should close the Mantis Wallet application

        Scenario: Send transaction on Mantis wallet and choose recipient address from my contacts
              # TODO add recipient addresses in config.json
              When I select recipient address from drop-down on send transaction page
              And I enter amount to send and select fee on send transaction page
              And I click send button on send transaction page
              And I enter my password on send transaction page
              And I click confirm button on send transaction page
              Then I expect to see that transaction on My transaction page
              Then I should close the Mantis Wallet application

       Scenario: Send transaction on Mantis wallet advanced tab
             When I click on advanced button on send transaction page
             And I enter recipient address on send transaction page advanced tab
             And I enter amount to send, gas limit and gas price on send transaction page
             And I click send button on send transaction page advanced tab
             And I enter my password on send transaction page advanced tab
             And I click confirm button on send transaction page advanced tab
             Then I expect to see that transaction on My transaction page
             Then I should close the Mantis Wallet application

        Scenario: Send transaction on Mantis wallet advanced tab and choose recipient address from my contacts
              When I click on advanced button on send transaction page
              And I select recipient address from drop-down on send transaction page advanced tab
              And I enter amount to send, gas limit and gas price on send transaction page
              And I click send button on send transaction page advanced tab
              And I enter my password on send transaction page advanced tab
              And I click confirm button on send transaction page advanced tab
              Then I expect to see that transaction on My transaction page
              Then I should close the Mantis Wallet application