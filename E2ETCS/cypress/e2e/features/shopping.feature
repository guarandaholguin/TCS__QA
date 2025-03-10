Feature: Flujo de compra en DemoBlaze

  Scenario: Completar el flujo de compra con dos productos
    Given El usuario visita la página de inicio
    When El usuario agrega "Samsung galaxy s6" al carrito
    And El usuario agrega "Nexus 6" al carrito
    And El usuario va al carrito
    Then El carrito debe tener 2 productos
    When El usuario completa la compra con los datos del usuario
    Then Debe mostrarse el mensaje "Thank you for your purchase!"