// scripts/index.js
module.exports = async function main(callback) {
  try {
    const KSNToken = artifacts.require("KSNToken");
    const ksnToken = await KSNToken.deployed();
    const resultOfPlayer = await ksnToken.balanceOf(
      "0x692CC5fd55A0E0a8D016E42Fa68A75909aFD48f3"
    );
    console.log("Balance of Player", resultOfPlayer.toString());

    const resultOfGame = await ksnToken.balanceOf(
      "0x25aa8844C9c19b91190fD06C859ca879C4c56E5F"
    );
    console.log("Balance of Game", resultOfGame.toString());
    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
};
