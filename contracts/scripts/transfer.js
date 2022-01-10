// scripts/index.js
module.exports = async function main(callback) {
  try {
    const KSNToken = artifacts.require('KSNToken');
    const ksnToken = await KSNToken.deployed();
    await ksnToken.transfer("0xc8f6444E2Fd4bfcfd44FDb1e52abFc74619637FE", 100000000000)
    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
};