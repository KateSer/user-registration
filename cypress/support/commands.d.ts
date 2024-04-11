declare namespace Cypress {
  interface Chainable {
     /**
     * Custom command to perform a login action.
     * @param username - The username to log in with
     * @param password - The password to log in with
     */
     loginWithCredentials(username: string, password: string):void;
  }
}
