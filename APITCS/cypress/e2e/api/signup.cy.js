describe("Signup Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/");
    cy.get("#signin2").click();
  });

  it("Should create a new user successfully", () => {
    cy.fixture("users").then((users) => {
      const newUser = users.newUser;
      const uniqueUsername = newUser.username + "_" + Date.now();
      cy.get('#sign-username').clear().type(uniqueUsername);
      cy.get('#sign-password').clear().type(newUser.password);
      cy.get('[onclick="register()"]').click();
      cy.on("window:alert", (alertText) => {
        expect(alertText).to.contains("Sign up successful.");
      });
    });
  });

  it("Should fail to create an existing user", () => {
    cy.fixture("users").then((users) => {
      const existingUser = users.existingUser;
      cy.get('#sign-username').clear().type(existingUser.username)
        .should('have.value', existingUser.username);

      cy.wait(1000); // Espera 1 segundo para asegurarte de que el campo de contraseña esté listo

      cy.get('#sign-password').clear().type(existingUser.password)
        .should('have.value', existingUser.password);

      cy.get('[onclick="register()"]').click();

      cy.on("window:alert", (alertText) => {
        expect(alertText).to.contains("This user already exist.");
      });
    });
  });
});