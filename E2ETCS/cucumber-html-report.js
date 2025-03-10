const report = require("multiple-cucumber-html-reporter");
const os = require("os");

report.generate({
  jsonDir: "shoppingreport", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "XX",
    },
    device: "Local test machine",
    platform: {
        name: os.platform() === "darwin" ? "macOS" : "Windows",
        version: os.release(),
    },
  },
});