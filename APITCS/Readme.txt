README - Pruebas de Login con Cypress

1. Descripción
Este proyecto implementa pruebas automatizadas con Cypress para validar el sistema de autenticación de la página web DemoBlaze. Se incluyen pruebas para verificar el inicio de sesión exitoso y fallido, además de la generación de reportes con mochawesome.

2. Requisitos Previos
Antes de ejecutar las pruebas, asegúrate de tener instalado lo siguiente:
    - Node.js (versión recomendada: 14 o superior)
    - NPM 
    - Cypress
    - Mochawesome para generación de reportes

Instalación
    1. Clona este repositorio o descarga el código fuente.
    2. Abre una terminal en la raíz del proyecto y ejecuta: npm install Esto instalará todas las dependencias necesarias.


3.Ejecución de Pruebas
  Para ejecutar las pruebas de forma interactiva en la interfaz de Cypress:
        npx cypress open
  Para ejecutar las pruebas en modo headless y generar reportes:
        npx cypress run


4. Reportes de Pruebas

Las pruebas generan reportes en formato JSON y HTML mediante mochawesome.
    - Los archivos JSON se guardan en cypress/results/
    - El reporte HTML final se genera en cypress/reports/mochawesome.html
Para abrir el reporte generado, simplemente abre cypress/reports/mochawesome.html en un navegador.

5. Configuración Adicional

El archivo cypress.config.js está configurado para:
Borrar cookies y almacenamiento local antes de cada prueba.
Esperar hasta 10 segundos para encontrar elementos críticos.
Capturar y validar alertas de error.
Fusionar reportes de ejecución con mochawesome-merge.