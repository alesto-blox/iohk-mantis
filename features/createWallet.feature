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

    Scenario Outline: Create Mantis wallet

        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        # Accept Terms and conditions
        Then I should be able to accept Terms and conditions
        # Create a Wallet
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I re input recovery phrase
        Then I expect to see my transactions page
        # Logout a Wallet
        When I click Log out button on main page
        And I enter my password and check checkbox on remove wallet page
        And I click on remove wallet button on remove wallet page
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

    Scenario Outline: Create Mantis wallet password validations

        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        # Accept Terms and conditions
        Then I should be able to accept Terms and conditions
        # Create a Wallet
        Then I choose Create wallet button
        Then I enter wallet name and "<password>" and "<confirmPass>"
        Then I should see an Error "<message>"
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

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

    Scenario Outline: Create Mantis wallet name validations

        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        # Accept Terms and conditions
        Then I should be able to accept Terms and conditions
        # Create a Wallet
        Then I choose Create wallet button
        Then I enter wallet "<name>" and passwords
        Then I should see a wallet name Error "<message>"
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

        Examples:
            |network        | name     | message                 |
            |Sagano Testnet | empty    | Name shouldn't be empty |
#           |Mainnet  |
#           |Mordor   |

    Scenario Outline: Create Mantis wallet verify download PVK

        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        # Accept Terms and conditions
        Then I should be able to accept Terms and conditions
        # Create a Wallet
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I verify download button
        Then I cancel creating wallet
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

    Scenario Outline: Cancel creating Mantis wallet

        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        # Accept Terms and conditions
        Then I should be able to accept Terms and conditions
        # Create a Wallet
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I cancel creating wallet
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

    Scenario Outline: Cancel creating Mantis wallet after getting word phrases

        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        # Accept Terms and conditions
        Then I should be able to accept Terms and conditions
        # Create a Wallet
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I click back
        Then I click back
        Then I cancel creating wallet
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

         Scenario Outline: Create Mantis wallet and do not accept Recovery Conditions

        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        # Accept Terms and conditions
        Then I should be able to accept Terms and conditions
        # Create a Wallet
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I re input recovery phrase without accepting Recovery conditions
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

    Scenario Outline: Create Mantis wallet and do not accept Locally Conditions

        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        # Accept Terms and conditions
        Then I should be able to accept Terms and conditions
        # Create a Wallet
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I re input recovery phrase without accepting Locally conditions
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

        Scenario Outline: Create Mantis wallet with incorrect word phrases order

        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        # Accept Terms and conditions
        Then I should be able to accept Terms and conditions
        # Create a Wallet
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I re input recovery phrase in wrong order
        #Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

        Scenario Outline: Create Mantis wallet - click back from phrases reinput

        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        # Accept Terms and conditions
        Then I should be able to accept Terms and conditions
        # Create a Wallet
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I re input recovery phrase and I click back
        Then I click back
        Then I cancel creating wallet
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

        Scenario Outline: Create Mantis wallet - clear input of recovery phrases

        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        # Accept Terms and conditions
        Then I should be able to accept Terms and conditions
        # Create a Wallet
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I reinput recovery phrase and I clear text
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |

        Scenario Outline: Create Mantis wallet - Verify that I cannot create a wallet without reinput

        # Open the App and Select a Network
        Then I should reset Mantis Wallet config.json
        Given I open the Mantis wallet app
        Then I choose the available Network "<network>" in Mantis Wallet
        # Accept Terms and conditions
        Then I should be able to accept Terms and conditions
        # Create a Wallet
        Then I choose Create wallet button
        Then I enter wallet name and passwords
        Then I confirm that private key is there
        Then I remember recovery phrase
        Then I confirm that wallet cant be created without word phrases
        # Close the App
        Then I should close the Mantis Wallet application
        Then I should reset Mantis Wallet config.json

        Examples:
            |network        |
            |Sagano Testnet |
#           |Mainnet  |
#           |Mordor   |