import { addToCart, completePurchase, verifyCartCount } from "../../support/actions";
import { visitHomePage, goToCart } from "../../support/navigation";

describe("Flujo de compra en DemoBlaze", () => {
    let products, users;
  
    before(() => {
      cy.fixture("products").then((data) => {
        products = data;
      });
      cy.fixture("user").then((data) => {
        users = data;
      });
    });
  
    beforeEach(() => {
      visitHomePage();
    });
  
    it("Debería completar el flujo de compra con dos productos (Usuario 1)", () => {
      addToCart(products.product1);
      visitHomePage();
      addToCart(products.product2);
  
      goToCart();
      verifyCartCount(2);
  
      completePurchase(users.user1);
      cy.contains("Thank you for your purchase!").should("be.visible");
    });
  });