// scripts/index.js
const BigNumber = require("bignumber.js");
module.exports = async function main(callback) {
  try {
    const amount = 100000;
    const KSNToken = artifacts.require("KSNToken");
    const ksnToken = await KSNToken.deployed();
    await ksnToken.transfer(
      "0x25aa8844C9c19b91190fD06C859ca879C4c56E5F",
      new BigNumber(amount * 10 ** 18)
    );
    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
};
