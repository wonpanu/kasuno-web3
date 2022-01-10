const TestTransferV2 = artifacts.require('TestTransferV2');

module.exports = async function (deployer) {
  await deployer.deploy(TestTransferV2, "0xA47C82819fc5B2af0Ec39abbBc2562F86BB2AED2");
};