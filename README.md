# Cypress-Automation

This repository contains automated tests for a web application using Cypress. The tests cover three key functionalities:
- **Registration**: Testing the user registration process.
- **Re-Registration**: Verifying error handling when attempting to register with an existing username.
- **Login**: Logging in as a registered user and interacting with a dropdown menu.

## Installation
**Step 1: Check System Requirements**

	Ensure your system meets the requirements for Node.js and Cypress
  
**Step 2: Install Node.js and Preffered IDE:**

	a.Install [Node.js](https://nodejs.org/) (version 14.x or later).
	b.Install your preferred IDE (e.g., Visual Studio Code, JetBrains Aqua, Eclipse).

**Step 3: Set Up the Projects:**

- Open a terminal and run the following commands:

	```sh
 	git clone https://github.com/kristineberke/cypress-automation.git
    	cd cypress-automation
     	npm install
     	```
 - Install Cypress:
   
	```sh
     	npm install cypress --save-dev
     	```

- Open Cypress Test Runner:

	```sh
    	npx cypress open
     	```

## Test Scripts
This repository contains the following test scripts:

1. **Registration (cypress/e2e/registration.spec.js)** 

   - **Description**: Completes the user registration process.
   - **Functionality**: Tests the registration form and ensures that a user can successfully register.

2. **Re-Registration (cypress/e2e/re-registration.spec.js)**

   - **Description**: Checks if an error message appears when a user tries to sign up with an already existing username.
   - **Functionality**: Tests the error handling of the registration form when duplicating usernames.
  
3. **Login (cypress/e2e/login.spec.js)**

   - **Description**: Logs in a registered user, interacts with a button, and selects a specific month from a dropdown menu.
   - **Functionality**: Tests the login process and interactions with UI elements post-login.

## Running the Tests

**1. Open Cypress**

   - You can open the Cypress Test Runner with the following command:

     ```sh
     npx cypress open
     ```

   - This will launch the Cypress Test Runner, allowing you to run and interact with the tests in a GUI.

**2. Run Tests in Headless Mode (Optional)**

   - If you prefer to run tests in headless mode (without the GUI), use:

     ```sh
     npx cypress run
     ```

   - This will execute all tests and display results in the terminal.
