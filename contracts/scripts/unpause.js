// scripts/index.js
module.exports = async function main(callback) {
  try {
    const KSNToken = artifacts.require('KSNToken');
    const ksnToken = await KSNToken.deployed();
    await ksnToken.unpause()
    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
};