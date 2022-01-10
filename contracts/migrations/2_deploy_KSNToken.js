const KSNToken = artifacts.require('KSNToken');

module.exports = async function (deployer) {
  await deployer.deploy(KSNToken);
};