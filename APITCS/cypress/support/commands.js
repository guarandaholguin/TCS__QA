Cypress.Commands.add("createUser", (username, password) => {
    cy.request({
      method: "POST",
      url: "/signup",
      body: { username, password },
    }).as("signupRequest");
  });