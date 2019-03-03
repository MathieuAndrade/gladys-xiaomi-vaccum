const Promise = require("bluebird");
const shared = require("./shared");

module.exports = function install() {
  return createDevice()
    .then(() => {
      const param = {
        name: shared.vacuumAddress.name,
        value: shared.vacuumAddress.value
      };
      createParam(param);
    })
    .then(() => {
      const param = {
        name: shared.vacuumToken.name,
        value: shared.vacuumToken.value
      };
      createParam(param);
    })
    .then(() => {
      sails.log.info("Xiaomi vacuum: Module installed with success");
      return Promise.resolve();
    });
};

function createDevice() {
  const newDevice = shared.deviceToInstall;

  return gladys.device
    .create(newDevice)
    .then(function () {
      sails.log.info("Xiaomi vacuum: Device created");
      return Promise.resolve();
    })
    .catch(function (err) {
      sails.log.error(`Xiaomi vacuum: Error when creating device : ${err}`);
      return Promise.reject();
    });
}

function createParam(param) {
  return gladys.param
    .setValue(param)
    .then(() => {
      sails.log.info("Xiaomi vacuum: Param iserted");
      return Promise.resolve();
    })
    .catch(err => {
      sails.log.error(`Xiaomi vacuum: Error when inserting param: ${err}`);
      return Promise.reject();
    });
}