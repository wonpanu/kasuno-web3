const HiLow = artifacts.require("HiLow");
const KSNToken = artifacts.require("KSNToken");
module.exports = async function (deployer) {
  const ksnToken = await KSNToken.deployed();
  console.log("ksn token", ksnToken.address);
  await deployer.deploy(HiLow, ksnToken.address);
};
