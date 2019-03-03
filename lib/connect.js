const miio = require("miio");
const shared = require("./shared");
const vacuum = require("./vacuum/index");

module.exports = function connect() {
  miio
    .device({
      address: shared.vacuumAddress.value,
      token: shared.vacuumToken.value
    })
    .then(device => {
      sails.log.info("Xiaomi vacuum: Connected to vacuum");
      shared.device = device;

      // Load properties at first start
      vacuum.loadProperties();

      // Then load propreties only every minutes
      setInterval(() => {
        vacuum.loadProperties();
      }, 1000 * 60);
    })
    .catch(err => {
      sails.log.error("Xiaomi vacuum: Error :", err);
    });
};