const UniswapV2Factory = artifacts.require("UniswapV2Factory");

module.exports = function(deployer) {
  deployer.deploy(UniswapV2Factory, "0xEbB086500e0D6bF75F02Bc74bc69366F510100c6");
};
