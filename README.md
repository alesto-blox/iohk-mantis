# IOHK-Mantis-Wallet-Automation-Tests

  ### How to run tests?
  * Synch the wallet to a network you whish to run tests on
  * Install Node.js
  * Clone/copy the repo to your local mashine
  * Type in terminal `npm install`, which will install all dependecies
  * Specify PATH to the Mantis Wallet app in config/apConfig.js
  * In terminal type `npm run script` where you can change `script` to match the name of the script you wish to run
  * Report will be generated in the reports folder
  * Example of a run: nmp run LSmoke - this will run smoke test suite on a Linux machine
  * Example of a run: nmp run WSmoke - this will run smoke test suite on a Windows machine
  * Example of a run: nmp run MSmoke - this will run smoke test suite on a MacOS machine
  * Full list of available scripts can be found in package.json
  * To run a custom command you need to type the following:
  "cross-env ENV={OS} ./node_modules/.bin/cucumber-js -r ./steps --tags @{TAG} --format html:./reports/cucumber-html-report.html" Change {OS} to LINUX,WINDOWS or MAC, and change {TAG} to a specific tag for a test you want to run ex Login01
