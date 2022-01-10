// scripts/index.js
module.exports = async function main(callback) {
  try {
    const KSNToken = artifacts.require('KSNToken');
    const ksnToken = await KSNToken.deployed();
    const resultOfPlayer = await ksnToken.balanceOf("0xFBDaD4C698e84e0EF397971899aD599C93d3b7cF")
    console.log("Balance of Player", resultOfPlayer.toString());

    const resultOfGame = await ksnToken.balanceOf("0x1D101cC080F3E758873B42c2ADfC140F8ccdb7ca")
    console.log("Balance of Game", resultOfGame.toString());
    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
};