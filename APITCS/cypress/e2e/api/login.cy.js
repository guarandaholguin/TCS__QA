describe("Login Tests", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("https://www.demoblaze.com/");
    cy.get("#login2").click();
    cy.get('#logInModal').should('be.visible');
  });

  it("Should login successfully with correct username and password", () => {
    cy.fixture("users").then((users) => {
      const validUser = users.validUser;
      console.log(validUser);
      cy.get('#loginusername').clear().type(validUser.username);
      cy.get('#loginpassword').clear().type(validUser.password);
      cy.get('[onclick="logIn()"]').click();
      cy.get('#nameofuser', { timeout: 10000 }).should('be.visible').and('contain', `Welcome ${validUser.username}`);
    });
  });

  it("Should fail to login with incorrect username and password", () => {
    cy.fixture("users").then((users) => {
      const invalidUser = users.invalidUser;
      cy.get('#loginusername').clear().type(invalidUser.username);
      cy.get('#loginpassword').clear().type(invalidUser.password);
      cy.get('[onclick="logIn()"]').click();
      cy.on("window:alert", (alertText) => {
        cy.log(`Alert text after failed login: ${alertText}`);
        expect(alertText).to.contains("User does not exist.");
      });
    });
  });
});