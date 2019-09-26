const RibonToken = artifacts.require("RibonToken");
const Ribon = artifacts.require("Ribon");

module.exports = function(deployer) {
  deployer.deploy(RibonToken);
  deployer.deploy(Ribon);
};
