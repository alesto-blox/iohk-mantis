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
            Given I reset Mantis Wallet config.json
              And I open the Mantis wallet app

      @SendTransaction01
      Scenario Outline: I see send transaction page on Mantis wallet
            Then I choose the available Network "<network>" in Mantis Wallet
            Then I should be able to accept Terms and conditions
            Then I choose Restore wallet button
            Then I enter wallet name, recovery phrase and passwords
            When I click send button on main page
            Then I expect to see sent transaction page
            Then I click Log out button on main page
            And I enter my password and check checkbox on remove wallet page
            When I click on remove wallet button on remove wallet page
            Then I should close the Mantis Wallet application
            And I reset Mantis Wallet config.json

            Examples:
                  | network |
                  |Sagano Testnet  |
                  #|Mainnet  |
                  #|Mordor   |

      @SendTransaction02
      @Smoke
       Scenario Outline: Send transaction on Mantis wallet
             Then I choose the available Network "<network>" in Mantis Wallet
             Then I should be able to accept Terms and conditions
             Then I choose Restore wallet button
             Then I enter wallet name, recovery phrase and passwords
             When I click send button on main page
             When I enter recipient address on send transaction page
              And I enter amount to send and select fee on send transaction page
              And I click send button on send transaction page
              And I enter my password on send transaction page
              And I click confirm button on send transaction page
             Then I expect to see that transaction on My transaction page
             Then I should close the Mantis Wallet application
             And I reset Mantis Wallet config.json

             Examples:
                   | network |
                   |Sagano Testnet  |
                  #|Mainnet  |
                  #|Mordor   |

      @SendTransaction03
        Scenario Outline: Send transaction on Mantis wallet and choose recipient address from my contacts
              Then I choose the available Network "<network>" in Mantis Wallet
              Then I should be able to accept Terms and conditions
              Then I choose Restore wallet button
              Then I enter wallet name, recovery phrase and passwords
              When I click send button on main page
              # TODO add recipient addresses in config.json
              When I select recipient address from drop-down on send transaction page
               And I enter amount to send and select fee on send transaction page
               And I click send button on send transaction page
               And I enter my password on send transaction page
               And I click confirm button on send transaction page
              Then I expect to see that transaction on My transaction page
              Then I should close the Mantis Wallet application
              And I reset Mantis Wallet config.json

              Examples:
                    | network |
                    |Sagano Testnet  |
                  #|Mainnet  |
                  #|Mordor   |

      @SendTransaction04
       Scenario Outline: Send transaction on Mantis wallet advanced tab
             Then I choose the available Network "<network>" in Mantis Wallet
             Then I should be able to accept Terms and conditions
             Then I choose Restore wallet button
             Then I enter wallet name, recovery phrase and passwords
             When I click send button on main page
             When I click on advanced button on send transaction page
              And I enter recipient address on send transaction page advanced tab
              And I enter amount to send, gas limit and gas price on send transaction page
              And I click send button on send transaction page advanced tab
              And I enter my password on send transaction page advanced tab
              And I click confirm button on send transaction page advanced tab
             Then I expect to see that transaction on My transaction page
             Then I should close the Mantis Wallet application
             And I reset Mantis Wallet config.json

             Examples:
                   | network |
                   |Sagano Testnet  |
                  #|Mainnet  |
                  #|Mordor   |

      @SendTransaction05
        Scenario Outline: Send transaction on Mantis wallet advanced tab and choose recipient address from my contacts
              Then I choose the available Network "<network>" in Mantis Wallet
              Then I should be able to accept Terms and conditions
              Then I choose Restore wallet button
              Then I enter wallet name, recovery phrase and passwords
              When I click send button on main page
              When I click on advanced button on send transaction page
              And I select recipient address from drop-down on send transaction page advanced tab
              And I enter amount to send, gas limit and gas price on send transaction page
              And I click send button on send transaction page advanced tab
              And I enter my password on send transaction page advanced tab
              And I click confirm button on send transaction page advanced tab
              Then I expect to see that transaction on My transaction page
              Then I should close the Mantis Wallet application
              And I reset Mantis Wallet config.json

              Examples:
                    | network |
                    |Sagano Testnet  |
                  #|Mainnet  |
                  #|Mordor   |