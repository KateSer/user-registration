import * as S from '../support/selectors.utils';

// Tests for the Login Component functionality
describe('Login Component page', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  // Test to verify the presence and visibility of the login form's elements
  it('has a login form', () => {
    // Verify the login form's header
    cy.get(`#${S.LOGIN_FORM_HEADER}`).should('contain', 'Login');
    // Ensure the username input field is visible to the user
    cy.get(`#${S.USERNAME_INPUT}`).should('be.visible');
    // Ensure the password input field is visible to the user
    cy.get(`#${S.PASSWORD_INPUT}`).should('be.visible');
    // Confirm the login button is visible and labeled correctly
    cy.get(`#${S.LOGIN_BUTTON}`).contains('Login').should('be.visible');
  });

  // Test to ensure both username and password are required for submission
  it('requires username and password', () => {
    // Trigger a form submission attempt without filling out the fields
    cy.get(`#${S.LOGIN_BUTTON}`).click();
    // Verify that an error message for the username field is shown (case-insensitive check for increased stability)
    cy.get(`#${S.LOGIN_USERNAME_ERROR}`).invoke('text').should('match', /username is required/i);
    // Verify that an error message for the password field is shown (case-insensitive check for increased stability)
    cy.get(`#${S.LOGIN_PASSWORD_ERROR}`).invoke('text').should('match', /password is required/i);
  });

});

// Tests for the alert functionality on the login page
describe('Login Alert Functionality', () => {
  // Set up incorrect credentials before each test to trigger an alert
  beforeEach(() => {
    cy.visit('/');
    cy.loginWithCredentials('wrongusername','wrongpassword')
  });

  // Test to check for the presence of an error message after submitting incorrect credentials
  it('displays an error message for incorrect username or password', () => {
    // Assert that the appropriate error message is displayed to the user
    cy.get('.alert-danger').should('contain', 'Username or password is incorrect');
  });

  // Test to verify that the user can dismiss the displayed error alert
  it('allows the user to dismiss the error alert by clicking the close button', () => {
    // Dismiss the alert by clicking the close button within the alert message
    cy.get('.alert-danger').find('.close').click();
    // Ensure the error alert is no longer visible after being dismissed
    cy.get('.alert-danger').should('not.exist');
  });

});
