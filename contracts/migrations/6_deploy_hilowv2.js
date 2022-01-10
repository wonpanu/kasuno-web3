const HiLowV2 = artifacts.require('HiLowV2');

module.exports = async function (deployer) {
  await deployer.deploy(HiLowV2, "0xA47C82819fc5B2af0Ec39abbBc2562F86BB2AED2");
};