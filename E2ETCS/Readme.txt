Proyecto de Pruebas E2E con Cypress y Cucumber
Este proyecto es una implementación de pruebas de extremo a extremo (E2E) utilizando Cypress junto con Cucumber para la automatización de pruebas basadas en comportamiento (BDD). El objetivo es validar el flujo de compra en una aplicación de demostración (DemoBlaze), asegurando que los usuarios puedan agregar productos al carrito y completar una compra exitosamente.

E2ETCS/
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   └── shopping.feature
│   │   ├── step_definitions/
│   │   │   └── shopping.js
│   │   ├── fixtures/
│   │   │   ├── products.json
│   │   │   └── user.json
│   │   ├── support/
│   │   │   ├── actions.js
│   │   │   └── navigation.js
│   ├── reports/
│   │   └── cucumber-htmlreport.html
├── node_modules/
├── cypress.config.js
├── .cypress-cucumber-preprocessorrc.json
├── cucumber-html-report.js
├── package.json
├── package-lock.json
└── Readme.txt

Descripción de Archivos Clave

1.- shopping.feature: Define los escenarios de prueba en lenguaje Gherkin para el flujo de compra.
2.- shopping.js: Implementa los pasos definidos en el archivo .feature.
3.- products.json: Contiene datos de productos utilizados en las pruebas.
4.- user.json: Almacena datos de usuarios para completar formularios durante las pruebas.
5.- actions.js: Contiene funciones para realizar acciones como agregar productos al carrito y completar la compra.
6.- navigation.js: Define funciones para navegar por la aplicación, como visitar la página de inicio y acceder al carrito.
7.- cypress.config.js: Configuración de Cypress, incluyendo la integración con Cucumber y Allure para reportes.
8.- .cypress-cucumber-preprocessorrc.json: Configuración del preprocesador de Cucumber para generar reportes en formato JSON.
9.- cucumber-html-report.js: Script para generar un informe HTML a partir de los resultados de las pruebas.

Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

Node.js (v16 o superior)
npm (v8 o superior)
Cypress (instalado localmente en el proyecto)

Instalación

Clona el repositorio o descarga el proyecto.
Navega a la carpeta del proyecto:
cd E2ETCS
Instala las dependencias del proyecto:
npm install


Ejecución de las Pruebas

Para ejecutar las pruebas, utiliza uno de los siguientes comandos:

Modo Headless (sin interfaz gráfica):
npx cypress run
Modo Interactivo (con interfaz gráfica de Cypress):
npx cypress open


Generación de Reportes

Después de ejecutar las pruebas, se generará un informe HTML en la carpeta reports/. Puedes abrir el archivo cucumber-htmlreport.html para ver los resultados detallados de las pruebas.
open reports/cucumber-htmlreport.htm