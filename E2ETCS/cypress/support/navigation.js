export const visitHomePage = () => {
    cy.visit("https://www.demoblaze.com/");
  };
  
  export const goToCart = () => {
    cy.contains("Cart").click();
  };