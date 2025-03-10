import { Given, And, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { visitHomePage, goToCart } from "../../support/navigation";
import { addToCart, completePurchase, verifyCartCount } from "../../support/actions";

Given("El usuario visita la página de inicio", () => {
  visitHomePage();
});

When('El usuario agrega {string} al carrito', (productName) => {
  addToCart(productName);
  visitHomePage();
});

When("El usuario va al carrito", () => {
  goToCart();
});

Then("El carrito debe tener {int} productos", (count) => {
  verifyCartCount(count);
});

When("El usuario completa la compra con los datos del usuario", () => {
  cy.fixture("user").then((user) => {
    completePurchase(user.user1);
  });
});

Then('Debe mostrarse el mensaje {string}', (message) => {
  cy.contains(message).should("be.visible");
});