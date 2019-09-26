const RibonToken = artifacts.require("RibonToken");
const Ribon = artifacts.require("Ribon");
const RibonTokenConfig = require("../RibonTokenConfig.json")

module.exports = function(deployer) {
  deployer.deploy(
    RibonToken,
    RibonTokenConfig.name,
    RibonTokenConfig.symbol,
    RibonTokenConfig.decimals
  );
  deployer.deploy(Ribon);
};
