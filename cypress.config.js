const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Şu anda ek bir Node olayı tanımlamıyoruz
      return config;
    }
  }
});
