export const addToCart = (productName) => {
    cy.contains(productName).should("be.visible").click();
    cy.contains("Add to cart").click();
    cy.on("window:alert", (alertText) => {
      expect(alertText.trim()).to.equal("Product added");
    });
  };
  
  export const completePurchase = (user) => {
    cy.contains("Place Order").click();
    fillOrderForm(user);
    cy.contains("Purchase").click();
  };
  
  const fillOrderForm = (user) => {
    cy.get("#name").type(user.name);
    cy.get("#country").type(user.country);
    cy.get("#city").type(user.city);
    cy.get("#card").type(user.card);
    cy.get("#month").type(user.month);
    cy.get("#year").type(user.year);
  };
  
  export const verifyCartCount = (count) => {
    cy.get(".success").should("have.length", count);
  };