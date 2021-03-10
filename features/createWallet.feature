#
# Mantis Create Wallet  feature
# Steps in: ../steps/createWallet.js & ../steps/login.js
#

@CreateWallet
@Regression
Feature: Create Mantis Wallet

    As a regular user
    I want to create new wallet
    with selected Network

    Background:
        Given I reset Mantis Wallet config.json
          And I open the Mantis wallet app

    @CreateWallet01
    @Smoke
    Scenario Outline: Create Mantis wallet
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I re input recovery phrase
        Then I expect to see my transactions page
        When I click Log out button on main page
         And I enter my password and check checkbox on remove wallet page
         And I click on remove wallet button on remove wallet page
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

    @CreateWallet02
    Scenario Outline: Create Mantis wallet password validations
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Create wallet button
        Then I enter wallet name and "<password>" and "<confirmPass>"
        Then I should see an Error "<message>"
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

        Examples:
            |network        |password   |confirmPass |message                                    |
            |Sagano Testnet |qwertQ1    |qwertQ1     |Password needs to be at least 8 characters |
            |Sagano Testnet |qwertyu1   |qwertyu1    |Password needs to have at least 1 uppercase, 1 lowercase and 1 number character |
            |Sagano Testnet |QWERTYU1   |QWERTYU1    |Password needs to have at least 1 uppercase, 1 lowercase and 1 number character |
            |Sagano Testnet |qwertyUQ   |qwertyUQ    |Password needs to have at least 1 uppercase, 1 lowercase and 1 number character |
            |Sagano Testnet |qwertQ1q   |qwertQ1w    |Passwords don't match |
            |Sagano Testnet |empty      |empty       |Password needs to have at least 1 uppercase, 1 lowercase and 1 number character |
#           |Mainnet  |
#           |Mordor   |

    @CreateWallet03
    Scenario Outline: Create Mantis wallet name validations
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Create wallet button
        Then I enter wallet "<name>" and passwords
        Then I should see a wallet name Error "<message>"
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

        Examples:
            |network        | name     | message                 |
            |Sagano Testnet | empty    | Name shouldn't be empty |
#           |Mainnet  |
#           |Mordor   |

    @CreateWallet04
    Scenario Outline: Create Mantis wallet verify download PVK
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I verify download button
        Then I cancel creating wallet
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

    @CreateWallet05
    Scenario Outline: Cancel creating Mantis wallet
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I cancel creating wallet
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

    @CreateWallet06
    Scenario Outline: Cancel creating Mantis wallet after getting word phrases
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I click back
        Then I click back
        Then I cancel creating wallet
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

    @CreateWallet07
    Scenario Outline: Create Mantis wallet and do not accept Recovery Conditions
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I re input recovery phrase without accepting Recovery conditions
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

    @CreateWallet08
    Scenario Outline: Create Mantis wallet and do not accept Locally Conditions
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I re input recovery phrase without accepting Locally conditions
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

    @CreateWallet09
    Scenario Outline: Create Mantis wallet with incorrect word phrases order
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I re input recovery phrase in wrong order
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

    @CreateWallet10
    Scenario Outline: Create Mantis wallet - click back from phrases reinput
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I re input recovery phrase and I click back
        Then I click back
        Then I cancel creating wallet
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

    @CreateWallet11
    Scenario Outline: Create Mantis wallet - clear input of recovery phrases
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I reinput recovery phrase and I clear text
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

    @CreateWallet12
    Scenario Outline: Create Mantis wallet - Verify that I cannot create a wallet without reinput
        Then I choose the available Network "<network>" in Mantis Wallet
        Then I should be able to accept Terms and conditions
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I confirm that wallet cant be created without word phrases
        Then I should close the Mantis Wallet application
         And I reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |