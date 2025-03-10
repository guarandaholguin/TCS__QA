const { defineConfig } = require("cypress");
const mochawesomeMerge = require("mochawesome-merge");
const generateReport = require("mochawesome-report-generator");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("after:run", async () => {
        try {
          // Fusionar los archivos JSON en uno solo
          const mergedJson = await mochawesomeMerge({
            files: ["cypress/results/*.json"], 
          });

          // Generar el reporte HTML basado en el JSON fusionado
          await generateReport.create(mergedJson, {
            reportDir: "cypress/reports", 
            reportFilename: "index",      
          });

          console.log("📊 Reporte generado exitosamente en cypress/reports/index.html");
        } catch (error) {
          console.error("❌ Error al fusionar los informes:", error);
        }
      });
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results", 
    overwrite: true,              
    html: false,                  
    json: true,                   
  },
});
