/// <reference path="./commands.d.ts" />

// ***********************************************
// Cypress custom commands are for functions that are likely to be reused across many tests
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Import selectors from your defined file
import * as S from '../support/selectors.utils';

// Define a custom command called 'loginWithCredentials'
Cypress.Commands.add('loginWithCredentials', (username: string, password: string) => {
  cy.get(`#${S.USERNAME_INPUT}`).type(username);
  cy.get(`#${S.PASSWORD_INPUT}`).type(password);
  cy.get(`#${S.LOGIN_BUTTON}`).click();
});
