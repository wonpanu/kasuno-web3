const TestTransfer = artifacts.require('TestTransfer');

module.exports = async function (deployer) {
  await deployer.deploy(TestTransfer, "0xA47C82819fc5B2af0Ec39abbBc2562F86BB2AED2");
};