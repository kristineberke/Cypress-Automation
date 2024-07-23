# Cypress-Automation

This repository contains automated tests for a web application using Cypress. The tests cover three key functionalities:
- **Registration**: Testing the user registration process.
- **Re-Registration**: Verifying error handling when attempting to register with an existing username.
- **Login**: Logging in as a registered user and interacting with a dropdown menu.

## Installation
**1. Step 1:**

	a. Check system requirements
	b. Install Node.js
	c. Install your preferred IDE - Visual Studio Code/JetBrains Aqua/Eclipse   
**2. Step 2: Cypress installation process in terminal**

	a.npm init
	b.npm install cypress --save-dev
	c.npx cypress open
**3. Clone the Repository**

   a.git clone https://github.com/kristineberke/cypress-automation.git
   b.cd cypress-automation

## Test Scripts
This repository contains the following test scripts:

**Registration (cypress/e2e/registration.spec.js)** 
Description: Completes the user registration process.
Functionality: Tests the registration form and ensures that a user can successfully register.
**Re-Registration (cypress/e2e/re-registration.spec.js)**
Description: Checks if the error message appears when a user tries to sign up with an already existing username.
Functionality: Tests the error handling of the registration form when duplicating usernames.
**Login (cypress/e2e/login.spec.js)**
Description: Logs in a registered user, interacts with a button, and selects a specific month from a dropdown menu.
Functionality: Tests the login process and interactions with UI elements post-login.

## To run the tests using Cypress:
**1. Open Cypress**
You can open the Cypress Test Runner with the following command: npx cypress open
**2. Run Tests**
To run all tests in the headless mode (no GUI), use: npx cypress run
Different options in the IDE using: 
  a) .\node_modules\.bin\cypress.cmd run 
  b) .\cypress\e2e\test1.cy.js --headed -b chrome
