const HiLowV3 = artifacts.require('HiLowV3');

module.exports = async function (deployer) {
  await deployer.deploy(HiLowV3, "0xA47C82819fc5B2af0Ec39abbBc2562F86BB2AED2");
};